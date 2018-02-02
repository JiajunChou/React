import React, { Component } from 'react';

class LoggingForm extends Component {
  constructor(props){
    super(props);
    this.state={
      account: ""
    , passwords: ""
    };
  }

  handleChange = (event) => {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  submit = (event) => {
    const output = "Account: " + this.state.account + "  " + "PassWords: " + this.state.passwords;
    console.log(output);
    event.preventDefault();
  }

  render (){
    return (
      <div className="stand">
        <div className="outer-screen">
          <div className="inner-screen">
            <form name="form">
              <label>            
                <input type="text" name="account" placeholder="User ID" value={this.state.account} onChange=    {this.handleChange}/>
              </label>
              <br />
              <label>             
                <input type="text" name="passwords"  placeholder="Passwords" value={this.state.passwords} onChange=    {this.handleChange}/>
              </label>
              <br />
              <input type="submit" name="submit" value="確認" onClick={this.submit}/>
            </form>
          </div>
        </div>  
      </div>
    );
  }
}

export default LoggingForm;