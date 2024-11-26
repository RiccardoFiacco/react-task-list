import './App.css'
import { tasks } from './tasks'
function App() {
  let notCompletedCount=0
  const notCompleted = tasks.filter((el)=>el.state !='completed')
  notCompleted.forEach(()=>{notCompletedCount++})
  function counterFunction(){
    let count = 0;
    tasks.filter((el)=>el.state =='completed').forEach(()=>count++)
    return count
  }
  return (
    <div>
      <h1 className='bgcolor-aqua'>Task Manager</h1>
      <div>
        <h3>Current Task {notCompletedCount}</h3>
      </div>
      <div>{
         notCompleted.map((el)=>{
          return (
            <div key = {el.id}>
              <p>
                <span className='p-10r'>{el.title}</span>
                <span className='bgcolor-orange'> {el.state}</span>
              </p>
              <p>Priority {el.priority}</p>
              <p>Est. Time {el.estimatedTime}</p>
            </div>
          )
        }) 
      }
      </div>
      <br />
      <div>
        <h3>Current Task {counterFunction()}</h3>
      </div>
      <div>
        {
          tasks.filter((el)=>el.state =='completed').map((el)=>{
            return (
              <div key = {el.id}>
                <p>
                  <span className='p-10r'>{el.title}</span>
                  <span className='bgcolor-orange'>{el.state}</span>
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
