import {
    ImageBackground,
    Text,
    View,
    Dimensions
} from 'react-native';

const ImageBackgroundComponent = () => {

    const imageAddress = "https://i.pinimg.com/550x/d3/90/87/d390872f589be4bcbe7ef15b1688ab1e.jpg"
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    return (
        <View>
            <ImageBackground source={{uri:imageAddress}} 
              style={{width:windowWidth, 
                    height:windowHeight, 
                    justifyContent:'center', 
                    alignItems:'center'}}>
                <Text style={{color:'red'}}>Merhaba</Text>
            </ImageBackground>
        </View>
    )
}

export default ImageBackgroundComponent;