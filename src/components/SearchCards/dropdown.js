import React, {Component} from 'react';

class Dropdown extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <option id={this.props.name} key={this.props.id} name={this.props.name} value={this.props.code}>
                {this.props.name}
                </option>
        )
    }
}

export default Dropdown;