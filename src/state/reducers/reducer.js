import { ADD_TO_CART,ADD_TO_FAVORITES } from '../constants';

const initialState = {
    cardData: [],
    favoriteData:[]
};

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: [...state.cardData, action.data]
            };
            case ADD_TO_FAVORITES:
                return {
                    ...state,
                    favoriteData: [...state.favoriteData, action.data]
                };
        default:
            return state;
    }
}
