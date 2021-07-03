import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const image = {uri: "https://news.airbnb.com/wp-content/uploads/sites/4/2021/01/LakeviewLodgeFeatureImage.jpeg?fit=2500%2C1875"}
const HomeScreen = (props) => {
    return(
        <View>
            <ImageBackground source={image} style={styles.image}>
                <Pressable 
                    style={styles.searchButton} 
                    onPress={()=>console.warn('검색')}>
                    <Fontisto name="search" size={20} color={"#f15454"}/>
                    <Text style={styles.searchButtonText}>어디로 여행가시나요?</Text>
                </Pressable>
                <Text style={styles.title}>에어비엔비가</Text>
                <Text style={styles.title}>여행지을 찾아드릴게요!</Text>
                <Pressable 
                    style={styles.button} 
                    onPress={()=>console.warn('유연한 검색')}>
                    <Text style={styles.buttonText}>유연한 검색</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;