import React from 'react';
import {
  Button,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Calendar from '../Calendar/Calendar';
import {useNavigation} from '@react-navigation/native';
import {boyColor, girlColor} from '../../constants/constants';
import {ChildDataType} from '../../types/child';

export default function Home({child}: ChildDataType) {
  // const navigation = useNavigation();
  return (
    <View style={styles.home}>
      <View>
        <Text>{child.name}</Text>
      </View>
      {child.isGirl ? (
        <Image
          style={{height: '40%', width: '60%', resizeMode: 'contain'}}
          source={require('../../images/1680237591_sneg-top-p-oboi-pupsik-pinterest-15.png')}
        />
      ) : (
        <Image
          style={{height: '40%', width: '60%', resizeMode: 'contain'}}
          // style={styles.baby_PNG}
          source={require('../../images/1670314301_28-kartinkin-net-p-kartinki-malishei-multyashnie-instagram-30.png')}
        />
      )}
      <View
        style={[
          styles.info_wrapper,
          child.isGirl ? styles.background_girl : styles.background_boy,
        ]}>
        <View>
          <Text>
            {child.weight}
            {'кг'}
          </Text>
        </View>
        <View>
          <Text>
            {child.age()}
            {' месяц' +
              `${child.age() != 1 ? (child.age() >= 5 ? 'ев' : 'а') : ''}`}
          </Text>
        </View>
        <View>
          <Text>
            {child.height}
            {' см'}
          </Text>
        </View>
      </View>
      <View style={styles.buttons_wrapper}>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}>
          <Text style={styles.button_text}>Дневник сна</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}
          // onPress={() => navigation.navigate()}
        >
          <Text style={styles.button_text}>Дневник кормления</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}
          // onPress={() => navigation.navigate()}
        >
          <Text style={styles.button_text}>Дневник питания мамы</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}
          // onPress={() => navigation.navigate()}
        >
          <Text style={styles.button_text}>Дневник роста</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}
          // onPress={() => navigation.navigate()}
        >
          <Text style={styles.button_text}>Прививки</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}
          // onPress={() => navigation.navigate()}
        >
          <Text style={styles.button_text}>Врачи</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}
          // onPress={() => navigation.navigate()}
        >
          <Text style={styles.button_text}>Прием лекарств ребенком</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            child.isGirl ? styles.background_girl : styles.background_boy,
          ]}
          // onPress={() => navigation.navigate()}
        >
          <Text style={styles.button_text}>Прием лекарств мамой</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  baby_PNG: {
    height: '40%',
    width: '60%',
    resizeMode: 'contain',
  },
  button: {
    marginBottom: 10,
    width: '45%',
    height: 50,
    borderRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {width: 10, height: 10},
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  background_boy: {
    backgroundColor: boyColor,
  },
  background_girl: {
    backgroundColor: girlColor,
  },
  button_text: {
    color: '#ffffff',
    fontSize: Platform.OS === 'ios' ? 15 : 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  info_wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
});
