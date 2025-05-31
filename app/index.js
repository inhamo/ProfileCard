import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
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
        <Link href="https://github.com/inhamo" className="bg-gray-600 py-4 text-lg text-white rounded-xl font-semibold
        text-center tracking-wider"><Text>Github</Text></Link>
        <Link href="https://www.frontendmentor.io/profile/inhamo" className="bg-gray-600 py-4 text-lg text-white rounded-xl font-semibold
        text-center tracking-wider"><Text>Frontend Mentor</Text></Link>
        <Link href="https://www.linkedin.com/in/innocent-nhamo-467008254/" className="bg-gray-600 py-4 text-lg text-white rounded-xl font-semibold
        text-center tracking-wider"><Text>LinkedIn</Text></Link>
      </View>
    </View>
  )
}