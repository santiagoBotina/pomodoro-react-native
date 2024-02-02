import { StyleSheet, Text, View } from "react-native";

export default function Time({ time }) {
  
  const hours = Math.floor(time / 60).toString().padStart(2, '0')
  const minutes = (time % 60).toString().padStart(2, '0')

  const formattedTime = `${hours}:${minutes}`

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: 20,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 20
  },
  time: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})