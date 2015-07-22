// JavaScript Document
	$(document).one('pageshow', '#home', function(){  
		assignValues();

function assignValues(){
	usera_array = 	JSON.parse(sessionStorage.getItem("usera_data"));	
			for(a=0;a<usera_array.length;a++){
				usera_obj = usera_array[a];
			//var cat='<li data-role="list-divider">Friday, October 8, 2010 <span class="ui-li-count">2</span></li><li><a href="two.html"><img src=""> <h2>Stephen Weber</h2> <p>Hey Stephen, if you're available at 10am tomorrow, we've got a meeting with the jQuery team.</p><p class="ui-li-aside"><strong>6:24</strong>PM</p> </a></li>';	
			var cat='<li><span class="ds"></span></li><li class="ui-li-has-thumb"><a href="#" class="ui-btn" onclick="callnext('+a+')"><img src="http://115.118.113.83/fish_web/images/'+usera_obj.image+'"><h2 class="lef">'+usera_obj.fish_name+'</h2><p class="lef" >'+usera_obj.short_desc+'</p><p class="ui-li-aside"><strong></strong></p></a></li>';
				$('#pag').append(cat);
				}
		}


				$(document).off('click', '#nex').on('click','#nex',function(){
				// $.mobile.changePage("details.html", { transition: "none", changeHash: true, reverse: true });
				$.mobile.changePage($('#details'), { transition: "slide", changeHash: true, reverse: false });
				return false;

		});

	
		
	});
	
	
	
	function ScaleContentToDevice() {
    scroll(0, 0);
    var headerHeight = $("#jqmHeader:visible").outerHeight();
    var footerHeight = $("#jqmFooter:visible").outerHeight();
    var viewportHeight = $(window).height();
       
    var content = $("#jqmContent:visible");
    var contentMargins =  content.outerHeight() - content.height();
    
    var contentheight = viewportHeight - headerHeight - footerHeight - contentMargins;
    
    content.height(contentheight);
};




		function onDeviceReady() {
		// Register the event listener	
			document.addEventListener("backbutton", onBackKeyDown, false);
			console.log('Device ready - register onBackKeyDown()');                
	   }

	   function onBackKeyDown() {
				var active_page = $( ":mobile-pagecontainer" ).pagecontainer( "getActivePage" );
				var id =active_page.page().attr('id');
				if (id==='pagetwo') 
				{
					if (confirm('Do you want to exit the app? If not, use the top left button to go to Previous Page?')==true)
					{
						//navigator.app.exitApp();
					}
				}else
				{
					navigator.app.backHistory();
				}
		}



		function callnext(index){
					//alert('no' + index);
					usera_obj = usera_array[index];
					sessionStorage.setItem("currentobj",JSON.stringify(usera_obj));
					//$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
					$.mobile.changePage($('#details'), { transition: "slide", changeHash: true, reverse: false });
					return false;

		}
