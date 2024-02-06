<template>
    <view class="qc-page">
        <image class="logo" src="/static/img/logo.png" />

        <u-row justify="center" gutter="10">
            <u-col span="6">
                <up-input v-model="value" placeholder="请输入内容" border="surround" />
            </u-col>

            <u-col span="3">
                <up-button type="primary" text="默认按钮" @click="goDetail" />
            </u-col>
        </u-row>
    </view>
</template>

<script setup lang="ts">
import { value } from '../index'

const goDetail = () => {
    uni.navigateTo({
        url: '/pages/my/detail'
    })
}
</script>

<style lang="scss" scoped>
.text-area {
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    color: #8f8f94;
    font-size: 36rpx;
}
</style>
