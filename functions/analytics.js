"use strict";

const { google } = require("googleapis");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/gm, "\n");

const scopes = "https://www.googleapis.com/auth/analytics.readonly";
const jwt = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  PRIVATE_KEY,
  scopes
);

async function getData() {
  const defaults = {
    auth: jwt,
    ids: "ga:" + process.env.VIEW_ID,
  };
  const response = await jwt.authorize();

  const result = await google.analytics("v3").data.ga.get({
    ...defaults,
    "start-date": "2020-04-01",
    "end-date": "today",
    metrics: "ga:pageviews, ga:sessions",
  });

  return result;
}

function addTransition(source, transition) {
  var y = parseInt(source)
  var z = parseInt(transition);
  var u = y + z

  return u.toString();
}



exports.handler = (event, context, callback) => {
  getData().then((res) => {
    res.data.totalsForAllResults["ga:pageviews"] = addTransition(res.data.totalsForAllResults["ga:pageviews"],process.env.TRANSITION_VIEWS)
    res.data.totalsForAllResults["ga:sessions"] = addTransition(res.data.totalsForAllResults["ga:sessions"],process.env.TRANSITION_SESSIONS)
    callback(null, {

      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(res.data),
    });
  });
};
