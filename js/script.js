const cepInput = document.querySelector("#cep");
const btnBuscar = document.querySelector(".buscar");
const btnNovaBusca = document.querySelector(".nova-busca");

const inputContainer = document.querySelector(".input-container");
const resultContainer = document.querySelector(".result-container");

btnBuscar.addEventListener("click", getInputValue);

function getInputValue() {
  const valorInput = cepInput.value;
  getDados(valorInput);
}

function getDados(cep) {
  const link = "https://viacep.com.br/ws/" + cep + "/json/";

  const endereco = fetch(link)
    .then((res) => res.json())
    .then((body) => {
      inputContainer.style.display = "none";
      resultContainer.style.display = "block";

      const logradouro = document.querySelector(".logradouro");
      const bairro = document.querySelector(".bairro");
      const localidade = document.querySelector(".localidade");
      const cep = document.querySelector(".cep");

      logradouro.nextElementSibling.innerText = body.logradouro;
      bairro.nextElementSibling.innerText = body.bairro;
      localidade.nextElementSibling.innerText = body.localidade + "/" + body.uf;
      cep.nextElementSibling.innerText = body.cep;
    });
}

btnNovaBusca.addEventListener("click", () => {
  resultContainer.style.display = "none";
  inputContainer.style.display = "block";
});

// bairro: "Centro"
// cep: "89251-000"
// complemento: ""
// ddd: "47"
// gia: ""
// ibge: "4208906"
// localidade: "Jaraguá do Sul"
// logradouro: "Avenida Getúlio Vargas"
// siafi: "8175"
// uf: "SC"
