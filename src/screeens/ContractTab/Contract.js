import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default class Contract extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textone}>계약서를 사진 찍어서</Text>
          <Text style={styles.texttwo}>위험도를 확인해보세요</Text>
          <Text style={styles.textthree}>
            보증금이 보장되는지도 확인할 수 있어요!
          </Text>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="file-document-box-check-outline"
              size={200}
              color="#696969"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CameraScreen")}
          >
            <Text style={styles.buttonText}>계약서 분석하러 가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textone: {
    marginTop: 35,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
  },
  texttwo: {
    marginTop: 4,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 25,
    color: "#333",
  },
  textthree: {
    marginLeft: 20,
    marginTop: 11,
    fontSize: 15,
    color: "#333",
  },
  icon: {
    marginTop: 38,
    alignItems: "center",
  },
  iconContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textContainer: {
    height: "70%",
    width: "100%",
  },
  buttonText: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 19,
  },
  button: {
    width: "50%",
    marginTop: 25,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 2,
    backgroundColor: "#ffd31d",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    //    backgroundColor: 'red'
  },
});
