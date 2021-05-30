import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle != '') {
      const data: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      console.log(newTaskTitle)

      setTasks(oldState => [...oldState, data])

    }

  }

  function handleMarkTaskAsDone(id: number) {

    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task,
      ),
    );

  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  console.log(tasks)
  return (
    <View style={{ flex: 1, backgroundColor: '#191D3A' }} >
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  )
}