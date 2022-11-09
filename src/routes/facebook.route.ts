import {Router} from 'express';
import {facebookMarketplace} from '../controllers/facebook/facebook.controller';

export const facebookRoute = Router();

facebookRoute.get('/', facebookMarketplace);
