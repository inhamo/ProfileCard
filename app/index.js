import { Image } from 'expo-image';
import { Linking, Pressable, Text, View } from 'react-native';
import profilePicture from "../assets/images/profile-picture.jpeg";
import "../global.css";

export default function Index() {
  return(
    <View className="px-10 flex flex-col items-center justify-center bg-gray-800 h-screen w-full">
      <Image 
        source={profilePicture} 
        transition={1000} 
        style={{ 
          width: 100, 
          height: 100,
          borderRadius: 50, 
          marginBottom: 40,
        }} 
      />
      <Text className="text-3xl text-white tracking-wide">Innocent Nhamo</Text>
      <Text className="text-lg text-lime-300 tracking-wide mt-1 mb-4">Johannesburg, South Africa</Text>
      <Text className="text-white my-6">'Front-end developer and avid reader.'</Text>
      <View className="flex flex-col gap-6 w-full mt-6">
        <Pressable 
          className="bg-gray-600 py-4 rounded-xl"
          onPress={() => Linking.openURL('https://github.com/inhamo')}
        >
          <Text className="text-lg text-white font-semibold text-center tracking-wider">Github</Text>
        </Pressable>
        <Pressable 
          className="bg-gray-600 py-4 rounded-xl"
          onPress={() => Linking.openURL('https://www.frontendmentor.io/profile/inhamo')}
        >
          <Text className="text-lg text-white font-semibold text-center tracking-wider">Frontend Mentor</Text>
        </Pressable>
        <Pressable 
          className="bg-gray-600 py-4 rounded-xl"
          onPress={() => Linking.openURL('https://www.linkedin.com/in/innocent-nhamo-467008254/')}
        >
          <Text className="text-lg text-white font-semibold text-center tracking-wider">LinkedIn</Text>
        </Pressable>
      </View>
    </View>
  )
}