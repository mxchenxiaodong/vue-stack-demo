import Mock from 'mockjs'
import data from './mockDate'

// URL匹配mock数据
Mock.mock('/api/expense/park_fee_park_type', data.parkFeeParkType)
Mock.mock('/api/cars', data.getCarList)
Mock.mock('/api/orders', data.getOrderList)
Mock.mock('/api/milestones', data.getMilestoneList)