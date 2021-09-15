const axios = require('axios')
const config = require('./connect.json');

axios.post('https://sms.8x8.com/api/v1/subaccounts/' + config.subAccountID + '/messages', {

    source: config.number,
    destination: process.argv[2],
    text: "To help us organise the vaccination program please reply with:\n'1' - if you've already had both of your vaccinations\n'2' - your first and/or second shots are due\n'3' - if you need assistance or additional information"

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
