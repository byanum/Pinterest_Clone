import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import {useState, useEffect} from 'react';

const Pin  = (props) => {
    const {image, title}= props.pin;

    const [ratio, setRatio] = useState(1);

    const onLike = () => {};

    useEffect(() => {
        Image.getSize(image, (width, height) => setRatio(width/height));
    }, [image]); //function called on every picture and not one ([])

    
    return (
    //    pin
        <View style={styles.pin}>
            <View>
            <Image source={{ uri: image}}
            style={[styles.image, { aspectRatio: ratio}]}/>

            <Pressable onPress={() => onLike} style={styles.heart}>
                <AntDesign name="hearto" size={16} color="black" />
            </Pressable>
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    //    pin
    );
};



const styles = StyleSheet.create({
   
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
    },
    
    image: {
      width: '100%',
      height: 200,
      borderRadius: 25,
      
    },
    pin:{
      width: '100%',
    },
    heart: {
        backgroundColor: '#D3CFD4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,
    }
  });
  
  export default Pin;