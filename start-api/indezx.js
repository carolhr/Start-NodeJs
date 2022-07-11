import Express  from "express";
import {StatusCodes} from 'http-status-codes';

const app = Express();
const PORT = process.env.PORT  || 3000;
let users = [
    { id:1, name: 'rafael ribeiro', age: 31},
    { id:2, name: 'caroline rocha', age: 29},
];
app.use(Express.json());

app.listen(PORT, () => {
    console.log(`servidor rodando na http://localhost:${PORT}`);

});
 app.get('/',(request, response) => {
    return response.send('<h1>trabalhando com o servidor express.</h1>');
});

app.get('/users', (request, response) => {
    return response.send(users);

})
app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
       return (user.id === Number(userId))

    })
    return response.send(user);

});

app.post('/users', (request, response) => {
    const newUser = request.body;
    users.push(newUser);
    return response.status(StatusCodes.CREATED).send(newUser);
});

app.put('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const updatedUser = request.body;

    users = users.map(user => {
        if (Number(userId) === user.id) {
            return updatedUser;
        }

        return user;
    });

 return response.send(updatedUser);

});

app.delete('/users/:userId',(request, response) => {
    const userId = request.params.userId;
    users =  users.filter((user) => user.id !== Number(userId));
    return response.status(StatusCodes.NO_CONTENT).send();
});