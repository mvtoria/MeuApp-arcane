import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function App() {
  const [imgA, setImgA] = useState(require("../assets/scr/CaitlynArcane.png"));
  const [imgB, setImgB] = useState(require("../assets/scr/HeimerdingerArcane.png"));
  const [imgC, setImgC] = useState(require("../assets/scr/MelArcane.png"));
  const [imgD, setImgD] = useState(require("../assets/scr/VioletArcane.png"));

  const trocarImagem1e2 = () => {
    if (imgA === require("../assets/scr/CaitlynArcane.png")) {
      setImgA(require("../assets/scr/CaitlynLol.png"));
    } else {
      setImgA(require("../assets/scr/CaitlynArcane.png"));
    }
  };

  const trocarImagem3e4 = () => {
    if (imgB === require("../assets/scr/HeimerdingerArcane.png")) {
      setImgB(require("../assets/scr/HeimerdingerLol.png"));
    } else {
      setImgB(require("../assets/scr/HeimerdingerArcane.png"));
    }
  };

  const trocarImagem5e6 = () => {
    if (imgC === require("../assets/scr/MelArcane.png")) {
      setImgC(require("../assets/scr/MelLol.png"));
    } else {
      setImgC(require("../assets/scr/MelArcane.png"));
    }
  };

  const trocarImagem7e8 = () => {
    if (imgD === require("../assets/scr/VioletArcane.png")) {
      setImgD(require("../assets/scr/VioletLol.png"));
    } else {
      setImgD(require("../assets/scr/VioletArcane.png"));
    }
  };

  return (
    
    <View style={styles.principal}>
      <Text style={styles.texto}>Personagens em Arcane e no League of Legends!</Text>

      <View style={styles.imagensLinha}>
        <View style={styles.container}>
          <Image source={imgA} style={styles.imagem} />
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#a200ff" }]} onPress={trocarImagem1e2}>
            <FontAwesome5 name="glass-cheers" size={20} color="#37005cff" />
            <Text style={styles.btnTexto}>Caitlyn Kiramman</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image source={imgB} style={styles.imagem} />
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#008cff" }]} onPress={trocarImagem3e4}>
            <FontAwesome5 name="guitar" size={20} color="#004799ff" />
            <Text style={styles.btnTexto}>Heimerdinger</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image source={imgC} style={styles.imagem} />
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#ffd900" }]} onPress={trocarImagem5e6}>
            <FontAwesome5 name="star" size={20} color="#b47b00ff" />
            <Text style={styles.btnTexto}>Mel Medarda</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Image source={imgD} style={styles.imagem} />
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#ff0000" }]} onPress={trocarImagem7e8}>
            <FontAwesome5 name="trophy" size={20} color="#3d0000ff" />
            <Text style={styles.btnTexto}>Violet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#00080eff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagensLinha: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    flexWrap: "wrap",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  texto: {
    color: "#019292ff",
    fontSize: 20,
    fontWeight: "bold",
  },
  imagem: {
    width: 260,
    height: 470,
    marginBottom: 10,
    borderRadius: 20,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  btnTexto: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
});


