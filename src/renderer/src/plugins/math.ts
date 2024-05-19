import { create, all } from 'mathjs';

const math = create(all, {
  number: 'BigNumber',
  precision: 64,
});

export default math;
