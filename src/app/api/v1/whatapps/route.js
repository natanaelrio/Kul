import { Client, LocalAuth } from 'whatsapp-web.js'

export async function POST(req) {
    const { phoneNumber, massage } = await req.json()
    const whatsapp = new Client({
        authStrategy: new LocalAuth()
    });

    whatsapp.on('qr', (qr) => {
        console.log('QR RECEIVED', qr);
    });

    whatsapp.on('ready', () => {
        console.log('whatsapp is ready!');
        whatsapp.sendMessage(phoneNumber, massage)
    });

   

    whatsapp.on('message', async (message) => {
        // console.log(message.body)
        // console.log(message)
        if (message.body === '!ping') {
            await message.reply('pong');
        }
    });

    whatsapp.initialize();
    return Response.json({ data: 'ok' })
}