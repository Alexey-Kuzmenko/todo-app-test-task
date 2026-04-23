import { Container, Form, Loader, TodoList } from '@/components';
import { useTodos } from '@/hooks/useTodos';

function HomeScreen() {
    const { isLoading, todos, addTodo, deleteTodo, toggleTodo, deleteAllTodos } = useTodos()
    const sortedTodos = todos.sort((a, b) => Number(a.completed) - Number(b.completed));

    return (
        <Container>
            <Form addTodo={addTodo} />
            {
                isLoading ?
                    <Loader />
                    :
                    <TodoList todos={sortedTodos} onDelete={deleteTodo} onToggle={toggleTodo} onAllTodosDelete={deleteAllTodos} />
            }
        </Container>

    );
}

export default HomeScreen;
