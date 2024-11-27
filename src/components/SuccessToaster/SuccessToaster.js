import React from "react";

function SuccessToasterComponent(props) {
    return <>
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{props.count + 1} guesses</strong>.
            </p>
        </div>
    </>
}

export default SuccessToasterComponent;
