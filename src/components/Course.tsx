import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
    
  return (
    <div>
     {course.map(singleCourse =>{
      const totalExercises = singleCourse.parts.reduce(
        (sum,part) => sum + part.exercises,0
      )
       return(
        <div key={singleCourse.id}>
        <h2>{singleCourse.name}</h2>
        <Content parts={singleCourse.parts}/>
        <p>Total of {totalExercises} exercises</p>
    </div>
       )
})}
    </div>
  );
};

export default Course;
