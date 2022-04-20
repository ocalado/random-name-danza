const botaoSortear = document.querySelector("div.box button")
var nomeSorteado = document.querySelector("div.box h1")
var roleta = ['Geter','André Pego','Dalila','Luiz Carlos','Loren','Lara Aniceto','Lara Grobério', 'Thalmo','Eliz','Borgo','Willian','Roberta','Mila','Stéfani','Dayse','Manu','Evilasio','Maria Luiza','Celeste','Duque','Ricieri','Vitor','Verônica','Kézia','Luiz Otávio Calado','Henrique Henning', 'Amanda Schaffert','Kamilla', 'Alessandro', 'Priscila','Ana Beatriz','Lucas Oliveira','Alê Prandi','Alê Mariani', 'Alessandro Abreu','Luiz Roberto','Lilian']


botaoSortear.addEventListener("click", () => {
    nomeSorteado.innerHTML = "O danzarino sorteado é " + roleta[Math.floor(Math.random() * roleta.length)]
}) 

