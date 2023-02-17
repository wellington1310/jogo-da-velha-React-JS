import { handleMove } from '../reducers/gameReducers';
import { useDispatch, useSelector } from 'react-redux';



export default function Container(props) {

    const dispatch = useDispatch()
    const { board } = useSelector(states => states)


    function handleClick(event) {
        let square = event.target
        let position = parseInt(square.id);

        dispatch(handleMove(position))

    }


    return (

        <div className='container'>

            {board.map((square, index) => {

                return <div id={index} key={index} onClick={handleClick}
                    className="square"> <div className={square}></div>
                </div>

            })}

        </div>

    )

}
