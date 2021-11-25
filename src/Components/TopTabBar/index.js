import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity,ScrollView} from 'react-native';
import theme from '../../Utils/theme';
import style from './style';
const TopTabBar = ({initialTab = 'All', setTabNo = 0}) => {
  const [footer] = useState([
    {name: 'All'},
    {name: 'Pending'},
    {name: 'Cancelled'},
    {name: 'Approved'},
    {name: 'Rejected'},
    {name: 'Re-Requested'},
  ]);
  const [tab, setTab] = useState('All');
  const selectTab = value => {
    setTab(value);
    setTabNo(value);
  };
  const showPage = () => {
    switch (tab) {
      case 0:
        return ;
      default:
        break;
    }
  };
  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  console.log('tab', tab)
  return (
    <View style={style.mainview}>
        <ScrollView horizontal={true} contentContainerStyle={style.footerview} showsHorizontalScrollIndicator={false}>
          {footer.map((data, key) => (
            <TouchableOpacity
              key={key}
              activeOpacity={0.7}
              onPress={() => selectTab(data.name)}
              style={[style.tabview]}>
              <View
                style={[
                  style.ContainerView,
                  {backgroundColor: tab === data.name ? theme.BOADER : theme.WHITE},
                ]}>
                <Text
                  style={[
                    style.txt,
                    {color: tab === key ? theme.DARK_BLUE : theme.BLACK},
                  ]}>
                  {data.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
    </View>
  );
};
export default TopTabBar;
