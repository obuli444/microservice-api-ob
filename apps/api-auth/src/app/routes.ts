import { Application } from 'express';
import Signin from './controllers/signin';
import userSessionController from './controllers/session';
import userSignoutController from './controllers/signout';


export default function bindRoutes(app: Application) {
app.post('/api/v1/signin',Signin);
app.post('/api/v1/checktoken',userSessionController.checkUserSession);
app.post('/api/v1/signout',userSignoutController.signOutSession);


}
