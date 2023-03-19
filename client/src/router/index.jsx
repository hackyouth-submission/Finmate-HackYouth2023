import Home from '../pages/Home'
import Products from '../pages/Products';
import DetailsProduct from '../pages/DetailsProduct';
import Portfolio from '../pages/Portfolio'
import Login from '../pages/Login'
import CreateProject from '../pages/CreateProject';
import NotFound from '../pages/NotFound';


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/products', component: Products}, 
    { path: '/products/create', component: CreateProject}, 
    { path: '/products/:id', component: DetailsProduct},  
    { path: '/portfolio', component: Portfolio}, 
    { path: '/login', component: Login},  
    { path: '*', component: NotFound},
]
export { publicRoutes };