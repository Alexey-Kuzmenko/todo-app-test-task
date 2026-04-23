import { TextInput, View } from 'react-native';
import { Button } from '../ui';

import { useState } from 'react';
import styles from './styles';

export const Form = () => {
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Add new task...' value={inputValue} onChangeText={setInputValue} />
            <Button label='Add task' disabled={!inputValue.length} />
        </View>
    );
}