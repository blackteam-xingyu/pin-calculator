<script setup lang="ts">
import { TABS } from '../engines/Enums';

const activeTab = ref<string>('parameter');
const tabs = [
  {
    label: '参数',
    name: TABS.PARAM,
  },
  {
    label: '计算结果',
    name: TABS.RES,
  },
  {
    label: '输出计算书',
    name: TABS.WORD,
  },
];
</script>

<template>
  <ElTabs v-model="activeTab" class="tabs" stretch>
    <ElTabPane v-for="item in tabs" :key="item.name" :name="item.name" :label="item.label" />
  </ElTabs>
  <transition name="el-fade-in" mode="out-in">
    <ParameterView v-if="activeTab === TABS.PARAM" />
    <ResultView v-else-if="activeTab === TABS.RES" />
    <WordView v-else-if="activeTab === TABS.WORD" />
  </transition>
</template>

<style scoped lang="scss">
.tabs {
  margin-top: -20px;
}
</style>
