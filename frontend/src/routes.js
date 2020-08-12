import Pizzas from "./components/Pizzas";

export const routes = [
    {
        path: '/',
        name: 'main',
        component: Pizzas
    },
    {
        path: '/cart',
        name: 'cart',
        component: {template: '<p>Cart</p>'}
    }
];

