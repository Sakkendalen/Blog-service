import React, { Component } from 'react';

require('../styles/LeftPanel.css');

class LeftPanel extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="LeftPanelDiv">
                <ul className="LeftPanelUL">
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                    <li>Six</li>
                    <li>Seven</li>
                </ul>
            </div>
        )
    }
}

export default LeftPanel;