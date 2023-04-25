import React, { Component } from 'react'

export class AdminLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: '',
       password: '',
       type: 'admin',
       flag: false
    }
  }

  changeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
  
  render() {
    const { id, password, flag } = this.state
    return (
      <div>
        <div className='loginblock'>

          <div className='loginheading'>
            <h1>ADMIN LOGIN</h1>
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

export default AdminLogin


