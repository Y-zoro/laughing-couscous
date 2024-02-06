<template>
    <view class="qc-textarea">
        <view class="qc-textarea-label" :class="{ 'qc-required': required }">{{ label }}</view>

        <textarea
            :rows="rows"
            :maxlength="maxlength"
            placeholder-style="color: #C5C5CE;"
            :disabled="disabled"
            :placeholder="placeholder || `请输入${label}`"
            :value="value"
            @input="changeTextarea"
            @focus="changeTextarea"
            @blur="changeTextarea"
        />

        <view class="max-length">{{ `${value.length} / ${maxlength}` }}</view>
    </view>
</template>

<script setup lang="ts">
interface EmitsType {
    (e: 'update:modelValue', value: string): void
    (e: string, value: string): void
}
const emit = defineEmits<EmitsType>()

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    },
    maxlength: {
        type: Number,
        default: 100
    },
    rows: {
        type: Number,
        default: 3
    },
    placeholder: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const value = computed({
    get: () => props.modelValue,
    set: (val: any) => {
        emit('update:modelValue', val)
    }
})

const changeTextarea = (e: any) => {
    value.value = e.detail.value
    emit(`${e.type}`, e.detail.value)
}
</script>

<style lang="scss">
.qc-textarea {
    margin-top: 24rpx;

    &-label {
        margin-bottom: 24rpx;
    }

    textarea {
        width: 100%;
        min-height: 76rpx;
        box-sizing: border-box;
        padding: 20rpx 20rpx 36rpx;
        border: 1px solid #e8eaec;
        border-radius: 8rpx;
        background-color: #f8f8f8;

        &::placeholder {
            color: #c5c5ce;
        }
    }

    .max-length {
        position: relative;
        bottom: 50rpx;
        height: 0;
        padding-right: 16rpx;
        text-align: right;
    }
}
</style>
