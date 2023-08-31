import React, { useReducer } from 'react'

function Reducer() {
    // Use Reducer is a little bit similar to usestate.
    // we Need to create a function which will manage what will happen when we change states
    // We will define reducer function which will be standard
    // Reducer will take two arguments one will be the state and other will be the action performed on the state
    const reducer = (state, action) => {
        // Switch statement will take the functions or actions
        // Types will be defined
        switch (action.type) {
            // count is taken from state through state.count similar with show text
            case "increment":
                return { count: state.count + 1, showText: state.showText }
            case "reset":
                return { count: state.count=0, showText: state.showText }
            case "toggleShowText":
                return { count: state.count, showText: !state.showText }
            default:
                return state




        }
    }
    // state is a variable which will store values and dispatch is a function which will be called whenever state varible changes then we will use reducer function
    // state values will be defined 
    const [state, dispatch] = useReducer(reducer,
        { count: 0, showText: true })




    return (
        <div>
            <h1>useReducer Hook</h1>
            <h2>{state.count}</h2>
            {/* Button with on Click method to invoke function on click */}
            <button onClick={() => {
                // Dispatch is used to get the functions
                dispatch({ type: "increment" })
                dispatch({ type: "toggleShowText" })
            }}>Click Me!</button>
            {/* Button to reset Count */}
            <button onClick={() => {
                dispatch({ type: "reset" })
            }}>Reset</button>
            {/* Text will only show if its values is true by default value is true */}
            {state.showText && <>


                <h2>This a Text</h2>



            </>}





        </div>
    )
}

export default Reducer