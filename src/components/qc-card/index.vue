<template>
    <!-- 卡片 -->
    <view :class="['qc-card', { 'qc-card-inside': props.inside }]" @click="emit('set')">
        <view class="qc-card-header">
            <view v-if="title" class="title">{{ props.title }}</view>

            <slot name="left" />

            <view class="right">
                <slot name="right" />
            </view>
        </view>

        <slot />
    </view>
</template>

<script setup lang="ts">
interface EmitsType { (e: 'set'): void }
const emit = defineEmits<EmitsType>()
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    inside: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.qc-card {
    position: relative;
    padding: 36rpx 32rpx;
    border-radius: 16rpx;
    margin-bottom: 48rpx;
    background-color: white;

    &-inside {
        padding: 0;
        margin-top: 24rpx;
    }

    &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            width: 100%;
            flex-shrink: 0;
            padding-bottom: 24rpx;
            border-bottom: 1rpx solid lightgray;
            color: #666;
            font-size: 32rpx;
            font-weight: bold;
            line-height: 38rpx;
        }

        .right {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            transform: translateX(-100%);
        }
    }
}
</style>
