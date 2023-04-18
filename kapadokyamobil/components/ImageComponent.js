import {
    Image,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

const ImageComponent = () => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View>
            <Image 
                style={{width:windowWidth, height:windowHeight,resizeMode:'stretch' }}
                source={require('../assets/images/resim.png')}
            />
            {/* <Image 
                style={styles.resim1}
                source={{
                    uri:'data:image/png;base64,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'
                }}
            />
            <Image 
                style={styles.resim1}
                source={{
                    uri:'https://productimages.hepsiburada.net/s/7/375/9029286592562.jpg'
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    resim1: {
        width: 100,
        height: 100
    }
});

export default ImageComponent;