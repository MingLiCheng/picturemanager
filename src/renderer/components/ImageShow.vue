<template>
  <div id="imagelist">
    <el-row>
        <el-col :span="4" v-for="item in imageinfolist" :key="item.url">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.path+item.name" class="image">
            <div style="padding: 14px;">
              <span>{{ item.name }}</span>
              <div class="bottom clearfix">
                <!-- <el-button type="text" class="button">操作按钮</el-button> -->
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>1
import imageinfo from "../service/pictureinfo.js";

export default {
  name: "",
  props: ['imageinfolist'],
  data() {
    return {
    }
  }
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  /* height: 100%; */
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
} 
</style>
