import React,{useState}from 'react';
import {
  StyleSheet,
  View,Text,TouchableOpacity,
  ImageBackground,
  Image,Button, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class LoginScreen extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      mail:"",
    };
  }
  render()
    {
      return(
          <View style={styles.home}>
            <ImageBackground source={require('./bg1.jpeg')} style={styles.bg}>
              <View style={styles.square}>
                <Image  source={require('./bg2.jpeg')}
                 style={styles.profile} />
                  <Text style={styles.text} >
                      Forget Password
                   </Text >
                   <Text style={styles.text1}> Please Enter your email address to recieve a verification code</Text>
                   <View style={styles.search}>
                   <Icon name="envelope" size={25} color="grey" style={{padding:5}} />
                  <TextInput  
                  placeholder=" Enter Email ID"
                  placeholderTextColor='black'
                  color="black"
                  onChangeText={(mail) => this.setState ({mail})}
                  />
                  </View>
                  <TouchableOpacity title="S E N D " style={styles.button}
                  onPress={() => navigation.navigate('VerificationScreen')}
                  >
                      <Text style={styles.buttontext}>S E N D </Text>
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
    text:{fontWeight:"bold",color:"black",marginLeft:-200,marginTop:50,fontFamily:"arial black"},
    button:{margin:20,borderRadius:20,alignSelf:'stretch',
            alignItems:'center',padding:10,backgroundColor:'#191970',marginHorizontal:80},
    buttontext:{fontWeight:"bold",width:50,color:"white"},
    text1:{color:"black" ,margin:10,marginLeft:15},
    search:{flexDirection: 'row',
    marginRight:20,backgroundColor:"#f5f5f5",
    borderWidth:2,paddingLeft:10,height:40,borderRadius:5,width:"80%",borderColor:"lightgray"},
    
  }
);