import { Layout, SideMain, UpMain } from '../pages/layout'
import SoftTemplate from '@/pages/market/templateCenter/SoftTemplate'

const market = [
  {
    path:'/market',
    component: Layout,
    children: [
      {
        path: '/',
        component: SideMain,
        children: [{ path: 'softTemplate', component: SoftTemplate , name: '软文模板'}]
      },
      // {
      //   path: '/',
      //   component: SideMain,
      //   children: [{ path: 'posterTemplate', component: SoftTemplate , name: '海报模板'}]
      // },
      //{
      //   path: '/',
      //   component: SideMain,
      //   children: [{ path: 'mobileTemplate', component: SoftTemplate , name: '软文模板'}]
      // },{
      //   path: '/',
      //   component: SideMain,
      //   children: [{ path: 'messageTemplate', component: SoftTemplate , name: '软文模板'}]
      // },
    ]
  }
]

export default market