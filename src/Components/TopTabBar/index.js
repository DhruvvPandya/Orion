import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import theme from '../../Utils/theme';
import style from './style';
const TopTabBar = ({initialTab = 0, setTabNo = 0}) => {
  const [footer] = useState([
    // {name: 'Home'},
    {name: 'All'},
    {name: 'PENDING'},
    {name: 'Cancelled'},
    {name: 'Approved'},
    {name: 'Rejected'},
  ]);
  const [tab, setTab] = useState(0);
  const [selectedtab, setselectedTab] = useState(0);
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
  return (
    <View style={style.mainview}>
      <View>
        <View style={style.footerview}>
          {footer.map((data, key) => (
            <TouchableOpacity
              key={key}
              activeOpacity={0.7}
              onPress={() => selectTab(key)}
              style={[style.tabview]}>
              <View
                style={[
                  style.ContainerView,
                  {backgroundColor: tab === key ? theme.BOADER : theme.WHITE},
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
        </View>
      </View>
      {/* <View style={style.pageContainer}>{showPage()}</View> */}
    </View>
  );
};
export default TopTabBar;
