import Pizzas from "./components/Pizzas";
import Cart from "./components/Cart";

export const routes = [
    {
        path: '/',
        name: 'main',
        component: Pizzas
    },
    {
        path: '/orders',
        name: 'orders',
        component: {template: '<p>My orders</p>'}
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {requiresItems: true}
    }
];

