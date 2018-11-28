<template>
    <div class="header-view">
        <div class="left flex-c-l">
        </div>
        <div class="right">
            <el-button @click="minimize" class="no-drag" size="mini" type="text">
                <i class="btn el-icon-minus"></i>
            </el-button>
            <el-button @click="close" class="no-drag hover-color" size="mini" type="text">
                <i class="btn el-icon-close"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
    const {BrowserWindow} = require('electron')
    import myutils from '../service/myutils.js'
    export default {
        methods: {
            close() {                
                    this.$electron.ipcRenderer.send('close')
                    // myutils.closeWin()

            },
            minimize() {
                alert('zheshi ')
            }
        }
    }
</script>

<style  scoped>
    .header-view {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-view.left{
        width: 20px;
    }
    .header-view .right{
        color: #ffffff;
    }

        
</style>
