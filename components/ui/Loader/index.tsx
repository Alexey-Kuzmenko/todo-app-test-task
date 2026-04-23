import { colors } from '@/constants/theme';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

export const Loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color={colors.black} />
        </View>
    );
};
