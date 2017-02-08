/**
 * Created by Administrator on 2017/1/19.
 */
angular.module('ionicApp.controllers', ['ionic']).controller('HomeTabCtrl', function($scope,$ionicSideMenuDelegate,$state) {
  $scope.gunchulai=function(){
    $ionicSideMenuDelegate.toggleRight();
    $state.go('shoucang');
  }
})
  .controller('toutiaoCrl',function($scope,$http,$state){
      $http.get('json/toutiao.json')
      .success(function(jsonDatas){
         $scope.datas=jsonDatas.result.list;
      });

    $scope.showDetail=function(url,title){
      console.log("url  "+url);
      console.log("title   "+title);
      var finalUrl=url;

      $state.go('tabs.toutiaoDetail',{url:finalUrl,title:title});

    }
  }).controller('DetailCtrl', function($scope,$stateParams) {
      $scope.title=$stateParams.title;
      $scope.url=$stateParams.url;
       var xx= $scope.url;
      ifa.setAttribute('src',xx);
}).controller('SCCtrl', function($scope,$rootScope,$ionicPopup) {
  $scope.showDelete=false;
  $scope.showReorder=false;


  $rootScope.datas=new Array();
  for (var i=0;i<=30;i++){
    $rootScope.datas.push({title:'呵呵'+i,id:i});
  }

  $rootScope.dropItem=function(i){
    $rootScope.datas.splice( $scope.datas.indexOf(i),1);
  }
  $rootScope.addItem=function(title){
    $rootScope.datas.push({title:title,id:$rootScope.datas.length});
      $ionicPopup.alert({
        template: '收藏成功！'
      });

  }
  $rootScope.moveItem=function(item, fromIndex, toIndex){
    //item 拖着的数据
    //fromIndex：从这个位置开始被改变
    //toIndex

    $rootScope.datas.splice($scope.datas.indexOf(item),1);
    $rootScope.datas.splice(toIndex,0,item);
  }


});
