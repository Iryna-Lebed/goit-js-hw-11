import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = e.currentTarget.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search term!",
      backgroundColor: "#ff4d4f",
      titleColor: "#fff",
      messageColor: "#fff",
      position: "topRight",
    });
    form.reset();
    return;
  }

  clearGallery();
  showLoader();




  try {
    const data = await getImagesByQuery(query);

   

    if (data.hits.length === 0) {
      iziToast.info({
        title: "No results",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      form.reset();
      return;
    }

    createGallery(data.hits);
    form.reset();

  } catch (error) {
    

    iziToast.error({
      title: "Error",
      message: "Something went wrong!",
      backgroundColor: "#ff4d4f",
      titleColor: "#fff",
      messageColor: "#fff",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
});

