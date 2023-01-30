import Header from '../Header/Header'
import Content from '../Content/Content'
import Part from '../Part/Part'
import Total from '../Total/Total'

export const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name}/>
      <Content >
        {course.parts.map((part)=><Part key={part.id} name={part.name} exercises={part.exercises}/>)}
      <strong>
        <Total parts={course.parts}/>
      </strong>
      </Content>
    </div>
  )
}