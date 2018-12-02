//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  getInformation:function(){
    var logistics = ["YD", "1111111111"]
    //数据内容
    var RequestData = "{'OrderCode':'','ShipperCode':'" + logistics[0] + "','LogisticCode':'" + logistics[1] + "'}"
    //utf-8编码的数据内容
    console.log(RequestData)
    var RequestDatautf = encodeURI(RequestData)
    console.log("RequestDatautf:" + RequestDatautf)
    //签名
    console.log(RequestData + 'apikey')
    var DataSign = encodeURI(util.Base64((util.md5(RequestData + 'apikey'))))
    console.log("DataSign:" + DataSign)
    if (logistics != null) {
      wx.request({
        url: 'https://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx',
        data: {
          //数据内容(进行过url编码)
          'RequestData': RequestDatautf,
          //电商ID
          'EBusinessID': '商户id',
          //请求指令类型：1002
          'RequestType': '1002',
          //数据内容签名把（请求内容（未编码）+ApiKey）进行MD5加密，然后Base64编码，最后进行URL（utf-8）编码
          'DataSign': DataSign,
          //请求、返回数据类型： 2-json；
          'DataType': '2',
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res)
          that.setData({ data: res.data.Traces })
        }
      })
    }
  }

})