const axios = require('axios')

var myAccountID = 'YOUR_8X8_ACCOUNTID'
var myAPIkey = 'YOUR_8X8_APIKEY'

axios.post('https://sms.8x8.com/api/v1/accounts/' + myAccountID + '/webhooks',
           [{
            subAccountId: process.argv[2],
            type: 'MO',
            url: process.argv[3]
    }], {
            headers: {
                'Authorization': 'Bearer ' + myAPIkey,
                'Content-Type': 'application/json',
            },
        })
    .then(res => {
        console.log(res.status)
        console.log(res.statusText)
    })
    .catch(error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    });
