const express = require("express");
const weatherUtils = require("../Utils/weatherUtils");
const router = express.Router();
const log = (msg) => {
  console.log(msg);
}

router.get('/id/:id', async (req, res) => {
  try {
    const city = await weatherUtils.getByCityID(req.params.id);
    res.send(city);
  } catch (e) {
    res.send(e.response.data)
  }
});

router.get('/name/:name', async (req, res) => {
  try {
    const city = await weatherUtils.getByCityName(req.params.name);
    res.send(city);
  } catch (e) {
    res.send(e.response.data)
  }
});

router.get('/circle/:lon&:lat&:cnt', async (req, res) => {
  try {
    const circle = {
      lat: req.params.lat,
      lon: req.params.lon,
      cnt: req.params.cnt
    }
    const cities = await weatherUtils.getCitiesInCircle(circle);
    res.send(cities);
  } catch (e) {
    res.send(e.response.data)
  }
});

router.get('/multi/:bbox', async (req, res) => {
  try {
    const bbox = req.params.bbox;
    const cities = await weatherUtils.getCitiesInRect(bbox);
    res.send(cities);
  } catch (e) {
    res.send(e.response.data);
  }
});

router.get('/cords/:lat&:lon', async (req, res) => {
  try {
    const city = await weatherUtils.getByCords(req.params.lat, req.params.lon);
    res.send(city);
  } catch (e) {
    res.send(e.response.data);
  }
})
module.exports = router;