const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on('connection', onConnect);

function onConnect(client) {
    console.log('Новый пользователь');
    client.send('Привет незнакомец');

    client.on('close', function(code) {
        console.log(code);
        console.log('Пользователь отключился');
    });

    // setTimeout(() => client.close(1000, 'Соединение прервано'), 5000);

    client.on('message', function(message) {
        try {
            const parsed = JSON.parse(message);

            switch (parsed.type) {
                case 'ECHO':
                    setTimeout(() => {
                         client.send(`Я эхо, ${parsed.text}`);
                    }, 1500)
                    break;

                case 'PING':
                    setTimeout(function() {
                        client.send('Pong');
                    }, 1000);
                    break;
                    
                default:
                    client.send('Неизвестная команда')
                    break;
            }
        } catch (error) {
            console.log('Ошибка', error);
        }
    });
}

console.log('Сервер запущен на порту 8080');