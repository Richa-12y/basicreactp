import React, { Component } from 'react'

const rootComponent = () =>
{
    let book = { title: 'React Interview Q&S', publisher: 'WestenDigital' };
    return <Article title={book.title} publisher={book.publisher}></Article>
}
class Article extends Component
{
    count = 0;
    constructor(props) //constructor is used for assess them//
    {
        super(props); //sper is used for call the parents class//
        this.state = {
            counter: 0
        };
    }
    handleClick = () =>
    {

        //upadted only one time
        /* this.setState({
             counter: this.state.counter + 1
         });*/

        /* this.setState((prevState,props)=>({
             counter: this.state.counter + 1
  
         }));*/
        //upadted only two times

        this.setState((prevState, props) => ({
            counter: this.state.counter + 1

        }));
    }
    handleClickSimple = () =>
    {
        //simple member
        this.count = this.count + 1;
        this.forceUpdate(); //here re-rendering is not happening 
        //we forsefully re-render using forceUpdate

    }
    componentDidMount ()
    {
        this.refs.name.focus();
    }
    render ()
    {
        return (
            <div>
                <h1>props:{this.props.title}</h1>
                <p>{this.props.publisher}</p>
                <h4>State:{this.state.counter}</h4>
                <button onClick={this.handleClick}>Click here</button>

                <h4>Class Member:{this.count}</h4>
                <button onClick={this.handleClickSimple}>Click Simple</button>

                <div>Fouse in type Box</div>
                <input type="text" ref="name" />
            </div>
        )
    }
}
export default rootComponent;