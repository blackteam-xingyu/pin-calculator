<script setup lang="ts">
import { SaveFile } from '../engines/Utils';

const { countStore } = useStore();
const {
  N,
  d,
  d0,
  t1,
  t2,
  a,
  b,
  f1,
  f2,
  f3,
  f4,
  f5,
  n,
  f6,
  tCop,
  NCop,
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
} = storeToRefs(countStore);
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
    result1: {
      sigma: result1.value.sigma,
      f: result1.value.f,
      b1: result1.value.b1,
      res: result1.value.res,
    },
    result2: {
      sigma: result2.value.sigma,
      f: result2.value.f,
      res: result2.value.res,
    },
    result3: {
      tao: result3.value.tao,
      fv: result3.value.fv,
      Z: result3.value.Z,
      res: result3.value.res,
    },
    result4: {
      sigmaC: result4.value.sigmaC,
      fbc: result4.value.fbc,
      res: result4.value.res,
    },
    result5: {
      tao: result5.value.tao,
      fv: result5.value.fv,
      res: result5.value.res,
    },
    result6: {
      sigmaB: result6.value.sigmaB,
      fb: result6.value.fb,
      M: result6.value.M,
      res: result6.value.res,
      q: result6.value.q,
      resq: result6.value.resq,
    },
  };
  SaveFile(data);
};
</script>

<template>
  <ElButton @click="selectFolder">生成word表格计算书</ElButton>
</template>

<style scoped lang="scss"></style>
