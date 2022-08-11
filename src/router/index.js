import Vue from 'vue'
import Router from 'vue-router'

import WenVantPreview from '@/examples/wen-vant-preview'
import Layout from '@/components/layout.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: [
                {
                    path: '/wen-vant-preview',
                    name: 'wen-vant-preview',
                    component: WenVantPreview
                }
            ]
        }
    ]
})
