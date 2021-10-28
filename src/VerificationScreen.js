import React,{useState}from 'react';
import {
  StyleSheet,
  View,Text,TouchableOpacity,
  ImageBackground,
  Image,Button, TextInput,
} from 'react-native';

export default class LoginScreen extends React.Component
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
                      Verify your email
                   </Text >
                   <Text style={styles.text1}> Please Enter the 4 digit code sent to </Text>
                   <Text style={styles.text} >
                     xyz@gmail.com
                   </Text >
                   <View style={{flexDirection:'row',margin:10}}>
                    <TextInput style={styles.search} />
                    <TextInput style={styles.search} />
                    <TextInput style={styles.search} />
                    <TextInput style={styles.search} />
                   
                  </View>
                  <Text style={{color:"#191970",marginLeft:150}}> Resend code </Text>
                  <TouchableOpacity title="VERIFY" style={styles.button}
                  onPress={() => navigation.navigate('ResetScreen')}
                  >
                      <Text style={styles.buttontext}>VERIFY </Text>
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
    profile:{height:100,width:100 ,alignSelf:'center',borderRadius:50,marginTop:-130},
    text:{fontWeight:"bold",color:"black",marginLeft:-170,marginTop:5,fontFamily:"arial black"},
    button:{margin:20,borderRadius:20,alignSelf:'stretch',
            alignItems:'center',padding:10,backgroundColor:'#191970',marginHorizontal:80},
    buttontext:{fontWeight:"bold",width:50,color:"white"},
    text1:{color:"black" ,margin:5,marginLeft:-50},
    search:{
    marginRight:20,backgroundColor:"#f5f5f5",
    borderWidth:2,paddingLeft:10,height:30,borderRadius:5,width:50,borderColor:"lightgray"},
    
  }
);