'use strict';

import "./vendor.js"

window.addEventListener("load", function() {
  document.querySelectorAll(".page-footer__accordion-item").forEach(element => {
      element.classList.remove("page-footer__accordion-item--active");
      element.classList.add("page-footer__accordion-item--unactive");
  })

  document.querySelectorAll(".page-footer__toggle").forEach(element => {
    element.addEventListener("click", function() {
      const parent = element.parentNode;

      if (parent.classList.contains("page-footer__accordion-item--active")) {
        parent.classList.remove("page-footer__accordion-item--active");
        parent.classList.add("page-footer__accordion-item--unactive");
      } else {
        document.querySelectorAll(".page-footer__accordion-item").forEach(item => {
          item.classList.remove("page-footer__accordion-item--active");
          item.classList.add("page-footer__accordion-item--unactive");
        })

        parent.classList.add("page-footer__accordion-item--active");
        parent.classList.remove("page-footer__accordion-item--unactive");
      }
    });
  });

  const pageHeaderToggle = document.querySelector(".page-header__toggle");
  const popupForm = document.querySelector(".popup-form");
  const popupFormToggle = document.querySelector(".popup-form__toggle");

  if (popupFormToggle && popupForm) {
    pageHeaderToggle.addEventListener("click", function() {
      popupForm.classList.remove("visually-hidden");
      document.querySelector(".page__body-overlay").classList.remove("visually-hidden");
      document.querySelector(".page__body").classList.add("page__body--scroll-disabled");
      document.querySelector(".popup-form__name").focus();
    })

    popupFormToggle.addEventListener("click", function() {
      document.querySelector(".popup-form").classList.add("visually-hidden");
      document.querySelector(".page__body-overlay").classList.add("visually-hidden");
      document.querySelector(".page__body").classList.remove("page__body--scroll-disabled");
    })

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        popupForm.classList.add("visually-hidden");
        document.querySelector(".page__body-overlay").classList.add("visually-hidden");
        document.querySelector(".page__body").classList.remove("page__body--scroll-disabled");
      }
    })

    document.querySelector(".page__body-overlay").addEventListener("click", function() {
      document.querySelector(".page__body-overlay").classList.add("visually-hidden");
      document.querySelector(".page__body").classList.remove("page__body--scroll-disabled");
      popupForm.classList.add("visually-hidden");
    })

    popupForm.addEventListener("submit", function(e) {
      if (document.getElementById("popup-tel").value.length < 16) {
        e.preventDefault();
      } else {
        saveDataPopup();
      }
    })
  }

  function saveDataPopup() {
    let popupName = document.getElementById("popup-name").value;
    let popupTel = document.getElementById("popup-tel").value;
    let popupQuestion = document.getElementById("popup-question").value;

    localStorage.setItem("userName", popupName);
    localStorage.setItem("userTel", popupTel);
    localStorage.setItem("userQuestion", popupQuestion);
  }

  const questionsForm = document.querySelector(".questions");

  if (questionsForm) {
    questionsForm.addEventListener("submit", function(e) {
      if (document.getElementById("questions-tel").value.length < 16) {
        e.preventDefault();
      } else {
        saveDataQuestions();
      }
    })
  }

  function saveDataQuestions() {
    let questionsName = document.getElementById("questions-name").value;
    let questionsTel = document.getElementById("questions-tel").value;
    let questionsQuestion = document.getElementById("questions-question").value;

    localStorage.setItem("userName", questionsName);
    localStorage.setItem("userTel", questionsTel);
    localStorage.setItem("userQuestion", questionsQuestion);
  }

  var maskOptions = {
    mask: "+7(000)000-00-00"
  }

  if (document.querySelector(".telephone-input--popup")) {
    let maskPopup = new IMask(document.querySelector(".telephone-input--popup"), maskOptions);
  }

  if (document.querySelector(".telephone-input--questions")) {
    let maskQuestions = new IMask(document.querySelector(".telephone-input--questions"), maskOptions);
  }
})
