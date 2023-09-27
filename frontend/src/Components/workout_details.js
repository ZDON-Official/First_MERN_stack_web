const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (Lbs): </strong> {workout.load}{" "}
      </p>
      <p>
        <strong>Reps (Lbs): </strong> {workout.reps}{" "}
      </p>
      <p> {workout.createdAt} </p>
    </div>
  );
};

export default WorkoutDetails;
