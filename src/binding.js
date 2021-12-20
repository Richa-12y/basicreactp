import React, { Component } from 'react'

export default class Binding extends Component
{
    constructor()
    {
        super(); //after using constructor call the parents class using super()
        this.state = {
            name: 'sita',
            address: 'korea'
            //this.state used as a object so we write a code within {} here we can store component label state is used for only class component state can't be used in functional component

        }
    }

    handleClick = (name) =>
    {
        console.log(this.state.name)
        console.log(name);
    }

    handleChange = (event) =>
    {
        this.setState({ name: event.target.value })  //whenever we want to update the state will used this.setState
    }
    render ()
    {
        return (
            <div>
                <h1>Data Binding</h1>
                <p>{this.state.name}</p>
                <p>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </p>
                <h3>Event</h3>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
