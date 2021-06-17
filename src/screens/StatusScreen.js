import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import StatusDetail from '../components/StatusDetail';
import images from './image';
import PropTypes from 'prop-types';

const StatusScreen = (props) => {
  const [rankFiveParties, setRankFiveParties] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [parties, setParties] = useState([]);
  const [partiesStatus, setPartiesStatus] = useState([]);
  useEffect(() => {
    axios.get(`https://isr-elections.herokuapp.com/api/parties`).then((response) => {
      setParties(response.data.parties);
    });
    axios.get(`https://isr-elections.herokuapp.com/api/parties/poll-status`).then((response) => {
      setPartiesStatus(response.data);
    });
    findHighestParties();
  }, [parties]);
  const newPartyStatus = [];
  const findHighestParties = () => {
    let vote = 0;
    parties.map((partyId, i) => {
      vote += partiesStatus[parties[i].id]?.currentVotes;
      const obj = {
        party: partyId.id,
        currVotes: partiesStatus[parties[i].id]?.currentVotes,
        image: images[partyId.id],
      };
      newPartyStatus.push(obj);
    });
    newPartyStatus.sort((a, b) => b.currVotes - a.currVotes);
    setRankFiveParties(newPartyStatus.slice(0, 5));
    setTotalVotes(vote);
  };
  return (
    <ScrollView>
      <Header buttonText={'Vote'} navigation={props.navigation} />
      <View>
        {rankFiveParties.map((party, key) => (
          <StatusDetail key={key} party={party} totalVotes={totalVotes} />
        ))}
      </View>
    </ScrollView>
  );
};
StatusScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default StatusScreen;
