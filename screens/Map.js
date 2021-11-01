import React, {useState} from 'react';
import {
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity,
    Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

 
const Map = (props) => {
  const [position, setPosition] = useState({
    latitude: -23.594928, 
    longitude: -46.687169,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  return (
      <MapView
        style={Styles.map}
        region={position}
        onPress={e =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
        }>
        <Marker
          coordinate={position}
          title={'Você está aqui'}
          description={'FIAP'}
        />
      </MapView>);
}
export default Map;

const Styles = StyleSheet.create ({
   map: {
    height: '100%',
    width: '100%',
  }
});