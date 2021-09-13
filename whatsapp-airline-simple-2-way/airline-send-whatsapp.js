const send = require('./8x8-send-whatsapp-lib')

send.sendWA(process.argv[2], "AIRLINE", process.argv[3])
