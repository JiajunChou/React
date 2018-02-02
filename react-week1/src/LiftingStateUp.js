import React, { Component } from 'react';

var BoilingVerdict = function(props){
    if( (props.type === "Celsius" && props.WaterTemperacture >= 100) || (props.type === "Fahrenheit" && props.WaterTemperacture >= 212)){
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}

var FahrenheitToCelsius = function(props){
    return (props.Temperature - 32) * 5/9;
}

var CelsiusToFahrenheit = function(props){
    return (props.Tempera * 9/5) + 32;
}

var Convertor = function(temperature, Convert){
    if(Number.isNaN(temperature)) return "";
    const result = Convert(parseFloat(temperature));
    return Math.round(result).toString();
}

class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            Temperature: "",
        };
    }

    handleChange = (e) => {
        this.setState({Temperature: e.target.value});
    }

    render(){
        return(
            <div>
                <legend>Enter temperature in {this.props.TempType}: </legend>
                <input name={this.props.TempType} type="text" value={this.state.Temperature} onChange={this.handleChange} />
                <BoilingVerdict type={this.props.TempType} WaterTemperacture = {this.state.Temperature} />
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