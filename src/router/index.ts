import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Labels from '@/views/Labels.vue';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/labels'
  },
  {
    path: '/labels',
    name: 'Home',
    component: Labels
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/labels/edit/:id',
    name: 'edit',
    component: EditLabel
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
