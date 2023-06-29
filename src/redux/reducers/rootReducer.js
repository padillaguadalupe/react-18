import { utils } from "../../utils/utils";
import { actionsType } from "../actions/actions";

const initialState = {
    cards: [
        {
            id: 1,
            title: 'Guada',
            content: utils.content
        },
        {
            id: 2,
            title: 'Maria',
            content: utils.content
        },
        {
            id: 3, 
            title: 'Juan',
            content: utils.content
        }
    ]
}
const rootReducer = (state = initialState, action) => {
    if (action.type === actionsType.DELETE_CARD){
        const cards = state.cards.filter(card => card.id !== action.id)
        return{
            ...state,
            cards
        }
    }
    return state;
}

export default rootReducer;