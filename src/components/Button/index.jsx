import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export default function Button({title, onPress}) { 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'black',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
