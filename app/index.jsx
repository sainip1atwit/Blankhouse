import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import "../global.css"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white" >
      <Text className="text-3xl">Blankhouse Test Branch</Text>
      <StatusBar style="auto" />
      {/*<Link href='/profile' style={{ color: 'blue' }}>Go to Profile</Link>*/}
      <Link href='./(auth)/create-account1'>Create an Account</Link>
      <Link href='./(auth)/log-in'>Log In</Link>
    </View>
  );
}

