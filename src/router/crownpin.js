import { Layout, SideMain, UpMain } from '../pages/layout'
import { Platform, CarPrice } from '../pages/crownpin'

const crownpin = [
  {
    path:'/crownpin',
    component: Layout,
    children: [
      {
        path: '/',
        component: UpMain,
        children: [{ path: '/', component: Platform, name: '销冠首页'}]
      }, {
        path: '/',
        component: UpMain,
        children: [{ path: 'purchase', component: CarPrice, name: '购车询价'}]
      }
    ]
  }
]

export default crownpin