import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        // filter throught the workout array and remove the deleted workout
        // if workout 'w' has the id of the deleted workout, then filter it out
        workouts: state.workouts.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state;
  }
};

export const WorkoutsContextProvier = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workout: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
