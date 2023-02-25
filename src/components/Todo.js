import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { addTodo,deleteTodo,removeTodo } from '../actions';

import "./todo.css";

const Todo = () => {
  const [addItem,setAddItem]=useState("");
  const dispatch=useDispatch();
  const list=useSelector((state)=> state.Todoreducer.list);
  return (
   <>
      <div className="main-div">
           <div className="child-div">
              <figure>
                <figcaption> Add your list here </figcaption>
              </figure>

              <div className="addItems">
               <input type="text" placeholder="Add Items.."
                 value={addItem}
                 onChange={(event)=>{setAddItem(event.target.value)}}
               />
               <i className='fa fa-plus add-btn' onClick={()=> dispatch(addTodo(addItem), setAddItem(""))}></i>
              </div>

              <div className="showItems">
              {
                list.map((elem)=>{
                 return (
                    <div className="eachItem" key={elem.id}>
                   <h3>{elem.data}</h3>
                   <i className='fa fa-trash add-btn' title="delete" onClick={()=> dispatch(deleteTodo(elem.id))}></i>
                   </div>
                )

                })
              }
                
              </div>

              <div className="showItems">
                <button className="btn effect04" data-sm-link-text="remove All" onClick={()=> dispatch(removeTodo())}> <span>Checklist</span></button>
              </div>

          </div>
      </div>

   

   </>
  )
}

export default Todo