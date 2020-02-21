// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     title:['正在热映','即将上映','TOP250','北美票房榜']
  },

 
  onLoad: function (options) {
    
  },
  handleClick(event){
    var {index}=event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/list/list?index='+index,
    })
  }

})