import React, { Component } from 'react';

var BoilingVerdict = function(props){
    if( (props.type === "Celsius" && props.WaterTemperacture >= 100) || (props.type === "Fahrenheit" && props.WaterTemperacture >= 212)){
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}

class LiftingStateUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            Celsius: "",
            Fahrenheit: ""
        };
    }

    handleChange = (e) => {
        const name=e.target.name;
        this.setState({[name]: e.target.value});
    }

    render(){
        return(
            <div>
                <legend>Enter temperature in Celsius: </legend>
                <input name="Celsius" type="text" value={this.state.Celsius} onChange={this.handleChange} />
                <BoilingVerdict type="Celsius" WaterTemperacture = {this.state.Celsius} />
                <legend>Enter temperature in Fahrenheit: </legend>
                <input name="Fahrenheit" type="text" value={this.state.Fahrenheit} onChange={this.handleChange} />
                <BoilingVerdict type="Fahrenheit" WaterTemperacture = {this.state.Fahrenheit} />
            </div>
        )
    }
}

export default LiftingStateUp;