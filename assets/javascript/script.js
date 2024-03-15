document.addEventListener("DOMContentLoaded", () => {
  // FORMULAIRE DE CONTACT
  const contactBtn = document.getElementById("contact-btn");
  const closeBtn = document.getElementById("form-close-icon");
  const messageModal = document.getElementById("contact-modal");
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Permet de ne pas recharger la page au moment de l'envoi du formulaire

    // Création d'un objet contenant les valeurs des inputs du formulaire
    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    // Envoi de l'objet data au back end (sera accessible via req.body)
    const response = await axios.post(
      "https://site--tripadvisor-back--hcj2xjlwfzkm.code.run/form",
      data
    );
    console.log(response.config.data);
  });

  // Afficher le formulaire de contact
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Permet de conserver le scroll
    messageModal.classList.remove("hidden");
    document.querySelector("body").classList.add("no-scroll");
  });

  // Masquer le formulaire de contact
  closeBtn.addEventListener("click", () => {
    messageModal.classList.add("hidden");
    document.querySelector("body").classList.remove("no-scroll");
  });

  // FOOTER
  const footerImage = document.getElementById("footer-image");
  const changeImgSrc = () => {
    if (
      footerImage.src ===
      "http://127.0.0.1:5500/assets/img/favicon-tripadvisor.svg"
    ) {
      footerImage.src = "http://127.0.0.1:5500/assets/img/logo-1.png";
    } else {
      footerImage.src =
        "http://127.0.0.1:5500/assets/img/favicon-tripadvisor.svg";
    }
  };
  footerImage.addEventListener("click", changeImgSrc);
});
