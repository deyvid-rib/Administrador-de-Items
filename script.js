let addButton = document.getElementById('add-button');
let removeButton = document.getElementById('remove-button');
let addInput = document.getElementById('add-input');
let removeInput = document.getElementById('remove-input');
let gameContainer = document.getElementById('game-container')
let itensContainer = document.getElementById('itens-container')

function mostrarInput(input){
    if (input == "add"){
        addInput.classList.toggle('flex-display');
        addInput.value = "";
    }
    else{
        removeInput.classList.toggle('flex-display');
        removeInput.value = "";
    }
}

function addItem(){
    let nomeItem = addInput.value;
    if (!document.getElementById(nomeItem)){
        if ((nomeItem != "") && (nomeItem != null) && (nomeItem != undefined)){
            itensContainer.innerHTML += `
            <div id="${nomeItem}" class="item">
                <p>${nomeItem}</p>
            </div>`
            addInput.value = "";
            addInput.focus();
            gameContainer.style.animation = "adicao 0.5s 1 normal";
            setTimeout(function(){
                gameContainer.style.animation = "";
            }, 500)
        }
    }
}

function removeItem(){
    let nomeItem = removeInput.value;
    let item = document.getElementById(nomeItem);
    if (item){
        item.remove();
        removeInput.value = "";
        removeInput.focus();
        gameContainer.style.animation = "remocao 0.5s 1 normal";
        setTimeout(function(){
            gameContainer.style.animation = "";
        }, 500)
    }
}

addInput.addEventListener('keyup', function(event){
    if (event.keyCode == 13){
        addItem();
    }
})

removeInput.addEventListener('keyup', function(event){
    if (event.keyCode == 13){
        removeItem();
    }
})