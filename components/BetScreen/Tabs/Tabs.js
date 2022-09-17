import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ReactionsTab from './Subcomponents/ReactionsTab/ReactionsTab';
import NewsTab from './Subcomponents/NewsTab/NewsTab';
import RelatedTab from './Subcomponents/RelatedTab/RelatedTab';
import TabButton from './Subcomponents/TabButton';

function Tabs({ data: { news, reactions, related } }) {
  const [currTab, setCurrTab] = useState('news');

  const tabOptions = [
    { label: 'Research & News', id: 'news' },
    { label: 'Reactions', id: 'reactions' },
    { label: 'Related', id: 'related' },
  ];

  function switchTabs(tabName) {
    switch (tabName) {
      case 'news':
        return <NewsTab data={news} />;
      case 'reactions':
        return <ReactionsTab data={reactions} />;
      case 'related':
        return <RelatedTab data={related} />;
      default:
        return <NewsTab data={news} />;
    }
  }
  return (
    <View>
      <View style={styles.tabSwitcher}>
        {tabOptions.map((option) => (
          <TabButton
            selected={currTab === option.id}
            onPress={() => setCurrTab(option.id)}
            key={option.id}
          >
            {option.label}
          </TabButton>
        ))}
      </View>
      {switchTabs(currTab)}
    </View>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  tabSwitcher: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',

    shadowColor: '#BDC5CD',
    shadowOffset: {
      width: 0,
      height: 0.66,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 5,
  },
});
