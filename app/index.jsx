// prettier-ignore
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
// prettier-ignore
import { FontAwesome } from "@expo/vector-icons";
// prettier-ignore
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useTheme } from "./context/ThemeContext";

const Home = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  const { color } = useTheme();
  return (
    <View style={(style.container, { backgroundColor: color.background })}>
      <View style={style.userLayout}>
        <Image
          source={require("../assets/images/fake.jpg")}
          style={style.profile}
        />
        <Image
          source={require("../assets/images/background.jpg")}
          style={style.background}
        />
      </View>
      <Text style={[style.name, { color: color.text }]}>Naphat Seehawong</Text>
      <View style={style.courseLayout}>
        {/* prettier-ignore */}
        <Text style={[style.course, { color: color.text }]}>
          `code | health | fun | year4 | iPhone11`
        </Text>
      </View>

      {/* information */}
      <View style={style.informationWrapper}>
        <Text
          style={[
            style.informationLabel,
            { color: color.text, backgroundColor: color.background },
          ]}
        >
          information
        </Text>
        <View style={[style.information]}>
          {/* <Text style={style.title}>Naphat Seehawong</Text> */}
          <Text style={[style.titleInformation, { color: color.text }]}>
            StudentID: 653450508-7
          </Text>
          <Text style={[style.titleInformation, { color: color.text }]}>
            Major: Computer and Information Science
          </Text>
          <Text style={[style.titleInformation, { color: color.text }]}>
            university: Khon Kean University
          </Text>
        </View>
      </View>

      {/* Programming Languages */}
      <View style={style.skillWrapper}>
        <Text
          style={[
            style.skillLabel,
            { color: color.text },
            { backgroundColor: color.background },
          ]}
        >
          Programming Languages
        </Text>
        <View style={style.titleSkill}>
          <Text style={[style.skillText, { color: color.text }]}>
            HTML | CSS | Tailwind | Typescript | Javascript
          </Text>
        </View>
      </View>

      {/* Frontend Framework */}
      <View style={style.frameworkWrapper}>
        <Text
          style={[
            style.frameworkLabel,
            { color: color.text },
            { backgroundColor: color.background },
          ]}
        >
          Frontend Framework
        </Text>
        <View style={style.titleFramework}>
          <Text style={[style.frameworkText, { color: color.text }]}>
            React.js | React Native | Next.js
          </Text>
        </View>
      </View>

      {/* Database */}
      <View style={style.databaseWrapper}>
        <Text
          style={[
            style.databaseLabel,
            { color: color.text },
            { backgroundColor: color.background },
          ]}
        >
          Database
        </Text>
        <View style={style.titleDatabase}>
          <Text style={[style.databaseText, { color: color.text }]}>
            MongoDB | MySQL | Firebase
          </Text>
        </View>
      </View>

      {/* Version Control */}
      <View style={style.versionControlWrapper}>
        <Text
          style={[
            style.versionControlLabel,
            { color: color.text },
            { backgroundColor: color.background },
          ]}
        >
          Version Control
        </Text>
        <View style={style.titleVersionControl}>
          <Text style={[style.versionControlText, { color: color.text }]}>
            Git | Github | GitLab
          </Text>
        </View>
      </View>

      {/* Soft Skills */}
      <View style={style.softSkillsWrapper}>
        <Text
          style={[
            style.softSkillsLabel,
            { color: color.text },
            { backgroundColor: color.background },
          ]}
        >
          Soft Skills
        </Text>
        <View style={style.titleSoftSkills}>
          <Text style={[style.softSkillsText, { color: color.text }]}>
            - Problem-solving & Debugging
          </Text>
          {/* prettier-ignore */}
          <Text style={[style.softSkillsText, { color: color.text }]}>
            - Teamwork & Collaboration
          </Text>
          <Text style={[style.softSkillsText, { color: color.text }]}>
            - Communication & Adaptability
          </Text>
        </View>
      </View>
      <Text style={[style.socialNetworkLayout, { color: color.text }]}>
        `My SocialNetwork`
      </Text>
      <Text style={[style.socialText, { color: color.text }]}>
        `Line | GitHub | Facebook | Instagram | Discord`
      </Text>
      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={style.buttonLine}
          onPress={() => openLink("https://line.me/ti/p/happysomemorie")}
        >
          <SimpleLineIcons name="bubble" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={style.buttonGithub}
          onPress={() => openLink("https://github.com/fgshw")}
        >
          <FontAwesome name="github" size={20} color="#fff" />
          {/* <Text style={style.buttonGithubText}>Github</Text> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={style.buttonFacebook}
          onPress={() =>
            openLink("https://web.facebook.com/holloha.homosapien")
          }
        >
          <FontAwesome name="facebook" size={20} color="#fff" />
          {/* <Text style={style.buttonFacebookText}>Facebook</Text> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={style.buttonInstagram}
          onPress={() =>
            openLink("https://www.instagram.com/holloha.homosapien/")
          }
        >
          <FontAwesome name="instagram" size={20} color="#fff" />
          {/* <Text style={style.buttonInstagramText}>Instagram</Text> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={style.buttonDiscord}
          onPress={() =>
            openLink("https://discord.com/users/799891225423249428")
          }
        >
          <MaterialCommunityIcons name="discord" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <Link href="/about" style={style.button}>
        <Text style={style.textAbout}>About subject</Text>
      </Link>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  userLayout: {
    position: "relative",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#d1d1d1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -75 }, { translateY: -75 }],
    zIndex: 30,
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  name: {
    fontSize: 20,
    fontWeight: "semibold",
    textAlign: "center",
    marginTop: 20,
  },

  courseLayout: {
    flexDirection: "row",
    justifyContent: "center",
  },

  course: {
    // borderColor: "red",
    // borderWidth: 2,
    width: 300,
    textAlign: "center",
    marginTop: 5,
    fontWeight: "200",
    fontSize: 12,
  },

  // information
  informationWrapper: {
    position: "relative",
    marginTop: 20,
  },

  informationLabel: {
    position: "absolute",
    left: 35,
    top: 3,
    backgroundColor: "#fff",
    zIndex: 30,
  },

  information: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
    paddingLeft: 30,
  },

  titleInformation: {
    fontWeight: "300",
  },

  // Programming Languages
  skillWrapper: {
    position: "relative",
  },

  skillLabel: {
    position: "absolute",
    left: 35,
    top: -6,
    zIndex: 30,
    backgroundColor: "#fff",
  },

  titleSkill: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
  },

  skillText: {
    textAlign: "center",
    fontWeight: "300",
  },

  // Framework
  frameworkWrapper: {
    position: "relative",
    marginTop: 10,
  },

  frameworkLabel: {
    position: "absolute",
    left: 35,
    top: -6,
    zIndex: 30,
    backgroundColor: "#fff",
  },

  titleFramework: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
  },

  frameworkText: {
    textAlign: "center",
    fontWeight: "300",
  },

  // Database
  databaseWrapper: {
    position: "relative",
    marginTop: 10,
  },

  databaseLabel: {
    position: "absolute",
    left: 35,
    top: -6,
    zIndex: 30,
    backgroundColor: "#fff",
  },

  titleDatabase: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
  },

  databaseText: {
    textAlign: "center",
    fontWeight: "300",
  },

  // Version Control
  versionControlWrapper: {
    position: "relative",
    marginTop: 10,
  },

  versionControlLabel: {
    position: "absolute",
    left: 35,
    top: -6,
    zIndex: 30,
    backgroundColor: "#fff",
  },

  titleVersionControl: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
  },

  versionControlText: {
    textAlign: "center",
    fontWeight: "300",
  },

  // Soft Skills
  softSkillsWrapper: {
    position: "relative",
    marginTop: 10,
  },

  softSkillsLabel: {
    position: "absolute",
    left: 35,
    top: -6,
    zIndex: 30,
    backgroundColor: "#fff",
  },

  titleSoftSkills: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#d1d1d1",
    borderStyle: "dashed",
  },

  softSkillsText: {
    paddingLeft: 20,
    fontWeight: "300",
  },

  // MySocialNetwork
  socialNetworkLayout: {
    // borderWidth: 2,
    // borderColor: "red",
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: "semibold",
  },

  // socialText
  socialText: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "200",
    fontSize: 12,
  },

  // button
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  // buttonLinking | Line
  buttonLine: {
    width: 45,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#00b900",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 70,
  },

  // buttonLinking | Github
  buttonGithub: {
    width: 45,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#703eb0",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 70,
  },

  buttonGithubText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // buttonLinking | Facebook
  buttonFacebook: {
    width: 45,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#0e63c9",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 70,
  },

  buttonFacebookText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // buttonLinking | Instagram
  buttonInstagram: {
    width: 45,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#e42a95",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 70,
  },

  buttonInstagramText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // buttonLinking | Discord
  buttonDiscord: {
    width: 45,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#5865F2",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 70,
  },

  // button | About us
  button: {
    marginTop: 27,
    padding: 10,
    paddingLeft: 25,
    // height: 150,
    backgroundColor: "#007BFF",
    color: "#fff",
  },
});

export default Home;
