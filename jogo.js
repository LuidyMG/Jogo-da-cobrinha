window.onload = function(){
	var canvas = document.getElementById("canvas");
	contexto = canvas.getContext("2d");

	document.addEventListener("keydown", function(e){
		console.log(e.keyCode);
		switch(e.keyCode){
			case 87:
				if (velocidadeY != 1) {
					velocidadeX = 0;
					velocidadeY = -1;
				}

				break;
			case 83:
				if (velocidadeY != -1) {
					velocidadeX = 0;
					velocidadeY = 1;
				}

				break;
			case 65:
				if (velocidadeX != 1) {
					velocidadeX = -1;
					velocidadeY = 0;
				}

				break;
			case 68:
				if (velocidadeX != -1) {
					velocidadeX = 1;
					velocidadeY = 0;
				}

				break;
			case 38:
				if (velocidadeY != 1) {
					velocidadeX = 0;
					velocidadeY = -1;
				}

				break;
			case 40:
				if (velocidadeY != -1) {
					velocidadeX = 0;
					velocidadeY = 1;
				}

				break;
			case 37:
				if (velocidadeX != 1) {
					velocidadeX = -1;
					velocidadeY = 0;
				}

				break;
			case 39:
				if (velocidadeX != -1) {
					velocidadeX = 1;
					velocidadeY = 0;
				};

				break;
		}
	});

	setInterval(jogo, 1000/10);
}

var cobra = [];
var posicaoX = 10;
var posicaoY = 10;
var velocidadeX = 0;
var velocidadeY = 0;
var grid = 20;
var tamanho = 5;
var comidaX = Math.floor(Math.random() * grid);
var comidaY = Math.floor(Math.random() * grid);

function jogo(){
	//Cobra
	posicaoX += velocidadeX;
	posicaoY += velocidadeY;
	
	contexto.fillStyle = "#000080";
	contexto.fillRect(0, 0, canvas.width, canvas.height);

	contexto.fillStyle = "white";
	for (var i = 0; i < cobra.length; i++) {
		contexto.fillRect(cobra[i].x * grid, cobra[i].y * grid, grid - 1, grid - 1);
		if(velocidadeX != 0 || velocidadeY != 0){
			if(cobra[i].x == posicaoX && cobra[i].y == posicaoY){
				contexto.fillStyle = "red";
				tamanho = 5;
			}
		}
	}

	cobra.push({x: posicaoX, y: posicaoY});

	while(cobra.length > tamanho){
		cobra.shift();
	}

	if(posicaoX < 0){
		posicaoX = grid;
	}
	if(posicaoX > 20){
		posicaoX = -1;
	}
	if(posicaoY < 0){
		posicaoY = grid;
	}
	if(posicaoY > 20){
		posicaoY = -1;
	}

	//Comida
	contexto.fillStyle = "yellow";
	contexto.fillRect(comidaX * grid, comidaY * grid, grid - 1, grid - 1);

	if (posicaoX == comidaX && posicaoY == comidaY) {
		tamanho ++;
		comidaX = Math.floor(Math.random() * grid);
		comidaY = Math.floor(Math.random() * grid);
	}
}
