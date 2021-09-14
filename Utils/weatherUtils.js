const axios = require('axios');

const getByCityName = async (name) => {
  const res = await axios.get(`${process.env.OWM_URL}/weather`, {
    params: {
      q: name,
      units: 'metric',
      apikey: process.env.OWM_APP_ID
    }
  });
  return res.data;
}

const getByCityID = async (id) => {
  const res = await axios.get(`${process.env.OWM_URL}/weather`, {
    params: {
      id: id,
      units: 'metric',
      apikey: process.env.OWM_APP_ID
    }
  });
  return res.data;
}

const getCitiesInCircle = async (circle) => {
  const res = await axios.get(`${process.env.OWM_URL}/find`, {
    params: {
      lat: circle.lat,
      lon: circle.lon,
      cnt: circle.cnt,
      units: 'metric',
      apikey: process.env.OWM_APP_ID
    }
  });
  return res.data;
}

const getCitiesInRect = async (bbox) => {
  const res = await axios.get(`${process.env.OWM_URL}/box/city`, {
    params: {
      bbox: bbox,
      units: 'metric',
      apikey: process.env.OWM_APP_ID
    }
  });
  return res.data;
}

const getByCords = async (lat, lon) => {
  const res = await axios.get(`${process.env.OWM_URL}/weather`, {
    params: {
      lat: lat,
      lon: lon,
      units: 'metric',
      apikey: process.env.OWM_APP_ID
    }
  });
  return res.data;
}

exports.getByCityName = getByCityName;
exports.getByCityID = getByCityID;
exports.getCitiesInCircle = getCitiesInCircle;
exports.getCitiesInRect = getCitiesInRect;
exports.getByCords = getByCords;