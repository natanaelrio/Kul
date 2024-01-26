"use client"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from '@/components/todo.module.css'

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [kondisi, setKondisi] = useState(false)
    const [id, setId] = useState()


    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false, uid: uuidv4() }]);
            setNewTodo('');
        }
    };

    const removeTodo = (id) => {
        const newTodo = todos.filter((data) => data.uid != id)
        setTodos(newTodo);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const editTodo = (uid) => {
        setTodos(todos.map((data) => data.uid == uid ?
            {
                ...data,
                text: update
            }
            : data))
    };

    const value = todos.filter((data) => data.uid == id)[0]?.text
    const [update, setUpdate] = useState(value)

    return (
        <div className={styles.container}>
            <h1>Todo List</h1>
            <ol>
                {todos.map((todo, index) => {
                    return (
                        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                            <div>
                                <button onClick={() => toggleTodo(index)}>
                                    {todo.completed ? 'Undo' : 'Complete'}
                                </button>
                                <button onClick={() => { removeTodo(todo.uid), setKondisi(false) }}>Remove</button>
                                <button onClick={() => { setId(todo.uid), setKondisi(true), setUpdate(todo.text) }} >Edit</button>
                            </div>
                        </li>
                    )
                })}
            </ol>
            <div>
                {kondisi ? <>
                    <input
                        type="text"
                        value={update}
                        onChange={(e) => setUpdate(e.target.value)}
                    />
                    <button onClick={() => { editTodo(id), setKondisi(!kondisi) }}>Update Todo</button>
                </>
                    : <>
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                        <button onClick={addTodo}>Add Todo</button>
                    </>
                }
            </div>

        </div>
    );
};