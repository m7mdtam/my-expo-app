import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from 'constants/images'
import { Image } from 'react-native'
import { icons } from 'constants/icons'
const TapIcon = ({focused , icon , title }:any)=> { 
if(focused){return(
        <ImageBackground
            source={images.highlight}
            className='flex flex-row w-full flex-1 
            min-w-[112px] min-h-14 mt-4 justify-center items-center
            rounded-full overflow-hidden' 
            >

                <Image
                source={icon}
                tintColor="#151312"
                className='size-5'
                />
                <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
            </ImageBackground>
    )}   
    else{
        return(
            <View className='size-full justify-center items-center 
           mt-4 rounded-full'>
                <Image source={icon} tintColor='#A8B5DB'
                className='size-5'/>
            </View>
        )
    } 
    
}
const _layout = () => {

  return (
   <Tabs
   screenOptions={{
    tabBarShowLabel:false,
   }}>
    <Tabs.Screen
    name='index'
    
    options={{
        headerShown:false,
        title:'Home',
        tabBarIcon:({focused})=>(
            <>
            <TapIcon
            focused={focused}   
            icon={icons.home} 
            title="Home"
            
            />
            
            
            </>

        )
        
    }}
    />
    <Tabs.Screen
    name='search'
    
    options={{
        headerShown:false,
        title:'Serach',
        tabBarIcon:({focused})=>(
            <>
            <TapIcon 
            focused={focused}   
            icon={icons.search} 
            title="Search"        
            />
            
            
            </>

        )
        
    }}
    />
      <Tabs.Screen
    name='saved'
    
    options={{
        headerShown:false,
        title:'Saved',
        tabBarIcon:({focused})=>(
            <>
            <TapIcon
            focused={focused}   
            icon={icons.save} 
            title="Saved"
            
            />
            
            
            </>

        )
        
    }}
    />
      <Tabs.Screen
    name='profile'
    
    options={{
        headerShown:false,
        title:'Profile',
        tabBarIcon:({focused})=>(
            <>
            <TapIcon
            focused={focused}   
            icon={icons.person} 
            title="Profile"
            
            />
            
            
            </>

        )
        
    }}
    />
   </Tabs>
  )
}

export default _layout