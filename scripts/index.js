const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button",
);

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

editProfileButton.addEventListener("click", () => {
  handleClickOpen(editProfileModal);
});

editProfileCloseButton.addEventListener("click", () => {
  handleClickClose(editProfileModal);
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
