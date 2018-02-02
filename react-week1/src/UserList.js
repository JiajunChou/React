import React, { Component } from 'react';

class UserList extends Component{
    constructor(props){
        super(props);
    };
    
    render(){
        return(
            <div>
                <div className="UserStatic">
                    <h2>User List</h2>
                    Member: 2
                    Account total: {this.props}
                </div>
                <div>
                    <h3>User ID: {this.props}</h3>
                    <ul>
                        <li>Account: {this.props}</li>
                    </ul>
                </div>
                <div>
                    <h3>User ID: {this.props}</h3>
                    <ul>
                        <li>Account: {this.props}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            UserID: "",
            Account: ""
        };
    }

    handleInputChange = (event) =>{
        const InputName = event.target.name;
        const value = event.target.value;
        this.setState({
            [InputName]: value
        })
    };

    handleSubmit = (event) =>{
        event.preventDefault();
    }

    render(){
        return(
        <div>
            <h2> User Information </h2>
            <form>
                <label>
                Name:
                <input type="text" name="UserID" value={this.state.UserID} onChange={this.handleInputChange} />
                </label>
                <label>
                Account:
                <input type="number" name="UserMoney" value={this.state.Account} onChange={this.handleInputChange} />
                </label>
                <input type="Submit" value="修改" onClick={this.handleSubmit}/>
            </form>
        </div>
        )
    }
}

export default UserList;