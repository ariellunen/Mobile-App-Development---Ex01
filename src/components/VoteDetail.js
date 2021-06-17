import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import images from '../screens/image.json';

const VoteDetail = ({ title }) => {
  const userVote = (partyId) => {
    axios
      .post(`https://isr-elections.herokuapp.com/api/parties/vote/${partyId}`)
      .then((response) => {
        if (response.status === 200) {
          Alert.alert('Alert', 'Your Vote Has Been Accepted');
        }
      });
  };
  return (
    <View>
      <TouchableOpacity onPress={() => userVote(title)}>
        <Image style={styles.party} source={{ uri: images[title] }} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  party: {
    width: 170,
    height: 170,
    margin: 5,
  },
});
VoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
};

export default VoteDetail;
