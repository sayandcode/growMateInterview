/* eslint-disable camelcase */
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import { MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import Routes from './components/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': Lato_400Regular,
    'Lato-Bold': Lato_700Bold,
    'Lato-Black': Lato_900Black,
    'MA-Bold': MontserratAlternates_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style="inverted" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}
