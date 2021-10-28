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
          Password:''
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
                      Reset Password
                   </Text >
                   <Text style={styles.text1}> your new password must be different from previously used password. </Text>
                   <View style={styles.search}>
                   <Icon name="lock" size={20} color="grey" style={{padding:5}} />
                  <TextInput  
                  placeholder=" Password"
                  placeholderTextColor='black'
                  color="black"
                  onChangeText={(Password) => this.setState ({Password})}
                  />
                  </View>
                  <View style={styles.search}>
                   <Icon name="lock" size={20} color="grey" style={{padding:5}} />
                  <TextInput  
                  placeholder=" Conform Password"
                  placeholderTextColor='black'
                  color="black"
                  onChangeText={(Password) => this.setState ({Password})}
                  />
                  </View>
                  <TouchableOpacity title="SAVE " style={styles.button}
                  onPress={() => navigation.navigate('HomeScreen')}>
                      <Text style={styles.buttontext}>SAVE </Text>
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
    text:{fontWeight:"bold",color:"black",marginLeft:-170,marginTop:50,fontFamily:"arial black"},
    button:{margin:20,borderRadius:20,alignSelf:'stretch',
            alignItems:'center',padding:10,backgroundColor:'#191970',marginHorizontal:80},
    buttontext:{fontWeight:"bold",width:50,color:"white"},
    text1:{color:"black" ,margin:10,},
    search:{flexDirection: 'row',marginBottom:10,
    marginRight:20,backgroundColor:"#f5f5f5",
    borderWidth:1,paddingLeft:10,height:40,borderRadius:5,width:"80%",borderColor:"lightgray"},
    
  }
);