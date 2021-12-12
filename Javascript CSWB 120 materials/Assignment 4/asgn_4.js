var $ = function (id)
{
    return document.getElementById(id);
}

//CURRENT PROGRESS:
//-border works properly, it only appears for the clicked image
//-keep working on the showList function (remember to uncomment at bottom)
//-make sure names are being added to BeatlesArray properly
//-organize final message and loop

//defining BeatlesArray as a global variable
var BeatlesArray;

//defining empty string to concatenate to with our loop 
var finalString = "";

//each get[Beatle] function adds their name to the end of the array and configures borders for all images
//(yellow border around selected Beatle, removes borders around all other Beatles)
var getJohn = function()
{
	BeatlesArray.push("John");
	this.border = "4px";
	this.style.color = "yellow";
	
	$("paul").border = "0px";
	$("george").border = "0px";
	$("ringo").border = "0px";
}

var getPaul = function()
{
	BeatlesArray.push("Paul");
	this.border = "4px";
	this.style.color = "yellow";
	
	$("john").border = "0px";
	$("george").border = "0px";
	$("ringo").border = "0px";
}

var getGeorge = function()
{
	BeatlesArray.push("George");
	this.border = "4px";
	this.style.color = "yellow";
	
	$("john").border = "0px";
	$("paul").border = "0px";
	$("ringo").border = "0px";
}

var getRingo = function()
{
	BeatlesArray.push("Ringo");
	this.border = "4px";
	this.style.color = "yellow";
	
	$("john").border = "0px";
	$("paul").border = "0px";
	$("george").border = "0px";
}

//showList function will iterate through our array and construct our finalString
var showList = function()
{
	for(cntr = 0; cntr < BeatlesArray.length; cntr++)
	{
		var counterString = String(cntr + 1);
		
		//if statement will trigger if it's the final index in the array (no comma)
		//else statement will trigger for all other index values 
		if(cntr == (BeatlesArray.length - 1))
		{
			finalString += counterString + ". " + BeatlesArray[cntr] + " ";
		}
		else
		{
			finalString += counterString + ". " + BeatlesArray[cntr] + ", ";
		}
	}
	//incorporating our concatenated string with the innerHTML
	$("list").innerHTML = finalString;
}

window.onload = function ()
{
   $("showlist").onclick = showList;  
   BeatlesArray = new Array();  //actually creating the array here
   
   //setting up a separate function for each instance where a Beatle is clicked
   //each function adds the name to the BeatlesArray and configures borders
   //used push function in order to append name to the end of the array 
   $("john").onclick = getJohn;
   $("paul").onclick = getPaul;
   $("george").onclick = getGeorge;
   $("ringo").onclick = getRingo;
}