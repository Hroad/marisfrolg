var current=0;
	var tags=document.getElementById("pics").getElementsByTagName("li");
	var cats=document.getElementById("shuzi").getElementsByTagName("span");
	var setNextInterval=window.setInterval("setNext()",3000);
	
    function setNow(index){
		for(var i=0;i<tags.length;i++){
			tags[i].style.display="none";
			}
			tags[index].style.display="block";
		for(var j=0;j<cats.length;j++){
			cats[j].className="";
			}
			cats[index].className="on";
		}
	
	function setNext(){
			current++;
			if(current>=tags.length){
				current=0;
				}
				setNow(current);
			}
	function setMouseOver(index){
				window.clearInterval(setNextInterval);
				current=index;
				setNow(current);
				}