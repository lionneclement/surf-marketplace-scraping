import {Router} from 'express';
import {algoliaSaveObjects} from '../controllers/algolia.controller';
import {facebookMarketplaceAddProducts} from '../controllers/facebook/addProduct.facebook';
import {facebookMarketplaceCheckProducts} from '../controllers/facebook/checkProduct.facebook';

export const router = Router();

// Facebook Marketplace
router.get('/facebook/marketplace/add-products', facebookMarketplaceAddProducts);
router.get('/facebook/marketplace/check-products', facebookMarketplaceCheckProducts);

// Algolia
router.get('/algolia/save-objects', algoliaSaveObjects);
