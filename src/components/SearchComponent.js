import React, { Component, PropTypes } from 'react';
import '../css/SearchComponent.css'
const propTypes = {
};
const defaultProps = {
};
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchValue:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }
    handleChange(event) {
        this.setState({searchValue: event.target.value});
      }
    handleSearch(){
        this.props.onSearch(this.state.searchValue.trim());
        
    }
    onSearch
    clearSearch() {
        this.setState({
            searchValue: ''
        });
    }
   render() {
      return(
         <div id="SearchComponent">
            <input
                type="text"
                size='50'
                placeholder="Search Movie"
                value={this.state.searchValue}
                onChange={this.handleChange}
            />
            <button 
                className="clear-button"
                onClick={this.clearSearch}
            />
            <button 
                className="submit-button"
                onClick={this.handleSearch}
            />

         </div>
    );
    }
}
SearchComponent.propTypes = propTypes;
SearchComponent.defaultProps = defaultProps;
export default SearchComponent;