import React, { Component } from 'react';
import Routes from './routes/Nav'
import { NavigationContainer } from '@react-navigation/native';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
     <NavigationContainer>
        <Routes />
       
     </NavigationContainer>
    );
  }
}