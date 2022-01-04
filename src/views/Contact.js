import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact me at {this.props.email}</h2>
            </div>
        )
    }
}
