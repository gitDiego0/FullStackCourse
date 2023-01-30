import { Course } from "../Course/course"

const Courses = ({courses}) => {
  console.log(courses)
  return (
    <div>
      {
        courses.map(course =>{
          return <Course course={course}/>
        })
      }
    </div>
  )
}

export default Courses