import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom' 

class Registration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      gender: 'male',
      yearOfBirth: '',
      monthOfBirth: '',
      dayOfBirth: '',
      line: '',
      district: '',
      state: '',
      pincode: '',
      weight: '',
      mobileNumber: '',
      country: '',
      emailId: '',
      bloodGroup: '',
      goToAssignment: false,
      patientId:''
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  genderChangeHandler = (event) => {
    this.setState({
      gender: this.event.value
    })
  }

  patientDetailsSubmit = e => {
    e.preventDedfault()
    axios.post('', {
      abhaId: this.props.data.state.abhaId,
      mobileNumber: this.state.mobileNumber,
      healthNumber: this.props.data.state.healthNumber,
      patientId: this.props.data.state.patientId,
      bloodGroup: this.state.bloodGroup,
      weight: this.state.weight,
      emailId: this.state.emailId,
      country: this.state.country,
      name: this.state.name,
      gender: this.state.gender,
      yearOfBirth: this.state.yearOfBirth,
      monthOfBirth: this.state.monthOfBirth,
      dayOfBirth: this.state.dayOfBirth,
      line: this.state.line,
      district: this.state.district,
      state: this.state.state,
      pincode: this.state.pincode,
    })
    .then(r => {
      if(r.status >= 200 && r.status <= 299) {
        this.setState({
          patientId: this.props.data.state.patientId,
          goToAssignment: true
        })
      }
      else console.log('error encountered at registration component')
    })
  }

  render() {
    const { name, gender, yearOfBirth, monthOfBirth, dayOfBirth, line, district, state, pincode, weight, mobileNumber, country, emailId, bloodGroup, goToAssignment} = this.state
    const pname = this.props.data.state.name
    const pgender = this.props.data.state.gender
    const pyear = this.props.data.state.yearOfBirth
    const pmonth = this.props.data.state.monthOfBirth
    const pdate = this.props.data.state.dayOfBirth
    const paddress = this.props.data.state.line
    const pdistrict = this.props.data.state.district
    const pstate = this.props.data.state.state
    const ppincode = this.props.data.state.pincode
    const pmobile = this.props.data.state.mobileNumber

    if(goToAssignment) return <Navigate path='/assignment' state={this.state}/>
    return (
      <div className='registrationBlock'>
        <div className='registrationHeading'>
          <h1>PATIENT REGISTRATION FORM</h1>
        </div>

        <div className='registrationNew'>
          <h4>Patient Demographic and other details</h4>

          <form className='patientDetailsSubmit'>
            <label htmlFor='name'>NAME:</label>
            <input type='text' id='name' name='name' placeholder="Enter Patient's Name" value={pname? pname : name} onChange={this.changeHandler} />

            <label htmlFor="gender">GENDER:</label>
            <select name='gender' id='gender' value={pgender? pgender : gender} onChange={this.genderChangeHandler}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>

            <label htmlFor='yearOfBirth'>YEAR:</label>
            <input type='text' id='yearOfBirth' name='yearOfBirth' placeholder="Enter Patient's Year of Birth" value={pyear ? pyear : yearOfBirth} onChange={this.changeHandler} />
            <label htmlFor='monthOfBirth'>MONTH:</label>
            <input type='text' id='monthOfBirth' name='monthOfBirth' placeholder="Enter Patient's Month of Birth" value={pmonth ? pmonth : monthOfBirth} onChange={this.changeHandler} />
            <label htmlFor='dayOfBirth'>DATE:</label>
            <input type='text' id='dayOfBirth' name='dayOfBirth' placeholder="Enter Patient's Date of Birth" value={pdate ? pdate : dayOfBirth} onChange={this.changeHandler} />

            <label htmlFor='line'>ADDRESS:</label>
            <input type='text' id='line' name='line' placeholder="Enter Patient's address" value={paddress ? paddress : line} onChange={this.changeHandler} />

            <label htmlFor='district'>DISTRICT:</label>
            <input type='text' id='district' name='district' placeholder="Enter Patient's District of Residence" value={pdistrict ? pdistrict : district} onChange={this.changeHandler} />

            <label htmlFor='state'>STATE:</label>
            <input type='text' id='state' name='state' placeholder="Enter Patient's State of Residence" value={pstate ? pstate : state} onChange={this.changeHandler} />

            <label htmlFor='pincode'>PINCODE:</label>
            <input type='text' id='pincode' name='pincode' placeholder="Enter Patient's Pincode of Residence" value={ppincode ? ppincode : pincode} onChange={this.changeHandler} />

            <label htmlFor='weight'>WEIGHT(kg):</label>
            <input type='text' id='weight' name='weight' placeholder="Enter Patient's Weight in Kg" value={weight} onChange={this.changeHandler} />

            <label htmlFor='mobileNumber'>MOBILE NO:</label>
            <input type='text' id='mobileNumber' name='mobileNumber' placeholder="Enter Patient's Mobile No" value={pmobile ? pmobile : mobileNumber} onChange={this.changeHandler} />

            <label htmlFor='emailId'>EMAIL:</label>
            <input type='text' id='emailId' name='emailId' placeholder="Enter Patient's email address" value={emailId} onChange={this.changeHandler} />

            <label htmlFor='country'>COUNTRY:</label>
            <input type='text' id='country' name='country' placeholder="Enter Patient's Country of Residence" value={country} onChange={this.changeHandler} />

            <label htmlFor='bloodGroup'>BLOOD GROUP:</label>
            <input type='text' id='bloodGroup' name='bloodGroup' placeholder="Enter Patient's Blood Group" value={bloodGroup} onChange={this.changeHandler} />
            
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Registration
