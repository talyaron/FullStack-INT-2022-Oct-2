import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(30); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(30); 
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{time}s</Text>
      <Button title={isRunning ? 'Pause' : 'Start'} onPress={isRunning ? stopTimer : startTimer} />
      <Button title="Reset" onPress={resetTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Timer;
