<template>
  <!-- <el-row>
    <el-col :span="12">
      12
    </el-col>
    <el-col :span="6">
      6
    </el-col>
    <el-col :span="6">
      6
    </el-col>
  </el-row> -->
    <MyRow tag="section">
      <MyCol :span="12">12</MyCol>
      <MyCol :span="6">6</MyCol>
      <MyCol :span="6">6</MyCol>
    </MyRow>
</template>

<script>
import MyRow from './My-Row'
import MCol from './My-col'
export default {
  components:{
    MyRow,
    MyCol
  }

}

</script>

<style>

</style>