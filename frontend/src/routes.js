import Pizzas from "./components/Pizzas";
import Cart from "./components/Cart";
import UserOrders from "./components/UserOrders";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

export const routes = [
    {
        path: '/',
        name: 'main',
        component: Pizzas
    },
    {
        path: '/orders',
        name: 'orders',
        component: UserOrders,
        meta: {requiresLoggedIn: true}
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {requiresItems: true}
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {requiresAnonymous: true}
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {requiresAnonymous: true}
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: {requiresLoggedIn: true}
    },
];

