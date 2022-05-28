import React from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Text } from "react-native";


class RegisterModal extends React.Component {

    constructor() {
        super();
        this.state={show:false}
    }

    render() {
        return (
            <View style={styles.main_contener}>
                <Button style={styles.button} title='Partager' onPress={()=>{this.setState({show:true})}}/>
                <Modal visible={this.state.show} transparent={true}>
                    <View style={styles.modal}>
                        <View style={styles.modal2}>
                            <Text>S'enregistrer</Text>
                            <TextInput style={styles.textinput} placeholder="Prénom"></TextInput>
                            <TextInput style={styles.textinput} placeholder="Adresse mail"></TextInput>
                            <Button style={styles.button} title='Envoyer' onPress={()=>{}}/>
                            <Button style={styles.button} title='Annuler' onPress={()=>{this.setState({show:false})}}/>
                        </View>
                    </View>
                </Modal>
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
    },
    modal: {
        backgroundColor: '#000000aa',
        flex: 1
    },
    modal2: {
        backgroundColor: '#ffffff',
        margin: 50,
        padding: 40,
        borderRadius: 10
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default RegisterModal
