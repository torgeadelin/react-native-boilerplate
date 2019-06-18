import React, { Component } from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import gradients from '../Themes/Gradients'
import LottieView from 'lottie-react-native';
import anim from '../Assets/Animations/ninja.json';
export default class LaunchScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: gradients.green,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,

      }}>
        <LottieView style={{ width: '80%' }} source={anim} autoPlay loop />
        <View>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>Simple React Native Boilerplate</Text>
          <Text style={{ textAlign: 'center' }}>Ignite Andross Modified + Styled Components, Linear Gradients and Lottie</Text>
        </View>
      </SafeAreaView>
    )
  }
}
