$(document).ready(function(){

$('#footer a').click(function(e){
	$('#div1 img#main_img').hide().attr('src',$(this).attr('href'));
	
	$('#div1 img#main_img').load(function(){
		$(this).fadeIn(800);
	});
	e.preventDefault();
});



$('#right_arrow').click(function(){
	var y=$('#div1 img#main_img').attr('src');
	var x=parseInt($('#footer a[href='+y+']').attr('value'));
	if(x<6){
		var z=x+1;
	}
	else{
		z=x*0+1;
	}
	$('#div1 img#main_img').hide().attr('src',$('#footer a[value='+z+']').attr('href'));
	$('#div1 img#main_img').load(function(){
		$(this).fadeIn(800);
	});
});
$('#left_arrow').click(function(){
	var y=$('#div1 img#main_img').attr('src');
	var x=parseInt($('#footer a[href='+y+']').attr('value'));
	if(x>1){
		var z=x-1;
	}
	else{
		z=x*0+6;
	}
	$('#div1 img#main_img').hide().attr('src',$('#footer a[value='+z+']').attr('href'));
	$('#div1 img#main_img').load(function(){
		$(this).fadeIn(800);
	});
});




















});



