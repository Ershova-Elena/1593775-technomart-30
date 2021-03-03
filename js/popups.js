//popup-feedback//

const feedbackLink = document.querySelector(".feedback-link");
const feedbackPopap = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopap.querySelector(".modal-close");
const feedbackForm = feedbackPopap.querySelector(".form-feedback");
const feedbackUserName = feedbackPopap.querySelector(".user-name");
const feedbackUserEmail = feedbackPopap.querySelector(".user-email");
const feedbackUserComment = feedbackPopap.querySelector(".user-comment");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}
try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopap.classList.add("modal-show");

    if(storageName && storageEmail){
        feedbackUserName.value = storageName;
        feedbackUserEmail.value = storageEmail;
        feedbackUserComment.focus();
    }else{
        feedbackUserEmail.focus();
    }

});

feedbackClose.addEventListener("click", function(evt){
    evt.preventDefault();
    feedbackPopap.classList.remove("modal-show");
    feedbackPopap.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt){
    if(!feedbackUserName.value || !feedbackUserEmail.value || !feedbackUserComment.value){
    evt.preventDefault();
    feedbackPopap.classList.remove("modal-error");
    feedbackPopap.offsetWidth = feedbackPopap.offsetWidth;
    feedbackPopap.classList.add("modal-error");
    } else {
        if(isStorageSupport) {
            localStorage.setItem("name", feedbackUserName.value);
            
        }
    }
})
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackPopap.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopap.classList.remove("modal-show");
        feedbackPopup.classList.add("modal-error");
      }
    }
  });

  //popup-map//

  const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        if (mapPopup.classList.contains("modal-show")){
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
})