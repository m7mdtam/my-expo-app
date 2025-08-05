import './global.css';
import { useRouter } from 'expo-router';

import { View, Text } from 'react-native';
import { Link , Router } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary font-bold">Hello</Text>
     
      <Link href='/onboarding'>Onboarding</Link>
      <Link href='/movie/avangers'>Avanger Movie</Link>

    </View>
  );
}
