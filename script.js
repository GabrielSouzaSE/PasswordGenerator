const inputQtdCaracteres = document.querySelector(".numeroDeCaracteres");
const resultado = document.querySelector(".resultado");
const formulario = document.querySelector(".formulario");

class GeradorDeSenha {
  constructor() {
    this.eventos();
  }

  eventos(e) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      this.valoresCheckbox();
      this.geraSenha();
    });
  }

  valoresCheckbox() {
    const checkboxValues = formulario.querySelectorAll(".checkbox");
    const arrayValoresCheckbox = [];

    for (let i = 0; i < checkboxValues.length; i++) {
      if (checkboxValues[i].checked) {
        arrayValoresCheckbox.push(checkboxValues[i].value);
      }
    }
    return arrayValoresCheckbox;
  }

  geraSenha() {
    const numberValues = document.querySelector(".numeroDeCaracteres").value;

    (this.number = "0123456789"),
      (this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"),
      (this.lowercase = "abcdefghiklmnopqrstuvwxyz"),
      (this.simbolos = "*+?^$&()-/[]!;~#@_");

    if (numberValues.length < 1) {
      alert("Digite a quantidade de caracteres!");
      return false;
    }

    this.ValoresCheckbox = this.valoresCheckbox();
    if (this.ValoresCheckbox.length == 0) {
      alert("Selecione pelo menos um tipo de caractere!");
      return false;
    }
    this.ValoresCheckbox = this.ValoresCheckbox.toString();
    this.ValoresCheckbox = this.ValoresCheckbox.replace(/,/g, " + ");
    this.ValoresCheckbox = eval(this.ValoresCheckbox);

    const gerador = (length, wishlist) =>
      Array.from(crypto.getRandomValues(new Uint32Array(length)))
        .map((x) => wishlist[x % wishlist.length])
        .join("");

    resultado.innerHTML = gerador(
      inputQtdCaracteres.value,
      this.ValoresCheckbox
    );

    let blob = new Blob([resultado.innerHTML], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "Gerador de Senha" + ".txt");
  }
}

const senha = new GeradorDeSenha();
