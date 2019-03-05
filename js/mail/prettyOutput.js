module.exports = function (req,res) {
    let output, checheds;
    checheds = req.body;
    const mail = require('./mail');

    output = `
        <p>Заявка с посадочной teiwaz<блок контакты></p>
        <h3>Контактные данные</h3>
        <ul>  
        <li>Имя: ${req.body.name}</li>
        <li>Способ связи: ${req.body.contact}</li>
        </ul>
        <h3>Сообщение пользователя</h3>
        <p>${req.body.message}</p>
    `;

    mail(output,res);
};
