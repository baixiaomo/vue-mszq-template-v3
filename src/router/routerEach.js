/**
 * 该模块进行登陆判断以及动态路由添加
 */
import NProgress from 'nprogress'
export default router => {
  router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
