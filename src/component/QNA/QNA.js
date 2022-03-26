import React from 'react';
import './QNA.css';

const QNA = () => {
    return (
        <div className='qna'>
            <h1>How React works?</h1>
            <p>React is Working by component. When we are write in Component that is pure javascript code <br />
            When we are writing function the component is going to covert it pure javascript code. <br />
            We are using JSX in REact. When We are trying to convert it javascript code to  Html we are using react <br />
            React Automatically covert component which is javascript code into Html code. <br />
             Using React Dom we are converting Html code to show in browser as index.html <br /> 
             </p>

             <h1>Props VS State</h1>
             <p>Using State we are update and Modify the Data But Using Props we are not update and modify the data <br /> </p>
             <p> Using State data is passed with only in component but Using Props we are passed data one component to another <br /></p>
             <p>State is read and write But props is  read only</p>
             <p>State Cannot make components reusable But The props make components reusabel <br /></p>
             <p>State take information of components But Props allow to pass data from another component </p>


        </div>
    );
};

export default QNA;