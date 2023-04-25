import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

class PatientDashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            goToConsultation: false
        }
    }

    consultationSubmitHandler = e => {
        this.setState({
            goToConsultation: true
        })
    }
    render() {

        // const visitsList = this.props.data.state.visits.map(visit => <li> {visit.date} </li>)
        // const vitalsList = this.props.data.state.vitals.map(vital => <li> {vital.bloodPressure} AND {vital.pulse} </li>)
        // const treatmentsList = this.props.data.state.treatment.map(treatment => <li> {treatment.value} </li>)
        // const diagnosisList = this.props.data.state.diagnosis.map(diagnosis => <li> {diagnosis.value} </li>)
        // const labResultsList = this.props.data.state.labResult.map(labResult => <li> {labResult.value} </li>)

        if (this.state.goToConsultation) return <Navigate to='/consultation' />
        return (
            <div>
                <div className='topbar'>
                    <svg height='30px' width='30px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    {/* <h4>{this.props.data.state.name}</h4>
                    <h4>{this.props.data.state.gender}</h4>
                    <h4>{2023 - this.props.data.state.name}</h4>
                    <h4>{this.props.data.state.patientId}</h4> */}

                    <h4>Anshul Sharma</h4>
                    <h4>Male</h4>
                    <h4>Age - 25</h4>
                    <h4>Patient Id - 2678588</h4>
                    <form onSubmit={this.consultationSubmitHandler}>
                        <button type='submit'>Consultation</button>
                    </form>

                </div>

                <div className='visits'>
                    <div className='visitsHeading'>
                        <h4>Visits</h4>
                        <ul>
                            {/* {visitsList} */}
                            <li>Visits - 1/April/2023</li>
                        </ul>
                    </div>
                </div>

                <div className='vitals'>
                    <div className='vitalssHeading'>
                        <h4>vitals</h4>
                        <ul>
                            <li>Blood Pressure - 120/80</li>
                        </ul>
                    </div>
                </div>

                <div className='diagnosis'>
                    <div className='diagnosisHeading'>
                        <h4>Diagnosis</h4>
                        <ul>
                            {/* {diagnosisList} */}
                            <li>Flu</li>
                        </ul>
                    </div>
                </div>

                <div className='treatments'>
                    <div className='treatmentsHeading'>
                        <h4>Treatments</h4>
                        <ul>
                            {/* {treatmentsList} */}
                            <li>Take 5 Methylpredinosolne Capsules</li>
                        </ul>
                    </div>
                </div>

                <div className='labResults'>
                    <div className='labResultsHeading'>
                        <h4>Lab Results</h4>
                        <ul>
                            {/* {labResultsList} */}
                            <li>---NA---</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PatientDashboard
