import axios from 'axios'
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

class DoctorAssignment extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         doctorId: '1',
         goToHome: false
      }
    }

    changeHandler = e => {
        this.setState({
            doctor: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/add-patient', {
            patientId: this.props.data.state.patientId,
            patientName: this.props.data.state.name,
            gender: this.props.data.state.gender,
            dateOfBirth: this.props.data.state.yearOfBirth,
            doctorId: this.state.doctorId
        })
            .then(r => {
                if(r.status >= 200 && r.status <= 299) {
                    this.setState({
                        goToHome: true
                    })
                }
                else console.log('error encountered at registration component')
            })
    }
    
    render() {
        if(this.state.goToHome) <Navigate to='/'/>
        return (
            <div>
                <div className='topbar'>
                    <svg height='30px' width='30px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    <h4>{this.props.data.state.name}</h4>
                    <h4>{this.props.data.state.gender}</h4>
                    <h4>{2023 - this.props.data.state.yearOfBirth}</h4>
                    <h4>patient id - {this.props.data.state.patientId}</h4>
                </div>

                <div className='doctorAssignmentHeading'>
                    <h1>Doctor Assignment</h1>
                </div>

                <div className='doctorAssignmentDiv'>
                    <form className='doctorAssignmentForm' onSubmit={this.submitHandler}>

                        <label for="doctor">Assign a Doctor:</label>
                        <select name='doctorId' id='doctorId' value={this.state.doctorId} onChange={this.changeHandler}>
                            <option value='1'>Dr Das</option>
                            <option value='2'>Dr Sharma</option>
                            <option value='3'>Dr Kavimandan</option>
                        </select>
                        
                        <button type='submit'>Assign</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default DoctorAssignment
