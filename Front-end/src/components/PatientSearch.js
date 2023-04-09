import axios from 'axios'
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

class PatientSearch extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       patientSelected: false,
       patientInfo: {}
    }
  }

  patientClickHandler = (e) => {
      this.setState({
        patientSelected: true,
        patientInfo: {}
      })
    }
    

  render() {
    // console.log(this.props.data.state.patientList)
    const patientDescription = this.props.data.state.patientList.map(patient=> (
      <div key={patient.patientId}>
        <svg height='60px' width='60px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
        <p>{patient.patientName}</p>
        <p>{patient.patientId}</p>
      </div>
      
    ))

    if(this.state.patientSelected) return <Navigate to='/dashboard' state={ this.state.patientInfo}/>
    return (
      <div className='patientSearchBlock'>

        <div className='patientSearchHeading'>
          <h1>List Of Active Patients</h1>
        </div>

        <div className='patientSearchDiv'>
          <label htmlFor='patientid'>Patient ID:</label>
          <input type='text' id='patientid' name='patientid' placeholder='Enter Patient ID'></input>
          <button type='submit'>Search</button>
        </div>

        <div className='patientSearchMenu'>

          <div className='patientSearchIcon' onClick={this.patientClickHandler}>
            {patientDescription}
          </div>

          {/* <div className='patientSearchIcon'>
            <svg height='60px' width='60px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
            <p>Patient 2</p>
            <p>Patient id</p>
          </div> */}
        </div>
      </div>
    )
  }
}

export default PatientSearch
