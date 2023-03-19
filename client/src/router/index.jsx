import Home from '../pages/Home'
import Products from '../pages/Products';
import DetailsProduct from '../pages/DetailsProduct';
import Portfolio from '../pages/Portfolio'
import Login from '../pages/Login'
<<<<<<< HEAD
import CreateProject from '../pages/CreateProject';
=======
import CreateProduct from '../pages/CreateProject';
>>>>>>> 2e76fa4a69ec05fe20f61355003f01bcbb6bf4d5
import NotFound from '../pages/NotFound';

const publicRoutes = [
    { path: '/', component: Home},
<<<<<<< HEAD
    { path: '/products', component: Products}, 
    { path: '/products/create', component: CreateProject}, 
    { path: '/products/:id', component: DetailsProduct},  
=======
    { path: '/products', component: Products},  
    { path: '/products/:id', component: DetailsProduct}, 
    { path: '/createproduct', component: CreateProduct}, 
>>>>>>> 2e76fa4a69ec05fe20f61355003f01bcbb6bf4d5
    { path: '/portfolio', component: Portfolio}, 
    { path: '/login', component: Login},  
    { path: '*', component: NotFound},
]
export { publicRoutes };