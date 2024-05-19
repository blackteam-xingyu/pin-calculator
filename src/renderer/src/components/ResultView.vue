<script setup lang="ts">
import { storeToRefs } from 'pinia';

const { countStore } = useStore();
const { result1, result2, result3, result4, result5, result6 } = storeToRefs(countStore);

const getResult = (res: boolean | null) => {
  if (res === null) {
    return '';
  }
  if (res === true) {
    return '满足要求';
  }
  if (res === false) {
    return '请调整设计';
  } else {
    return '';
  }
};
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
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ =</div>
          </template>
          {{ result1.sigma }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f=</div>
          </template>
          {{ result1.f }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">b<span class="downer">1</span> =</div>
          </template>
          {{ result1.b1 }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult(result1.res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 2、耳板端部抗拉（劈开）强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result2/img.png" alt="error" />
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ =</div>
          </template>
          {{ result2.sigma }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f=</div>
          </template>
          {{ result2.f }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult(result2.res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 3、 耳板抗剪强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result3/img.png" alt="error" />
        <img src="../assets/result3/img2.png" alt="error" />
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">τ =</div>
          </template>
          {{ result3.tao }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f<span class="downer">v</span>=</div>
          </template>
          {{ result3.fv }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">Z =</div>
          </template>
          {{ result3.Z }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult(result3.res) }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 4、 销轴的承压强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result4/img.png" alt="error" />
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ<span class="downer">c</span>=</div>
          </template>
          {{ result4.sigmaC }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">
              ≤f<span class="upper">b</span><span class="downer">c</span>=
            </div>
          </template>
          {{ result4.fbc }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult(result4.res)  }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 5、 销轴抗剪强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result5/img.png" alt="error" />
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">τ<span class="downer">b</span>=</div>
          </template>
          {{ result5.tao }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f<span class="downer">v</span>=</div>
          </template>
          {{ result5.fv }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ getResult(result5.res)  }}
        </ElDescriptionsItem>
      </ElDescriptions>
    </ElRow>

    <ElRow class="title"> 6、 销轴抗弯强度按下式验算 </ElRow>
    <ElRow>
      <div class="gs">
        公式：
        <img src="../assets/result6/img.png" alt="error" />
        <img src="../assets/result6/img2.png" alt="error" />
      </div>
    </ElRow>
    <ElRow class="data">
      <ElDescriptions border :column="2">
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">σ<span class="downer">b</span> =</div>
          </template>
          {{ result6.sigmaB }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">≤f<span class="upper">b</span>=</div>
          </template>
          {{ result6.fb }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">M</div>
          </template>
          {{ result6.M }}
        </ElDescriptionsItem>
        <ElDescriptionsItem>
          <template #label>
            <div class="data-title">校验结果</div>
          </template>
          {{ result1.sigma <= result1.f ? '满足要求' : '请调整设计' }}
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
