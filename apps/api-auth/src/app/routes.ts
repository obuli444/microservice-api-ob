import { Application } from 'express';
import Signin from './controllers/signin';

export default function bindRoutes(app: Application) {
app.get('/test', (req, res) => {
    console.log("called endpoint");
        res.send({ message: 'Auth Api works!' });
});
app.post('/signin',Signin)
}
