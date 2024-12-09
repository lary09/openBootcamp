import "./App.css";
import Course from "./components/Course";
import Note from "./components/Note"


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  console.log({courses }, "courses")
  const totalExercises = courses.flatMap(course => course.parts).reduce((sum, part) => sum + part.exercises, 0)
  console.log({totalExercises})
  
  return (
    <div>

   <Course  course={courses} />
   <p>total of {totalExercises} exercises</p>
   </div>
  )
}



export default App
