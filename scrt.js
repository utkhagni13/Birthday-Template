var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("p");
var str = " wishes Neeraj a very Happy Birthday";
var modal = document.getElementById('id01');

function inputLength()
{
	return input.value.length;
}

function createListElement()
{
	var li = document.createElement("p");
	var p = document.createElement("p");
	var b = document.createElement("button");
	p.innerHTML = str;
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	ul.appendChild(p);
	b.appendChild(document.createTextNode("Go to 1999"));
	ul.appendChild(b);
	b.onclick = function() {
		window.open("1999 Repo.html")
	}
	input.value = "";
}

function addListAfterClick()
{
	if(inputLength() > 0) {
	    createListElement();
	}
}

//function addListAfterKeypress(event)
//{
//	if(inputLength() > 0 && event.keyCode == 13) {
//	    createListElement();
//	}
//}
input.addEventListener("keypress", function(event) {
	if(input.value.length > 0 && event.which === 13)
	{
		createListElement();
	}
})

button.addEventListener("click", addListAfterClick);

//button.addEventListener("keypress", addListAfterKeypress);