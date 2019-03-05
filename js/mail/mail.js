module.exports = function (output, res) {
    let email, mailto, name, nodemailer, pass, transporter;

    nodemailer = require('nodemailer');
    name = 'Заявка с Посадочной страницы';
    email = 'teiwazturin@gmail.com';
    pass = 'Teiwaz2019';

    transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: email,
            pass: pass
        }
    });

    mailto = async function(body) {
        let options;
        options = {
            from: name + " <" + email + ">",
            to: 'mitrskoggson@yandex.ru',
            subject: 'Новое сообщение с посадочной teiwaz.ru',
            html: body
        };
        return await transporter.sendMail(options, function(err, info) {

            if (err) {
                console.log(err);
                res.render('index', {msg: 'Ошибка сервера, сообщение не было отправленно, позвоните нам +7-999-999-99-99'});
                return err;
            }

            res.render('index', {msg: 'сообщение отправленно'});
            return console.log("Сообщение отправлено: " + info.response);
        });
    };

    mailto(output)
};
