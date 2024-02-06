<template>
    <view class="qc-upload-image">
        <qc-card-item :value="`${images.length}/${max}`">
            <template #left>
                <text :class="{ 'qc-required': required }">{{ label }}</text>
            </template>
        </qc-card-item>

        <view class="upload-cmp">
            <u-upload
                :file-list="images"
                name="1"
                accept="image"
                :capture="capture"
                :camera="camera"
                multiple
                :max-count="max"
                @after-read="afterRead"
                @delete="deletePic"
            />
        </view>
    </view>
</template>

<script setup lang="ts">
import { compressImage } from '@/libs/utils'
interface EmitsType {
    (e: 'set', value: string): void
}

const emit = defineEmits<EmitsType>()
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    },
    max: {
        type: Number,
        default: 3
    },
    label: {
        type: String,
        default: '上传图片'
    },
    required: {
        type: Boolean,
        default: false
    },
    capture: {
        type: [String, Array],
        default: () => {
            return ['album', 'camera']
        }
    },
    camera: {
        type: String,
        default: 'front' // 后置摄像头 back
    }
})
const images: any = ref([])

watch(props.list, () => {
    images.value = props.list
})

const afterRead = async (event: any) => {
    uni.showLoading({
        title: '正在上传图片',
        mask: true
    })
    const files = event.file
    const promiseArr = []
    for (const item of files) {
        const originalImg: any = wx.getImageInfo()
        originalImg.onload = () => {
            compressImage(originalImg, 100)
        }
        originalImg.src = item.url
        const p = new Promise((resolve) => {
            uni.uploadFile({
                url: 'https://ljhs2.demo.qi-cloud.com/file/add',
                filePath: originalImg.src,
                name: 'file',
                success: (uploadFileRes: any) => {
                    const list: any = JSON.parse(uploadFileRes.data).data.list[0]
                    images.value.push(list)
                    resolve(true)
                }
            })
        })
        promiseArr.push(p)
    }
    Promise.all(promiseArr).then(() => {
        images.value = images.value.splice(0, props.max)
        emit('set', images.value)
        uni.hideLoading()
    })
}
const deletePic = (event: any) => {
    images.value.splice(event.index, 1)
    emit('set', images.value)
}
</script>

<style lang="scss" scoped>
.qc-upload-image {
    .upload-cmp {
        display: flex;
        flex-wrap: wrap;
        padding-top: 24rpx;
        padding-left: 2rpx;

        .upload-item {
            position: relative;
            overflow: hidden;
            width: 180rpx;
            height: 180rpx;
            border-radius: 12rpx;
            margin-bottom: 20rpx;

            &:not(:last-child) {
                margin-right: 20rpx;
            }

            .upload-img {
                width: 100%;
                height: 100%;
                background-color: #eee;
            }

            .upload-close {
                position: absolute;
                top: 0rpx;
                right: 0rpx;
                width: 44rpx;
                border-radius: 0 0 0 24rpx;
                background-color: rgba(#000, 0.7);
                line-height: 44rpx;
                text-align: center;
            }
        }

        .upload-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2rpx dashed #e8eaec;
            color: #808695;
            text-align: center;

            .qc-icon-photo {
                margin-top: 14rpx;
                color: #e8eaec;
                font-size: 88rpx;
            }
        }
    }
}
</style>
