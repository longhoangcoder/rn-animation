import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {WINDOW_WIDTH} from './src/utils';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.messageContainer}
        onPress={() => {}}>
        <Image
          style={styles.messageAvatar}
          source={require('./src/assets/images/food-app/food1.png')}
        />
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>Nhớ Cát Vy quá UwU</Text>
          <Text>10:11</Text>
        </View>
        <View style={styles.heartContainer}>
          <View style={styles.heartCircle} />
          <Image
            style={styles.heartIcon}
            source={require('./src/assets/images/heart.png')}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaeaea',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flexDirection: 'row',
  },
  messageAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  messageContent: {
    width: WINDOW_WIDTH * 0.7,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
  },
  messageText: {
    fontSize: 20,
    color: 'black',
  },
  heartContainer: {
    position: 'absolute',
    bottom: -8,
    right: 0,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: 'grey',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: {
          width: 0.5,
          height: 0.5,
        },
      },
    }),
  },
  heartIcon: {
    position: 'absolute',
    width: 18,
    height: 18,
  },
});
