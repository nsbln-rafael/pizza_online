import Pizzas from "./components/Pizzas";

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
    }
];

