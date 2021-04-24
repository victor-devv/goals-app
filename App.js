import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // update course goals by adding the newly inserted goal
    // setCourseGoals([...courseGoals, enteredGoal])
    setCourseGoals((currentGoals) => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button title="ADD" onPress={addGoalHandler} />
      </View>

      {/* <ScrollView> */}
      {/* Map over each goal and return a text field for each */}
      {/* {courseGoals.map((goal) => <View style={styles.listItem} key={goal}><Text>{goal}</Text></View>)}
      </ScrollView> */}

      {/* For list that would be very long, scrollview would be inefficient as it renders elements that are not visible, and that would affect performance. Here, FlatList comes in play */}
      {/* For objects not using key or id as their unique identifier, you can use prop keyExtractor={(item, index) => item.uid} */}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    padding: 50,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    width: "70%",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
