// pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaName:null,
    priority:null,
    areaId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if(options.areaId!=null){
      wx.request({
        url: 'http://127.0.0.1:8080/me/getareabyid',
        data:{"areaId":options.areaId},
        method: "GET",
        success:function(res){
          that.setData({
            areaName:res.data.area.areaName,
            priority:res.data.area.priority,
            areaId:options.areaId
          })
        }
      })
    } else{
      that.setData({
        areaName:null,
        priority:null,
        areaId:null
      })
    }
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
  formSubmit: function(res){
    var that = this;
    wx.showModal({
      title: '确认对话框',
      content: '是否提交该信息？',
      success:function(ms){
        if(ms.confirm){
          var areaName = res.detail.value.areaName
          var priority = res.detail.value.priority
          console.log(that.data)
          if(that.data.areaId==null){
            wx.request({
              url: 'http://127.0.0.1:8080/me/addarea',
              data: {
                "areaName": areaName,
                "priority": priority
              },
              method: "POST",
              success: function (e) {
                var result = e.data.success;
                var textToast = "添加成功"
                if (result != true) {
                  textToast = "添加失败"
                }
                wx.showToast({
                  title: textToast,
                  icon: '',
                  duration: 2000
                });
                wx.redirectTo({
                  url: '../list/lists',
                })
              }
            })
          } else {
            var textToast = "链接错误";
            wx.request({
              url: 'http://127.0.0.1:8080/me/modifyarea',
              data:{
                "areaId":that.data.areaId,
                "areaName": areaName,
                "priority": priority
              },
              method:"POST",
              success: function(v){
                textToast="修改成功！"
              },
              fail:function(v){
                textToast="修改失败！"
              }
            })
            wx.showToast({
              title: textToast,
            }),
            wx.redirectTo({
              url: '../list/lists',
            })
          }
        }
      }
    })
  },
  formReset:function(res){
    this.setData({
      areaName:null,
      priority:null
    })
  }
})