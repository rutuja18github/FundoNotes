import {userRegistrationMail} from '../utils/user.util';
var amqp = require('amqplib/callback_api');

//Sender
export const sender = (data) => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'userRegistration';
            var msg = data;

            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(msg));

            console.log(" [x] Sent %s", msg);
        });
    });
}

//Receiver
const receiver = () => {
    amqp.connect('amqp://localhost', function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            var queue = 'userRegistration';

            channel.assertQueue(queue, {
                durable: false
            });

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

            channel.consume(queue, function (msg) {
                console.log(" [x] Received %s", msg.content.toString());
                const msg1 = JSON.parse(msg.content.toString());
                userRegistrationMail(msg1.emailID);
                console.log(msg1.emailID);
                console.log("Message received....")
            }, {
                noAck: true
            });
        });
    });
}

receiver();