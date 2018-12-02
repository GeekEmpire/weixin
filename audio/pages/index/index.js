//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    // wx.pauseBackgroundAudio({
    //   sucess:function(){
    //     //success
    //   },
    //   fail:function(){

    //   },
    //   complete:function(){

    //   }
    // });
   
   wx.stopBackgroundAudio({
     success:function(){
       console.log("-----1111-----")
     }
   })
  },
  onLoad: function () {
    wx.onBackgroundAudioPlay(function(){
      console.log("-----")
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady:function(){
    wx.playBackgroundAudio({
      dataUrl: 'http://fs.w.kugou.com/201808201134/31709ef4b8aa83157ed38adad55de635/G118/M00/0C/03/tg0DAFow0cuAQNY1ADdKWhYQeuc208.mp3',

    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})