import initialState from "./initialState";

export const todoReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {

        default: return state;
    }
}

export default todoReducer
