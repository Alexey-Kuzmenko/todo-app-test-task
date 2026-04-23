import { Container, Form, TodoCard } from '@/components';
import { Todo } from '@/types/todo.type';

const mockData: Todo = {
    id: 1,
    completed: false,
    title: 'Read book'
}

function HomeScreen() {
    return (
        <Container>
            <Form />
            <TodoCard data={mockData} />
        </Container>

    );
}

export default HomeScreen;
