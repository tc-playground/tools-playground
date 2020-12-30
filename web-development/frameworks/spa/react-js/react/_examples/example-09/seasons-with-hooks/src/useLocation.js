import {useState, useEffect} from 'react';

export default () => {

  const [lat, setLat] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Replaces 'componentDidMount'. As we do not need it to be called multiple times
  // (e.g. no 'componentDidUpdate') we pass in '[]' as the second argument.
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMsg(err.message)
    );
  }, []);

  // NB: The convention is to return these as an array instead of an object.
  // return [lat, errorMsg];
  return {lat, errorMsg};
};