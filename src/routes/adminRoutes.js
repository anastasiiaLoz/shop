import { lazy } from 'react'


const adminRoutes = [
{
    name: "Products",
    path: "/products",
    exact: true,
    component: lazy(() => import('../Components/products/Products'/*webpackChunkName:'Products'*/)),
},
{
    name: "Clients",
    path: "/clients",
    exact: true,
    component: lazy(() => import('../Components/clients/Clients'/*webpackChunkName:'Clients'*/)),
    }
];
export default adminRoutes;