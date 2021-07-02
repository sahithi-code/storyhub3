import React from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView,
        ToastAndroid,
        } from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config'
export default class WriteStory extends React.Component{

  constructor(){
    super()

    this.state={
      tTitle:'',
      nname:'',
      sstory:'',
      submitPress:''
    }
  }

  
  render(){
    return(
      <SafeAreaProvider>
<KeyboardAvoidingView style={styles.container} behavior="padding"enabled>
      <View>
      <Header
      centerComponent={
        {text:"StoryHub",style:{fontSize:20,color:"pink",}}
      }/>
</View>
<View>

<TextInput 
                    placeholder="Story Title"
                    placeholderTextColor='grey'
                    onChangeText= {(text)=>{
                        this.setState({
                            tTitle: text
                        })
                    }}
                    value={this.state.tTitle}
                    style={styles.inputStyle}/>
</View>                    

<View>  
        <TextInput
      
        placeholder="Author"
        placeholderTextColor='grey'
        onChangeText={(text)=>{
          this.setState({
            nname : text
          })
        }}
        value={this.state.nname}
        style={styles.inputStyle}
       />
</View>

<View>  
      <TextInput
    
  multiline={true}
  placeholder='write your story'
  placeholderTextColor='grey'
  onChangeText={(text)=>{
    this.setState({
      sstory:text
    })
  }}
  value={this.state.sstory}
  style={styles.m}
/>
</View>

<View>

<TouchableOpacity
style={styles.submitButton}
onPress={(submitButton)=>{
  
ToastAndroid.show('Your story has been submitted', ToastAndroid.SHORT);
  this.submitButton
 }}>

<Text
>submit</Text>
</TouchableOpacity>



</View>

<View>
</View>
</KeyboardAvoidingView>
</SafeAreaProvider>
    )
  }
  
}

const styles = StyleSheet.create({
  container:{
 flex:1,
 justifyContent:'center',
 
  },
  inputStyle: {
    margin:20,
     width: 200,
      height: 40,
      borderWidth: 2,
      borderRightWidth: 1,
      fontSize: 20
  },
  m:{
    margin:20,
     width: 300,
      height: 150,
      borderWidth: 2,
  },
  submitButton:{
    marginHorizontal:120,
    width: 80,
      height: 40,
      fontSize:25,
       borderWidth: 2,
       justifyContent:'center',
       textAlign:'center',
       backgroundColor:"orange"
  }

});

