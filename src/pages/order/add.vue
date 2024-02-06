<template>
    <view class="qc-page">
        <main class="main">
            <qc-card>
                <qc-input v-model="form.field1" label="字段1" required />

                <qc-select v-model="form.field2" label="字段2" required :option="options.status" />

                <qc-time v-model="form.field3" label="字段3" required />

                <qc-textarea v-model="form.field4" label="字段4" required />

                <qc-upload-image />
            </qc-card>
        </main>

        <view class="qc-bottom-btn">
            <view @click="clear">取消</view>

            <view @click="submit(api)">保存</view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { createForm } from '@/mixins/add'
import { $api, form, rules } from './index'

// 新增/逻辑
wx.setNavigationBarTitle({ title: form.id ? '编辑订单' : '新增订单' })
const api = form.id ? $api.IEdit : $api.IAdd

const { submit, clear, detail }: any = createForm(() => ({ form, rules }))

// 获取详情数据
detail($api.IDetail)

// 下拉数据
const options: any = reactive({
    status: []
})

$api.IOptionsField1().then((res: any) => {
    options.status = res
})
</script>
