<template>
  <el-container>

    <el-aside width="200px">
      <el-menu>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>菜单A</template>
          <el-menu-item index="1-1">
            <router-link to="/">Home</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/about">About</router-link>
          </el-menu-item>
          <el-menu-item index="1-1">
            <router-link to="/form">Form</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>

      <el-menu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>菜单B</template>
          <el-menu-item index="2-1">
            <router-link to="/time_show">Time Show</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/memorial_day">Memorial Day</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/fragment">Fragment</router-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <router-link to="/milestone">Milestone</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>

  </el-container>
</template>

<style lang="scss" scoped>
  $font-color: #333;

  .el-aside {
    width: 200px;
    height: 580px;
  }

  .el-header {
    background-color: #B3C0D1;
    color: $font-color;
    line-height: 60px;
    text-align: right;
  }

  .el-aside {
    color: $font-color;
  }
</style>
