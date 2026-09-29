
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
import { increment, decrement } from '@/store/slices/counterSlice';


export default function Rules() {
  const {count} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch()

  function incrementFunc(){
     dispatch(increment())
  }

    function decrementFunc(){
     dispatch(decrement())
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
       <View style={styles.box}>
          <Text  style={styles.text}>Экран правил</Text>
          <Text  style={styles.text}>Cчетчик - {count}</Text>
          <Text onPress={() => incrementFunc()}>+</Text>
          <Text onPress={() => decrementFunc()}>-</Text>
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