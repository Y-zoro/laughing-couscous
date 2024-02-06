<template>
    <view class="qc-select">
        <qc-card-item :label="label" :required="required">
            <template #right>
                <view :class="['qc-select-value', align, { active: !name }]" @click="show = true">
                    <text class="name">{{ name || (placeholder ? placeholder : `请选择${label}`) }}</text>

                    <text v-if="align" class="qc-icon-down" />

                    <text v-else class="qc-icon-arrow-right" />
                </view>
            </template>
        </qc-card-item>

        <u-picker
            :show="show"
            :title="`请选择${label}`"
            close-on-click-overlay
            :columns="[option]"
            key-name="label"
            @close="show = false"
            @cancel="show = false"
            @confirm="confirm"
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
    option: {

        // label / id
        type: Array,
        default: () => {
            return []
        }
    },
    required: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: ''
    },
    align: {
        type: String,
        default: ''
    }
})

const value = computed({
    get: () => {
        return props.modelValue
    },
    set: (val: any) => {
        emit('update:modelValue', val)
    }
})

const show = ref(false)
const name = ref('')

if (value.value) {
    props.option.forEach((x: any) => {
        if (value.value === x.id) {
            name.value = x.label
        }
    })
}

const confirm = (e: any) => {
    show.value = false
    name.value = e.value[0].label
    value.value = e.value[0].id
    emit('set', e.value[0])
}
</script>

<style lang="scss">
.qc-select {
    padding: 16rpx 0;

    .qc-select-value {
        display: flex;
        min-width: 300rpx;
        align-items: center;
        justify-content: flex-end;

        .name {
            @include ellipsis;
        }

        &.left {
            justify-content: space-between;
        }

        &.active {
            color: #c5c5ce;
        }

        text {
            margin-right: 16rpx;

            &:last-child {
                margin-right: 0;
            }
        }

        .qc-icon-arrow-right {
            float: right;
        }

        [class*='qc-icon'] {
            font-size: 20rpx;
        }
    }
}
</style>
