<template>
    <text :class="`qc-icon-${name}`" :style="{style}" />
</template>

<script lang="ts" setup>

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    left: {
        type: String,
        default: ''
    },
    right: {
        type: String,
        default: ''
    }
})
const style = `font-size:${props.size}rpx;color:${props.color};margin-left: ${props.left}rpx;
     margin-right:${props.right}rpx`
</script>
