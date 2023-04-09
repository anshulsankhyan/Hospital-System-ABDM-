import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

class AbhaVerification extends Component {

    constructor(props) {
        super(props)

        this.state = {
            abhaid: '',
            otp: '',
            patientDemographic: {},
            goToRegistration: false,
            existingPatient: false
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    abhaSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/otp', {
            requestId: '',
            timestamp: '',
            query: {
                id: this.state.abhaid,
                purpose: 'KYC_AND_LINK',
                authMode: 'MOBILE_OTP',
                requester: {
                    type: 'HIP',
                    id: '919'
                }
            }
        })
            .then(r => {
                if (r.status >= 200 && r.status <= 299) {
                    axios.post('http://localhost:8080/get-otp', {
                        requestId: '',
                        timestamp: '',
                        query: {
                            id: this.state.abhaid,
                            purpose: 'KYC_AND_LINK',
                            requester: {
                                type: 'HIP',
                                id: '919'
                            }
                        }
                    })
                        .then(r => {
                            if (r.status >= 200 && r.status <= 299) alert('OTP SENT!')
                            else alert('We are having trouble generating OTP')
                        })
                        .catch(e => {
                            alert('Error catched on get-otp call')
                        })
                }
                else alert('INVALID ABHA ID!')
            })
            .catch(e => {
                alert('Error catched on otp call')
            })
    }

    otpSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/get-demographics', {
            requestId: '',
            timestamp: '',
            transactionId: '',
            abhaId: this.state.abhaid,
            credential: {
                authcode: 'this.state.otp'
            }
        })
            .then(r => {
                if (r.status >= 200 && r.status <= 299) {

                    let intervalId = setInterval(() => {
                        axios.post('http://localhost:8080/get-demographic', { abhaid: this.state.abhaid })
                            .then(res => {
                                if (res.status >= 200 && res.status <= 299) {
                                    clearInterval(intervalId)
                                    this.setState({
                                        patientDemographic: res.data,
                                        goToRegistration: true
                                    }, () => {
                                        console.log(this.state.patientDemographic)
                                    })
                                }
                            })
                            .catch(e => {
                                alert('Error catched on get-demographic call')
                            })
                    }, 5000)
                }
                else alert('INVALID ABHA ID')
            })
            .catch(e => {
                alert('Error catched on get-demographics call')
            })
    }

    existingPatientHandler = (e) => {
        e.preventDefault()
        this.setState({
            existingPatient: true
        })
    }
    render() {
        const { abhaid, otp, goToRegistration, existingPatient } = this.state

        if (goToRegistration) return <Navigate to='/registration' state={this.state.patientDemographic} />

        else if(existingPatient) return <Navigate to='/patientlogin'/>
        else
            return (
                <div className='registrationBlock'>

                    <div className='registrationHeading'>
                        <h1>PATIENT REGISTRATION</h1>
                    </div>

                    <div className='registrationAbhaVerificationMenu'>

                        <h4>ABHA Verification</h4>

                        <form className='abhaVerificationForm' onSubmit={this.abhaSubmitHandler}>
                            <label htmlFor='abhaid'>ABHA Id:</label>
                            <input type='text' id='abhaid' name='abhaid' placeholder='Enter ABHA ID' value={abhaid} onChange={this.changeHandler} />
                            <button type='submit'>Submit</button>
                        </form>

                        <form className='otpVerificationForm' onSubmit={this.otpSubmitHandler}>
                            <label htmlFor='otp'>OTP:</label>
                            <input type='text' id='otp' name='otp' placeholder='Enter OTP received' value={otp} onChange={this.changeHandler} />
                            <button type='submit'>Verify OTP</button>
                        </form>

                        <form onSubmit={this.existingPatientHandler}>
                            <h4>Existing Patient?</h4>
                            <button>Click Here</button>
                        </form>
                    </div>
                </div>
            )
    }
}

export default AbhaVerification