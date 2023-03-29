import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainerREF = document.querySelector(".gallery");
const cardsItems = createElements(galleryItems);

galleryContainerREF.insertAdjacentHTML("beforeend", cardsItems);

function createElements() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryContainerREF.addEventListener("click", onOpenModal);
const instance = "";

function onOpenModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  window.addEventListener("keydown", onEscapePress);

  const clickOnOpenREF = event.target;
  const indexGalleryItems = galleryItems.findIndex(
    (option) => option.description === clickOnOpenREF.alt
  );

  let instance = basicLightbox.create(`
    <img class="gallery__image" src="${galleryItems[indexGalleryItems].original}"
     alt="${galleryItems[indexGalleryItems].description}">`);

  instance.show();

  const closeElModal = document.querySelector(".basicLightbox");
  closeElModal.addEventListener("click", onCloseModal);
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscapePress);
  instance.close;
  const closeElModal = document.querySelector(".basicLightbox");
  closeElModal.remove();
}

function onEscapePress(event) {
  if (event.code === "Escape") {
    const closeREF = document.querySelector(".basicLightbox");
    closeREF.remove();
    window.removeEventListener("keydown", onEscapePress);
  }
}
