import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Platform,
  StatusBar,
  Alert,
} from "react-native";

const Dummy_data = [
  {
    author: "sulyman kamaldeen",
    content:
      "A very serious team mate. He dedicated a lot of time in fullfiling his promise for the team",
  },
  {
    author: "Qoreeb Abubakar",
    content: "A Raliable Team Leader",
  },
  {
    author: "Ibrahim Abdulroheem",
    content: "Not Bad as an Instructor.",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        {/* <Text style={styles.logo}>Whitecode</Text> */}
        <Image style={styles.logo} source={require("./assets/Whitecode.png")} />
        <Button
          title="Rate App"
          onPress={() =>
            Alert.alert(
              "APPRECIATION",
              "Thank you for checking out my first app. More update coming in soon",
              [
                { text: "Bad", onPress: () => console.log("Bad, try more") },
                { text: "Good", onPress: () => console.log("You really try.") },
              ]
            )
          }
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.greet}>Hello,</Text>
        <Text style={styles.content}>
          I am Whitecode, I am a software Engineer. I build a web applications
          but Just got into Native app.
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.rowCard}>
          <Text style={styles.stack}>Web2 Dev</Text>
          <View style={styles.stats}>
            <View style={styles.stage}></View>
          </View>
          <Text style={styles.percents}>100%</Text>
        </View>
        <View style={styles.rowCard}>
          <Text style={styles.stack}>Web3 Dev</Text>
          <View style={styles.stats}>
            <View style={styles.stageWeb3}></View>
          </View>
          <Text style={styles.percents}>60%</Text>
        </View>
        <View style={styles.rowCard}>
          <Text style={styles.stack}>Native Dev</Text>
          <View style={styles.stats}>
            <View style={styles.stageNative}></View>
          </View>
          <Text style={styles.percents}>40%</Text>
        </View>
      </View>
      {Dummy_data.map((data, index) => {
        return (
          <View style={styles.card} key={index}>
            <Text style={styles.author}>{data.author}</Text>
            <Text style={styles.content}>{data.content}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    fontFamily: " Verdana, Geneva, Tahoma, sans-serif",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  logo: {
    // fontSize: 25,
    // fontWeight: "700",
    width: 130,
    height: 50,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    width: 340,
    // height: 100,
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 4,
  },
  greet: {
    fontSize: 32,
    fontWeight: "600",
  },
  content: {
    fontSize: 15,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
  },
  rowCard: {
    backgroundColor: "#fff",
    padding: 10,
    width: 100,
    marginLeft: 15,
    marginTop: 20,
    borderRadius: 4,
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 5,
  },
  stack: {
    fontSize: 15,
  },
  stage: {
    width: "100%",
    backgroundColor: "#000",
    height: 5,
    borderRadius: 6,
  },
  stageWeb3: {
    width: "60%",
    backgroundColor: "#000",
    height: 5,
    borderRadius: 6,
  },
  stageNative: {
    width: "40%",
    backgroundColor: "#000",
    height: 5,
    borderRadius: 6,
  },
  percents: {
    fontSize: 9,
    marginLeft: 50,
    marginTop: 5,
  },
  author: {
    fontSize: 15,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
