import React, { Component } from 'react';
import UserItem from './UserItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            obj: [],
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
            const newObj = [...this.state.obj, e.target.value ];
            this.setState({
                obj: newObj,
                inputValue: ''
            })
        }
    };

    handleRemove = (index) => {
        const oldItem = this.state.obj;
        const newObj = oldItem.slice(0, index).concat(oldItem.slice(index+1))
        this.setState({
            obj: newObj
        })
    };

    render(){
        return(
            <div>Name: 
                <input style={{ marginLeft: 16 }} value={this.state.inputValue} type="text" onChange={this.handleChange} onKeyPress={this.handelPressKey} />
                <ul>
                {
                    this.state.obj.map((value, index) => {
                        return(
                          <UserItem 
                            key={index}
                            index={index}
                            check={this.state.checked === index}
                            buyer={value}
                            data={this.state.obj}
                            onItemsClick={this.handleChange} 
                            onItemDoubleClick={this.handleRemove}/>
                            )
                    })
                }
                </ul>              
            </div>
        )
    }
}

export default TodoList;