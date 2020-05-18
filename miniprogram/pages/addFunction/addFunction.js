// pages/addFunction/addFunction.js

const code = `// 云函数入口函数
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}`

Page({

  data: {
    result: '',
    canIUseClipboard: wx.canIUse('setClipboardData'),
  },

  onLoad: function (options) {

  },

  copyCode: function() {
    wx.setClipboardData({
      data: code,
      success: function () {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  testFunction() {
    wx.cloud.callFunction({
      name: 'sum',
      data: {
        a:[{id:"activity",count:1},{id:"time",count:1588321800},{id:"start",count:[107.087989,29.855746]},{id:"end",count:[107.084519,29.851126]},{id:"wantsex",count:2},{id:"usersex",count:0}],
        b:[{id:"activity",count:1},{id:"time",count:1588323600},{id:"start",count:[107.094807,29.858106]},{id:"end",count:[107.088407,29.862690]},{id:"wantsex",count:1},{id:"usersex",count:1}]
      },
      success: res => {
        wx.showToast({
          title: '调用成功',
        })
        this.setData({
          result: JSON.stringify(res.result)
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '调用失败',
        })
        console.error('[云函数] [sum] 调用失败：', err)
      }
    })
  },

})

