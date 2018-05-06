<template>
  <el-container>
    <el-header height="150px">
      <Logo />
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>


<script>
import Logo from '~/components/Logo';

export default {
    components: {
        Logo
    }
};
</script>


<style>
html {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', Arial, sans-serif;
    font-size: 16px;
    color: #303133;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

body {
    background: #fff;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
