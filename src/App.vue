<script setup lang="ts">
onLaunch(() => {
    console.log('App Launch')
})
onShow(() => {
    console.log('App Show')
})
onHide(() => {
    console.log('App Hide')
})
</script>

<style lang="scss">
@import 'uview-plus/index';

.logo {
    width: 200rpx;
    height: 200rpx;
    margin: 20rpx auto;
}
</style>
