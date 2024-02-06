<template>
    <view class="qc-page order__list">
        <qc-tabs v-model="cond.status" :list="tabs" @set="loadData(true)" />

        <main class="main">
            <qc-scroll-view v-model="table.data.totalRow" :more="table.hasMore" :refresh="table.refresh" @update="loadData">
                <qc-card v-for="(item, index) in table.data.results" :key="index" :title="`标题${index+1}`" @set="detail(item)">
                    <template #right>
                        <up-button :custom-style="{height: '48rpx'}" :hairline="false" type="primary" text="编辑" @click="edit(item)" />
                    </template>

                    <qc-card-item label="字段1" :value="item.field1" />

                    <qc-card-item label="字段2" :value="item.field2" />

                    <qc-card-item label="字段3" :value="item.field3" />

                    <qc-card-item label="字段4" :value="item.field4" />

                    <qc-card-item label="字段5" :value="item.field5" />

                    <qc-card-item label="字段6" :value="item.field6" />

                    <qc-card-item label="字段7" :value="item.field7" />
                </qc-card>
            </qc-scroll-view>
        </main>

        <view class="qc-bottom-btn" @click="add">新增</view>
    </view>
</template>

<script setup lang="ts">
import { createTable } from '@/mixins/index'
import { $api, add, detail, edit } from './index'

const tabs = [{
    name: '状态1',
    id: '1'
}, {
    name: '状态2',
    id: '2'
}, {
    name: '状态3',
    id: '3'
}, {
    name: '状态4',
    id: '4'
}, {
    name: '状态5',
    id: '5'
}]

const cond: any = ref({
    status: '2'
})

const table: any = reactive({
    data: {},
    hasMore: true,
    refresh: false,
    pageNo: 1,
    pageSize: 3
})

const { loadData } = createTable({ IList: $api.IList, cond, table })
</script>
