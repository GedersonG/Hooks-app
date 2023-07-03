import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReduces";

export const useTodos = () => {

    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        dispatch({
            type: 'Add Todo',
            payload: todo
        })
    }

    const handleRemoveTodo = (id) => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id
        });
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter ( todo => !todo.done).length;

    return {
        todos, 
        handleNewTodo, 
        handleRemoveTodo, 
        handleToggleTodo,
        todosCount, 
        pendingTodosCount
    }
}
