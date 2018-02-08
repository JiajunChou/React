import React, { Component } from 'react';

const BoilingVerdict = function(props){
    if( (props.type === "C" && props.WaterTemperacture >= 100) || (props.type === "F" && props.WaterTemperacture >= 212)){
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}

const FahrenheitToCelsius = function(fah){
    return (fah - 32) * 5/9;
}

const CelsiusToFahrenheit = function(cel){
    return (cel * 9/5) + 32;
}

const Convertor = function(temper, Convert){
    temper = parseFloat(temper);
    if(Number.isNaN(temper)) {return ""};
    const result = Convert(parseFloat(temper));
    return Math.round(result).toString();
}

class TemperatureInput extends Component{
    constructor(props){
        super(props);
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const scaleName={
            C: "Celsius",
            F: "Fahrenheit"
        }
        const temperature = this.props.temperature;
        const TemType = this.props.TempType;
        return(
            <div>
                <legend>Enter temperature in {scaleName[TemType]}: </legend>
                <input 
                    type="text" 
                    value={temperature} 
                    onChange={this.handleChange} />&deg;{TemType}
            </div>
        );
    }
}

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state={ scale:'C',temperature: ''};
    }

    handleCelsiusChange = (temperature) =>{
        this.setState({scale: 'C', temperature});
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'F', temperature});
    }

    render(){
        const celsius = this.state.scale === 'F' ? Convertor(this.state.temperature, FahrenheitToCelsius) : this.state.temperature;
        const fahrenheit = this.state.scale === 'C' ? Convertor(this.state.temperature, CelsiusToFahrenheit) : this.state.temperature;
        return(
            <div>
                <TemperatureInput TempType="C" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput TempType="F" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict type={this.state.scale} WaterTemperacture = {this.state.temperature} />
            </div>
        );
    }
}

export default Calculator;