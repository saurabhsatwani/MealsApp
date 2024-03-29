import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Platform, TouchableNativeFeedback } from 'react-native';


const CategoryGridItem = props => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
      TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridListItem}>
        <TouchableCmp
            style={{flex: 1}}
            onPress={props.onSelectItem}
        >
            < View  style = {{...styles.container, ...{backgroundColor: props.color}}} >
                <Text style={styles.title} numberOfLines={2}  >{props.title}</Text>
            </View >
        </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    gridListItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridItem;
