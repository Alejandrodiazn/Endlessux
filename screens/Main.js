import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomButton from '../components/CustomButton';
import CustomButton2 from '../components/CustomButton2';

const image = { uri: 'https://www.actualidadiphone.com/wp-content/uploads/2015/07/AppleMusicWallpaper_@FlareZephyr_iPads.png' } 

export default function Main({ navigation }) {
  

  /* En esta sección con el setOptions puedes manipular la barra superior de forma
  independiente en vez de hacerlo en el App.js  */
  useEffect(function(){
    navigation.setOptions({ headerShow: true, });
  });

  async function loadData(){
    const data = await AsyncStorage.getItem("data");
    console.log(JSON.parse(data));
  }

  function goToPlayground(){
    navigation.navigate("Playground");
  }

  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.barsu}>
          <CustomButton2 uri={'https://i.postimg.cc/v10QrFNm/casa.png'}/>
        </View>
        <View style={styles.container}>
          <StatusBar style="dark"></StatusBar>
          <Text style={{fontSize: 33, marginBottom: 2, fontWeight: 'bold'} } >Bienvenido, Terricola.</Text>
          <Text style={{fontSize: 14, marginBottom: 10,} } >Aquí podrás crear grandientes épicos ¿Estas listo?</Text>
          <CustomButton text={"Cargar datos"} action={loadData}/>
          <CustomButton text={"Playground"} action={goToPlayground}/>
        </View>

        <View style={styles.barin}>
          <CustomButton2 uri={'https://i.postimg.cc/v10QrFNm/casa.png'}/>
          <CustomButton2/>
        </View>
      </ImageBackground>
  );
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  barin:{
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: '6%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      marginTop:30
  },
  barsu:{
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '6%',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    alignContent: 'right',
    flexDirection: 'row',
    marginTop:30
},
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
