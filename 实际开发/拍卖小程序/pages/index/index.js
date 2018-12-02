Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {image:"../images/h/1.jpg",text:"和田玉"},
      {image:"../images/h/2.jpg",text:"情侣手环"},
      {image:"../images/h/3.jpg",text:"富豪手链"}
    ],
    contents:[
      { image:"../images/h/4.jpg",text:"古代磁盘"},
      { image: "../images/h/5.jpg", text: "黄金饰品" },
      { image: "../images/h/6.jpg", text: "古籍" },
      { image: "../images/h/7.jpg", text: "diy设计" }
    ],
    interval: 5000,
    duration: 1000
  },
  swiperChange: function(res){

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

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})