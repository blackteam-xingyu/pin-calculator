import { ta } from 'element-plus/es/locale';
import math from '../../plugins/math';

const Validate = (...args: string[]) => {
  for (const arg of args) {
    if (!arg) {
      return false;
    }
  }
  return true;
};

const Compare = (leftv: string, rightv: string) => {
  return math.evaluate(`${leftv} <= ${rightv}`) as boolean;
};
const useCountStore = () =>
  defineStore('count', {
    persist: true,
    state: (): Count => ({
      N: '',
      d: '',
      d0: '',
      t1: '',
      t2: '',
      a: '',
      b: '',
      f1: '',
      f2: '',
      f3: '',
      f4: '',
      f5: '',
      n: '',
      f6: '',
    }),
    getters: {
      /**
       * 耳板验算时t取值
       */
      tCop: (state): string => {
        if (!state.t1 || !state.t2 || !state.n) {
          return '';
        }

        const _1 = math.evaluate(`${state.t1} * ${state.n}`).toString();
        return math.evaluate(`${_1} < ${state.t2}`) ? _1 : state.t2;
      },
      /**
       * 耳板验算时N取值
       */
      NCop: (state): string => {
        if (!state.t1 || !state.t2 || !state.n || !state.N) {
          return '';
        }
        const _1 = math.evaluate(`${state.t1} * ${state.n}`).toString();
        return math.evaluate(`${_1} > ${state.t2}`)
          ? state.N
          : math.evaluate(`${state.N} / 2`).toString();
      },
      result1(state): Result1 {
        if (!Validate(state.t1, state.t2, state.N, state.b, state.n, state.d0, state.f1)) {
          return {
            sigma: '请将参数填写完整',
            f: '请将参数填写完整',
            b1: '请将参数填写完整',
            res: null,
          };
        }
        console.log(this.NCop);

        const _1 = math.evaluate(`2 * ${this.tCop} + 16`);
        const _2 = math.evaluate(`${state.b} - ${state.d0} / 3`).toString();
        const b1 = math.evaluate(`${_1} < ${_2}`) ? _1 : _2;
        const sigma = math.evaluate(`${this.NCop} * 1000 / (2 * ${this.tCop} * ${b1})`).toString();
        return {
          sigma,
          f: state.f1,
          b1,
          res: Compare(sigma, state.f1),
        };
      },
      result2(state): Result2 {
        if (!Validate(state.t1, state.t2, state.N, state.a, state.n, state.d0, state.f1)) {
          return {
            sigma: '请将参数填写完整',
            f: '请将参数填写完整',
            res: null,
          };
        }
        const sigma = math
          .evaluate(`${state.N} * 1000 / (2 * ${this.tCop} * (${state.a} - 2 * ${state.d0} / 3))`)
          .toString();
        return {
          sigma,
          f: state.f1,
          res: Compare(sigma, state.f1),
        };
      },
      result3(state): Result3 {
        if (!Validate(state.t1, state.t2, state.N, state.n, state.a, state.d0, state.f3)) {
          return {
            tao: '请将参数填写完整',
            fv: '请将参数填写完整',
            Z: '请将参数填写完整',
            res: null,
          };
        }
        const Z = math
          .evaluate(`sqrt((${state.a} + ${state.d0} / 2) ^ 2 - (${state.d0} / 2) ^ 2)`)
          .toString();
        const tao = math.evaluate(`${this.NCop} * 1000 / (2 * ${this.tCop} * ${Z})`).toString();
        return {
          tao,
          fv: state.f3,
          Z,
          res: Compare(tao, state.f3),
        };
      },
      result4(state): Result4 {
        if (!Validate(state.t1, state.t2, state.N, state.n, state.d, state.f2)) {
          return {
            sigmaC: '请将参数填写完整',
            fbc: '请将参数填写完整',
            res: null,
          };
        }
        const sigmaC = math.evaluate(`${state.N} * 1000 / (${state.d} * ${this.tCop})`).toString();
        return {
          sigmaC,
          fbc: state.f2,
          res: Compare(sigmaC, state.f2),
        };
      },
      result5(state): Result5 {
        if (!Validate(state.t1, state.t2, state.N, state.a, state.n, state.d, state.f4)) {
          return {
            tao: '请将参数填写完整',
            fv: '请将参数填写完整',
            res: null,
          };
        }
        const tao = math
          .evaluate(`${state.N} * 1000 / (${state.n} * 3.14 * ((${state.d} * ${state.d}) / 4))`)
          .toString();
        return {
          tao,
          fv: state.f4,
          res: Compare(tao, state.f4),
        };
      },
      result6(state): Result6 {
        if (!Validate(state.t1, state.t2, state.N, state.d, state.f4)) {
          return {
            sigmaB: '请将参数填写完整',
            fb: '请将参数填写完整',
            M: '请将参数填写完整',
            res: null,
            q: '请将参数填写完整',
            resq: null,
          };
        }
        const M = math
          .evaluate(`(${state.N} * (2 * ${state.t1} / 1000 + ${state.t2} / 1000 + 0.004)) / 8`)
          .toString();
        const sigmaB = math
          .evaluate(
            `(${M} * 1000 * 1000) / (1.5 * (3.14 * ${state.d} * ${state.d} * ${state.d}) / 32)`,
          )
          .toString();
        const q = math.evaluate(
          `sqrt((${sigmaB} / ${state.f4}) ^ 2 + (${this.result5.tao} / ${this.result5.fv}) ^ 2)`,
        );
        return {
          sigmaB,
          fb: state.f4,
          M,
          q,
          res: Compare(sigmaB, state.f4),
          resq: Compare(q, '1'),
        };
      },
    },
  });

export interface Count {
  /*
   * 杆件内力 D16 KN
   */
  N: string;
  /*
   * 销轴直径 D17 mm
   */
  d: string;
  /*
   * 销轴孔径 D18 mm
   */
  d0: string;
  /*
   * 连接耳板1厚 D19 mm
   */
  t1: string;
  /*
   * 连接耳板2厚 D20 mm
   */
  t2: string;
  /*
   * 连接耳板净边距 D21 mm
   */
  a: string;
  /*
   * 连接耳板净边距 D22 mm
   */
  b: string;
  /*
   * 连接耳板抗拉强度设计值 K16 N/mm2
   */
  f1: string;
  /*
   * 连接板承压强度设计值 K17 N/mm2
   */
  f2: string;
  /*
   * 连接耳板抗剪强度设计值 K18 N/mm2
   */
  f3: string;
  /*
   * 销轴抗剪强度设计值 K19 N/mm2
   */
  f4: string;
  /*
   * 销轴抗承压强度设计值 K20 N/mm2
   */
  f5: string;
  /*
   * 销轴剪切面数 K21 块
   */
  n: string;
  /*
   * 销轴抗弯强度设计值 K22 N/mm2
   */
  f6: string;
}
export interface Result1 {
  sigma: string;
  f: string;
  b1: string;
  res: boolean | null;
}
export interface Result2 {
  sigma: string;
  f: string;
  res: boolean | null;
}
export interface Result3 {
  tao: string;
  fv: string;
  Z: string;
  res: boolean | null;
}
export interface Result4 {
  sigmaC: string;
  fbc: string;
  res: boolean | null;
}
export interface Result5 {
  tao: string;
  fv: string;
  res: boolean | null;
}
export interface Result6 {
  sigmaB: string;
  fb: string;
  M: string;
  q: string;
  res: boolean | null;
  resq: boolean | null;
}
export default useCountStore();
