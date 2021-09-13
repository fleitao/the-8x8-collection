const axios = require('axios')

var myAccountID = 'YOUR_8X8_ACCOUNTID'
var mySubAccountID = 'YOUR_8X8_SUBACCOUNTID'
var myAPIkey = 'YOUR_8X8_APIKEY'

axios.post('https://automation.8x8.com/api/v1/accounts/' + myAccountID + '/definitions', {

    subAccountId: mySubAccountID,
    trigger: 'inbound_sms',
    definition: {
        name: 'Simple Autoreply SMS',
        steps: [
            {
                id: 'auto_reply_sms_1',
                stepType: 'SMS',
                inputs: {
                    subAccountId: mySubAccountID,
                    destination: '{{data.payload.source}}',
                    source: '{{data.payload.destination}}',
                    text: 'Pong'
                }
            }
        ]
    }

}, {
    headers: {
        'Authorization': 'Bearer ' + myAPIkey,
        'Content-Type': 'application/json',
    },

}).then(res => {
    console.log(res.data)

}).catch(error => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
});
