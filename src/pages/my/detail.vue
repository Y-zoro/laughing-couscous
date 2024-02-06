<template>
    <view class="qc-page">
        <image class="logo" src="/static/img/logo.png" />

        <view class="text-area">
            <text class="title">{{ value }}</text>
        </view>
    </view>
</template>

<script setup lang="ts">
import { value } from '../index'
</script>
