<template>
  <div id="sidebar">
    <div v-for="item in sideBarLinks" :key="item.name">
      <router-link v-bind:to="item.route">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SideBar extends Vue {
  private sideBarLinks = [
    {
      route: 'fileimporter',
      name: 'File Importer'
    },
    {
      route: 'quoteimporter',
      name: 'Quote Importer'
    },
    {
      route: 'databasebackup',
      name: 'Database Backup'
    },
    {
      route: 'accounts',
      name: 'Accounts'
    }
  ]
}
</script>

<style lang="scss" scoped>
@import '@/global.scss';

#sidebar {
  height: 100%;
  width: 10%;
  min-width: 150px;
  float: left;
  border-right: 1px solid $line;
  padding-left: 10px;
  background-color: $lightgreen-secondary;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  .router-link-active {
    font-weight: bold;
  }
}
</style>
