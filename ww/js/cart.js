// JavaScript Document
	$(document).one('pageshow', '#cart', function(){  

		assignValues();

function assignValues(){
			user_obja = JSON.parse(sessionStorage.getItem("currentobj"));
			var pri=user_obja.price;
			alert(user_obja.image);
			$('#cartimage').append('<img src="http://115.118.113.83/fish_web/images/' + user_obja.image +'">');
			$('#emplyee_id_twofu').text(user_obja.descriptiona);
			$('#emplyee_id_twofn').text(user_obja.fish_name);
			$('#emplyee_id_twofp').append(pri);
		}
			$(document).off('click', '#nex').on('click','#nex',function(){
				//$.mobile.changePage("cart.html", { transition: "none", changeHash: true, reverse: false });
				$.mobile.changePage($('#user'), { transition: "slide", changeHash: true, reverse: false });
				return false;

		});

		
	});


