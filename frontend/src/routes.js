import Pizzas from "./components/Pizzas";
import Cart from "./components/Cart";
import UserOrders from "./components/UserOrders";

export const routes = [
    {
        path: '/',
        name: 'main',
        component: Pizzas
    },
    {
        path: '/orders',
        name: 'orders',
        component: UserOrders
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {requiresItems: true}
    }
];

