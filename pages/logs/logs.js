//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  bindFinishDeleteTap: function(e) {
   var newFinishTask = wx.getStorageSync('finishTask') || []
   for (let i = 0; i < newFinishTask.length; i++) {
      if (newFinishTask[i]['date'] == e.target.id) {
        newFinishTask.splice(i, 1);
        break;
      }
    }
    wx.setStorage({
      key: "finishTask",
      data: newFinishTask
    })
    this.setData({
      logs: newFinishTask
    })
    wx.showToast({
    title: '成功删除',
    icon: 'success',
    mask: true,
    duration: 1000
      })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('finishTask'))
      })
  }
})
