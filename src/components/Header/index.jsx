import { memo } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const actions = ['Pomodoro', 'Short break', 'Break'];

export default function Header({ activeAction, setActiveAction, setTime }) {
  
  function handlePress(actionIndex) {
    const times = [25, 5, 15]; // pomodoro, short-break, break

    const newTime = times[actionIndex] 

    setActiveAction(actions[actionIndex])
    setTime(newTime * 60)
  }

  function isActionActive(action) {
    if (action === activeAction) return styles.active
  }


  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[styles.option, isActionActive(action)]}
        >
          <Text style={{fontWeight: 'bold'}}>{action}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    width: '33%',
    padding: 7,
  },
  active: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'white'
  }
})
