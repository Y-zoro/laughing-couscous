<template>
    <view class="qc-input">
        <view v-if="label" class="qc-input-label" :class="{ 'qc-required': required }">{{ label }}</view>

        <input
            v-model="value"
            type="text"
            placeholder-style="color: #C5C5CE;"
            :maxlength="maxlength"
            :disabled="disabled"
            :placeholder="placeholder || `请输入${label}`"
            :confirm-type="props.confirmType"
            @input="changeInput"
            @confirm="changeInput"
            @blur="changeInput"
        >
    </view>
</template>

<script setup lang="ts">
interface EmitsType {
    (e: 'update:modelValue', value: string): void
    (e: string, value: string): void
}
const emit = defineEmits<EmitsType>()
const props: any = defineProps({
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
        default: -1
    },
    placeholder: {
        type: String,
        default: ''
    },
    align: {
        type: String,
        default: 'right'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    confirmType: {
        type: String,
        default: 'done'
    }
})

const changeInput = (e: any) => {
    emit(`${e.type}`, e.detail.value)
}

const value = computed({
    get: () => props.modelValue,
    set: (val: any) => {
        emit('update:modelValue', val)
    }
})
</script>

<style lang="scss">
.qc-input {
    &-label {
        margin-bottom: 24rpx;
        color: #515a6e;
    }

    input {
        height: 76rpx;
        padding: 0 20rpx;
        border: 1px solid #e8eaec;
        border-radius: 8rpx;
        background-color: #f8f8f8;
        line-height: 76rpx;

        &::placeholder {
            color: #c5c5ce;
        }

        &[disabled] {
            color: $uni-text-color-grey;
        }
    }
}
</style>
