import { Application } from 'express';

export default function bindRoutes(app: Application) {
app.get('/', (req, res) => {
        res.send({ message: 'Auth Api works!' });
});
}
