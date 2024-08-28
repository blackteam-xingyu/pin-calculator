<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { Result1, Result2, Result3, Result4, Result5, Result6 } from '../stores/config/count';
import { SaveFile } from '../engines/Utils';

const { countStore } = useStore();
const { result1, result2, result3, result4, result5, result6 } = countStore;
const { N, d, d0, t1, t2, a, b, f1, f2, f3, f4, f5, n, f6, tCop, NCop } = storeToRefs(countStore);
const getResult = (res: boolean | null) => {
  if (res === true) {
    return '满足要求';
  }
  if (res === false) {
    return '请调整设计';
  }
  return '';
};
const selectFolder = () => {
  const data = {
    N: N.value,
    d: d.value,
    d0: d0.value,
    t1: t1.value,
    t2: t2.value,
    a: a.value,
    b: b.value,
    f1: f1.value,
    f2: f2.value,
    f3: f3.value,
    f4: f4.value,
    f5: f5.value,
    n: n ? n.value : 0,
    f6: f6.value,
    tCop: tCop.value,
    NCop: NCop.value,
    result1sigma: result1.sigma,
    result1f: result1.f,
    result1b1: result1.b1,
    result1res: result1.res,
    result2sigma: result2.sigma,
    result2f: result2.f,
    result2res: result2.res,
    result3tao: result3.tao,
    result3fv: result3.fv,
    result3Z: result3.Z,
    result3res: result3.res,
    result4sigmaC: result4.sigmaC,
    result4fbc: result4.fbc,
    result4res: result4.res,
    result5tao: result5.tao,
    result5fv: result5.fv,
    result5res: result5.res,
    result6sigmaB: result6.sigmaB,
    result6fb: result6.fb,
    result6M: result6.M,
    result6q: result6.q,
    result6resq: result6.resq,
    result6res: result6.res,
  };
  SaveFile(data);
};
</script>

<template>
  <div class="result">
    <ElRow class="title">
      1、销轴孔净截面耳板抗拉强度验算
      <ElButton size="small" type="success" style="margin-left: 20px;" @click="selectFolder"> 生成word表格计算书 </ElButton>
    </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result1/img.png" alt="error" >
        <img src="../assets/result1/img2.png" alt="error" >
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ=</div>
          </template>
          {{ (result1 as Result1).sigma }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f=</div>
          </template>
          {{ (result1 as Result1).f }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">b<span class="downer">1</span>=</div>
          </template>
          {{ (result1 as Result1).b1 }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult((result1 as Result1).res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 2、耳板端部抗拉（劈开）强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result2/img.png" alt="error" style="height: 60px" >
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ=</div>
          </template>
          {{ (result2 as Result2).sigma }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f=</div>
          </template>
          {{ (result2 as Result2).f }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult((result2 as Result2).res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 3、 耳板抗剪强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result3/img.png" alt="error" style="height: 45px" >
        <img src="../assets/result3/img2.png" alt="error" style="height: 20px" >
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">τ=</div>
          </template>
          {{ (result3 as Result3).tao }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f<span class="downer">v</span>=</div>
          </template>
          {{ (result3 as Result3).fv }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">Z=</div>
          </template>
          {{ (result3 as Result3).Z }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult((result3 as Result3).res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 4、 销轴的承压强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result4/img.png" alt="error" style="height: 43px" >
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ<span class="downer">c</span>=</div>
          </template>
          {{ (result4 as Result4).sigmaC }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">
              ≤f<span class="upper">b</span><span class="downer">c</span>=
            </div>
          </template>
          {{ (result4 as Result4).fbc }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult((result4 as Result4).res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 5、 销轴抗剪强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result5/img.png" alt="error" style="height: 60px" >
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">τ<span class="downer">b</span>=</div>
          </template>
          {{ (result5 as Result5).tao }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f<span class="downer">v</span>=</div>
          </template>
          {{ (result5 as Result5).fv }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult((result5 as Result5).res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 6、 销轴抗弯强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result6/img.png" alt="error" style="height: 60px" >
        <img src="../assets/result6/img2.png" alt="error" style="height: 60px" >
        <img src="../assets/result6/img3.png" alt="error" style="height: 40px" >
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="3">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">M</div>
          </template>
          {{ (result6 as Result6).M }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ<span class="downer">b</span>=</div>
          </template>
          {{ (result6 as Result6).sigmaB }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f<span class="upper">b</span>=</div>
          </template>
          {{ (result6 as Result6).fb }}
        </ElDescriptionsItem>
        <ElDescriptionsItem :span="3">
          <template #label>
            <div class="data-title">销轴抗弯强度校验结果</div>
          </template>
          {{ getResult((result6 as Result6).res) }}
        </ElDescriptionsItem>
        <ElDescriptionsItem :span="2">
          <template #label>
            <div class="data-title">材料组合强度</div>
          </template>
          {{ (result6 as Result6).q }}
        </ElDescriptionsItem>
        <ElDescriptionsItem :span="1">
          <template #label>
            <div class="data-title">≤</div>
          </template>
          1
        </ElDescriptionsItem>
        <ElDescriptionsItem :span="3">
          <template #label>
            <div class="data-title">材料组合强度强度校验结果</div>
          </template>
          {{ getResult((result6 as Result6).resq) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>
  </div>
</template>

<style scoped lang="scss">
.result {
  .title {
    margin-bottom: 10px;
  }
  .gs {
    display: flex;
    align-items: center;
    height: 40px;
    margin-bottom: 10px;
    img {
      margin-left: 10px;
      height: 100%;
      object-fit: contain;
    }
  }
  .data {
    margin-bottom: 20px;
    &-title {
      font-weight: bold;
    }
  }
  .el-descriptions {
    width: 100%;
  }
}
</style>
