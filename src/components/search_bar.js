import React, { Component } from 'react';

class SearchBar extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
          query: 'Enter Your name'
        };
    }

//    onInputChange = event => {
//        console.log(event.target.value);
//    }

    
    render(){
        return (
            <div> 
                <input 
                    type='text'
                    
                    value={ this.state.query } 
                    onChange={ event => this.setState({ query: event.target.value }) }
                />
                <h3>{ this.state.query }</h3>
            </div>
        
        );
    }
    
};

export default SearchBar;