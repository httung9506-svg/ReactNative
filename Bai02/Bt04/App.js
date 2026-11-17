
import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Du lieu danh sach
const data = [
  { id: '1', name: 'San pham 1', description: 'Thong tin san pham 1' },
  { id: '2', name: 'San pham 2', description: 'Thong tin san pham 2' },
  { id: '3', name: 'San pham 3', description: 'Thong tin san pham 3' },
];

// Man hinh trang chu
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRANG CHU</Text>

      <Text style={styles.text}>
        Chao mung den voi MultiScreenApp
      </Text>

      <TouchableOpacity
  onPress={() => navigation.navigate('List')}
>
  <Text style={styles.buttonText}>Xem danh sách</Text>
</TouchableOpacity>
    </View>
  );
}

// Man hinh danh sach
function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DANH SACH</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail', { item })}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text>Xem chi tiet</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Man hinh chi tiet
function DetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHI TIET</Text>

      <Text style={styles.text}>Ma: {item.id}</Text>
      <Text style={styles.text}>Ten: {item.name}</Text>
      <Text style={styles.text}>
        Mo ta: {item.description}
      </Text>

      <TouchableOpacity
  onPress={() => navigation.goBack()}
>
  <Text style={styles.buttonText}>Quay lại</Text>
</TouchableOpacity>
    </View>
  );
}

// Dieu huong cac man hinh
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Trang chu' }}
        />

        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'Danh sach' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Chi tiet' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Giao dien
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    marginBottom: 15,
  },

  item: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 10,
  },

  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
