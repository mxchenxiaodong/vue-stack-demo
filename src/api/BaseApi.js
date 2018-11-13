import expense from './expense'
import car from './car'
import order from './order'

//汇总各分类api，统一暴露方法出去
export default {
  expense: expense,
  car: car,
  order: order
}