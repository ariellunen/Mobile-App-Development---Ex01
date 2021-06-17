import React from 'react';
import { View, StyleSheet } from 'react-native';
import VoteDetail from '../components/VoteDetail';
import Header from '../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

function VoteScreen(props) {
  return (
    <>
      <Header buttonText={'Status'} navigation={props.navigation} />
      <ScrollView>
        <View style={styles.parties}>
          <VoteDetail title="likud"></VoteDetail>
          <VoteDetail title="yesh-atid"></VoteDetail>
          <VoteDetail title="kahol-lavan"></VoteDetail>
          <VoteDetail title="merez"></VoteDetail>
          <VoteDetail title="tikva-hadasha"></VoteDetail>
          <VoteDetail title="israel-beitenu"></VoteDetail>
          <VoteDetail title="shas"></VoteDetail>
          <VoteDetail title="yahadut-hatora"></VoteDetail>
          <VoteDetail title="meshutefet"></VoteDetail>
          <VoteDetail title="avoda"></VoteDetail>
          <VoteDetail title="zionut-datit"></VoteDetail>
          <VoteDetail title="gesher"></VoteDetail>
          <VoteDetail title="raam"></VoteDetail>
          <VoteDetail title="kalkalit"></VoteDetail>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  parties: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
VoteScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default VoteScreen;
