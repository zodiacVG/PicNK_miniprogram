// pages/login/login.js
const db = wx.cloud.database();
const userInfo = db.collection('userInfo');
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getUserInfo: function(result){
    wx.cloud.callFunction({
      name: "getOpenid",
      complete: res => {
        userInfo.where({
          _openid: res.result.openId
        }).get().then(res => {
          db.collection('userInfo').doc(res.data[0]._id).update({
            data: {
              nickName: result.detail.userInfo.nickName,
              avatarUrl: result.detail.userInfo.avatarUrl,
              gender: result.detail.userInfo.gender,
            },
          }).then(res => {
            wx.showToast({
              title: '登陆成功 正在跳转',
              icon: 'success',
              success: res2 => {
                wx.switchTab({url: "../home/home"})
              }
            })
          })
        })
      }
    })
  }
  
})