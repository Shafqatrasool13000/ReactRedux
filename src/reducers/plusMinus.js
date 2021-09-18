//How to do by --Reducer
//Reducer take two arguments --(state,action)
const initialState=0
const plusMinus = (state=initialState,action) => {
      switch (action.type) {
           case 'INCREMENT':return state+action.payload
           case 'DECREMENT':return state-1
           case 'MULTIPLY':return state*action.payload
           default: return state
               
       }
}

export default plusMinus
