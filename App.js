/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { MapkitProvider } from 'react-mapkit';
import MapView, { Polyline } from 'react-native-maps';
// import React from 'react';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function AppGeo () {

  var [coordinatesPoints, setCoordinates] = useState([]);

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

  async function setPoints(value) {
    // console.log(value);
    coordinatesPoints=value;
    // console.log(coordinatesPoints2);
  }

  async function fetchJSONAsync(url) {
    let response = await fetch(url);
    let body = await response.json();
    setCoordinates(body);
    return body;
  }


  // console.log(fetchJSONAsync('http://192.168.10.72:8000/api/get/points'));
  useEffect (() => {
    fetchJSONAsync('http://192.168.3.3:8000/api/get/points').then(setPoints);
  },[])

  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={coordinatesPoints[0]}>
      <Polyline
        coordinates={coordinatesPoints}
        strokeColor={"#000"}
        strokeWidth={3}
        lineDashPattern={[1]}
      />
    </MapView>
    </View>
  );
}
export default AppGeo;