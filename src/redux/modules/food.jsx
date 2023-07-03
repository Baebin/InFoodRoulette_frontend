import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions"

const SET_FOODS = "SET_FOODS";

const setFoods = createAction(SET_FOODS, (foods) => ({ foods }))

const init = {
    foods: []
}

const getFoodsAPI = (type, rate, delivery) => {
    return function(dispatch, getState) {
        const API = `/api/get/foods?type=${type}&rate=${rate}&delivery=${delivery}`;

        console.log(type, rate, delivery);
        console.log(API);
        axios.get(API)
        .then((foods) => {
            dispatch(setFoods(foods));
        }).catch((error) => {
            console.log(error.respone);
        })
        /*
        axios.post(
            API,
            {
                "type": type,
                "rate": rate,
                "delivery": delivery
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((foods) => {
            dispatch(setFoods(foods));
        }).catch((error) => {
            console.log(error.response.data);
        })
        */
    }
}

// Reducers
export default handleActions(
    {
        [SET_FOODS]: (state, action) => produce(state, (draft) => {
            draft.foods = action.payload.foods;
        })
    },
    init
);

const actionCreators = {
    getFoodsAPI
};

export { actionCreators };