var charlist=document.getElementsByClassName("character-list");

var characters = [
    {Name:"Jodie Hartanto",
    id:"001",
    Status: "Master",
    Ability:"Persuasion",
    description:"Jodie is a...",
    imgSrc:"image/jodie.jpeg"
    },{
    Name:"Robert Liono",
    id:"002",
    Status: "Master",
    Ability:"A+ Guarantee",
    description:"Robert is a...",
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
                        <p class="charactername">${character.Name}</p><br>
                        <p class="characterstatus">${character.Status}</p>
                        <p class="characterability">${character.Ability}</p>`;


        document.getElementById("character-list").appendChild(characterButton);

        characterButton.onclick=function(){
            if(document.querySelector('.character.active')){
                document.querySelector('.character.active').classList.remove('active');
            }
            characterButton.classList.add('active');
            document.querySelector('#close').classList.remove('hide');
            document.querySelector('.character-description').classList.remove('hide');
            document.querySelector('.character-description').innerHTML=`${character.description}`;

        }

})



var closeDesc=document.getElementById("close");

closeDesc.onclick=function(){
    document.querySelector('.character-description').classList.add('hide');
    document.querySelector('#close').classList.add('hide');

}
