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
import RulerIcon from '../../images/ruler';
import ScalesIcon from '../../images/scales';
import GrowthIcon from '../../images/growth';

export default function Home({child}: ChildDataType) {
  const navigation = useNavigation();
  return (
    <View style={styles.home}>
      <View>
        <Text style={styles.baby_name}>{child.name}</Text>
      </View>

      {child.isGirl ? (
        <Image
          style={styles.baby_PNG}
          source={require('../../images/1680237591_sneg-top-p-oboi-pupsik-pinterest-15.png')}
        />
      ) : (
        <Image
          style={styles.baby_PNG}
          source={require('../../images/1670314301_28-kartinkin-net-p-kartinki-malishei-multyashnie-instagram-30.png')}
        />
      )}

      <View
        style={[
          styles.info_wrapper,
          child.isGirl ? styles.background_girl : styles.background_boy,
        ]}>
        <View style={styles.info_item_wrapper}>
          <ScalesIcon style={{marginRight: 10}} />
          <Text style={styles.info_wrapper_text}>
            {child.weight}
            {'кг'}
          </Text>
        </View>

        <View style={styles.info_item_wrapper}>
          <GrowthIcon style={{marginRight: 10}} />
          <Text style={styles.info_wrapper_text}>
            {child.age()}
            {' месяц' +
              `${child.age() != 1 ? (child.age() >= 5 ? 'ев' : 'а') : ''}`}
          </Text>
        </View>

        <View style={[styles.info_item_wrapper, {borderRightWidth: 0}]}>
          <RulerIcon style={{marginRight: 10}} />
          <Text style={styles.info_wrapper_text}>
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
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  baby_name: {
    fontSize: 35,
    marginBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  baby_PNG: {
    height: '40%',
    width: '60%',
    resizeMode: 'contain',
    marginBottom: Platform.OS === 'ios' ? 20 : 10,
    shadowOpacity: 0.5,
    shadowOffset: {width: 1, height: 0},
  },
  button: {
    marginBottom: 10,
    width: '45%',
    height: 50,
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowOffset: {width: 5, height: 5},
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  buttons_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center'
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
    width: '90%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingLeft: 10,
    shadowOpacity: 0.5,
    shadowOffset: {width: 5, height: 5},
  },
  info_item_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderRightWidth: 1,
    paddingRight: 15,
    height: '100%',
    alignItems: 'center',
    borderRightColor: '#ffffff',
  },
  info_wrapper_text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
});
