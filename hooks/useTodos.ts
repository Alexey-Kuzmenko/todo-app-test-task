import { Todo } from '@/types/todo.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'todos'

interface ReturnValue {
    todos: Todo[]
    isLoading: boolean,
    addTodo: (title: string) => void
    toggleTodo: (id: string) => void
    deleteTodo: (id: string) => void
    deleteAllTodos: () => void
}

export const useTodos = (): ReturnValue => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        loadTodos()
    }, []);

    const loadTodos = async () => {
        try {
            setIsLoading(true)
            const data = await AsyncStorage.getItem(STORAGE_KEY)
            setTodos(data ? JSON.parse(data) : []);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error name: ${error.name}. Error message: ${error.message}`)

                return
            }

            console.error(String(error));
        } finally {
            setIsLoading(false)
        }
    }

    const saveTodos = async (todos: Todo[]) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
            setTodos(todos);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error name: ${error.name}. Error message: ${error.message}`)

                return
            }

            console.error(String(error));
        }
    };

    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Crypto.randomUUID(),
            title,
            completed: false,
        };

        saveTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: string) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos(updatedTodos);
    };

    const deleteTodo = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        saveTodos(updatedTodos);
    };

    const deleteAllTodos = () => {
        saveTodos([]);
    };

    return {
        todos,
        isLoading,
        addTodo,
        toggleTodo,
        deleteTodo,
        deleteAllTodos
    }
}