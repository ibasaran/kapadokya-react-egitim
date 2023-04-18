import { useState } from 'react';
import {
    Modal,
    Pressable,
    Text,
    View,
    StyleSheet
} from 'react-native';

const ModalComponent = () => {

    const [showModal,setShowModal] = useState(false);

    return (
        <View style={styles.baseView}>
            <Modal
                visible={showModal}
            >
                <View style={styles.baseView}>
                    <View style={styles.modalView}>
                        <Text>Merhaba Modal Ekran</Text>
                        <Pressable 
                        style={styles.button}
                        onPress={() => setShowModal(false)}>
                            <Text>Kapat</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable 
            style={styles.button}
            onPress={() => setShowModal(true)}>
                <Text>Show Modal</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    baseView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        shadowColor: "#000",
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2
        },
        backgroundColor:'white',
        padding: 40,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#F6D55C',
        padding: 10,
        borderRadius: 20
    }
});

export default ModalComponent;