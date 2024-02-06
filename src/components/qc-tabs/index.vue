<template>
    <u-sticky bg-color="#007aff">
        <u-tabs
            :current="current"
            :scrollable="props.scrollable"
            :list="props.list"
            @change="changeTabs"
        />
    </u-sticky>
</template>

<script setup lang="ts">

interface Item {
[x: string]: any
    name: string
    id: string
}

interface EmitsType {
    (e: 'update:modelValue', value: string): void
    (e: 'set'): void
}
const emit = defineEmits<EmitsType>()
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    list: {
        type: Object as PropType<Item>,
        default: () => {
            return []
        }
    },
    scrollable: {
        type: Boolean,
        default: false
    }
})

const current = ref(0)
const value = computed({
    get: () => props.modelValue,
    set: (val: any) => {
        emit('update:modelValue', val)
    }
})

if (value.value) {
    props.list.forEach((x: any, index: number) => {
        if (value.value === x.id) {
            current.value = index
        }
    })
}

const changeTabs = (e: any) => {
    current.value = e.index
    value.value = props.list.filter((x: any) => x.name === e.name)[0].id
    emit('set')
}
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
            font-weight: 500;
            line-height: 38rpx;
        }

        .right {
            display: flex;
            flex: 1;
            justify-content: flex-end;
        }
    }
}
</style>
