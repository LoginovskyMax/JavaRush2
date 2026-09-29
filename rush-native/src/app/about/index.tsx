
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { router } from 'expo-router';


export default function About() {
  function goHome() {
    router.push('/')
  }

  function goSearch() {
    router.push('/filters?query=123&filter=low&login=true')
  }
  
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
       <View style={styles.box}>
          <Text  style={styles.text}>Экран эбаут</Text>
          <Text
            onPress={() => goHome()}>
               Go home
           </Text>
          <Text
            onPress={() => goSearch()}>
               Go on search page
           </Text>
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