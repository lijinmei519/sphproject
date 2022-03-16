//引入路由组件
// import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";
//路由配置信息
export default [

  {
    path: '/home',
    // component: Home,
    component: () => import('@/pages/Home'),
    meta: {
      isShow: true,
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShow: false,
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isShow: false,
    }
  },
  {
    name: "search",
    path: '/search/:keyword?',
    component: Search,
    meta: {
      isShow: true,
    }
  },
  //重定向
  {
    path: '*',
    redirect: "/home"
  },
  {
    name: 'detail',
    path: '/detail/:skuId',
    component: Detail,
    meta: {
      isShow: true,
    }
  },
  {
    name: 'addcartsuccess',
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: {
      isShow: true,
    }
  },
  {
    name: 'shopcart',
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShow: true,
    }
  },
  {
    name: 'trade',
    path: '/trade',
    component: Trade,
    meta: {
      isShow: true,
    },
    /* 只能从购物车界面, 才能跳转到交易界面 */
    beforeEnter (to, from, next) {
      if (from.path==='/shopcart') {
        next()
      } else {
        next('/shopcart')
      }
    }
  },
  {
    name: 'pay',
    path: '/pay',
    component: Pay,
    meta: {
      isShow: true,
    },
    /* 只能从交易界面, 才能跳转到支付界面 */
    beforeEnter (to, from, next) {
      if (from.path==='/trade') {
        next()
      } else {
        next('/trade')
      }
    }
  },
  {
    name: 'paySuccess',
    path: '/paySuccess',
    component: PaySuccess,
    meta: {
      isShow: true,
    },
    /* 只有从支付界面, 才能跳转到支付成功的界面 */
    beforeEnter (to, from, next) {
      if (from.path==='/pay') {
        next()
      } else {
        next('/pay')
      }
    }
  },
  {
    name: 'center',
    path: '/center',
    component: Center,
    meta: {
      isShow: true,
    },
    children: [
      {
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'grouporder',
        component: GroupOrder,
      },
      {
        path: '',
        redirect: 'myorder'
      }
    ]
  },

]