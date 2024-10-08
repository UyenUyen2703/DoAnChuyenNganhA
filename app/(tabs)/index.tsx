import { Image, StyleSheet, Platform, Text, View, ImageBackground } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Employer from '../nhatuyendung/employer'; // Import Employer component
import Login from '../loginWithGoogle/Login'; // Import login component
export default function HomeScreen() {
  return (
    <Login/> // Use login component
    // <Employer /> // Use Employer component
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ffffff',
  },
  context: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reactLogo: {
    width: 100,
    height: 100,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});