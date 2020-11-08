import React from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles/styles';

const Feed = () => {

  const navigation = useNavigation();
  const route = useRoute();

  console.log(route);

  let detailResult = route.params;
  return (
    <View>
      <Text style = {styles.title}>Navigation Drawer</Text>
      <Button
      title='Go to Feed Item'
      onPress={()=>{}}
      />
    </View>
  );
}

export default Feed;