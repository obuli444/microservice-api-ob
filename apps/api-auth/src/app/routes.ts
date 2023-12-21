import { Application } from 'express';
import Signin from './controllers/signin';

export default function bindRoutes(app: Application) {
app.post('/api/v1/signin',Signin)
}
