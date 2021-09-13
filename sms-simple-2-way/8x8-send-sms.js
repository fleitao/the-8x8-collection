const axios = require('axios')

var mySubAccountID = 'YOUR_8X8_SUBACCOUNTID'
var myAPIkey = 'YOUR_8X8_APIKEY'
var my8x8Nymber = 'YOUR_8X8_NUMBER'

axios.post('https://sms.8x8.com/api/v1/subaccounts/' + mySubAccountID + '/messages', {

    source: my8x8Nymber,
    destination: process.argv[2],
    text: process.argv[3]
}, {
    headers: {
        'Authorization': 'Bearer ' + myAPIkey,
        'Content-Type': 'application/json',
    },
}).then(res => {
    console.log(res.data)
});
