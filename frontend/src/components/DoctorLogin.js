import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export class DoctorLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            password: '',
            flag: false,
            objectOfPatientList: {},
            type: 'doctor'
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios
            .post('http://localhost:8080/login', {
                id: this.state.id,
                password: this.state.password
            })
            .then(res => {
                if (res.status >= 200 && res.status <= 299 && res.data !== 'invalid credentials' && res.data.type === 'doctor') {

                    axios.post('http://localhost:8080/patient-list', {
                        doctorId: this.state.id
                    })
                        .then(res => {
                            this.setState({
                                objectOfPatientList: res.data,
                                flag: true
                            })
                        })
                        .catch(e => {
                            console.log(e);
                            alert("Error fetching doctor's patient list")
                        })

                }
                else alert('Invalid Credentials')
            })
            .catch(err => {
                console.log(err)
                alert('Server Down')
            })
    }

    render() {
        const { id, password, flag } = this.state

        if (flag) return <Navigate to='/search' state={this.state.objectOfPatientList} />
        else
            return (
                <div>
                    <div className='loginblock'>

                        <div className='loginheading'>
                            <h1>DOCTOR LOGIN</h1>
                        </div>

                        <form className='loginmenu' onSubmit={this.submitHandler}>

                            <div className='loginusername'>
                                <label htmlFor="id">id:</label>
                                <input type="text" id="id" name="id" value={id} onChange={this.changeHandler} />
                            </div>

                            <div className='loginpassword'>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" value={password} onChange={this.changeHandler} />
                            </div>

                            <button type='submit' className='loginbutton'>Submit</button>
                        </form>
                    </div>
                </div>
            )
    }
}
export default DoctorLogin