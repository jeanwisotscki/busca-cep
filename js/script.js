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

  const consultaCep = fetch(link)
    .then((res) => res.json())
    .then((endereco) => {
      if (endereco.cep != undefined) {
        inputContainer.style.display = "none";
        resultContainer.style.display = "block";

        const logradouro = document.querySelector(".logradouro");
        const bairro = document.querySelector(".bairro");
        const localidade = document.querySelector(".localidade");
        const cep = document.querySelector(".cep");

        logradouro.nextElementSibling.innerText = endereco.logradouro;
        bairro.nextElementSibling.innerText = endereco.bairro;
        localidade.nextElementSibling.innerText =
          endereco.localidade + "/" + endereco.uf;
        cep.nextElementSibling.innerText = endereco.cep;
      } else {
        alert("CEP Inválido");
      }
    })
    .catch((erro) => {
      alert("ERRO! CEP inválido ou não encontrado.");
    });
}

btnNovaBusca.addEventListener("click", () => {
  window.location.reload();
});

// bairro
// cep
// complemento
// ddd
// gia
// ibge
// localidade
// logradouro
// siafi
// uf
