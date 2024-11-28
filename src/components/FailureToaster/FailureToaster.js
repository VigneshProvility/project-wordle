import React from "react";

function FailureToasterComponent(props) {
    return <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{props.answer}</strong>.</p>
    </div>
}

export default FailureToasterComponent;
