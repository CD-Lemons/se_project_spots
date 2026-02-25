const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileFormElement = editProfileModal.querySelector(".modal__form");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button",
);

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

const currentProfileName = document.querySelector(".profile__name");
const currentProfileDesc = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescInupt = document.querySelector("#profile-description-input");

const addPostFormElement = newPostModal.querySelector(".modal__form");
const postCaptInput = document.querySelector("#profile-caption-input");
const postLinkInput = document.querySelector("#profile-link-input");

editProfileButton.addEventListener("click", () => {
  handleClickOpen(editProfileModal);
});

editProfileCloseButton.addEventListener("click", () => {
  handleClickClose(editProfileModal);
  profileDescInupt.value = currentProfileDesc.textContent;
  profileNameInput.value = currentProfileName.textContent;
});

newPostButton.addEventListener("click", () => {
  handleClickOpen(newPostModal);
});

newPostCloseButton.addEventListener("click", () => {
  handleClickClose(newPostModal);
});

function handleClickOpen(modal) {
  modal.classList.add("modal_is-opened");
}
function handleClickClose(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  currentProfileName.textContent = profileNameInput.value;
  currentProfileDesc.textContent = profileDescInupt.value;

  editProfileModal.classList.remove("modal_is-opened");
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(postLinkInput.value);
  console.log(postCaptInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

addPostFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (card) {
  console.log(card.name);
  console.log(card.link);
});
