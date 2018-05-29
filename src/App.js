import React, { Component } from 'react';


import './App.css';
import MessageView from './messages/message-view';




class App extends Component {
    render(){
    
    const headerStyle = {
      color: '#ff0000',
      textDecoration: 'underline'
    }
    
    

        return(
            <div>
                <h2 style={headerStyle}>Welcome back again!</h2>
                <h2 style={{color: '#ff0000'}}>Checking stylesheet again!</h2>
                <MessageView />      
            </div>  
        )
    }
}

export default App;
