import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "./context/ThemeContext";

const About = () => {
  const { color } = useTheme();
  return (
    <View style={[style.container, { backgroundColor: color.background }]}>
      <View style={style.profileWrapper}>
        <Image
          source={require("../assets/images/react-native.png")}
          style={style.profile}
        />
      </View>
      <View style={style.titleWrapper}>
        <Text style={[style.title, { color: color.text }]}>IN405109</Text>
        <Text style={[style.text, { color: color.text }]}>
          `Hybrid Mobile Application Programming`
        </Text>
      </View>
      <View style={style.descriptionWrapper}>
        <Text
          style={[
            style.descriptionLabel,
            { color: color.text },
            { backgroundColor: color.background },
          ]}
        >
          Description
        </Text>
        {/* prettier-ignore */}
        <View style={style.titleDescription}>
            <Text style={[style.descriptionText, { color: color.text }]}>
              Hardware architecture, characteristics and limitations of mobile devices, tools and languages for cross platform mobile 
              application development, cross platform language programming, cross platformapplication development process for mobile 
              devices, how to use memory and data store, user permission and hardware access permission, user interface, communication 
              with external systems, interfacing with server,, mobileapplication testing using computer system simulation, security 
              issues, hands-on practice
            </Text>
          </View>
        <View style={style.toolsWrapper}>
          <Text
            style={[
              style.toolsLabel,
              { color: color.text },
              { backgroundColor: color.background },
            ]}
          >
            Tools
          </Text>
          <View style={style.titleTools}>
            <Text style={[style.toolsText, { color: color.text }]}>
              React-Native | Vscode | Expo
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default About;

const style = StyleSheet.create({
  // container
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 24,
  },

  text: {
    fontWeight: "300",
  },

  // profile | react-native
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#d1d1d1",
  },

  // profileWrapper
  profileWrapper: {
    alignItems: "center",
    paddingTop: 10,
  },

  // titleWrapper
  titleWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  // description
  descriptionWrapper: {
    position: "relative",
    marginTop: 10,
  },

  descriptionLabel: {
    position: "absolute",
    left: 35,
    top: -6,
    zIndex: 30,
    backgroundColor: "#fff",
  },

  titleDescription: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    paddingRight: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
  },

  descriptionText: {
    paddingLeft: 20,
    fontWeight: "300",
  },

  // tools
  toolsWrapper: {
    position: "relative",
    marginTop: 10,
  },

  toolsLabel: {
    position: "absolute",
    left: 35,
    top: -6,
    zIndex: 30,
    backgroundColor: "#fff",
  },

  titleTools: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    paddingRight: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
  },

  toolsText: {
    paddingLeft: 20,
    fontWeight: "300",
  },
});
