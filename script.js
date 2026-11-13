"use strict";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const luckyBtn = document.getElementById("lucky-btn");

// Búsqueda normal
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== "") {
        const url = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
        window.location.href = url;
    }
});

// Botón "Me siento con suerte"
luckyBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text !== "") {
        const url = `https://www.google.com/search?q=${encodeURIComponent(text)}&btnI=1`;
        window.location.href = url;
    } else {
        window.location.href = "https://doodles.google/";
    }
});