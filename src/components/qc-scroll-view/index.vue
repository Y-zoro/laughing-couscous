<template>
    <scroll-view :style="{ height: height }" scroll-y refresher-enabled :refresher-triggered="refresh" class="qc-scroll-view" @scroll="emit('scroll', $event)" @refresherrefresh="emit('update', 'refresh')" @scrolltolower="emit('update', '')">
        <template v-if="value">
            <slot />
        </template>

        <view v-if="value && !more" :style="{'padding-bottom': '24rpx','text-align': 'center'}">没有更多了~</view>

        <qc-empty v-if="!value && !more" />
    </scroll-view>
</template>

<script setup lang="ts">
interface EmitsType {
    (e: 'update:modelValue', value: string): void
    (e: 'scroll', value: object): void
    (e: 'update', value: string): void
}
const emit = defineEmits<EmitsType>()
const props = defineProps({
    modelValue: {
        type: [Number, String],
        default: false || 0
    },
    height: {
        type: String,
        default: '100%'
    },
    refresh: {
        type: Boolean,
        default: false
    },
    more: {
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

</script>
