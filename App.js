import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.containerX}>
        <View>
          <Text style={styles.text}>Alfabeto da Língua Brasileira</Text>
        </View>
      </View>

      <View style={styles.container}>

        <View>
          {/*<TouchableOpacity {...styles.button,styles.button01.backgroundColor.at.styles.button02} onPress={() => alert('a-A (á)')}>*/}
          <TouchableOpacity style={styles.button02} onPress={() => alert('a-A (á)')}>
            <Text>a-A (á)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('b -B (bê)')}>
            <Text>b -B (bê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('c -C (cê)')}>
            <Text>c -C (cê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('d -D (dê)')}>
            <Text>d -D (dê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('e -E (é)')}>
            <Text>e -E (é)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('f -F (éfe)')}>
            <Text>f -F (éfe)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('g -G (gê)')}>
            <Text>g -G (gê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('h -H (agá)')}>
            <Text>h -H (agá)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('i -I (i)')}>
            <Text>i -I (i)</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button01} onPress={() => alert('j -J (jóta)')}>
            <Text>j -J (jóta)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('k -K (cá)')}>
            <Text>k -K (cá)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('l -L (éle)')}>
            <Text>l -L (éle)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('m -M (ême)')}>
            <Text>m -M (ême)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('n -N (êne)')}>
            <Text>n -N (êne)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('o -O (ó)')}>
            <Text>o -O (ó)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('p -P (pê)')}>
            <Text>p -P (pê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('q -Q (quê)')}>
            <Text>q -Q (quê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('r -R (érre)')}>
            <Text>r -R (érre)</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button02} onPress={() => alert('s -S (ésse)')}>
            <Text>s -S (ésse)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('t -T (tê)')}>
            <Text>t -T (tê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('u -U (u)')}>
            <Text>u -U (u)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('v -V (vê)')}>
            <Text>v -V (vê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('w -W (dáblio)')}>
            <Text>w -W (dáblio)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('x -X (xis)')}>
            <Text>x -X (xis)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('y -Y (ípsilon)')}>
            <Text>y -Y (ípsilon)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button01} onPress={() => alert('z -Z (zê)')}>
            <Text>z -Z (zê)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button02} onPress={() => alert('        ')}>
            <Text>        </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    //flexDirection: 'column-reverse',
    justifyContent: 'center',
    //paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'space-around',
  },

  containerX: {
    flex: 2,
    flexDirection: 'row',
    //flexDirection: 'column',
    justifyContent: 'center',
    //paddingHorizontal: 10,
    paddingTop: 80,
    justifyContent: 'space-around',
  },

  container: {
    flex: 30,
    flexDirection: 'row',
    //flexDirection: 'column',
    //justifyContent: 'center',
    //paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'space-around',
  },
  button01: {
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#DDDDDD70',
    width: 120,
  },
  button02: {
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#CCCACA',
    width: 120,
  },
  text: {
    fontSize: 20,
  },
});

export default App;