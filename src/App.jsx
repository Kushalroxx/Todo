import { useState,useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import NavBar from './assets/components/NavBar';
import ToDo from './assets/components/ToDo'
function App() {
  const [inputTodo, setInputTodo] = useState("")
  const [placeHolder, setPlaceHolder] = useState("Enter your todo")
  // const [addTodo, setAddTodo] = useState()
  let [store, setStore] = useState([])
  
  // const [edit,setEdit]=useState(true)
  const onInputchange = (e) => setInputTodo(e.target.value)
  
  const onsubmit = () => {
    if (inputTodo === "") {
      setPlaceHolder("enter a valid input")
    } else {
      setStore([...store, { id: uuidv4(), inputTodo, complete: false, edit: false }])
      setInputTodo("")
      saveToLS()
    }
  }
  const onComplete = (e) => {
    let id = e.target.name
    let index = store.findIndex(e => { return e.id === id })
    console.log(`index is${index}`);
    let newstore = [...store]
    newstore[index].complete = !newstore[index].complete;
    console.log(newstore);
    setStore(newstore)
    saveToLS()
  }
  
  const onDelete = (e, id) => {
    let newStore = store.filter(e => {
      return (e.id != id)
    })
    setStore(newStore)
    saveToLS()
  }
  const onEdit = (e,editVal) => {
    let Id = e
    console.log(Id);
    let index = store.findIndex(e => { return (e.id === Id) })
    console.log(`index is${index}`);
    let newstore = [...store]
    console.log(newstore);
    newstore[index].edit = !newstore[index].edit;
    newstore[index].inputTodo =editVal
    setStore(newstore)
    saveToLS()

  }
  useEffect(() => {
    let todoString = localStorage.getItem("store")
    if(todoString){
      let storage = JSON.parse(localStorage.getItem("store")) 
      setStore(storage)
    }
  }, [])
  const saveToLS = (params) => {
    localStorage.setItem("store", JSON.stringify(store))
  }
  
  // const setAddTodo=(e,id)=>{

  // }
  return (
    <>
      <NavBar />
      <div className='bg-slate-500 h-[2px] w-screen opacity-70'></div>
      <div
        style={{ justifyContent: 'center' }}
        className='flex'>
        <div
          style={{ alignItems: 'center' }}
          className='flex flex-col content-center bg-purple-100 shadow-purple-950 shadow-xl min-h-[90vh] rounded-xl drop- w-2/3 py-1'>
          <h1
            className='text-center font-extrabold my-8 text-3xl'>Create your Todos
          </h1>


          <input
            type="text"
            placeholder={placeHolder}
            className='outline outline-blue-300 rounded-xl p-1 text-2xl w-[40vw]'
            value={inputTodo}
            autoFocus
            onChange={(e) => onInputchange(e)}
          />

          <button
            className='mt-6  bg-red-600 px-3 w-20 rounded-lg h-[70px] shadow-slate-700 shadow-sm text-white text-xl font-bold active:shadow-none active:bg-red-700 hover:text-[22px] transition-all delay-10' onClick={(e) => { onsubmit() }}>Save
          </button>
          <div
            className=' w-full h-full'>
            <div
              className=' mx-8 my-1'>
              <input
                className=''
                type="checkbox"
                id="done" />
              <label
                className=' ml-4 font-bold text-xl text-slate-900'
                htmlFor="done">Done
                <span

                  className='text-purple-700'>tasks
                </span>
              </label>
            </div >
            <div
              className='mt-1 mb-1 h-[2px] bg-purple-950 opacity-70 w-full shadow-purple-600 shadow-3xl'>

            </div>
            <div >
              {store.map(e => {
                return (<ToDo
                  key={e.id}
                  name={e.id}
                  complete={e.complete}
                  edit={e.edit}
                  onComplete={e => onComplete(e)}
                  addTodo={e.inputTodo}
                  onEdit={(e) => onEdit(e)}
                  onDelete={(e, id) => onDelete(e, id)}
                  setAddTodo={(e, id) => setAddTodo(e, id)}
                />)
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
