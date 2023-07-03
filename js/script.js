var charlist=document.getElementsByClassName("character-list");

var characters = [
    {Name:"Jodie",
    id:"001",
    Status: "Master",
    Ability:"Master of Persuasion and Closing The Deal",
    description:"Jodie can take money out of someone's pocket",
    imgSrc:"image/jodie.jpeg"
    },{
    Name:"Robert",
    id:"002",
    Status: "Master",
    Ability:"Master of Knowledge and Business Acumen",
    description:"Happy Birthday Master Robert and also Congraduations on your MBA",
    imgSrc:"image/robert.jpeg"
    }
];


characters.forEach(character => {
    var characterButton=document.createElement("button");
    characterButton.classList="character";
    characterButton.name=character.Name;
    characterButton.status=character.Status;
    characterButton.ability=character.Ability;
    characterButton.description=character.description;
    characterButton.innerHTML=`<img class="characterimage" src="${character.imgSrc}"><br>
                        <p class="charactername"> ${character.Status} ${character.Name}</p><br>
                        <p class="characterability">${character.Ability}</p>`;


        document.getElementById("character-list").appendChild(characterButton);

        characterButton.onclick=function(){
            if(document.querySelector('.character.active')){
                document.querySelector('.character.active').classList.remove('active');

                // <p class="theDescription">${character.description}</p>
            }
            characterButton.classList.add('active');
            document.querySelector('#close').classList.remove('hide');
            document.querySelector('.character-description').classList.remove('hide');
            document.querySelector('.character-description').innerHTML=`<img class="theimage" src="${character.imgSrc}"><br><br>
                                                                        <p class="thehistory">${character.description}</p><br><br>
                                                                        `;



        }

})



var closeDesc=document.getElementById("close");

closeDesc.onclick=function(){
    document.querySelector('.character-description').classList.add('hide');
    document.querySelector('#close').classList.add('hide');

}
