console.log("Welcome to the app!");
showNotes();

let addBtn= document.getElementById('add-btn');

addBtn.addEventListener('click', function(e)
{
	let addTxt= document.getElementById("textar");
	let notes= localStorage.getItem('notes');
	if(notes==null)
	{
		noteObj= [];
	}
	else
	{
		noteObj= JSON.parse(notes);
	} 
	noteObj.push(addTxt.value);
	localStorage.setItem("notes", JSON.stringify(noteObj));
	addTxt.value= "";
	console.log(notes);
	showNotes();
})
function showNotes()
{
	let notes= localStorage.getItem('notes');
	if(notes==null)
	{
		noteObj= [];
	}
	else
	{
		noteObj= JSON.parse(notes);
	} 
	let html= "";
	noteObj.forEach(function(element, index){

		html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>

                        <button class="btn btn-primary">Edit</button>
    					<button id= "${index}" onclick= "deleteNote(this.id)" class="btn btn-primary mx-1">Remove</button>

                    </div>
                </div>`;
	});

	let notesElm= document.getElementById('notes');
	if(noteObj.length!=0)
	{
		notesElm.innerHTML= html;
	}
	else
	{
		notesElm.innerHTML= "Noting to show. Add your notes!";
	}
}


function deleteNote(index)
{
	let notes= localStorage.getItem('notes');
	if(notes==null)
	{
		noteObj= [];
	}
	else
	{
		noteObj= JSON.parse(notes);
	} 
	noteObj.splice(index,1);
	localStorage.setItem("notes", JSON.stringify(noteObj));
	showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})