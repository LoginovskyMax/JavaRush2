
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import useApi from '@/hooks/useApi';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const USER_KEY = 'user-name'


export default function RickScreen() {
  const {getData, data, isLoading} = useApi()
  const [name, setName] = useState('')

  async function saveName(){
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(name))
     console.log('Имя сохранено');
  }

    async function deleteName(){
    await AsyncStorage.removeItem(USER_KEY)
    setName('')
     console.log('Имя удалено');
  }

 async function getName(){
    const data  = await AsyncStorage.getItem(USER_KEY)
    if(data){
        setName(JSON.parse(data))
    } else {
        console.log('Имя не было сохранено');
    }
     console.log('Имя получено');
  }

    useEffect(() => {
        getData('character', { page: 1 })
        getName()
    }, [])
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
       <View style={styles.box}>
          <Text  style={styles.text}>Rick page</Text>
          {!isLoading && data.results.map((item) => <Text key={item.id}>{item.name}</Text>)}
          <TextInput 
           onChangeText={setName} 
           value={name}
           placeholder="Enter name"
           ></TextInput>
           <Text onPress={() => saveName()}>Сохранить имя</Text>
           <Text onPress={() => deleteName()}>Удалить имя</Text>
       </View>


      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  box: {
    paddingTop: 100,
   
  },
  text: {
     color: 'red'
  },

  title: {
    textAlign: 'center',
  },
});
