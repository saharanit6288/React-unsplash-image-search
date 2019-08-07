import React from 'react';
import './SearchBar.css'; 

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val: '',
        };
    }

    onInputChange = (event) => {
        this.setState({val: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSearchTerm(this.state.val);
    }

    render() {
        return (
            <div>
                <form className="flexContainer" onSubmit={this.onFormSubmit}>
                    <label><h2>Image Search: </h2></label>
                    <input className="inputStyle" 
                        type="text" 
                        value={this.state.val}
                        onChange={this.onInputChange} />
                    <label className={this.props.loading ? '' : 'hidden'}>Loading...</label>
                </form>
            </div>
        )
    }
}

export default SearchBar;