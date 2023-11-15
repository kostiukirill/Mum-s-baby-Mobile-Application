import React from 'react';
import {Dimensions, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import { boyColor, girlColor } from '../../../constants/constants';
import DateTimePicker from '@react-native-community/datetimepicker'
import { ChildDataType } from '../../../types/child';

const DiarySleep = ({route}: any) => {
  let time: Date = new Date()
  const data = {
    labels: ['sleep'],
    data: [[2, 2, 3, 4].reduce((value, acc) => acc + value, 0) / 15],
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(190, 224, 152, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View>
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width}
        height={300}
        strokeWidth={16}
        radius={100}
        hideLegend={true}
        chartConfig={chartConfig}
        style={{shadowOpacity: 0.2, shadowOffset: {width: 7, height: 7}}}
      />
      <View style={styles.bottom_wrapper}>
        <View style={styles.bottom_wrapper_up}>
          <TouchableOpacity
            style={[
              styles.button,
              route.params.child?.isGirl
                ? styles.background_girl
                : styles.background_boy,
            ]}>
            <Text style={styles.button_text}>Ребенок уснул</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              route.params.child?.isGirl
                ? styles.background_girl
                : styles.background_boy,
            ]}>
            <Text style={styles.button_text}>Ребенок проснулся</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            route.params.child?.isGirl
              ? styles.background_girl
              : styles.background_boy,
          ]}>
          <Text style={styles.button_text}>Ввести данные вручную</Text>
        </TouchableOpacity>
      </View>
      <View>
        <DateTimePicker
          timeZoneOffsetInMinutes={0}
          value={time}
          mode={'time'}
          is24Hour={true}
          display="default"
          // onChange={onChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    padding: 5,
    flexDirection: 'row',
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
    fontWeight: '500',
    textAlign: 'center',
    flexBasis: 130,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
  },
  bottom_wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  bottom_wrapper_up: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default DiarySleep;
