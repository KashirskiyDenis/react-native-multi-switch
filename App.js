import { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import MultiSwitch from './components/MultiSwitch';

const App = () => {
  let groupByList = [
    { key: 'category', value: 'Категории' },
    { key: 'season', value: 'Сезоны' },
    { key: 'color', value: 'Цвета' },
  ];
  let [groupBy, setGroupBy] = useState('category');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MultiSwitch
          data={groupByList}
          activeKey={groupBy}
          onChange={setGroupBy}
          paddingV={7}
          paddingH={15}
          fontSize={14}
          color='#007aff'
          bgColor='#ffffff'
          colorActive='#ffffff'
          bgColorActive='#007aff'
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: '100%',
    padding: 5,
  },
});

export default App;
