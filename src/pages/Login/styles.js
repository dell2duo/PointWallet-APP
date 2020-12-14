import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
  },
  box: {
    backgroundColor: "#FDED08",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    padding: 10,
    borderWidth: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  text: {
    fontFamily: "Oswald_500Medium",
    fontSize: 36,
  },
  input: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 70,
    borderWidth: 2,
    borderRadius: 10,
    fontFamily: "Oswald_500Medium",
    fontSize: 36,
    padding: 5,
  },
  button: {
    alignSelf: "center",
    marginTop: 10,
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
  buttonText: {
    alignSelf: "center",
    fontFamily: "Oswald_500Medium",
    fontSize: 36,
    color: "#FFF",
  },
  buttonBottom: {
    alignSelf: "center",
  },
  buttonBottomText: {
    fontFamily: "Oswald_500Medium",
    fontSize: 28,
  },
});
