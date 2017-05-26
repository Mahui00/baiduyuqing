// //竖屏轮播
$(function () {
    var fullpage=$('.fullpage');
    var lis=$('.point li');
    var zuoD=$('.wrap .tittle');
    var ship=$('.bottom .ship');
    // console.log(zuoD);
    var youD=$('.wrap .youD');
    var slides=fullpage.children();
    var state={
        vh:$(window).height(),
        currentSlide:0,
        flag:true
    };
    function displayCurrent(){
    	lis.removeClass('hui');
    	zuoD.removeClass('active');
    	youD.removeClass('active');
    	if(state.currentSlide==0){
    		ship.toggleClass('active');
    	}else{
    		zuoD.eq(state.currentSlide).addClass('active');
    		youD.eq(state.currentSlide).addClass('active');	
    	}

    	lis.eq(state.currentSlide).addClass('hui');
    	fullpage.css('transform','translate3d(0,'+ -state.currentSlide*state.vh +'px,0)');
    }
    function next(){
    	state.flag=false;
    	state.currentSlide=state.currentSlide+1>3?0:state.currentSlide+1;
    	displayCurrent();
    }
    function prev(){
    	state.flag=false;
    	state.currentSlide=state.currentSlide-1<0?3:state.currentSlide-1;
    	displayCurrent();
    }
    var handlemousewheel=function(e){
    	if(e.originalEvent.wheelDeltaY<0){
    		if(state.flag){
    			next();
    		}
    	}else{
    		if(state.flag){
    			prev();
    		}
    	}
    }
    var handletransitionend=function(){
    	state.flag=true;
    	// alert(state.flag)
    }
    var onresize=function(){
    	state.vh=$(window).height();
    }
    $(window).on('wheel',handlemousewheel);
    fullpage.on('transitionend',handletransitionend);
    $(window).on('resize',onresize);
//向下箭头
	var btns=$('.bottom .arrow');
	 btns.on('click',function(){
	 	next();
	 })
//point
	 lis.on('click',function(){
	 	var i=$(this).index();
	 	state.currentSlide=i;
	 	displayCurrent();
	 })



})



// $(function () {
//         var box=$('.fullpage');
//         // var lis=box.children();
//         var current=0;
//         var vh=$(window).height();
//         var flag=true;
//         function move(n) {
//             box.css('transform','translate3d(0,'+ -n*vh +'px,0)');
//           }   
//           $(window).on('wheel',function (e) {
//                 // console.dir(e)
//             if(e.originalEvent.wheelDeltaY<0){
//                 if(flag){
//                     current=current+1>3?0:current+1;
//                    console.log(current);
//                     move(current);
//                     flag=false;
//                 }

//             }else{
//                 if(flag){
//                     current=current-1<0?3:current-1;
//                    console.log(current);
//                     move(current);
//                     flag=false;
//                 }
//             }
//         })
//         box.on('transitionend',function () {
//             flag=true
//         })
//         $(window).on('resize',function () {
//             vh=$(window).height();
//         })
//     })