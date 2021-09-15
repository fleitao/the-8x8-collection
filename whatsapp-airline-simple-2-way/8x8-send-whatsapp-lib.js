const axios = require('axios')
const config = require('./connect.json');

function sendWA(dest, source, text) {

    axios.post('https://chatapps.8x8.com/api/v1/subaccounts/' + config.subAccountID + '/messages', {
        user: {
            msisdn: dest
        },
        type: 'text',
        content: {
            text: text,
            sms: {
                encoding: "AUTO",
                source: source
            }
        },
        channels: [
            {
                "channel": "WhatsApp",
                "fallbackAfter": 20,
                "successStatus": "Read"
            },
            {
                "channel": "SMS"
            },
        ]
    }, {
        headers: {
            'Authorization': 'Bearer ' + config.apiToken,
            'Content-Type': 'application/json',
        },
    }).then(res => {
        if (res.data) {
            console.log(' 🚀 Message Sent 🚀 \n')
            console.log(' ' + text + '\n')
        }
    }).catch(error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    });
}

module.exports = {
    sendWA
};
~
