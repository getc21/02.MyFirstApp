import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Text } from 'react-native-paper';

// const {width, height} = Dimensions.get('window');
export const DimensionScreen = () => {

    const {width, height} = useWindowDimensions();
    // Redondea los valores de width y height
  const roundedWidth = Math.round(width);
  const roundedHeight = Math.round(height);
  return (
    <View>
    <View style= { styles.container}>
        <View style={{
            ...styles.purpleBox,
            width: width * 0.6,
        }} />
    </View>
    <Text style={ styles.title}>w: {roundedWidth}, h: {roundedHeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: '50%',
        backgroundColor: 'blue',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
});
