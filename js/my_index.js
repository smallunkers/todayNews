var myIndex=function(){
	var navScroll=null;
	//初始化函数
	function init(){
		navScroll=mui(".mui-scroll");
		mui('.mui-scroll-wrapper').scroll({
      			 scrollY: false, //是否竖向滚动
				 scrollX: true, //是否横向滚动
				 startX: 0, //初始化时滚动至x
				 startY: 0, //初始化时滚动至y
				 indicators: true, //是否显示滚动条
				 deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
				 bounce: true //是否启用回弹
      	});
      	addListen();
      }
      	
      	function getInfo(){
      		
      	}
      	function addListen(){
      		mui(".mui-scroll ").on("tap","a" ,function(){
      			var index=this.getAttribute("index");
      			//mui.toast("1");
      			mui.toast(index);
      		});
      	}
	return init;
}();
myIndex();
