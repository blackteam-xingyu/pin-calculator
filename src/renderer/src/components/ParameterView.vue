<script setup lang="ts">
const { countStore } = useStore();
const { N, d, d0, t1, t2, a, b, f1, f2, f3, f4, f5, n, f6, tCop, NCop } = storeToRefs(countStore);
const { clear } = countStore;
</script>

<template>
  <div class="param">
    <ElForm label-width="200px">
      <ElRow>
        <div class="title">
          1、 输入参数 <ElButton size="small" type="primary" plain @click="clear">清空</ElButton>
        </div>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>杆件内力 N</div>
            </template>
            <ElInput v-model="N" clearable />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>连接耳板抗拉强度设计值</div>
            </template>
            <ElInput v-model="f1" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>销轴直径 d</div>
            </template>
            <ElInput v-model="d" clearable />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>连接板承压强度设计值</div>
            </template>
            <ElInput v-model="f2" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>销轴孔径 d<span class="downer">0</span></div>
            </template>
            <ElInput v-model="d0" clearable />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>连接耳板抗剪强度设计值</div>
            </template>
            <ElInput v-model="f3" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>连接耳板1厚 t1</div>
            </template>
            <ElInput v-model="t1" clearable />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>销轴抗剪强度设计值</div>
            </template>
            <ElInput v-model="f4" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>连接耳板2厚 t2</div>
            </template>
            <ElInput v-model="t2" clearable />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>销轴抗承压强度设计值</div>
            </template>
            <ElInput v-model="f5" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>连接耳板净边距 a</div>
            </template>
            <ElInput v-model="a" clearable />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>销轴剪切面数 n</div>
            </template>
            <ElInputNumber v-model="n" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>连接耳板净边距 b</div>
            </template>
            <ElInput v-model="b" clearable />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>销轴抗弯强度设计值</div>
            </template>
            <ElInput v-model="f6" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <div class="title">2、 计算参数</div>
      </ElRow>
      <ElRow>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>耳板验算时t取值</div>
            </template>
            <ElInput v-model="tCop" disabled />
          </ElFormItem>
        </ElCol>
        <ElCol :span="12">
          <ElFormItem>
            <template #label>
              <div>耳板验算时N取值</div>
            </template>
            <ElInput v-model="NCop" disabled />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow class="title"> 3、参考图例 </ElRow>
      <ElRow>
        <img style="width: 100%" src="../assets/photo.png" alt="加载出错" />
      </ElRow>
    </ElForm>
  </div>
</template>

<style scoped lang="scss">
.param {
}
</style>
