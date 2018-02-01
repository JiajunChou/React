import React, { Component } from 'react';

var BoilingVerdict = function(props){
    if( (props.type === "Celsius" && props.WaterTemperacture >= 100) || (props.type === "Fahrenheit" && props.WaterTemperacture >= 212)){
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}

class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            Temperateure: "",
        };
    }

    handleChange = (e) => {
        this.setState({Temperateure: e.target.value});
    }

    render(){
        return(
            <div>
                <legend>Enter temperature in {this.props.TempType}: </legend>
                <input name={this.props.TempType} type="text" value={this.state.Temperateure} onChange={this.handleChange} />
                <BoilingVerdict type={this.props.TempType} WaterTemperacture = {this.state.Temperateure} />
            </div>
        )
    }
}


const scaleName = {
    c: "Celsius",
    f: "Fahrenheit"
};


class Calculator extends Component{

    render(){
        return(
            <div>
                <TemperatureInput TempType={scaleName.c} />
                <TemperatureInput TempType={scaleName.f} />
            </div>
        )
    }
}

export default Calculator;