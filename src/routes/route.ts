import {Router} from 'express';
import {facebookMarketplaceAddProducts} from '../controllers/facebook/addProduct.facebook';
import {facebookMarketplaceCheckProducts} from '../controllers/facebook/checkProduct.facebook';

export const router = Router();

router.get('/facebook/marketplace/add-products', facebookMarketplaceAddProducts);
router.get('/facebook/marketplace/check-products', facebookMarketplaceCheckProducts);
