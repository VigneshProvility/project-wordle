import React from 'react';
import InputComponent from "../Input";
import GridComponent from "../Grid";
import SuccessToasterComponent from "../SuccessToaster";
import FailureToasterComponent from "../FailureToaster";
import VirtualKeyComponent from "../VirtualKey";

import {range, sample} from '../../utils';
import {WORDS} from '../../data';

const SUCCESS_MSG = 'success';
const FAILURE_MSG = 'failure';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guessList, updateGuess] = React.useState([]);
    const [showBanner, updateBanner] = React.useState('');

    const setBanner = (info) => {
        updateBanner(info);
    }

    const addGuessList = (guessInfo) => {
        const updatedList = guessList.filter(infoValue => {
            if (isNaN(infoValue)) return infoValue;
        })
        const emptyList = range(0, (6 - (updatedList.length + 1)));
        updateGuess([...updatedList, guessInfo, ...emptyList]);
    }

    if (!guessList.length) {
        const rangeUtils = range(0, 6);
        updateGuess(rangeUtils);
    }

    function showToasterMsg() {
        if (showBanner === SUCCESS_MSG) {
            const guessIndices = guessList.indexOf(answer);
            return <SuccessToasterComponent count={guessIndices} />;
        }
        if(showBanner === FAILURE_MSG) {
            return <FailureToasterComponent answer={answer}/>;
        }
    }

    function refresh() {
        updateBanner('');
        updateGuess([]);
        return;
    }

    return <>
        <GridComponent guessList={guessList} setBanner={setBanner} answer={answer} refresh={refresh}/>
        <InputComponent addItem={addGuessList}/>
        <VirtualKeyComponent guessList={guessList} answer={answer}/>
        {showToasterMsg()}
    </>;
}

export default Game;
