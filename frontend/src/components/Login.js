import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export class Login extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        id: '',
        password: '',
        flag: false,
        objectOfPatientList: {}
      }
    }
    
    professionChangeHandler = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios
            .post('http://localhost:8080/login', {
                id: this.state.id,
                password: this.state.password,
                type: this.state.type,
            })
            .then(res => {
                if(res.status >= 200 && res.status <= 299) {

                    if(this.state.type === 'doctor') {
                        axios.post('http://localhost:8080/patient-list', {
                            doctorId: '1'
                        })
                        .then(res => {
                            this.setState({
                                objectOfPatientList: res.data,
                                flag: true
                            })
                        })
                    }
                    else this.setState({
                        flag: true
                    })
                }
                else console.log('Error encountred at login')
            })
            .catch(err => {
                console.log(err)
                alert(err.response.status)
            })
    }

    render() {
        const {id, password, type, flag} = this.state

        console.log(this.props)

        if(type === 'doctor' && flag) return <Navigate to='/search' state= {this.state.objectOfPatientList}/>
        
        else if(type === 'receptionist' && flag) return <Navigate to='/abha'/>  

        else
        return (
            <div>
                <div className='loginblock'>

                    <div className='loginheading'>
                        <h1>LOGIN</h1>
                    </div>
  
                    <form className='loginmenu' onSubmit = {this.submitHandler}>
                        
                        <div className='loginprofessionchoice'>
                              
                            <label htmlFor="type">Who are you?</label>
                            <select name="type" id="type" value={type} onChange={this.professionChangeHandler}>
                                <option value="doctor">Doctor</option>
                                <option value="receptionist">Receptionist</option>
                            </select>
                        </div>

                        <div className='loginusername'>
                            <label htmlFor="id">id:</label>
                            <input type="text" id="id" name="id" value={id} onChange={this.changeHandler}/>
                        </div>

                        <div className='loginpassword'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" value={password} onChange={this.changeHandler}/>
                        </div>

                        <button type='submit' className='loginbutton'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login