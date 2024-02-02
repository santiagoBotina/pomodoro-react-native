import { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Header from './src/components/Header';
import Time from './src/components/Time';

const PRODUCTIVE_TIME = 25 * 60;
const actions = ['Pomodoro', 'Short break', 'Break'];
const COLORS = {
  Pomodoro: '#F7DC6F',
  'Short break': '#A2D9CE',
  Break: '#D7BDE2',
};

const timesPerAction = {
  Pomodoro: 25 * 60,
  'Short break': 5 * 60,
  Break: 15 * 60,
};

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(PRODUCTIVE_TIME);
  const [activeAction, setActiveAction] = useState(actions[0]);

  function handleStartStop() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setTime(timesPerAction[activeAction]);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS[activeAction],
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === 'android' && 30, paddingHorizontal: 15, flex: 1 }}>
        <Text style={styles.title}>{activeAction}</Text>
        <Header activeAction={activeAction} setActiveAction={setActiveAction} setTime={setTime} />
        <Time time={time} />
        <Button title={isActive ? 'STOP' : 'START'} onPress={handleStartStop} />
      </View>
    </SafeAreaView>
  );
}
