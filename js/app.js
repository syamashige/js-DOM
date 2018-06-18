/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var nameElem = document.getElementById("name1");
nameElem.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var positionElem = document.getElementById("position2");
positionElem.innerHTML = "Project Manager";


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var aliasElem = document.getElementById("alias3");
aliasElem.innerHTML = "Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var favSongElem = document.getElementsByClassName("profile");
favSongElem[0].innerHTML = "[Insert Song Name Here]";


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var quoteElem = document.getElementsByClassName("profile");
quoteElem[1].innerHTML = "[Insert Quote Here]";


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var newAliasElem = document.getElementsByClassName("alias");
newAliasElem[2].innerHTML = "[Insert Fave Character Here]";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var peterElem = document.createElement("div");
peterElem.id = "name7";
peterElem.innerHTML = "Peter Griffin";
nameParent.appendChild(peterElem);

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var timElem = document.createElement("div");
timElem.id = "alias8";
timElem.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(timElem);



//Final Boss
/*9. Create your own profile.*/

var profilePhotoElem = document.getElementsByTagName("img");
profilePhotoElem[8].src = "https://cdn.thisiswhyimbroke.com/images/pet-hoodies.jpg";

var myProfileDiv = document.getElementsByClassName("block3 col-sm-4");
var profileNameElem = document.createElement("div");
profileNameElem.className = "name";
profileNameElem.innerHTML = "Hoodie Cat";
myProfileDiv[2].appendChild(profileNameElem);

var profilePositionElem = document.createElement("div");
profilePositionElem.className = "position";
profilePositionElem.innerHTML = "Crazy Cat Lady";
myProfileDiv[2].appendChild(profilePositionElem);

var profileAliasElem = document.createElement("div");
profileAliasElem.className = "alias";
profileAliasElem.innerHTML = "Gotta Pet 'Em All";
myProfileDiv[2].appendChild(profileAliasElem);

var newProfileElem = document.createElement("div");
newProfileElem.className = "profile";
newProfileElem.innerHTML = '"There are two means of refuge from the miseries of life: music and cats." - Albert Schweitzer';
myProfileDiv[2].appendChild(newProfileElem);


