// pages/home/home.js

// const db = wx.cloud.database();
// const userInfo = db.colloction('我命名的数据库的名字');
// const _ = db.command;

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
   * 页面跳转函数--分别跳转至约自习、约车、约跑步、约饭
   */
  gotoStudy: function(){
    wx.navigateTo({
      url: "../study/study"
    })
  },
  gotoRunning: function(){
    wx.navigateTo({
      url: "../running/running"
    })
  },
  gotoTaxi: function(){
    wx.navigateTo({
      url: "../taxi/taxi"
    })
  },
  gotoRepast: function(){
    wx.navigateTo({
      url: "../repast/repast"
    })
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

  }
})