const express = require('express')
const bodyParser = require('body-parser')
const send = require('./8x8-send-whatsapp-lib')

const app = express()
const PORT = 8089

app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Inbound WhatsApp Server running on port ${PORT} \n`))

app.post('/whatsapp', (req, res) => {

    let temp = JSON.stringify(req.body)

    if (req.body.eventType == "inbound_message_received") {
        console.log(' 💬 New message from %s 💬 \n', req.body.payload.user.msisdn)

        // === For Text Message Print Only
        console.log(' ' + req.body.payload.content.text + '\n')

        // === For Complete JSON Body Print (uncomment)
        // let bodyJson = JSON.stringify(req.body)
        // console.log(' ' + bodyJson + '\n')

        // === ChatBot ===

        let clientMessage = req.body.payload.content.text.toLocaleLowerCase()

        if (clientMessage.startsWith("tickets")) {
            send.sendWA(req.body.payload.user.msisdn, "AIRLINE",
                "✈️ Airline ChatBot 🤖\n" +
                "Thank you!\n" +
                "I will put you in contact with one of our ticket sales specialists 🎟️.\n" +
                "Please hold...")
        } else if (clientMessage.startsWith("booking")) {
            send.sendWA(req.body.payload.user.msisdn, "AIRLINE",
                "✈️ Airline ChatBot 🤖\n" +
                "Thank you!\n" +
                "I will put you in contact with one of our customer support agents.\n" +
                "Could you please have the following information handy:\n" +
                "- Your booking reference 🎟️\n" +
                "- Flight details ✈️\n" +
                "- Details for all passengers traveling with you 👨‍👩‍👧")
        } else if (clientMessage.startsWith("hello airline")) {
            send.sendWA(req.body.payload.user.msisdn, "AIRLINE",
                "✈️ Airline ChatBot 🤖\n" +
                "How ya! 👋\n" +
                "I am Airline's chatbot 🤖 and I'm here to help.\n" +
                "If needed, I can also put you in contact with a customer support agent (real human 👩).\n" +
                "Are you having troubles with your booking ✈️, ticket 🎟️, or anything else I could help you with?")
        }
    }
    res.end()
})
