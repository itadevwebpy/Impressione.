function OcultaMenu() {
  document.getElementById("ulmenu").style.display = "none";
  document.getElementById("uloculto").style.display = "flex";
}

function mostraMenu() {
  document.getElementById("ulmenu").style.display = "flex";
  document.getElementById("uloculto").style.display = "none";
}


function addResponsavel() {
  const wrapper = document.querySelector(".responsavel-wrapper");
  const novo = document.createElement("div");
  novo.classList.add("responsavel");
  novo.innerHTML = `
    <label>Nome do Responsável:</label>
    <input type="text" name="responsavelExtra[]" placeholder="Outro Responsável">
    <label>Telefone:</label>
    <input type="tel" name="telefoneExtra[]" placeholder="(99) 9 9999-9999">
  `;
  wrapper.appendChild(novo);
}

function enviarWhatsapp(button) {
  const form = button.closest(".cracha-form");

  const nome = form.querySelector('input[name="nome"]').value;
  const nascimento = form.querySelector('input[name="nascimento"]').value;
  const cid = form.querySelector('input[name="cid"]').value;

  const pai = form.querySelector('input[name="pai"]').value;
  const telPai = form.querySelector('input[name="telpai"]').value;
  const mae = form.querySelector('input[name="mae"]').value;
  const telMae = form.querySelector('input[name="telmae"]').value;

  const extras = Array.from(
    form.querySelectorAll('input[name="responsavelExtra[]"]')
  ).map((input, i) => {
    const tel =
      form.querySelectorAll('input[name="telefoneExtra[]"]')[i]?.value || "";
    return `- ${input.value} (${tel})`;
  });

  const cordao = form.querySelector('select[name="cordao"]').value;

  const mensagem = `*Cadastro de Crachá:*\n
*Nome:* ${nome}
*Nascimento:* ${nascimento}
*CID:* ${cid}

*Responsáveis:*
- Pai: ${pai} (${telPai})
- Mãe: ${mae} (${telMae})
${extras.length > 0 ? extras.join("\n") : ""}

*Cordão Personalizado:* ${cordao}`;

  const url = `https://wa.me/559984091637?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

