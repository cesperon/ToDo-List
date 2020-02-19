
$('ul').children().first().addClass("done");
$('ul').children().first().next().addClass("done");
//uses text from both element and parent node in list when
//x in span is clicked
$('ul').on('click', 'span', function(){

	//fade out wont remove li so we must do so in function
	$(this).parent().fadeOut(500, function(){

		$(this).remove();
	});
	//stops the effect to parent elements
	event.stopPropagation();

});


$('ul').on('click', 'li', function(){

	$(this).toggleClass("done");

});

//variable to hold newly entered
var newTodo;
//stores value everytime the user hits enter
$('input[type ="text"]').keypress(function(event){
	//13 is java code for enter
	if(event.which === 13){
		newTodo = $(this).val();
		$('#list').append('<li><span><i class="fas fa-trash-alt display-none"></i></span>'+newTodo+'</li>');
		$(this).val("");
	}
});

$('.fa-pencil-ruler').on('click', function(){

	$('#newTodo').fadeToggle();

});







