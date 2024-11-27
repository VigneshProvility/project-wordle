import {checkGuess} from "../../game-helpers";
import React from "react";

function VirtualKeyComponent(props) {
    const keyList = ['QWERTYUIOP','ASDFGHJKL','ZXCVBNM'];
    const {guessList, answer} = props;
    const colorList = guessList.flatMap(guessedWord => {
        const word = isNaN(guessedWord) ? guessedWord : '';
        if (word.length > 0) {
            return checkGuess(word, answer);
        }
        return [];
    })
    console.info(colorList);
    return<>
        {
            keyList.map((key, index) => {
                const word = key.split('');
                const currentStyle = index === 1 ? 'keys-second' : index === 2 ? 'keys-third' : '';
                return <div key={index} className={`guess-results ${currentStyle}`}>
                    <p className="guess p-0">
                        {
                            word.map((char, index) => {
                                const currentColorList = colorList.filter(color => color.letter === char) || [];
                                return <span key={index} className={`cell keys ${currentColorList.length ? currentColorList[currentColorList.length -1].status : ''}`}>{char}</span>
                            })
                        }
                    </p>
                </div>
            })
        }
    </>
}

export default VirtualKeyComponent;
