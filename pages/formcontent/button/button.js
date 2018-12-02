// pages/button/button.js
var types = ['default', 'primary', 'warn']
var pageObject= {
  data:{
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    loading: false,
    plain: false
  },
  setDisabled:function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain:function(e){
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading:function(e){
    this.setData({
      loading: !this.data.loading
    })
  },
  onGotUserInfo:function(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  }
}
for(var i=0;i<types.length;++i)
{
  (function(type){
    pageObject[type] = function(e){
      var key = type + 'Size'
      var changeData={}
      changeData[key] = this.data[key] === 'default'?'mini':'default'
      this.setData(changeData)
    }
  })(types[i])
}


Page(pageObject)