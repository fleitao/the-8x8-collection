const axios = require('axios')
const config = require('./connect.json');

axios.post('https://sms.8x8.com/api/v1/accounts/' + config.accountID + '/webhooks',
           [{
            subAccountId: config.subAccountID,
            type: 'MO',
            url: process.argv[2]
    }], {
            headers: {
                'Authorization': 'Bearer ' + config.apiToken,
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
