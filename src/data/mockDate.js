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
  },
  'getMilestoneList': {
    status: status,
    dataList: [{
      id: 1,
      title: '2018-11-10',
      created_at: '2018-11-10',
      content: 'something here....watching movie...watching movie...watching movie...watching movie...watching movie...watching movie...watching movie...',
      tags: ['Life', 'Movie']
    },{
      id: 2,
      title: '2018-11-11',
      created_at: '2018-11-11',
      content: '我们命中注定要失去所爱之人，不然我们怎么知道他们在我们生命中有多重要。',
      tags: ['Time', 'Life']
    },{
      id: 3,
      title: '2018-11-15',
      created_at: '2018-11-15',
      content: '电影也应该尽量不直接言及悲伤和寂寞，而要把那份悲伤和寂寞表现出来。借助观众的想象力，让他们参与到电影中来。',
      tags: ['Life', 'Movie']
    },{
      id: 4,
      title: '2018-11-17',
      created_at: '2018-11-15',
      content: 'The page is a reading list sharing the best books to read in various categories based on many hours of reading and research. You’ll find more than 100 good books to read, organized by category.',
      tags: ['Life', 'Book']
    },{
      id: 5,
      title: '2018-11-19',
      created_at: '2018-11-19',
      content: 'watching movie....',
      tags: ['Life', 'Book']
    },{
      id: 6,
      title: '2018-11-21',
      created_at: '2018-11-21',
      content: 'watching movie....',
      tags: ['Life', 'Book']
    },{
      id: 7,
      title: '2018-11-23',
      created_at: '2018-11-15',
      content: 'something here....watching movie...watching movie...watching movie...watching movie...watching movie...watching movie...watching movie...',
      tags: []
    },{
      id: 8,
      title: '2018-11-25',
      created_at: '2018-11-25',
      content: 'something here....watching movie...watching movie...watching movie...watching movie...watching movie...watching movie...watching movie...',
      tags: ['Movie']
    }]
  }
}

export default data