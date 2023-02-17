import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restart } from '../reducers/gameReducers';


export default function GameOver(props) {
    

    const dispatch = useDispatch()
    const { gameOver, playerTime, symbols } = useSelector(states => states)
    const win = (playerTime === 0) ? 1 : 2;
    const symbolWin = (symbols[playerTime] === "x") ? "x" : "o";
    const [theGameIsOver, setTheGameIsOver] = useState(false)


    function again() {

        dispatch(restart())
        setTheGameIsOver(false)

    }

    useEffect(() => {

        if (gameOver) {

            setTimeout(() => {
                setTheGameIsOver(true)
            }, 20)

        }
    }, [gameOver])



    return (
        theGameIsOver ? <div id="gameOver">

            < h2 id={symbolWin} > O ganhador foi o jogador {win} </ h2>
            <button id="again" onClick={again}>jogar novamente</button>

        </div > : <Fragment />

    )


}