<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { countStore } = useStore();
const { result1 } = storeToRefs(countStore);
</script>

<template>
  <div class="result">
    <ElRow class="title"> 1、销轴孔净截面耳板抗拉强度验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result1/img.png" alt="error" />
        <img src="../assets/result1/img2.png" alt="error" />
      </div>
    </ElRow>
    <ElRow>
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="title">σ =</div>
          </template>
          {{ result1.sigma }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>
  </div>
</template>

<style scoped lang="scss">
.result {
  .gs {
    display: flex;
    align-items: center;
    height: 40px;
    img {
      margin-left: 10px;
      height: 100%;
      object-fit: contain;
    }
  }
  .el-descriptions {
    width: 100%;
  }
}
</style>
