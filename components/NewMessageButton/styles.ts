import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;