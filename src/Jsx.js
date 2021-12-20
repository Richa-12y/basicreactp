import React from 'react'

let name = "Ashar";
let num1 = 2, num2 = 3;
let num = 3;
let style = { fontSize: "20px", color: 'red' };
let users = [
    {
        name: 'sanu', address: 'kolkata'
    },

    {
        name: 'ashar', address: 'karmanachak'
    }
]

function CheckevenOdd (num)
{
    if (num % 2 == 0)
    {
        return <div>Even number</div>
    }
    else
    {
        return <div>Odd number</div>

    }

}
let colr = 'blue';
let color = ['red', 'blue', 'yello'];
const App = () =>
{
    return <div>
        <hi style={style}>jsx exmple</hi>

        <p>My name is {name}</p>
        <p>{num1}+{num2}={num1 + num2}</p>
        <h3>if... else</h3>
        {CheckevenOdd(num)}

        {
            (() =>
            {

                //self executable function
                if (num % 2 == 0)
                {
                    return <div>Even number</div>
                }
                else
                {
                    return <div>Odd number</div>

                }

            })()

        }
        <h3>if with logical && operator</h3>

        {
            num % 2 === 0 && <div>Even number</div>

        }
        {
            num % 2 > 0 && <div>Odd number</div>

        }
        <h3>Ternary operator</h3>
        {
            num % 2 === 0 ? <div>Even number</div> : <div>Odd number</div>
        }
        <h3>switch</h3>
        {
            ((color) =>
            {

                switch (color)
                {
                    case 'red': return <span> Red Color</span>
                    case 'blue': return <span> Blue Color</span>

                }

            })('red')

        }

    </div>
}

export default App;