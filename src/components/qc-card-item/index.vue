<template>
    <view class="qc-card-item">
        <view class="left" :class="{ 'qc-required': props.required }"> <slot name="left" />{{ props.label }} </view>

        <view class="right">
            {{ props.value }}
            <slot name="right" />
        </view>
    </view>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.qc-card-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 24rpx;

    .left,
    .right {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .right {
        flex: 1;
        justify-content: flex-end;
        margin-left: 24rpx;
        text-align: right;
        word-break: break-word;
    }
}
</style>
