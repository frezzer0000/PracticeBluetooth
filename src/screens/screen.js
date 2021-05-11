import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
  View,
  SafeAreaView,
  Switch,
} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {connectDevice} from '../redux/ble/bleAction';
import DataActivityIndicator from './DataActivityIndicator';
import {startScan} from '../redux';

const BLEList = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    dispatch(startScan());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const devices = useSelector(state => state.bles.BLEList);
  const handleClick = device => {
    this.props.connectDevice(device);
    this.props.navigation.navigate('BLEServices');
  };

  const connectableString = item => {
    if (item.isConnectable) {
      return 'Tap to connect to: ' + item.name;
    } else {
      return item.name + ' is not connectable';
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.rowBluetooth}>
        <Text>Bluetooth</Text>
        <Switch
          trackColor={{false: '#767577', true: '#21A567'}}
          thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
          ios_backgroundColor="#E5E5E5"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <FlatList
        data={devices}
        renderItem={({item}) => (
          <>
            <TouchableHighlight
              onPress={() => handleClick(item)}
              style={item.isConnectable ? styles.rowFront : styles.rowBack}
              underlayColor={'#AAA'}>
              <View>
                <Text>{connectableString(item)}</Text>
              </View>
            </TouchableHighlight>
          </>
        )}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={DataActivityIndicator}
      />
    </SafeAreaView>
  );
};
export default BLEList;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  standalone: {
    marginTop: 30,
    marginBottom: 30,
  },
  standaloneRowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    justifyContent: 'center',
    height: 50,
  },
  standaloneRowBack: {
    alignItems: 'center',
    backgroundColor: '#8BC645',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#F00',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  switch: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    width: Dimensions.get('window').width / 4,
  },
  trash: {
    height: 25,
    width: 25,
  },
});

// export default connect(mapStateToProps, mapDispatchToProps)(BLEList);
