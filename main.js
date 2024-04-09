  //Selecione todos os elementos que correspondem ao seletor fornecido
function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  /*Verifique se existem elementos correspondentes ao seletor e se a instância solicitada existe*/
  if (elements.length > instance) {
    //Role até a instância especificada do elemento
    elements[instance].scrollIntoView({ behavior : 'smooth'});
  }
}

const link1 = document.getElementById("link1");

link1.addEventListener("click", () => {
  scrollToElement('#sobre');
})