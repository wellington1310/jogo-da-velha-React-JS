import { restart } from '../reducers/gameReducers';
import { useDispatch } from 'react-redux';

export default function Restart(props) {

    const dispatch = useDispatch()

    return (

        <button id="restart" onClick={() => { dispatch(restart()) }}>
            Restart
        </button>
    )


}