import React, { Component } from 'react';

var BoilingVerdict = function(props){
    if(props.WaterTemperacture >= 100){
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}

class LiftingStateUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            temperacture: ""
        };
    }

    handleChange = (e) => {
        this.setState({temperacture: e.target.value});
    }

    render(){
        return(
            <div>
                <input name="Temperacture" type="text" value={this.state.temperacture} onChange={this.handleChange} />
                <BoilingVerdict WaterTemperacture = {this.state.temperacture} />
            </div>
        )
    }
}

export default LiftingStateUp;