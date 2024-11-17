function addRecommendation() {
    const name = document.getElementById("recommend_name");
    const message = document.getElementById("recommend_message");
    const recommendCard = document.getElementById('recommendation_card');

    if (message.value !== "") {
        
        // create new div element
        const newBox = document.createElement('div');
        //add box class to div
        newBox.classList.add('box');
        //create new paragraph
        const newParagraph = document.createElement('p');
        // asign user inout value to paragraph
        newParagraph.textContent = '"' + message.value + '"';
        //append paragraph to div
        newBox.appendChild(newParagraph);
        //append div to card
        recommendCard.appendChild(newBox);

        //clear old values
        name.value = "";
        message.value = "";

        // display success message to user
        showPopup(true);

    } else {
        alert("Please enter message");
    }
}

function closePopup() {
   document.getElementById("message_popup").style.display = "none";
}

function showPopup(staus) {
    if (staus) {
        document.getElementById("message_popup").style.display = "block";
    }
}