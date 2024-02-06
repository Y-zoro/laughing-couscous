<template>
    <view class="qc-time">
        <view v-if="label" class="qc-time-label" :class="{ 'qc-required': required }">{{ label }}</view>

        <view class="btn" @click="show = true">
            <input type="text" placeholder-style="color: #C5C5CE;" :placeholder="placeholder || `请选择${label}`" :value="value">

            <qc-icon name="time" />
        </view>

        <u-datetime-picker
            v-model="value"
            close-on-click-overlay
            :title="placeholder || `请选择${label}`"
            :show="show"
            mode="time"
            @close="show = false"
            @cancel="show = false"
            @confirm="selectTime"
        />
    </view>
</template>

<script setup lang="ts">
interface EmitsType {
    (e: 'update:modelValue', value: string): void
    (e: 'set', value: string): void
}
const emit = defineEmits<EmitsType>()

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    minHour: {
        type: Number,
        default: 0
    },
    maxHour: {
        type: Number,
        default: 23
    }
})

const show = ref(false)
const value = computed({
    get: () => props.modelValue,
    set: (val: any) => {
        emit('update:modelValue', val)
    }
})

const selectTime = (e: any) => {
    show.value = false
    emit('set', e)
}
</script>

<style lang="scss">
.qc-time {
    margin-top: 24rpx;

    &-label {
        margin-bottom: 24rpx;
    }

    .btn {
        display: flex;
        align-items: center;
        padding: 0 24rpx;
        border: 1px solid #e8eaec;
        border-radius: 8rpx;
        background-color: #f8f8f8;

        input {
            height: 76rpx;
            flex: 1;
            line-height: 76rpx;
            pointer-events: none;

            &::placeholder {
                color: #c5c5ce;
            }

            &[disabled] {
                color: $uni-text-color-disable;
            }
        }
    }
}
</style>
