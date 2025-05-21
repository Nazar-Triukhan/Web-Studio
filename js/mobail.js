(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobile-open]"),
      closeModalBtn: document.querySelector("[data-mobile-close]"),
      modal: document.querySelector("[data-mobile]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();