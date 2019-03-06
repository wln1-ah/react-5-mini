const initialState = {
    currentValue: 0,
    previousValues: [],
    futureValues: [],
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            const incrementAmount = action.payload || 1;
        
            return {
                ...state,
                currentValue: state.currentValue + incrementAmount,
            };
        
        case DECREMENT:
            const decrementAmount = action.payload || 1;
            
            return {
                ...state,
                currentValue: state.currentValue - decrementAmount,
            };
    }
    
    return state;
}

export {
    reducer,
    INCREMENT,
    DECREMENT,
};
