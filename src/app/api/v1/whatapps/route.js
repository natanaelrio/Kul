import { Client, LocalAuth } from 'whatsapp-web.js'

export async function GET(req) {
    const whatsapp = new Client({
        authStrategy: new LocalAuth()
    });

    whatsapp.on('qr', (qr) => {
        // Generate and scan this code with your phone
        console.log('QR RECEIVED', qr);
    });

    whatsapp.on('ready', () => {
        console.log('whatsapp is ready!');
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