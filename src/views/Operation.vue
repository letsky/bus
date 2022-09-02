<template>
    <van-nav-bar title="新建" left-text="返回" left-arrow @click-left="onLeftClick" />
    <van-form>
        <van-cell-group inset>
            <van-field is-link readonly label="线路" placeholder="请选择线路" @click="showLinePicker = true" />
            <van-popup v-model:show="showLinePicker" round position="bottom">
                <van-picker @confirm="onLinePickerConfirm" @cancel="showLinePicker = false" :columns="lineColums" />
            </van-popup>
            
            <van-field is-link readonly label="站点" placeholder="请选择站点" @click="showStationPicker = true" />
            <van-popup v-model:show="showStationPicker" round position="bottom">
                <van-picker @confirm="onLinePickerConfirm" @cancel="showStationPicker = false" :columns="stationColums" />
            </van-popup>
        </van-cell-group>

        <van-button round block type="primary" disabled>提交</van-button>
    </van-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const showLinePicker = ref(false);
const showStationPicker = ref(false);
const lineColums = ["浦东81路", "浦东35路"];
const stationColums = ["昌邑路苗圃路"];

const line = ref("");
const station = ref("");

const onLeftClick = () => history.back();
const onLinePickerConfirm = (value: string) => {
    console.log(value);
    showLinePicker.value = false;
}

</script>