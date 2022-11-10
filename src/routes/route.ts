import {Router} from 'express';
import {algoliaSaveObjects} from '../controllers/algolia.controller';
import {facebookMarketplaceAddProducts} from '../controllers/facebook.controller';

export const router = Router();

router.get('/facebook/marketplace/add-products', facebookMarketplaceAddProducts);

router.get('/algolia/save-objects', algoliaSaveObjects);
