import { FC, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button } from '../ui';

import styles from './styles';

interface Props {
    addTodo: (title: string) => void
}

export const Form: FC<Props> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (): void => {
        if (!inputValue) return
        addTodo(inputValue)
        setInputValue('')
    }

    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Add new task...' value={inputValue} onChangeText={setInputValue} />
            <Button label='Add task' disabled={!inputValue.length} onPress={handleSubmit} />
        </View>
    );
};
