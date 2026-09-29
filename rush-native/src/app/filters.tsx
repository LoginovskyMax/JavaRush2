import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FiltersScreen() {
   
  // Получаем параметры из URL / объекта навигации
  const { query, filter, login } = useLocalSearchParams<{ query?: string; filter?: string, login?: string }>();

  useEffect(() => {
      if(!login){
          router.push('/login')
      }
  }, [])
  return (
    <View style={styles.container}>
      <Text>Поисковый запрос: {query ?? 'отсутствует'}</Text>
      <Text>Фильтр: {filter ?? 'все'}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});