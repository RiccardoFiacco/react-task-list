import './App.css'
import { tasks } from './tasks'
function App() {
  let notCompletedCount=0
  const notCompleted = tasks.filter((el)=>el.state !='completed')
  notCompleted.forEach(()=>{notCompletedCount++})

  //let completedCount = 0;
  //const completed = tasks.filter((el)=>el.state =='completed')
  //completed.forEach(()=>{completedCount++})


  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <h3>Current Task {notCompletedCount}</h3>
      </div>
      <div>{
        notCompleted.map((el)=>{
          return (
            <div key = {el.id}>
              <p>
                <span>{el.title}</span>
                <span>{el.state}</span>
              </p>
              <p>Priority {el.priority}</p>
              <p>Est. Time {el.estimatedTime}</p>
            </div>
          )
        }) 
      }
      </div>
    </div>
  )
}

export default App
