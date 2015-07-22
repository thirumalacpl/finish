// JavaScript Document
	$(document).on('pageshow', '#details', function(){  

		assignValues();

function assignValues(){
			user_obja = JSON.parse(sessionStorage.getItem("currentobj"));
			var pri=user_obja.price;
			//alert(user_obja.nutri);
			$('.detailsimage').empty();
			$('.detailsimage').append('<img src="http://115.118.113.83/fish_web/images/' + user_obja.image +'">');
			$('#nutri').text(user_obja.nutri);
			$('#ingre').text(user_obja.ingre);
			$('#emplyee_id_twofu').text(user_obja.descriptiona);
			$('.emplyee_id_twofn').text(user_obja.fish_name);
			$('#emplyee_id_twofp').append(pri);
		}
			$(document).off('click', '#car').on('click','#car',function(){
				//$.mobile.changePage("cart.html", { transition: "none", changeHash: true, reverse: false });
				$.mobile.changePage($('#order'), { transition: "slide", changeHash: true, reverse: false });
				return false;

		});

			$(document).off('click', '#homep').on('click', '#homep', function() {
	sessionStorage.getItem.clear;
	//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
	$.mobile.changePage($('#home'), { transition: "slide", changeHash: true, reverse: false });
return false;
});

		
	});

