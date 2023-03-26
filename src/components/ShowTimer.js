import React, { Component } from 'react';
class ShowTimer extends Component{

    //State

    constructor() {

        super()
        this.state={
            chrono:0
        }
    }


    //Behaviour




    // Render

    render(){

        return (
            <h4>{this.state.chrono} secondes</h4>
        )

        }

    componentDidMount(){
        setInterval(() => { 
            this.setState({chrono:this.state.chrono+1})
            
        }, 1000);
       
    }


    // ComponentWillUnmount(){
    //     this.setState({chrono:0})
    // }

}

export default ShowTimer 