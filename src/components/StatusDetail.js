import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import PropTypes from 'prop-types';

const StatusDetail = (props) => (
  <Card>
    <Card.Title title={props.party.party} style={styles.partyNameStyle} />
    <Card.Content>
      <Paragraph style={styles.partyNameStyle}>
        {((props.party?.currVotes / props.totalVotes) * 100).toFixed(2)} %
      </Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: props.party.image }} />
  </Card>
);
const styles = StyleSheet.create({
  partyNameStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
StatusDetail.propTypes = {
  party: PropTypes.object,
  currVotes: PropTypes.number,
  totalVotes: PropTypes.number,
};
export default StatusDetail;
