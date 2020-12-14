import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  exitView: {
    alignSelf: "flex-end",
  },
  exitButton: {
    padding: 10,
  },
  exitText: {
    fontFamily: "Oswald_500Medium",
    fontSize: 24,
    color: "red",
  },
  rescuePoints: {
    alignSelf: "center",
    width: "100%",
  },
  figura: {
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "Oswald_500Medium",
    fontSize: 36,
  },
  inputBox: {
    alignSelf: "center",
    backgroundColor: "#FFF",
    width: "90%",
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    fontFamily: "Oswald_500Medium",
    fontSize: 32,
    padding: 5,
  },
  rescueButton: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    width: 200,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  rescueButtonText: {
    alignSelf: "center",
    fontFamily: "Oswald_500Medium",
    fontSize: 36,
    color: "#FFF",
  },
  myStoresBox: {
    alignItems: "center",
    width: "100%",
  },
  storesBoxTitle: {
    fontFamily: "Oswald_500Medium",
    fontSize: 64,
  },
  empresaBox: {
    width: "90%",
    flexDirection: "row",
    height: 100,
    margin: 10,
    padding: 10,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDED08",
  },
  empresaTitle: {
    fontFamily: "Oswald_500Medium",
    fontSize: 36,
  },
  empresaPontos: {
    fontFamily: "Oswald_500Medium",
    fontSize: 20,
    padding: 10,
  },
  moeda: {
    alignItems: "center",
    borderRadius: 50,
    marginLeft: 10,
  },
});
