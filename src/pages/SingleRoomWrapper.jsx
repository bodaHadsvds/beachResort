import React from 'react';
import { useParams } from 'react-router-dom';
import SingleRoom from './SingleRoom';

const SingleRoomWrapper = (props) => {
  const params = useParams();
  return <SingleRoom {...props} params={params} />;
};

export default SingleRoomWrapper; 