import './Data.css'


export let titles = [ "Introduction" , "GetStarted" , "Input",  "Output"];
        //                 0              1             2           3  

export let contents = [

    <div className='content-container'>
        <h2> What is React? </h2>
        <div className="ans-div">
            <p>
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
            </p>
            <p>
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
                React is a tool for building UI components.
            </p>
        </div>

        <div className='code-div-container'>
            <h3> Coding Example </h3>
            <div className='code-div'>
       <code>
            <pre>
                {`const greet = (name) => {
                return 'Hello, ' + name + '!';
            };
            
            console.log(greet('World'));`}
            </pre>
      </code>
            </div>
        </div>
    </div>
];