
import './App.css'
import Course from './Course'
import Header from './Header'
import { courses } from './veri'

function App() {

  return (
    <div>
      <Header />
      {
         courses?.map((course)=>(
          <Course key={course.id} course={course}/>
         ))
      }
    </div>
    
  )
}

export default App
