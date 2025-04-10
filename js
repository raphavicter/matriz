let currentStep = 0;
const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function showStep(index) {
  steps.forEach((step, i) => {
    step.style.display = (i === index) ? 'block' : 'none';
  });
  // Atualiza visibilidade dos botões
  prevBtn.style.display = (index === 0) ? 'none' : 'inline-block';
  nextBtn.textContent = (index === steps.length - 1) ? 'Finalizar' : 'Avançar';
}

nextBtn.addEventListener('click', () => {
  // Se for a última pergunta, finalizar
  if (currentStep === steps.length - 1) {
    calcularResultados(); // função para processar respostas e mostrar entradas finais
  } else {
    // Validar que a pergunta atual foi respondida antes de prosseguir
    const radios = steps[currentStep].querySelectorAll('input[type="radio"]');
    const answered = [...radios].some(radio => radio.checked);
    if (!answered) {
      alert('Por favor, selecione uma resposta.');
      return;
    }
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Inicialização
showStep(currentStep);
