import React, { Component } from 'react';

class ModifyComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
            <h2>modify component</h2>
            <h2>modify component</h2>
            <h2>modify component</h2>
            <h2>modify component</h2>
                <h2>{this.props.date}</h2>
            </div>
        );
    }
}

export default ModifyComponent

