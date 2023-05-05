import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export class ReceptionistLogin extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        id: '',
        password: '',
        goToAbha: false,
        type: 'receptionist'
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
                if(res.status >= 200 && res.status <= 299 && res.data !== 'invalid credentials' && res.data.type === 'receptionist') {
                    this.setState({
                        goToAbha: true
                    })
                }
                else alert(res.data)
            })
            .catch(err => {
                alert('Server Down')
                console.log(err)
            })
    }

    render() {
        const {id, password, goToAbha} = this.state

        if(goToAbha) return <Navigate to='abha'/>
        else
        return (
            <div>
                <div className='loginblock'>

                    <div className='loginheading'>
                        <h1>RECEPTIONIST LOGIN</h1>
                    </div>
  
                    <form className='loginmenu' onSubmit = {this.submitHandler}>

                        <div className='loginusername'>
                            <label htmlFor="id">id:</label>
                            <input type="text" id="id" name="id" value={id} onChange={this.changeHandler} placeholder='Enter your Username'/>
                        </div>

                        <div className='loginpassword'>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" value={password} onChange={this.changeHandler} placeholder='Enter your Password'/>
                        </div>

                        <button type='submit' className='loginbutton'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default ReceptionistLogin