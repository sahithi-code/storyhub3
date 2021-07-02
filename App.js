import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
 
import ReadStory from './screens/ReadStoryScreen'
import WriteStory from './screens/WriteStoryScreen'

export default function App() {
  return (
    <AppContainer/>

  );
}
const TabNavigator = createBottomTabNavigator({
 Writestory :{screen:WriteStory},
 Readstory : {screen:ReadStory},
},

{defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
const routeName = navigation.state.routeName
if(routeName==='Writestory'){
  return(
    <Image
    source={require("./assets/write.png")}
    style={{width:40,height:40}}
   />
  )
}
else if(routeName==='Readstory'){
return(
  <Image
  source={require("./assets/read.png")}
  style={{width:40,height:40}}
  />
)

}

  }
})
}

)
  

const AppContainer =  createAppContainer(TabNavigator)


