<template>
  <div class="wen-menu" v-if="showMenu">
    <h4>可能只有一个菜单</h4>
    <ul v-show="showMenu">
      <li v-for="item of examples" :key="item.path">
        <span @click="toExample(item)">{{item.name}}</span>
      </li>
    </ul>
  </div>
  <button v-else class="goback" @click="goback">返回</button>
</template>

<script>
export default {
  name: 'wen-menu',
  props: {
    showMenu: true
  },    
  data () {
    return {
      examples: [
        { name: 'wen-vant-preview', path: '/wen-vant-preview' }
      ]
    }
  },
  methods: {
    toExample (item) {
      if (item.name != this.$route.name) {
        this.$router.push(item)
        this.$emit("update:show-menu", false)
      }
    },
    goback() {
        this.$router.back()
        this.$emit("update:show-menu", true)
    }
  }
}
</script>

<style lang="scss" scoped>
.wen-menu {
  ul {
    margin-top: 11px;
    margin-left: 60px;
    li {
      list-style: none;
      color: cornflowerblue;
      cursor: pointer;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }
}
.goback{
    position: absolute;
    top: -60px;
    left: 30px;
}
</style>