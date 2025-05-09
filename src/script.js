document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const forgotForm = document.getElementById("forgot-form");

  // Lógica para a página de login
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = loginForm.email.value.trim();
      const password = loginForm.password.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      if (!password) {
        alert("Preencha todos os campos.");
        return;
      }

      alert("Login válido!");
    });
  }

  // Lógica para a página de "Esqueci minha senha"
  if (forgotForm) {
    forgotForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = forgotForm.email.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      alert("E-mail enviado com sucesso!");
    });
  }
});
