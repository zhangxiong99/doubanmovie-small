// pages/detail/detail.js
const http=require('../../models/http')
Page({

  data: {
    movies:{}
  },

  onLoad:async function (options) {
    var {id}=options;
    var res=await http.getSubject(options.id);
    var movies=res.data;
    this.setData({
      movies
    })
  
  },


})