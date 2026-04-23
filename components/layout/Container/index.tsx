import { FC, PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './styles';

interface Props extends PropsWithChildren {
    containerStyle?: StyleProp<ViewStyle>
}

export const Container: FC<Props> = ({ children, containerStyle }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, containerStyle, { paddingBottom: insets.bottom }]}>
            {children}
        </View>
    );
};
