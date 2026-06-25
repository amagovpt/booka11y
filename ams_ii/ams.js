document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     Fecho das opções do menu lateral
     =============================== */
  const btn = document.getElementById("toggleMenu");
  const aside = document.getElementById("asideCol");
  const menu = document.getElementById("menu-ams");

  if (btn && aside && menu) {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";

      // alterna estado
      btn.setAttribute("aria-expanded", String(!expanded));
      aside.classList.toggle("collapsed", expanded);
      menu.hidden = expanded;

      // alterna texto visual do botão
      btn.textContent = expanded ? "Menu ▶" : "◀ Menu";

      // alterna aria-label para acessibilidade
      btn.setAttribute(
        "aria-label",
        expanded
          ? "menu do AMS fechado. pressione se pretender abrir"
          : "menu do AMS aberto. pressione se pretender fechar"
      );
    });
  }

  /* ============================================
     Controlo encolher/esticar subopções do menu
     ============================================ */
  const buttons = document.querySelectorAll("ul#menu-ams button[aria-controls]");

  buttons.forEach((button) => {
    const submenuId = button.getAttribute("aria-controls");
    const submenu = document.getElementById(submenuId);
    const labelBase = button.getAttribute("data-label");

    if (!submenu) return; // evita erro se id não existir

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const newState = !isExpanded;

      button.setAttribute("aria-expanded", String(newState));
      submenu.hidden = !newState;
      submenu.removeAttribute("aria-hidden");

      const estado = newState ? "atualmente aberto" : "atualmente fechado";
      button.setAttribute(
        "aria-label",
        `${labelBase}, contém submenu, ${estado}`
      );
    });
  });
});
