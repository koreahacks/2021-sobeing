import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
class Check extends React.Component {
  state = {
    landlord: "loading...",
    tenant: "loading...",
    cost: "loading...",
    date: "loading...",
    special: "loading...",
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={[styles.header, styles.button]}>계약서 문자 변환</Text>
        <View style={styles.center}>
          <View style={styles.smallbox}>
            <View>
              <Text style={styles.headerText}>임대인</Text>
            </View>
            <Text>강민화</Text>
          </View>
          <View style={styles.smallbox}>
            <View>
              <Text style={styles.headerText}>임차인</Text>
            </View>
            <Text>강은형</Text>
          </View>
          <View style={styles.smallbox}>
            <View>
              <Text style={styles.headerText}>가격</Text>
            </View>
            <Text>보증금: 2000 월세: 60</Text>
          </View>
          <View style={styles.smallbox}>
            <View>
              <Text style={styles.headerText}>계약날짜</Text>
            </View>
            <Text>2020년 1월 6일</Text>
          </View>
          <View style={styles.box}>
            <View>
              <Text style={styles.headerText}>특약사항</Text>
            </View>
            <Text>임차인은 원상복귀하고 집을 떠난다.</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Edit")}
              style={styles.column}
            >
              <Feather name="edit" size={34} color="gray" />
              <Text style={styles.txt}>직접 수정하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Calculator")}
              style={styles.column}
            >
              <Feather name="send" size={34} color="gray" />
              <Text style={styles.txt}>분석 전송하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: "88%",
    backgroundColor: "#F8F8F8",
    borderColor: "#F8F8F8",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 8,
    paddingTop: 8,
    height: "17%",
    marginBottom: 13,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 2,
  },
  smallbox: {
    width: "88%",
    backgroundColor: "#F8F8F8",
    borderColor: "#F8F8F8",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 7,
    height: "10%",
    marginBottom: 13,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 2,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 12,
    color: "#333",
    marginBottom: 3,
  },
  buttonText: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 19,
  },
  button: {
    width: "55%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 24,
    marginTop: 25,
    borderRadius: 50,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 2,
    backgroundColor: "#ffd31d",
    borderColor: "red",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    marginLeft: 30,
  },
  row: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    marginTop: 70,
  },
  column: {
    alignItems: "center",
  },
  txt: {
    fontSize: 13,
    marginTop: 5,
    color: "#333",
  },
});

export default Check;
