let status = {
  msg: '请求成功',
  code: 1000
}

// mock详细数据
let data = {
  'parkFeeParkType': {
    status: status,
    dataList: [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }]
  },
  'getCarList': {
    status: status,
    dataList: [{
      car_id: '1',
      car_no: '粤A12341',
      store_name: '客村店'
    }, {
      car_id: '2',
      car_no: '粤B9YHD7',
      store_name: '太平洋店'
    }]
  },
  'getOrderList': {
    status: status,
    dataList: [{
      order_id: '1',
      order_no: '12345678'
    }]
  }
}

export default data