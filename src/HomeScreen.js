import React from 'react';
import {
  StyleSheet,
  View,Text,TouchableOpacity,
  ImageBackground,
  Image,Button, TextInput,
} from 'react-native';
export default class HomeScreen extends React.Component
{
  render()
    {
      return(
          <View style={styles.home}>
            <ImageBackground source={require('./bg1.jpeg')} style={styles.bg}>
              <View style={styles.square}>
                <Image  source={require('./bg2.jpeg')}
                 style={styles.profile} />
                  <Text style={styles.text} >
                      Home Screen
                   </Text>
                  <TouchableOpacity title="LOGIN" style={styles.button}
                  onPress={() => navigation.navigate('LoginScreen')}
                  >
                      <Text style={styles.buttontext}>LOGIN</Text>
                  </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>           
        );
    }
}

const styles =  StyleSheet.create(
  {
    home:{flex:1,justifyContent:"center",alignItems:"center"},
    bg:{height:900,width:400,},
    square:{backgroundColor:"white",justifyContent:'center',margin:20,marginTop:150,alignItems:"center",
            borderRadius:10,height:350,width:350,marginLeft:25},
    profile:{height:100,width:100 ,alignSelf:'center',borderRadius:50,marginTop:-230},
    text:{fontWeight:"bold",color:"black",marginVertical:20},
    button:{margin:20,borderRadius:20,alignSelf:'stretch',
            alignItems:'center',padding:10,backgroundColor:'#191970',marginHorizontal:80},
    buttontext:{fontWeight:"bold",width:50,color:"white"},
  }
);