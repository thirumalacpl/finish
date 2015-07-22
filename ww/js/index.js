// JavaScript Document
	$(document).on('pagecreate', '#login', function(){ 
        //alert('test'); 
        if(sessionStorage.getItem("logged_in")=="1"){
              // $.mobile.changePage("home.html", { transition: "slide", changeHash: true, reverse: false }); 
              $.mobile.changePage($('#home'), { transition: "slide", changeHash: true, reverse: false }); 
        }

        $(document).off('click', '#submit').on('click', '#submit', function() { // catch the form's submit event

            if($('#usernameb').val().length > 0 && $('#passwordb').val().length > 0){
				console.log($('#check-user').serialize());
                    $.ajax({url: 'http://staging.eimpressive.com/slimfish/index1.php',
                        data:$('#check-user').serialize(),
                        type: 'post',                   
                        async: 'true',
						crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {

						$('body').addClass('ui-loading');
                        },
                        complete: function() {
                        },
                        success: function (result) {
							console.log(result);
							//console.log(result[6].firstname);
							if(result[0]){
                            sessionStorage.setItem("logged_in","1");
                            
							//sessionStorage.setItem("user_data",JSON.stringify(result[1]));
							//sessionStorage.setItem("plant_data",JSON.stringify(result[2]));
							//sessionStorage.setItem("category_data",JSON.stringify(result[3]));
							//sessionStorage.setItem("activity_data",JSON.stringify(result[4]));
                            sessionStorage.setItem("usera_data",JSON.stringify(result[1]));
                             sessionStorage.setItem("fishkg_data",JSON.stringify(result[2]));
                             //alert(result[2]);
                            //sessionStorage.setItem("users_data",JSON.stringify(result[6]));
							$.mobile.loading().hide();
							// $.mobile.changePage("home.html", { transition: "slide", changeHash: true, reverse: false }); 
                            $.mobile.changePage($('#home'), { transition: "slide", changeHash: true, reverse: false }); 
							} else {
							$.mobile.loading().hide();

								alert("username or password entered is invalid");	
							}

							return false;
                        },
                        error: function (request,error) {
				console.log(error);
				console.log(request);
                            // This callback function will trigger on unsuccessful action                
                            alert('Network error has occurred please try again!');
                        }
                    });                  
            } else {
                alert('Please fill all necessary fields');
            }           
            return false; // cancel original event to prevent form submitting
        });    
		
		

 $(document).off('click', '#register_btn').on('click', '#register_btn', function() { // catch the form's submit event
            //alert('sri');
            if($('#firstnameb').val().length > 0 && $('#lastnameb').val().length > 0 && $('#usernameb').val().length > 0 && $('#passwordb').val().length > 0 && $('#emailidb').val().length > 0 ){
                usersdata = JSON.parse(sessionStorage.getItem("users_data"));
                console.log($('#register').serialize());
                    $.ajax({url: 'http://staging.eimpressive.com/slimfish/indexfish.php',
                        data:$('#register').serialize(),
                        type: 'post',                   
                        async: 'true',
                        crossDomain: true,
                        dataType: 'json',
                        beforeSend: function() {
                            $('body').addClass('ui-loading');

                        },
                        complete: function() {
                            $.mobile.loading().hide();// This will hide ajax spinner
                        },
                        success: function (result) {
                           
                            if(result[0]){
                                alert('details submitted successfully');
                                $("#forgot").trigger('reset');
                                $('#popupLogin').popup('close'); 
                            }else {
                                alert('incorrect details provided');
                            }
                            return false;
                        },
                        error: function (request,error) {
                        console.log(error);
                        console.log(request);
                        alert('Network error has occurred please try again!');
                        }
                    });                  
            } else {
                alert('Please fill all necessary fields');
            }           
            return false; 
        });   
		
        });




       
		

		

