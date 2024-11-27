import {checkGuess} from "../../game-helpers";
import React from "react";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

const CORRECT = 'correct';
const SUCCESS_MSG = 'success';
const FAILURE_MSG = 'failure';

const checkMaxReached = (guessList) => {
    return guessList.every(info => typeof info === 'string');
}

const refreshApp = (setBanner, message, refresh) => {
    setBanner(message);
    setTimeout(() => {
        refresh();
    },4000);
}

function GridComponent(props) {
    const {guessList, setBanner, refresh, answer} = props;
    if(checkMaxReached(guessList) && guessList.length === NUM_OF_GUESSES_ALLOWED) {
        refreshApp(setBanner, FAILURE_MSG, refresh);
    }
    return <>
        {
            guessList.map((guessInfo, index) => {
                    const word = isNaN(guessInfo) ? guessInfo : ''
                    const [one, two, three, four, five] = word.split('');
                    let checkedGuessList = [];
                    if (word.length) {
                        checkedGuessList = checkGuess(word, answer);
                        const isCorrectWord = checkedGuessList.every(guessedWord => guessedWord.status === CORRECT);
                        if(isCorrectWord) {
                            setBanner(SUCCESS_MSG);
                            refreshApp(setBanner, SUCCESS_MSG, refresh);
                        }
                    }
                    return <div key={index} className="guess-results">
                        <p className="guess p-0">
                            <span  className={`cell ${checkedGuessList[0] ? checkedGuessList[0].status : ''}`}>{one}</span>
                            <span  className={`cell ${checkedGuessList[1] ? checkedGuessList[1].status : ''}`}>{two}</span>
                            <span  className={`cell ${checkedGuessList[2] ? checkedGuessList[2].status : ''}`}>{three}</span>
                            <span  className={`cell ${checkedGuessList[3] ? checkedGuessList[3].status : ''}`}>{four}</span>
                            <span  className={`cell ${checkedGuessList[4] ? checkedGuessList[4].status : ''}`}>{five}</span>
                        </p>
                    </div>
                }
            )
        }
    </>
}

export default GridComponent;
