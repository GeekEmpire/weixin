// pages/text/text.js
var initData = "this is first line\nthis is second line"
var extraline = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:initData,
    space: ['**********', '**********', '**********', '**********']
  },
  add:function(e) {
    extraline.push('other line')
    this.setData({
      text: initData + '\n' + extraline.join('\n')
    })
  },
  remove:function(e){
    extraline.pop()
    this.setData({
      text: initData + '\n' + extraline.join('\n')
    })
  }
})