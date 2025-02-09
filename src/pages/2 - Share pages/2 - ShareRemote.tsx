// import './2 - Share.css';
import { useEffect, useState } from 'react';
import ExploreContainer from '../../components/ExploreContainer';

const ShareRemote: React.FC = () => {

  const [qrValue, setQrValue] = useState(crypto.randomUUID());

  useEffect(() => {
    const timerId = setInterval(() => setQrValue(crypto.randomUUID()), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <ExploreContainer name="Share Remote" />
  );
};

export default ShareRemote;
