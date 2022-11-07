import {Router} from 'express';
import {facebookMarketPlace} from '../controllers/facebook.controller';

export const facebookRoute = Router();

facebookRoute.get('/', facebookMarketPlace);
