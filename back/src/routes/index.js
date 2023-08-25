import express from 'express';
import userRoutes from './user';

const router = express.Router();

router.use('/api/users', userRoutes);
// router.use(cartRoutes);
// router.use(categoryRoutes);
// router.use(orderRoutes);
// router.use(productRoutes);
// router.use(userRoutes);
// router.use(viewRoutes);

// 404
// router.use((req, res) => {
//   res.status(404).render('error', ERROR_PAGE[404]);
// });

export default router;
