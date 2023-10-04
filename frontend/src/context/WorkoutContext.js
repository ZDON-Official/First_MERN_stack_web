import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutReducer = (state, action) => {

}

export const WorkoutsContextProvier = ({ children}) => {

    const [state, dispatch] = useReducer(workoutReducer, {
        workout: null
    })

    return (
        <WorkoutsContext.Provider value={}>
            {children}
        </WorkoutsContext.Provider>
    )
}

