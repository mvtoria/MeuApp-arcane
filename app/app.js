import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [imgA, setImgA] = useState(require('../assets/scr/CaitlynArcane.png'));
  const [imgB, setImgB] = useState(require('../assets/scr/JinxArcane.png'));
  const [imgC, setImgC] = useState(require('../assets/scr/MelArcane.png'));
  const [imgD, setImgD] = useState(require('../assets/scr/VioletArcane.png'));

  const trocarImagem1e2 = () => {
    if (imgA === require('../assets/scr/CaitlynArcane.png')) {
      setImgA(require('../assets/scr/CaitlynLol.png'));
    } else {
      setImgA(require('../assets/scr/CaitlynArcane.png'));
    }
  };

  const trocarImagem3e4 = () => {
    if (imgB === require('../assets/scr/JinxArcane.png')) {
      setImgB(require('../assets/scr/JinxLol.png'));
    } else {
      setImgB(require('../assets/scr/JinxArcane.png'));
    }
  };

  const trocarImagem5e6 = () => {
    if (imgC === require('../assets/scr/MelArcane.png')) {
      setImgC(require('../assets/scr/MelLol.png'));
    } else {
      setImgC(require('../assets/scr/MelArcane.png'));
    }
  };

    const trocarImagem7e8 = () => {
    if (imgD === require('../assets/scr/VioletArcane.png')) {
      setImgD(require('../assets/scr/VioletLol.png'));
    } else {
      setImgD(require('../assets/scr/VioletArcane.png'));
    }
  };

  return (
    <View style={styles.principal}>
      <Text style={styles.texto}>Personagens em Arcane e no LOL!</Text>
      
      {/* Container com todas as imagens em uma linha */}
      <View style={styles.imagensLinha}>
        <View style={styles.container}>
          <Image source={imgA} style={styles.imagem} />
          <Button title="Caitlyn K." onPress={trocarImagem1e2} color="#3c005fff" />
        </View>

                <View style={styles.container}>
          <Image source={imgB} style={styles.imagem} />
          <Button title="Jinx" onPress={trocarImagem3e4} color="#003158ff" />
        </View>

        <View style={styles.container}>
          <Image source={imgC} style={styles.imagem} />
          <Button title="Mel M." onPress={trocarImagem5e6} color="#521e00ff" />
        </View>

        <View style={styles.container}>
          <Image source={imgD} style={styles.imagem} />
          <Button title="Violet" onPress={trocarImagem7e8} color="#550000ff" />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagensLinha: {
    flexDirection: 'row',   // faz os elementos ficarem lado a lado
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagem: {
    width: 260,
    height: 470,
    marginBottom: 10,
    borderRadius: 20,
  },
});


