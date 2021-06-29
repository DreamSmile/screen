import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import LHEchart from '../views/LHEchart.vue'

Vue.use(VueRouter)
const error = r => require.ensure([], () => r(require('@/views/404')), 'error');
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/test',
    name: 'Test',
    component: Test
  }, {
    path: '/lhEchart',
    name: 'LHEchart',
    component: LHEchart
  }, {
    path: '/error',
    name: 'Error',
    component: error
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  console.log('路由跳转')
  //处理无效路由
  if (Array.isArray(to.matched) && to.matched.length == 0) {
    console.log('判断')
    next({
      path: "/error",
    });
    return;
  }
  next();
})
// router.beforeEach((to, form, next) => {
//   console.log('路由跳转')
//   // 404界面
//   if (Array.isArray(to.matched) && to.matched.length == 0) {
//     console.log('判断是404');
//   }
//   // if (Array.isArray(to.matched) && to.matched.length == 0) {
//   //   next({
//   //     path: "/error",
//   //   });
//   //   return;
//   // }
// })


export default router
