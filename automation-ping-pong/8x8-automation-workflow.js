const axios = require('axios')
const config = require('./connect.json');

axios.post('https://automation.8x8.com/api/v1/accounts/' + config.accountID + '/definitions', {

    subAccountId: config.subAccountID,
    trigger: 'inbound_sms',
    definition: {
        name: 'Simple Autoreply SMS',
        steps: [
            {
                id: 'auto_reply_sms_1',
                stepType: 'SMS',
                inputs: {
                    subAccountId: config.subAccountID,
                    destination: '{{data.payload.source}}',
                    source: '{{data.payload.destination}}',
                    text: 'Pong'
                }
            }
        ]
    }

}, {
    headers: {
        'Authorization': 'Bearer ' + config.apiToken,
        'Content-Type': 'application/json',
    },

}).then(res => {
    console.log(res.data)

}).catch(error => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
});
