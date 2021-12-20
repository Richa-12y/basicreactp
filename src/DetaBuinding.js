
import React, { Component } from 'react';

export class DetaBuinding extends Component
{
    constructor()
    {
        super();
        this.state = {
            name: 'Richa',
            site: 'https://www.dotnettricks.com'
        };
        //this.handleClick=this.handleClick.bind(this);
    }
    handleClick = (name) =>
    {
        console.log(this.state.name)
        console.log(name);
    }

    handleChange = (event) =>
    {
        this.setState({
            name: event.target.value
        });
    }
    render ()
    {
        return (
            <div>
                <h2>Data Binding</h2>
                <div>My name is {this.state.name}</div>
                <div>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={this.handleClick}>Click</button>

                </div>
                <div>
                    <button onClick={(e) => this.handleClick(this.state.name)}>Click</button>
                </div>

            </div>
        )
    }
}
