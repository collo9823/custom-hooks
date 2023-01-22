import { useReducer } from "react";
import { useState } from 'react';
import { useEffect } from 'react'
import { todoReducer } from './todoReducer';




const newId = ()=>{
    const random = Math.random().toString(35).substring(2);
    const fecha = Date.now().toString(35);
    return random + fecha;
}


// const [todoState, setTodoState] = useState([])
const initialState = []

const init = ()=>{
    return JSON.parse( localStorage.getItem('todos') )|| [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
    //   console.log(todos)
    //   localStorage.setItem('todos', JSON.stringify( todos ) || [])
      localStorage.setItem('todos', JSON.stringify( todos ) )
      
    }, [todos])
    
    
    
    const handleNewTodo = (todo)=>{
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatch( action );
        console.log({todo})
    }

    const handleDeleteTodo = (id)=>{
        console.log({id})
        dispatch({
            type: '[TODO] Remove todo',
            payload: id,
        })
    }

    const onHandleToggleTodo=(id)=>{
        console.log({id})
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id,
        })
        
    }

    return{
        todos,
        handleDeleteTodo,
        onHandleToggleTodo,
        handleNewTodo, 
        newId
    }

}
