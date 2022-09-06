<template>
    <van-nav-bar title="新建" left-text="返回" left-arrow @click-left="onReturnClick" />
    <van-form>
        <van-cell-group inset>
            <van-field v-model="line" is-link readonly label="线路" placeholder="请选择线路" @click="showLinePicker = true" />
            <van-popup v-model:show="showLinePicker" round position="bottom">
                <van-picker @confirm="onLinePickerConfirm" @cancel="showLinePicker = false" :columns="lineColums" />
            </van-popup>
            
            <van-field v-model="station" is-link readonly label="站点" placeholder="请选择站点" @click="showStationPicker = true" />
            <van-popup v-model:show="showStationPicker" round position="bottom">
                <van-picker @confirm="onStationPickerConfirm" @cancel="showStationPicker = false" :columns="stationColums" />
            </van-popup>

            <van-field v-model="month" is-link readonly label="月份" placeholder="请选择月份" @click="showMonthPicker = true" />
            <van-popup v-model:show="showMonthPicker" round position="bottom">
                <van-picker @confirm="onMonthPickerConfirm" @cancel="showMonthPicker = false" :columns="monthColums" />
            </van-popup>

            <van-field v-model="month" is-link readonly label="日" placeholder="请选择日" @click="showDayPicker = true" />
            <van-popup v-model:show="showDayPicker" round position="bottom">
                <van-picker @confirm="onDayPickerConfirm" @cancel="showDayPicker = false" :columns="dayColums" />
            </van-popup>
        </van-cell-group>

        <van-button round block type="primary" disabled>提交</van-button>
    </van-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const showLinePicker = ref(false);
const showStationPicker = ref(false);
const showMonthPicker = ref(false);
const showDayPicker = ref(false);

const lineColums = ["浦东81路", "浦东35路"];
const stationColums = ["昌邑路苗圃路"];
const monthColums = Array.from({length: 12}, (item, index) => index+1);
const dayColums = Array.from({length: 31}, (item, index) => index+1);

const line = ref("");
const station = ref("");
const month = ref("");
const day = ref("");

const onReturnClick = () => history.back();

const onLinePickerConfirm = (value: string) => {
    line.value = value;
    showLinePicker.value = false;
}

const onStationPickerConfirm = (value: string) => {
    station.value = value;
    showStationPicker.value = false;
}

const onMonthPickerConfirm = (value: string) => {
    month.value = value;
    showMonthPicker.value = false;
}

const onDayPickerConfirm = (value: string) => {
    day.value = value;
    showDayPicker.value = false;
}

</script>