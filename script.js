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

    var valid = false;

    if (document.getElementsByClassName("comNumeros checkbox").checked) {
      valid = true;
    } else if (
      document.getElementsByClassName("comMaiusculas checkbox").checked
    ) {
      valid = true;
    } else if (
      document.getElementsByClassName("comMinuculas checkbox").checked
    ) {
      valid = true;
    } else if (
      document.getElementsByClassName("comSimbolos checkbox").checked
    ) {
      valid = true;
    }

    if (valid) {
      alert("Sucesso");
      for (let i = 0; i < checkboxValues.length; i++) {
        if (checkboxValues[i].checked) {
          arrayValoresCheckbox.push(checkboxValues[i].value);
        }
      }

      return arrayValoresCheckbox;
    } else {
      alert("Selecione pelo menos uma opção!");

    }
  }

  geraSenha() {
    (this.number = "0123456789"),
      (this.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ"),
      (this.lowercase = "abcdefghiklmnopqrstuvwxyz");
    this.simbolos = "*+?^$&()-/!;~[]#@_";

    this.ValoresCheckbox = this.valoresCheckbox();
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
