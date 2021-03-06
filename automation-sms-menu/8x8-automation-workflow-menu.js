const axios = require('axios')
const config = require('./connect.json');

axios.post('https://automation.8x8.com/api/v1/accounts/' + config.accountID + '/definitions', {

    subAccountId: config.subAccountID,
    trigger: 'inbound_sms',
    definition: {
        name: 'Menu Autoreply SMS',
        steps: [
            {
                id: 'sms_menu',
                stepType: 'Branch',
                selectNextStep: {
                    message_for_1: "{{stringContains(data.payload.body, '1')}}",
                    message_for_2: "{{stringContains(data.payload.body, '2')}}",
                    message_for_3: "{{stringContains(data.payload.body, '3')}}",
                }
            },
            {
                id: 'message_for_1',
                stepType: 'SMS',
                inputs: {
                    subAccountId: config.subAccountID,
                    destination: "{{data.payload.source}}",
                    source: "{{data.payload.destination}}",
                    text: "Thank you for your confirmation!"
                }
            },
            {
                id: 'message_for_2',
                stepType: 'SMS',
                inputs: {
                    subAccountId: config.subAccountID,
                    destination: "{{data.payload.source}}",
                    source: "{{data.payload.destination}}",
                    text: "Thank you! Please use the following link to book an appoinment in one of the Vaccination Network centres: https://example.org"
                }
            },
            {
                id: 'message_for_3',
                stepType: 'SMS',
                inputs: {
                    subAccountId: config.subAccountID,
                    destination: "{{data.payload.source}}",
                    source: "{{data.payload.destination}}",
                    text: "Need Help? Read our Frequently Asked Questions about Vaccination Network centres: https://example.org/frequently-asked-questions"
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
