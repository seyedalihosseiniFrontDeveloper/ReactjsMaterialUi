import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../components/products/Products'

interface RouteItem {
    path:string;
    component:any;
}

const routes:RouteItem[] = [

  {
    path: '/products',
    component: Products
  },
]
const RenderRoutes = () => {
  return (
    <Switch>
      {
        routes.map((route:RouteItem, i) => (
          <Route exact key={i} path={route.path} component={route.component} />
        ))
      }
    </Switch>
  )
}
export default RenderRoutes
