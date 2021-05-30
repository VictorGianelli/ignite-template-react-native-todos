import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

function FlatListHeaderComponent() {
  return (
    <View>
      <Text style={styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <>
            { item.done == false ? (
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => onPress(item.id)}
                onLongPress={() => onLongPress(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  style={styles.taskMarker}
                />
                <Text
                  style={styles.taskText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButtonDone}
                onPress={() => onPress(item.id)}
                onLongPress={() => onLongPress(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  style={styles.taskMarkerDone}
                />
                <Text
                  style={styles.taskTextDone}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}

          </>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#E1E1E6',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9347CA',
    marginRight: 10
  },
  taskText: {
    color: '#E1E1E6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(65, 58, 111, 0.5)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#9347CA',
    marginRight: 10
  },
  taskTextDone: {
    color: '#E1E1E660',
    textDecorationLine: 'line-through'
  }
})