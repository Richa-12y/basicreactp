import React, { Component } from 'react'
import { Comment } from "./comment";

export default class State extends Component
{
    constructor()
    {
        super();
        this.state = {
            title: 'What is React?',
            description: 'React is a js library....',
            comment: ['Good', 'Great', 'Keep it up!']
        }
    }
    render ()
    {
        return (

            <div>
                <h2>{this.state.title}</h2>
                {this.state.description}
                <Comment comment={this.state.comment} />
            </div>

        )
    }
}

