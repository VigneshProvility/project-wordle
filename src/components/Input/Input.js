import React from "react";

const MAX_LENGTH = 5;

function InputComponent(props) {
    const [currentValue, updateValue] = React.useState('');

    function onInputChange(event) {
        const {value} = event.target;
        const upperCaseValue = value.toUpperCase();
        updateValue(upperCaseValue);

        if (value.length === MAX_LENGTH) {
            props.addItem(upperCaseValue);
            updateValue('');
        }
    }

    return (
        <div>
            <form className="guess-input-wrapper">
                <label>Enter Guess:</label>
                <input id="guess-input" value={currentValue} onChange={onInputChange} type="text"/>
            </form>
        </div>
    )
}

export default InputComponent;
