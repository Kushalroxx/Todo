import React, { useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri"
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function ToDo({
  addTodo ,
  setAddTodo,
  complete,
onComplete,
name,
onDelete,
edit,
onEdit
}) 

{
  const [editTodo, setEditTodo] = useState(addTodo)
  const onCheck=(e)=>{
    onComplete(e)
  }
  const onEditInputChange=(e)=>{
    setEditTodo(e)
    
  }
 
  return (
    <div
      className='flex content-between mt-3 bg-slate-300 todos p-5 rounded-xl shadow-slate-400 shadow-lg gap-4 items-center'>
      <div
        className='flex items-center'>
        <input
          className=' mr-1 h-[18px] w-[18px]'
          type="checkbox"
          name={name}
          value={complete}
          onChange={e=>onCheck(e)}
          id="done" />
       <div>
        
         {edit?
         <input 
          autoFocus={true}
          type=" text"
          className={complete?' bg-green-500':''} 
          value={editTodo}
          onChange={(e)=>{onEditInputChange(e.target.value)}}
          />:<div className={complete?' bg-green-500':''}>{editTodo}</div>}
      
       </div>
      </div>

      <button
        className='bg-blue-900 text-white  h-10 text-2xl w-13 px-3 rounded-md shadow-slate-700 shadow-sm active:shadow-none active:bg-blue-800 hover:text-[26px] transition-all delay-10'
        name={name}
        onClick={e=>onEdit(name,editTodo)} >
          {edit?<FaSave />:<MdEdit />}
        
      </button>
      <button
        className='bg-blue-900 text-white h-10 text-2xl w-13 px-3 rounded-md shadow-slate-700 shadow-sm active:shadow-none active:bg-blue-800 hover:text-[26px] transition-all delay-10 lg: '>
        <RiDeleteBin6Fill onClick={e=>onDelete(e ,name)} />
      </button>
    </div>
  )
}
export default ToDo