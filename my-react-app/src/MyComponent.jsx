import React, {useState} from 'react';

function MyComponent(){

    const [htmlTextContent="Place Holder", setHtmlTextContent] = useState();
    const [yesOrNo=false, setYesOrNo] = useState();

    const changePlaceHolder = () => {
        setHtmlTextContent(document.getElementById('input1').value);
    }

    const change = (e) => {
        if(!yesOrNo){
            e.target.style.color = "green";
        }else{
            e.target.style.color = "red";
        }

        setYesOrNo(!yesOrNo);
    }

    return(
        <div>
            <p id='paragraph1'>{htmlTextContent}</p>
            <input type="text" id='input1'/>
            <button onClick={changePlaceHolder}>Change</button>
            
            <br /><br />

            <p onClick={(e) => change(e)}>Yes or No: {yesOrNo ? "Yes" : "No"}</p>
        </div>
    );

}

export default MyComponent;