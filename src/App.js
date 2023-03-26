//import maphoto from './images/maPhoto.jpg';
import './App.css';
import React from 'react';
import { Component } from 'react';


class App extends Component {

  //states
  
 
   state=
    {Person:
      {
        fullName:"Amadou Thiam",
        age:"52ans",
        imgSrc:"/images/maPhoto.jpg",
        profession:"Ingénieur"

      },
      show:true

    };
  

//behaviour
handleShow(){this.setState((this.state.show)?{show:false}:{show:true})}


//render

  render() {
    
    
    
      return (
        (this.state.show)?
          <div>
            <button onClick={()=>this.handleShow()}>Masquer Profil</button> <hr />      
            {this.state.Person.fullName} <br/>
            {this.state.Person.age} <br />
            {this.state.Person.profession} <br />
            <img src={this.state.Person.imgSrc}  width="40" alt="Moi" /> <hr />

          </div>
        :
          <div>
            <button onClick={()=>this.handleShow()}>Montrer profil masqué</button> <hr /> 
          </div>   
      )
    
    }
  }


export default App;
