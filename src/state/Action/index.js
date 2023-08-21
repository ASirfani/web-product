import {ADD_TO_CART ,ADD_TO_FAVORITES} from '../constants'
export const addToCart =(data)=>{
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const addToFavorites =(data)=>{
    return {
        type:ADD_TO_FAVORITES,
        data:data
    }
}
