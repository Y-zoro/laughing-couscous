<template>
    <view class="qc-page">
        <div class="text-area">
            <view>
                <qc-icon name="home" size="50" right="20" />

                <text class="title">{{ value }}</text>
            </view>
        </div>

        <image class="logo" src="/static/img/logo.png" />

        <main>
            <qc-card>
                <div>时间：{{ date }}</div>

                <qc-select v-model="form.userId" label="管理员" :option="option" />

                <qc-time v-model="form.time" label="开始时间" />

                <qc-upload-image />

                <qc-textarea v-model="form.describe" label="描述" required />
            </qc-card>
        </main>
    </view>
</template>

<script setup lang="ts">
import { Itype } from '@/api/common'
import * as dayjs from 'dayjs'
import { value } from '../index'

const date = dayjs.default().format('YYYY-MM-DD hh:mm:ss')

const form = ref({
    userId: '',
    time: '',
    describe: ''
})

const option: any = ref([])
Itype().then((res: any) => {
    option.value = res
})
</script>

<style lang="scss" scoped>
.text-area {
    margin-top: 50rpx;
    color: $uni-color-success;
    font-size: 48rpx;
    text-align: center;

    .qc-icon-home {
        margin-right: 12rpx;
    }
}
</style>
