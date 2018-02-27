import React, { Component } from 'react';

class SearchBar extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
          query: ''
        };
    }

    
    onInputChange(query) {
        this.setState({ query });
        this.props.onSearchQueryChange(query);
    }
    
    

    
    render(){
        return (
            <div className="search-bar col col-12" > 
                <input 
                    type="text"
                    placeholder="search..."
                    value={ this.state.query } 
                    onChange={ event => this.onInputChange(event.target.value) }
                />
            </div>
        
        );
    }
    
};

export default SearchBar;