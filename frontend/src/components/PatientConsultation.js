import axios from 'axios'
import React, { Component } from 'react'

class PatientConsultation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pulse: '',
            bloodPressure: '',
            complains: '',
            diagnosis: '',
            prescription: '',
            checked: false
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkboxChangeHandler = e => {
        this.setState({
            checked: true
        })
    }

    consultationSubmitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/care-context', {
            requestId: '',
            id: 'anshulsharma@sbx',
            timestamp: '',
            link: {
                accessToken: '',
                patient: {
                    referenceNumber: 'PUID-00191',
                    display: " Test",
                    careContexts: [
                        {
                            referenceNumber: 'visit-1',
                            display: 'Consultation on 6/april/2023'
                        }
                    ]
                }
            }
        })
        .then(res => {
            console.log(res)
        })

    }

    render() {

        const { pulse, bloodPressure, complains, diagnosis, prescription, checked } = this.state
        return (
            <div>

                <div className='topbar'>
                    <svg height='30px' width='30px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    <h4>Anshul Sharma</h4>
                    <h4>Male</h4>
                    <h4>Age - 25</h4>
                    <h4>patient id - 248475</h4>
                </div>

                <div className='patientConsultationDiv'>
                    <h4>Patient Consulation Details</h4>
                    <form className='patientConsultationForm' onSubmit={this.consultationSubmitHandler}>
                        <label for='pulse'>Pulse:</label>
                        <input type='text' id='pulse' name='pulse' placeholder="Enter Patient's Pulse" value={pulse} onChange={this.changeHandler} ></input>

                        <label for='bloodPressure'>Blood Pressure:</label>
                        <input type='text' id='bloodPressure' name='bloodPressure' placeholder="Enter Patient's blood pressure" value={bloodPressure} onChange={this.changeHandler}></input>

                        <label for='complains'>Complains:</label>
                        <input type='text' id='complains' name='complains' placeholder="Enter Patient's complains" value={complains} onChange={this.changeHandler}></input>

                        <label for='diagnosis'>Diagnosis:</label>
                        <input type='text' id='diagnosis' name='diagnosis' placeholder="Enter Patient's diagnosis" value={diagnosis} onChange={this.changeHandler}></input>

                        <label for='prescription'>Prescription:</label>
                        <input type='text' id='prescription' name='prescription' placeholder="Enter Patient's prescription" value={prescription} onChange={this.changeHandler}></input>

                        <label for="careContext"> Send Care Context Info?</label>
                        <input type="checkbox" id="careContext" name="careContext" checked={checked} onChange={this.checkboxChangeHandler} />

                        <button type='submit'>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PatientConsultation
