import http from './index'

export default {
  getMilestoneList: (res) => {
    http.get('/api/milestones', res);
  }
}
