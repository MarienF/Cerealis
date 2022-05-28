import React from 'react'
import { View, Button, StyleSheet } from "react-native";
//import Share from 'react-native-share';

class LaunchScan extends React.Component {
    render() {
        return (
            <View style={styles.main_contener}>
                <Button style={styles.button} title='Cliquez pour scanner votre dessin !' onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_contener: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default LaunchScan
