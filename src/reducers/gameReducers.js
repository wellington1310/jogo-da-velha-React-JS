import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "game",

    initialState: {
        board: ["", "", "", "", "", "", "", "", ""],

        playerTime: 0,

        gameOver: false,

        symbols: ["x", "o"],

        winStates: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]

        ],

    },
    reducers: {

        handleMove: (state, actions) => {

            if (state.gameOver) {
                return;
            }


            if (state.board[actions.payload] === "") {

                state.board[actions.payload] = state.symbols[state.playerTime];

                state.gameOver = isWin();



                if (state.gameOver === false) {

                    state.playerTime = (state.playerTime === 0) ? 1 : 0;


                }
            }

            function isWin() {

 
                for (let i = 0; i < state.winStates.length; i++) {
                    let seq = state.winStates[i]

                    let pos1 = seq[0];
                    let pos2 = seq[1];
                    let pos3 = seq[2];


                    if (state.board[pos1] === state.board[pos2] &&
                        state.board[pos1] === state.board[pos3] && state.board[pos1] !== "") {
                      
                        return true

                    }

                }


                return false;
            }


        },

        restart: (state) => {

            state.board = ["", "", "", "", "", "", "", "", ""];
            state.playerTime = 0;
            state.gameOver = false;

        }






    }


})



export const { handleMove, restart } = gameSlice.actions


export default gameSlice.reducer