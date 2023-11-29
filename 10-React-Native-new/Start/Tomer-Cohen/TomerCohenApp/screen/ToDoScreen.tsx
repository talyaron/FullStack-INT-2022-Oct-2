import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function ToDoScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = (): void => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (taskId: number): void => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/hd/nice-background-61m89tafknmauh0h.jpg' }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>ToDo App</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new task"
            value={newTask}
            onChangeText={(text: string) => setNewTask(text)}
          />
          <TouchableOpacity onPress={addTask}>
            <FontAwesome name="plus-circle" size={30} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.taskList}>
          {tasks.map((task) => (
            <View key={task.id} style={styles.task}>
              <TouchableOpacity onPress={() => toggleTask(task.id)} style={styles.checkbox}>
                <FontAwesome
                  name={task.completed ? 'check-square-o' : 'square-o'}
                  size={24}
                  color="#4CAF50"
                />
              </TouchableOpacity>
              <Text style={task.completed ? styles.completedTaskText : styles.taskText}>
                {task.text}
              </Text>
              <TouchableOpacity onPress={() => removeTask(task.id)}>
                <FontAwesome name="trash-o" size={24} color="#FF0000" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  taskList: {
    width: '100%',
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  taskText: {
    fontSize: 16,
    flex: 1,
    color: '#000',
  },
  completedTaskText: {
    fontSize: 16,
    flex: 1,
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
  checkbox: {
    marginRight: 10,
  },
});
