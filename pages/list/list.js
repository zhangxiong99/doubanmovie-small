// pages/list/list.js
const http=require('../../models/http');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },
  onLoad:async function (options) {
     var {index}=options;
     if(index==0){
      var inTheaters=await http.getInTheaters();
      var subjects=inTheaters.data.subjects;
      var movies=[];
      subjects.forEach(item=>{
        var obj={};
        obj.id=item.id;
        obj.title=item.title;
        obj.pic=item.images.small;
        obj.year=item.year;
        obj.subtitle=item.original_title;
        obj.average=item.rating.average;
        obj.author=item.directors[0].name;
        movies.push(obj)
      })
      this.setData({
        movies
      })
     }else if(index==1){
        var comingSoon=await http.getComingSoon();
        var subjects=comingSoon.data.subjects;
        var movies=[];
      subjects.forEach(item=>{
        var obj={};
        obj.id=item.id;
        obj.title=item.title;
        obj.pic=item.images.small;
        obj.year=item.year;
        obj.subtitle=item.original_title;
        obj.average=item.rating.average;
        obj.author=item.directors[0].name;
        movies.push(obj)
      })
      this.setData({
        movies
      })
     }else if(index==2){
        var top250=await http.getTop250();
        var subjects=top250.data.subjects;
        var movies=[];
      subjects.forEach(item=>{
        var obj={};
        obj.id=item.id;
        obj.title=item.title;
        obj.pic=item.images.small;
        obj.year=item.year;
        obj.subtitle=item.original_title;
        obj.average=item.rating.average;
        obj.author=item.directors[0].name;
        movies.push(obj)
      })
      this.setData({
        movies
      })
     }else{
        var usBox=await http.getUsBox();
        var subjects=usBox.data.subjects;
        var movies=[];
      subjects.forEach(item=>{
        var obj={};
        obj.id=item.subject.id;
        obj.title=item.subject.title;
        obj.pic=item.subject.images.small;
        obj.year=item.subject.year;
        obj.subtitle=item.subject.original_title;
        obj.average=item.subject.rating.average;
        obj.author=item.subject.directors[0].name;
        movies.push(obj)
      })
      this.setData({
        movies
      }) 
     }
  },

})