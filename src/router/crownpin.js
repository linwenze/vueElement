import { Layout, SideMain, UpMain } from '../pages/layout'
import { Platform, CarPrice,Drive,BuyCars ,Test} from '../pages/crownpin'

const crownpin = [{
  path: '/crownpin',
  name:'汽车销冠',
  component: Layout,
  children: [{
      path: '/',
      component: UpMain,
      children: [{ path: '/', component: Platform, name: '销冠首页' },
        {path: 'purchase', component: CarPrice, name: '购车询价' },
        {path: 'drive', component: Drive, name: '试驾预约' },
         {path: 'buyCars', component: BuyCars, name: '试驾预约' },
         {path: 'test', component: Test, name: '试驾预约' }
        
      ]
    }
    // , 
    // {
    //   path: '/',
    //   component: UpMain,
    //   children: [{ path: 'purchase', component: CarPrice, name: '购车询价'}]
    // }
  ]
}]

export default crownpin
