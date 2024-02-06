<template>
    <view class="qc-empty">
        <image :style="{ width: props.width }" class="qc-empty-img" mode="widthFix" :src="props.image" />

        <view class="tip">
            {{ props.message }}
        </view>

        <view v-if="props.btnName" class="qc-empty-btn" @click="emit('set')">
            {{ props.btnName }}
        </view>
    </view>
</template>

<script setup lang="ts">
interface EmitsType { (e: 'set'): void }
const emit = defineEmits<EmitsType>()

const props = defineProps({
    message: {
        type: String,
        default: '噢~没有数据喔~'
    },
    btnName: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: '/static/img/no-data.png'
    },
    width: {
        type: String,
        default: '320rpx'
    }
})
</script>

<style>
.qc-empty {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #808695;
    font-size: 32rpx;
}

.qc-empty-img {
    margin-bottom: 48rpx;
}

.qc-empty-btn {
    width: 250rpx;
    margin: 24rpx auto 0;
    text-align: center;
}
</style>
