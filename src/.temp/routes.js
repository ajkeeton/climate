export default [
  {
    path: "/content/cards/nasa-basic-temp/nasa-gistemp/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/home/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/cards/1000-years/nasa-gistemp/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/home/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/content/cards/800k-years/nasa-gistemp/",
    component: () => import(/* webpackChunkName: "page--src--templates--info-card-vue" */ "/home/akeeton/c/climate/src/templates/InfoCard.vue")
  },
  {
    path: "/summary/",
    component: () => import(/* webpackChunkName: "page--src--pages--summary-vue" */ "/home/akeeton/c/climate/src/pages/Summary.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/akeeton/c/climate/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/akeeton/c/climate/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/akeeton/c/climate/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/akeeton/c/climate/node_modules/gridsome/app/pages/404.vue")
  }
]

