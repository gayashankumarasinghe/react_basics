import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name:'Ganya', age:27},
      {name:'Madu',age:23}
    ]
  }
  switchNameHandler = (newName) =>
  {
    console.log("fdefdfde");
    this.setState({
      persons: [
        {name:newName, age:26},
        {name:'Madumadhavi',age:23}
      ]

    })
  }
  typeNameHandler = (event) =>{
    this.setState({
      persons: [
        {name:event.target.value, age:26},
        {name:'Madumadhavi',age:23}
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>I am new to react</h1>
       <p>This is new paragraph</p>
       <button onClick={this.switchNameHandler.bind(this,'Gaya')}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.typeNameHandler}></Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"suttiboo")}></Person>
       <Person name="Mad" age="23">Chutti</Person>
       <Person/> 
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Bul bul'))
  }
}

export default App;
