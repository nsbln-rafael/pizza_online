const User = {
    template: '<h3>Home</h3>'
};

export const routes = [
    {
        path: '/',
        name: 'main',
        component: User
    },
    {
        path: '/about',
        name: 'about',
        component: User
    }
];

