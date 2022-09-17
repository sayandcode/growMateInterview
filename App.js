import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Routes from './components/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato-Black': require('./assets/fonts/Lato/Lato-Black.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style="inverted" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}
