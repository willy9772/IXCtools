let newDiv = document.createElement("div")

newDiv.setAttribute("id", "tools-section")
newDiv.style.position = "absolute"

newDiv.innerHTML = `


<div class="open-tools">
<img id="open-tools"
    src="https://icon-icons.com/downloadimage.php?id=120534&root=1880/PNG/512/&file=iconfinder-settings-4341324_120534.png"
    alt="">
</div>

<section id="tools" class="tools">
<div id="toolsheader" class="toolsheader">
    <h1>IXC Tools</h1>
    <div id="close-tools" class="close">
        <a class="closebutton" href="#"><span><strong>x</strong></span></a>
    </div>
</div>
<div class="functions">

    <h1>Escolha a função e aperte Ok!</h1>

    <select name="operacao" id="operacao">
        <option value="nomeOnu">Nomear ONU</option>
    </select>

    <button id="ok" class="Ok">Ok!</button>
</div>
<div class="footer">© William Gerhard</div>
</section>


<style>
	.tools {
		position: absolute;
		width: 350px;
		height: 200px;
		background-color: rgb(236, 236, 236);
		border-radius: 6px;
		margin: 0;
		padding: 0;
		color: white;
		font-family: montserrat, open-sans;
		text-align: center;
		visibility: hidden;

		border: 1px solid rgb(204, 204, 204);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.158);

		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;
		justify-content: center;
	}

	.open-tools {
		position: absolute;
	}

	#open-tools {
		height: 50px;
		border-radius: 100%;
		cursor: pointer;
	}

	.toolsheader h1 {
		margin: 0px 0;
		font-size: 15px;
	}

	.toolsheader {
		background: -webkit-gradient(linear,
				left top,
				left bottom,
				color-stop(0, #ebebeb, color-stop(1, #d5d5d5)));
		background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
		background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
		background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
		background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
		background: linear-gradient(top, #ebebeb, #d5d5d5);
		color: #4d494d;
		font-size: 11pt;
		line-height: 20px;
		text-align: center;
		width: 100%;
		height: 20px;
		border-top: 1px solid #f3f1f3;
		border-bottom: 1px solid #b1aeb1;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
	}

	.functions button {
		font-family: "montserrat", sans-serif;
		font-size: 16px;
		letter-spacing: 2px;
		text-decoration: none;
		text-transform: uppercase;
		color: #000;
		cursor: pointer;
		border: 2px solid;
		padding: 0.25em 0.5em;
		box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
		position: relative;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.functions button:active {
		box-shadow: 0px 0px 0px 0px;
		top: 5px;
		left: 5px;
	}

	.functions h1 {
		color: rgb(53, 53, 53);

	}

	@media (min-width: 768px) {
		.functions button {
			padding: 0.25em 0.75em;
		}
	}

	.close {
		background: #ff5c5c;
		font-size: 9pt;
		height: 11px;
		border: 1px solid #e33e41;
		border-radius: 50%;
		display: inline-block;

		padding-left: 8px;
		padding-top: 3px;
		position: absolute;
		left: 4px;
		top: 3px;
		line-height: 0px;
		cursor: pointer;
	}

	.close:active {
		background: #c14645;
		border: 1px solid #b03537;
	}

	.close:active .closebutton {
		color: #4e0002;
	}

	.closebutton {
		color: #820005;
		visibility: hidden;
		cursor: default;
	}

	.close:active {
		background: #c14645;
		border: 1px solid #b03537;
	}

	.footer {
		position: absolute;
		color: rgba(0, 0, 0, 0.356);
		bottom: 5px;
		right: 10px;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-o-user-select: none;
	}

	#operacao {
		background-color: rgb(214, 214, 214);
		color: rgb(24, 24, 24);
		border-radius: 5px;
		padding: 7px;
		width: 200px;

	}
</style>
<script>
	//Script
	(function () {


		const operacoes = [{
			operation: "nomeOnu",
			funcao: () => {

				console.log("executando funcao substituir nome da ONU")

				let input = document.getElementById("nome")

				let nomeC = document.getElementById("id_cliente_label").value.replace(/ /g, "_")
				let endereco = document.getElementById("endereco_cliente").value.replace(/ /g, "_")
				let numero = document.getElementById("numero_cliente").value.replace(/ /g, "_")
				let pon = document.getElementById("ponid").value.replace(/ /g, "_")

				nomeC = removerAcentos(nomeC)
				endereco = removerAcentos(endereco)

				let newName = pon + "_" + endereco + "_" + numero + "_" + nomeC

				document.getElementById("nome").value = newName
			}
		}]

		let operacao = document.getElementById("operacao")
		let okBtn = document.getElementById("ok")

		okBtn.addEventListener("click", executar)

		function executar() {
			console.log("executando")

			operacoes.forEach((op)=>{
				if (op.operation === operacao.value){
					console.log("sera executada a operacao " + op.operation)
					op.funcao()
				}
			})
		}

		function removerAcentos(str) {
			var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
			var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
			str = str.split('');
			var strLen = str.length;
			var i, x;
			for (i = 0; i < strLen; i++) {
				if ((x = accents.indexOf(str[i])) != -1) {
					str[i] = accentsOut[x];
				}
			}
			return str.join('');
		}

	})();
	// Responsividade
	(function () {

		let open_tools = document.getElementsByClassName("open-tools")[0]
		let tools = document.getElementById("tools")
		let close_tools = document.getElementById("close-tools")

		open_tools.addEventListener("click", show_tools)
		close_tools.addEventListener("click", hide_tools)

		function hide_tools() {
			tools.style.visibility = "hidden"
		}
		function show_tools() {
			tools.style.visibility = "visible"
		}

		dragElement(open_tools)
		dragElement(tools);

		function dragElement(elmnt) {

			var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			if (document.getElementById(elmnt.id + "header")) {
				/* if present, the header is where you move the DIV from:*/
				document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
			} else {
				/* otherwise, move the DIV from anywhere inside the DIV:*/
				elmnt.onmousedown = dragMouseDown;
			}

			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
				// get the mouse cursor position at startup:
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
				// call a function whenever the cursor moves:
				document.onmousemove = elementDrag;
			}

			function elementDrag(e) {
				e = e || window.event;
				e.preventDefault();
				// calculate the new cursor position:
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
				// set the element's new position:
				elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
				elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
			}

			function closeDragElement() {
				/* stop moving when mouse button is released:*/
				document.onmouseup = null;
				document.onmousemove = null;
			}
		}

	})()

</script>

`


document.body.appendChild(newDiv)