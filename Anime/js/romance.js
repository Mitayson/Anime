
// Romance
const imagemRomance = ["assets/imagem0.jpg", "assets/imagem1.jpg", "assets/imagem2.jpg", "assets/imagem3.jpg", "assets/imagem4.jpg"];
const textRomance = ["shigatsu wa kimi no uso", "Kaguya-sama", "Kimi no na wa", "The Ancient Magus' Bride", "Sono Bisque Doll"];

let IndexRomance = 0;

function trocarImgRomance() {
    const imgElement = document.getElementById("imageRomance");
    IndexRomance = (IndexRomance + 1) % imagemRomance.length;
    imgElement.src = imagemRomance[IndexRomance];
}

function trocarTextRomance() {
    const paragraph = document.getElementById('paragraphRomance');
    paragraph.textContent = textRomance[IndexRomance];
}



// Ação

const imageAcao = ["assets/ajjk.jpg", "assets/aone.webp", "assets/ahxh.jpe", "assets/aaot.jpg", "assets/amob.jpg"];
const textAcao = ["Jujutsu Kaisen", "One Punch Man", "Hunter X Hunter", "Attack On Titan", "Mob Psycho 100"];

let IndexAcao = 0

function trocarImgAcao() {
    const imgElement = document.getElementById("imageAcao");
    IndexAcao = (IndexAcao + 1) % imagemRomance.length;
    imgElement.src = imageAcao[IndexAcao];
}


function trocarTextAcao() {
    const textElement = document.getElementById("textAcao");
    textElement.textContent = textAcao[IndexAcao]; 
}