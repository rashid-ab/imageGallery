import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import PhoneScreen from '../src/screens/phoneAuth/PhoneScreen';

const FinanceDesign = ({navigation}) => {
  // Users Data

  const Users = [
    {
      key: '1',
      userImage:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Jessica',
      transactionDate: '25 April 20',
      amount: '$350',
      credit: true,
    },
    {
      key: '2',
      userImage:
        'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Micela',
      transactionDate: '16 April 20',
      amount: '$150',
      credit: false,
    },
    {
      key: '3',
      userImage:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Gabriel',
      transactionDate: '05 April 20',
      amount: '$364',
      credit: false,
    },
    {
      key: '4',
      userImage:
        'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Jasmine',
      transactionDate: '28 March 20',
      amount: '$100',
      credit: true,
    },
    {
      key: '5',
      userImage:
        'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Alex',
      transactionDate: '14 March 20',
      amount: '$450',
      credit: true,
    },
    {
      key: '6',
      userImage:
        'https://images.pexels.com/photos/1548164/pexels-photo-1548164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Mark',
      transactionDate: '05 March 20',
      amount: '$288',
      credit: true,
    },
    {
      key: '7',
      userImage:
        'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Daria',
      transactionDate: '03 March 20',
      amount: '$350',
      credit: false,
    },
    {
      key: '8',
      userImage:
        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'George',
      transactionDate: '01 March 20',
      amount: '$350',
      credit: true,
    },
  ];

  const Images = [
    {
      image: require('../assests/card4.png'),
    },
    {
      image: require('../assests/card3.png'),
    },
    {
      image: require('../assests/card2.png'),
    },
    {
      image: require('../assests/card1.png'),
    },
  ];

  const {width, height} = Dimensions.get('screen');
  const carouselRef = useRef(null);

  // SLIDING PANEL

  const [dragRange, setDragRange] = useState({
    top: height - 60,
    bottom: 150,
  });

  const _draggedValue = new Animated.Value(150);

  const ModalRef = useRef(null);

  const RenderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{width: wp('95%') , height: 250, borderRadius: 10}}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{paddingTop: 30, paddingHorizontal: 14}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 26, color: '#fff'}}>Umair Shafique</Text>
            <Text style={{fontSize: 20, color: '#fff', opacity: 0.6}}>
              React Native Developer
            </Text>
          </View>
          <View>
            <Image
              style={styles.profileImage}
              source={{
                uri:
                  'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              }}
            />
            <View style={styles.profileImageNotification}></View>
          </View>
        </View>
        <View style={styles.CarosalBox}>
          <Carousel
            layout={'tinder'}
            ref={carouselRef}
            data={Images}
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: 'visible',
              marginVertical: 30,
            }}
            contentContainerCustomStyle={{
              paddingTop: 14,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              opacity: 0.6,
              marginBottom: 10,
            }}>
            Send money
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.userInfo}>
              <View style={styles.iconSize}>
                <MaterialIcons
                  name="add"
                  size={28}
                  color="#fff"
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text style={{color: '#fff'}}>Add Users</Text>
            </TouchableOpacity>
            <FlatList
              horizontal
              inverted
              data={Users}
              renderItem={({item}) => {
                return (
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.iconSize}
                      source={{uri: item.userImage}}
                    />
                    <Text style={{color: '#fff'}}>{item.userName}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[360]}
          height={height + 20}
          friction={0.9}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#181818',
              padding: 14,
              borderRadius: 24,
            }}>
            <View
              style={{
                width: 60,
                borderWidth: 2,
                height: 10,
                backgroundColor: '#666',
                alignSelf: 'center',
                borderRadius: 6,
              }}></View>
            <View>
              <Text style={{color: '#fff', marginVertical: 15}}>
                Recent Transactions
              </Text>
            </View>
            <View style={{height: 550, paddingBottom: 10}}>
              <FlatList
                data={Users}
                keyExtractor={item => item.key}
                renderItem={({item}) => {
                  return (
                    <View style={styles.panelItemContainer}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 10}}>
                          <Image
                            source={{uri: item.userImage}}
                            style={styles.panelImage}
                          />
                        </View>
                        <View>
                          <Text style={{color: '#fff', fontSize: 14}}>
                            {item.userName}
                          </Text>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 12,
                              opacity: 0.6,
                            }}>
                            {item.transactionDate}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 16,
                            marginHorizontal: 2,
                          }}>
                          {item.amount}
                        </Text>
                        {item.credit ? (
                          <MaterialIcons
                            name="arrow-drop-up"
                            size={22}
                            color="green"
                          />
                        ) : (
                          <MaterialIcons
                            name="arrow-drop-down"
                            size={22}
                            color="red"
                          />
                        )}
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <TouchableOpacity
                style={styles.PanelButton}
                onPress={() => {
                  navigation.navigate('PhoneScreen');
                }}>
                <Text style={styles.PanelButtonText}>View Full History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </View>
  );
};

export default FinanceDesign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  profileImageNotification: {
    width: 13,
    height: 13,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    borderColor: '#000',
  },
  userInfo: {
    height: 140,
    width: 100,
    backgroundColor: '#181818',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconSize: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  panelItemContainer: {
    borderWidth: 0.6,
    borderColor: '#666',
    padding: 14,
    borderRadius: 6,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  panelImage: {
      width: 35,
      height: 35,
      backgroundColor: '#000',
      borderRadius: 20,
      justifyContent: 'center'
  },
    PanelButton: {
    padding:14,
    width: 200,
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 10
  },
  PanelButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center'
  },
  CarosalBox: {
    width: wp('100%'),
  },
});
