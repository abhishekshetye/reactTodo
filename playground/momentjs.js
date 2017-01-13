var moment = require('moment');


console.log(moment().format());


var now = moment();

console.log('current time stamp ', now.unix());

var timestamp = 1484306585;
var currentMoment = moment.unix(timestamp);
console.log(currentMoment.format('MMM D, YY @ H:mm a'));