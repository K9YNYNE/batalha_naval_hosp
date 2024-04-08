//timer
let minutes = 0;
let seconds = 0;
let timer = document.getElementById("display");

setInterval(function() {
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  timer.textContent= `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}, 1000);
let imageGrid = document.getElementById('grid');
let images = [];
//gerar a grid
for (let i = 0; i < 10; i++) {
  let row = imageGrid.insertRow();
  for (let j = 0; j < 10; j++) {
    let cell = row.insertCell();
    let img = document.createElement('img');
    img.src = 'Fire-icon.png';
    img.id = (i * 10 + j);
    cell.appendChild(img);
    images.push(img);
  }
}
//variavel da pontuação
    var pontu = 1000;
//função para sortear o valor da celula(qual navio ou agua)
for (let img of images) {
  img.addEventListener('click', function() {
    const numerovar = Math.floor(Math.random() * 10) + 1;
    this.removeEventListener('click', arguments.callee);
    
//switchcasepara definir o src e pontuação de cada valor sorteado;
    switch (numerovar) {
        case 1:
          img.src = 'Ship-1.png';
          pontu = pontu + 100;
          break;
        case 2:
          img.src = 'Ship-1.png';
          pontu = pontu + 100;
          break;
        case 3:
          img.src = 'Ship-1.png';
          pontu = pontu + 100;
          break;
        case 4:
          img.src = 'Ship-2.png';
          pontu = pontu + 200;
          break;
          case 5:
          img.src = 'Ship-2.png';
          pontu = pontu + 200;
          break;
          case 6:
          img.src = 'Ship-3.png';
          pontu = pontu + 500;
          break;
          case 7:
          img.src = 'wave.png';
          pontu = pontu -250;
          break;
          case 8:
          img.src = 'wave.png';
          pontu = pontu -250;
          break;
          case 9:
          img.src = 'wave.png';
          pontu = pontu -250;
          break;
          case 10:
          img.src = 'wave.png';
          pontu = pontu -250;
          break;
          case 11:
          img.src = 'wave.png';
          pontu = pontu -250;          
      }      
      //exibir a pontuação no html
      document.getElementById("pontuacao").innerHTML = pontu;
      //verificar se ganhou ou perder
      if (pontu < 0) {
        function redirect(){
          location.replace('perdeu.html');
      }
      redirect() = true;
      } else if (pontu > 2500) {
        function redirect(){
            location.replace('venceu.html');
        }
        redirect() = true;
      }
  });
};