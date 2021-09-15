<div align="center">
  
# Airline WhatsApp Customer Care Service
App that simulates an airline customer care service that runs on WhatsApp and uses a (simulated) chat bot. 

</div>

# What You'll Need

* [ngrok](https://ngrok.com/) (optional)
* [8x8 Connect Account](https://connect.8x8.com/login)
* 8x8 WhatsApp Sandbox access
* [node.js](https://nodejs.org/)

# Getting Started

## ngrok

Skip this step if your are working on a VPS with public IP address.

If you're using your own machine to host the webhook server, download ngrok if you have not already. It is a handy tool that provides an external URL to map to localhost:port. 

The application defaults to port 8089, so launch ngrok http mapping to port 8089:

```$ ngrok http 8089```

Be sure to copy the forwarding ngrok url, we’ll need that later to configure the webhook.

## 8x8 Connect account

1. Create a 8x8 Connect Account ([here](https://connect.8x8.com/login/signup))
2. Reach out to your 8x8 Account Manager for testing credit and 8x8 WhatsApp Sandbox access
3. Once in, fetch your credentials (AccountID, SubAccountID and API Key) directly from the [8x8 Connect API Key dashboard](https://connect.8x8.com/messaging/api-keys)

## node.js

For this app I'm using [axios](https://axios-http.com/) to execute HTTP requests and [express](https://expressjs.com/) to create the webapp/webhook that will be listening to incoming messages.

You can fetch and install those dependencies by executing the following on the root directory of the app:

```npm install axios```

```npm install express```


# The Basics

Before executing the scripts there are two things you'll need to take care first.

## Setup connect.json

Add your 8x8 Connect credentials to connect.json. Fetch your credentials from [8x8 Connect API Key dashboard](https://connect.8x8.com/messaging/api-keys) and edit ```connect.json``` by replacing the defaults with yours:
 
 ```
 {
    "accountID": "your_accountID_here",
    "subAccountID": "your_subaccountID_here",
    "apiToken": "your_apikey_here",
    "number": "your_smsnumber_here"
}
 ```

## Setup the webhook

So that the messages sent to your 8x8 number reach your webhook we need to configure that first. If you are using your own VPS simply use your IP address + `/whatsapp` + `:8089`. If you are using ngrok simply take the url provided when you launched the service and add '/whatsapp'

```$ node 8x8-update-chatapps-webhook.js http://ngrok-url-from-your-machine/whatsapp```

# Light It Up

You should be ready to try the app now. Lets test this out in the following order:

1. Start the webhook listener app
2. Use your phone's WhatsApp application to send a message to your 8x8 Sandbox Number starting with ```hello airline```. 
3. You should see the message coming into your bash prompt and simoultaneously you'll see the "bot" replying.
4. Reply back with one of the options provided to check what other automated messages the script is sending.
5. Use the script to send a whatsapp message to your phone simulating a real-human agent jumping into the conversation.

**Please Note:** if you are using the 8x8 WhatsApp Sandbox you might have to open the WhatsApp 24h support window. Please reach out to your 8x8 Account Manager for instructions on how to do it and what is the number to use.

## Start the webhook

```$ node airline-receive-whatsapp.js```

## Text your Sanbox/WhatsApp number

Send a message to your sandbox or WhatsApp number that starts with ```hello airline```. You should see the message coming into your bash prompt and as response you should see the "bot" replying with the following menu:

```
✈️ Airline ChatBot 🤖" +
How ya! 👋" +
I am Airline's chatbot 🤖 and I'm here to help." +
If needed, I can also put you in contact with a customer support agent (real human 👩)." +
Are you having troubles with your booking ✈️, ticket 🎟️, or anything else I could help you with?")
```

## Send a message to your phone

At any time you can simulate a real human agent jumpin into the conversation by executing the send message script:

```$ node airline-send-whatsapp.js +447771649919 "Hi there, agent Smith here, how can I help you```

# See It In Action

If you are having troubles with the setup, I've recorded a video where I'm walking through this example. To watch it, simply click on the picture/link below:



