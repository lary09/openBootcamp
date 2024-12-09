import React from 'react';
import Header from './Header';
import Content from './Content';


const Course = ({ course }) => {
      console.log({course}, "course")
  return (
    <div>
        {course.map(course =>(
            <div key={course.id}>
              
                <Header course={course} />
                <Content  parts={course.parts} />
            </div>
        ))}
          
    </div>
  );
};

export default Course;
