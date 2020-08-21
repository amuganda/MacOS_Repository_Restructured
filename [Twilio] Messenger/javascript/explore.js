//Request to the Twilio Client
const Twilio = require("twilio");
//Create a new Client so all requests against the client are authenticated
const client = require('twilio')("AC15#########################", "dccnope########################");

client.messages
.list()
.then (messages => console.log('The Most Recent Message', messages[0].body)
);
  //
console.log('Gathering Your Message Log...');
