import { Todo } from '@/types/todo.type';
import { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TodoCard } from '../TodoCard';
import { Button } from '../ui';

import styles from './styles';

interface Props {
    todos: Todo[]
    onDelete: (id: string) => void
    onToggle: (id: string) => void
    onAllTodosDelete: () => void
}

const keyExtractor: ((item: Todo) => string) = (item) => item.id;

export const TodoList: FC<Props> = ({ todos, onDelete, onAllTodosDelete, onToggle }) => {

    if (!todos.length) {
        return (
            <View style={styles.placeholderTextWrapper}>
                <Text style={styles.placeholderText}>
                    You don&apos;t have any tasks
                </Text>
            </View>
        )
    }

    return (
        <>
            <Button label='Delete todos' buttonStyle={styles.deleteBtn} onPress={onAllTodosDelete} />
            <FlatList
                data={todos}
                renderItem={({ item }) => {
                    return (
                        <TodoCard data={item} onDelete={onDelete} onToggle={onToggle} />
                    )
                }}
                keyExtractor={keyExtractor}
                scrollEnabled={true}
                style={styles.todoList}
                contentContainerStyle={styles.todoListInnerContainer}
            />
        </>

    );
};
