$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		var txt = $("<li> </li>").html("<span> <i class='fas fa-trash'></i></span>" +" "+ $("input[type='text']").val());
		$("#ullist").append(txt);
		$("input[type='text']").val("");
	}
})

$("#ullist").on("click","span",function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();

})

$("#ullist").on("click","li",function(){
	$(this).toggleClass("complate");
	console.log("li tiklandi")
})

$("span").click(function(){
	console.log("ul tiklandi");
})

$(".fa-plus").click(function(){
	$("input[type='text']").toggle();
})