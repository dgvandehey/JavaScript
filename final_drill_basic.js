
function getReceipt(){
	var text1="<h3>You Ordered:</h3>";
	var runningTotal=0;
	var sizeTotal=0;
	var sizeArray=document.getElementsByClassName("size");
	for(var i=0;i<sizeArray.length;i++){
		if(sizeArray[i].checked){
			var selectedSize=sizeArray[i].value;
			text1=text1+selectedSize+"<br>";
			}
		}
		if (selectedSize==="Personal Pizza"){
			sizeTotal=6;
		}else if(selectedSize==="Medium Pizza"){
			sizeTotal=10;
		}else if(selectedSize==="Large Pizza"){
			sizeTotal=14;
		}else if(selectedSize==="Extra Large Pizza"){
			sizeTotal=16;
		}
		runningTotal=sizeTotal;
		console.log(selectedSize+"=$"+sizeTotal+".00");
		console.log("size text1: "+text1);
		console.log("subtotal:$"+runningTotal+".00");
		getMeat(runningTotal,text1);
		getCheese(runningTotal,text1);
		getVeggies(runningTotal,text1);
		getSauce(runningTotal,text1);
		getCrust(runningTotal,text1)
		};
	function getMeat(runningTotal,text1){
		var meatTotal=0;
		var selectedMeat=[];
		var meatArray=document.getElementsByClassName("meats");
		for(var j=0; j<meatArray.length;j++){
			if(meatArray[j].checked){
				selectedMeat.push(meatArray[j].value);
				console.log("selected meat item:("+meatArray[j].value+")");
				text1=text1+meatArray[j].value+"<br>";
			}
		}
	var meatCount=selectedMeat.length;
	if (meatCount>1){
		meatTotal=(meatCount-1);
	}else{
		meatTotal=0;
	}
	runningTotal=(runningTotal+meatTotal);
	console.log("total selected meat items:"+meatCount);
	console.log(meatCount+"meat-1 free meat="+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="<h3>Total:<strong>$"+runningTotal+".00"+"</strong></h3>";
	};
function getCheese(runningTotal,text1){
		var cheeseTotal=0;
		var selectedCheese=[];
		var cheeseArray=document.getElementsByClassName("cheese");
		for(var h=0; h<cheeseArray.length;h++){
			if(cheeseArray[h].checked){
				var selectedCheese=cheeseArray[h].value;
				text1=text1+selectedCheese+"<br>";
		}
	}
		if (selectedCheese==="Regular"){
			cheeseTotal=0;
		}else if(selectedCheese==="No Cheese"){
			cheeseTotal=0;
		}else if(selectedCheese==="Extra Cheese"){
			cheeseTotal=3;
		}
		
		runningTotal=cheeseTotal;
		console.log(selectedCheese+"=$"+cheeseTotal+".00");
		console.log("cheese text1: "+text1);
		console.log("subtotal:$"+runningTotal+".00");
};
function getVeggies(runningTotal,text1){
		var veggiesTotal=0;
		var selectedVeggies=[];
		var veggiesArray=document.getElementsByClassName("veggies");
		for(var k=0; k<veggiesArray.length;k++){
			if(veggiesArray[k].checked){
				selectedVeggies.push(veggiesArray[k].value);
				console.log("selected veggies item:("+veggiesArray[k].value+")");
				text1=text1+veggiesArray[k].value+"<br>";
			}
		}
	var veggiesCount=selectedVeggies.length;
	if (veggiesCount>1){
		veggiesTotal=(veggiesCount-1);
	}else{
		veggiesTotal=0;
	}
	runningTotal=(runningTotal+veggiesTotal);
	console.log("total selected veggies items:"+veggiesCount);
	console.log(veggiesCount+"veggies-1 free veggies="+"$"+veggiesTotal+".00");
	console.log("veggies text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="<h3>Total:<strong>$"+runningTotal+".00"+"</strong></h3>";
	};
function getCrust(runningTotal,text1){
		var crustTotal=0;
		var selectedCrust=[];
		var crustArray=document.getElementsByClassName("crust");
		for(var m=0; m<cheeseArray.length;m++){
			if(crustArray[m].checked){
				var selectedCrust=crustArray[m].value;
				text1=text1+selectedCrust+"<br>";
		}
	}
		if (selectedCrust==="Plain Crust"){
			crustTotal=0;
		}else if(selectedCrust==="Garlic Butter Crust"){
			crustTotal=0;
		}else if(selectedCrust==="Cheese Stuffed Crust"){
			crustTotal=3;
		}else if(selectedCrust==="Spicy Crust"){
			crustTotal=0;
		}else if(selectedCrust==="Home Special Crust"){
			crustTotal=0;
		}
		runningTotal=crustTotal;
		console.log(selectedCrust+"=$"+crustTotal+".00");
		console.log("crust text1: "+text1);
		console.log("subtotal:$"+runningTotal+".00");
};
function getSauce(runningTotal,text1){
		var SauceTotal=0;
		var selectedSauce=[];
		var sauceArray=document.getElementsByClassName("sauce");
		for(var a=0; a<cheeseArray.length;a++){
			if(sauceArray[a].checked){
				var selectedSauce=SauceArray[a].value;
				text1=text1+selectedCrust+"<br>";
		}
	}
		if (selectedSauce==="Marinara Sauce"){
			sauceTotal=0;
		}else if(selectedSauce==="White Sauce"){
			sauceTotal=0;
		}else if(selectedSauce==="Barbecue Sauce"){
			sauceTotal=0;
		}else if(selectedSauce==="No Sauce"){
			sauceTotal=0;
		}
		runningTotal=sauceTotal;
		console.log(selectedSauce+"=$"+sauceTotal+".00");
		console.log("sauce text1: "+text1);
		console.log("subtotal:$"+runningTotal+".00");
};