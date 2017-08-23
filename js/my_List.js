var my_List=function (){
	var page=1;
	var  newsList=document.getElementById("newsList");
	mui.init({
            		 pullRefresh:{
            			container:"#newsList",
            			down:{
            				style:'circle',
            				color:'red',
            				height:50,
            				callback:getNewsList
            			}
            		}
       });
	function init(){
		
		getNewsList();
	}
	function getNewsList(){
		//alert("1");
		var html ='';
		var arr =[];	
		mui.ajax("http://hoa.hcoder.net/index.php",{
			data:{
				user:'hcoder',
				pwd:'hcoder',
				m:'mediaList',
//				cate:
				page:page
			},
			dataType:'text',
			type:'get',
			success:function(data){
				
				 arr = data.split('--hcSplitor--');
				for(var i=0;i<arr.length;i++){
					var item = arr[i].split('--hcListSplitor--');
					html+='<ul class=\"mui-table-view\">'+
						'<li class=\"mui-table-view-cell mui-media\">'+
							'<a href=\"javascript:;\">'+
								'<img class=\"mui-media-object mui-pull-left \" src="'+item[1]+'\" />'+
					  			 '<div class=\"mui-media-body\">'+item[2]+
					   					'<p class=\"mui-ellipsis\"></p>'+
					   				'</div>'+
					   			+'</a>'+
						'</li>'+
					'</ul>';
				}
		mui('#newsList').pullRefresh().endPulldown();
				newsList.innerHTML=html;
			},
			error:function(xhr,type,errorThrown){
				mui.toast(errorThrown);
			mui('#newsList').pullRefresh().endPulldown();
			}
		});
	}
	return init;
}();
my_List();