import { Application } from 'express';

export default function bindRoutes(app: Application) {
app.get('/test', (req, res) => {
    console.log("called endpoint");
        res.send({ message: 'Auth Api works!' });
});
}
