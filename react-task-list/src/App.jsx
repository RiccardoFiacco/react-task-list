import './App.css'
import { tasks } from './tasks'
import { NavBar } from './assets/components/navbar.jsx'
function App() {
  let notCompletedCount=0 //creo una var 
  const notCompleted = tasks.filter((el)=>el.state !='completed') //filtro l'array, facenbdomi restituire i valori che mi interessano
  notCompleted.forEach(()=>{notCompletedCount++}) //per ogni elemento incremento il contatore
  function counterFunction(){ //creo una funzione che mi incrementa il contatore per vedere quanti sono i valori che ho filtrato dalla map 
    let count = 0;
    tasks.filter((el)=>el.state =='completed').forEach(()=>count++)
    return count
  }
  return ( //restituisco il jsx
    <div>
      <NavBar/>
      <header className='bgcolor-aqua mb-20'>
        <h1 className='pl-25 line-h-70'>Task Manager</h1> 
      </header> 
      <main className='pl-25'>
      <div>
         <h3 className='mb-20'>Current Task {notCompletedCount}</h3> {/*qui vado a restituire il valore del primo count */}
      </div>
      <div>{
         notCompleted.map((el)=>{  {/*qui per ogni elemento vado a restituire un jsx */}
          return (
            <div className='pb-20' key = {el.id}>
              <p>
                <span className='p-10r'><strong>{el.title}</strong></span>
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
        <h3 className='mb-20'>Current Task {counterFunction()}</h3>
      </div>
      <div>
        {
          tasks.filter((el)=>el.state =='completed').map((el)=>{
            return (
              <div className='pb-20' key = {el.id}>
                <p>
                  <span className='p-10r'><strong>{el.title}</strong></span>
                  <span className='bgcolor-orange'>{el.state}</span>
                </p>
                <p>Priority {el.priority}</p>
                <p>Est. Time {el.estimatedTime}</p>
              </div>
            )
          })
        }
      </div>
      </main>
    </div>
  )
}

export default App
