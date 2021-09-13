const axios = require('axios')

var mySubAccountID = 'YOUR_8X8_SUBACCOUNTID'
var myAPIkey = 'YOUR_8X8_APIKEY'

function sendWA(dest, source, text) {

    axios.post('https://chatapps.8x8.com/api/v1/subaccounts/' + mySubAccountID + '/messages', {
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
            'Authorization': 'Bearer ' + myAPIkey,
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
