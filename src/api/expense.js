import http from './index'

export default {
  getParkFeeParkType: (res) => {
    http.get('/api/expense/park_fee_park_type', res);
  },

  postExpense: (data, res) => {
    http.post('/api/expense', data, res);
  }
}