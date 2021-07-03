import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height : 450,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',

    },
    button:{
        backgroundColor: '#ffffff',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 15,
    },
    buttonText:{
        fontSize: 19,
        fontWeight: 'bold',
    },
    searchButton:{
        backgroundColor: '#ffffff',
        width: "90%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        flexDirection:'row',
        position: 'absolute',
        top: 20,
        zIndex: 100,
    },
    searchButtonText:{
        fontSize: 16,
        marginLeft: 10,
    },
});

export default styles;