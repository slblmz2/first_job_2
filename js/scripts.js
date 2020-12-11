$(document).ready( () => {
    $("#design").click( ( event ) => {
		console.log("what");
		$(".carousel").carousel(0);
		$(".carousel").carousel('pause');
		$("#other").removeClass('active')
		$("#mcycle").removeClass('active')
		$("#color").removeClass('active')
		$("#design").addClass('active');
    });
    $("#color").click( ( event ) => {
		$(".carousel").carousel(1);
		$(".carousel").carousel('pause');		
		$("#other").removeClass('active')
		$("#mcycle").removeClass('active')
		$("#design").removeClass('active')
		$("#color").addClass("active");
    });
	$("#mcycle").click( ( event ) => {
		$(".carousel").carousel(2);
		$(".carousel").carousel('pause');
		$("#other").removeClass('active')
		$("#color").removeClass('active')
		$("#design").removeClass('active')
		$("#mcycle").addClass("active");
    });
    $("#other").click( ( event ) => {
		$(".carousel").carousel(3);
		$(".carousel").carousel('pause');
		$("#color").removeClass('active')
		$("#mcycle").removeClass('active')
		$("#design").removeClass('active')
		$("#other").addClass("active");
    });
});

const myFunction = () => {
	console.log('hello');
	for(let i = 0; i<10; i++);
		$('.gallery-top').css('margin' `${i}rem`);
		DelayNode()
	console.log('added');
}

	