import { Home } from './src/Screens/Home';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
    <>
      <StatusBar
        translucent
        style={'light'}
        backgroundColor = 'transparent'
      />
      <Home/>
    </>
  );
}


