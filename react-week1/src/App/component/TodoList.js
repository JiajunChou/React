import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            Items: [],
            inputValue: ""
        }
    };
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    };
    handelPressKey = (e) => {
        if(e.key === 'Enter' ){
            const newItems = [...this.state.Items, e.target.value ];
            this.setState({
                Items: newItems,
                inputValue: ''
            })
        }
    }
    render(){
        return(
            <div>
                <input value={this.state.inputValue} type="text" onChange={this.handleChange} onKeyPress={this.handelPressKey} />
                <ul>
                {
                    this.state.Items.map((value, index) => {
                        return(<TodoItem key={index} text={value} handleItemClick={this.state.handleChange} />)
                    })
                }
                </ul>              
            </div>
        )
    }
}

export default TodoList;