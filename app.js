const botaoSortear = document.querySelector("div.box button")
var nomeSorteado = document.querySelector("div.box h1")
var roleta = ['Marcelo', 'André Pego','Dalila','Luiz Carlos','Loren','Lara Aniceto','Lara Grobério','Tatiana Negris', 'Thalmo','Eliz','Borgo','Willian','Roberta','Mila','Dayse','Evilasio','Maria Luiza','Celeste','Duque','Ricieri','Verônica','Kézia','Luiz Otávio Calado','Henrique Henning', 'Amanda Schaffert','Kamilla','Priscila','Lucas Oliveira','Luana Galvani','Alê Mariani', 'Alessandro Abreu','Luiz Roberto','Lilian', 'Rayza']


botaoSortear.addEventListener("click", () => {
    nomeSorteado.innerHTML = "O danzarino sorteado é " + roleta[Math.floor(Math.random() * roleta.length)]
}) 

