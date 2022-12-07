const express = require('express');
const cors = require('cors');
const nanoid = require("nanoid");
const app = express();
app.use(
    cors({
        credentials: true, // чтобы работали secured куки
        origin: true // автоматом подставляется текущий сервер в Origin
    })
);

const users = [
    {
        id: nanoid(),
        login: "123",
        password: "123"
    }
]
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.status(200).json({ok: true}); // отправка ответа
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

app.use(express.json());

// app.post('/user', (req, res) => {
//     console.log("post");
//     console.log(req.body);
//     res.json(req.body);
// });

app.post('/user', (req, res) => {
    if (users.find(user => user.login === req.body.login ))
    {
        res.status(400).json({massage: "пользователь с таким логином уже существует"});
    }
    const newUser = {
        id: nanoid(),
        login: req.body.login,
        password: req.body.password
    }
    users.push(newUser);
    console.log(users);
    res.status(200).json(newUser);

});



