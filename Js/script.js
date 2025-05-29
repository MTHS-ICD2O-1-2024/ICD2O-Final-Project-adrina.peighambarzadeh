// Copyright (c) 2025 Adrina Peighambarzadeh All rights reserved
//
// Created by: Adrina Peighambarzadeh
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict";

/**
 * This function handles the Yes/No spinner thing
 */
let isSpinning = false;

// eslint-disable-next-line no-unused-vars
function spinWheel() {
  const question = document.getElementById("question-input").value.trim();
  const result = document.getElementById("result");
  const pointer = document.getElementById("pointer");

  if (question.length === 0) {
    result.innerHTML = "Please enter a question first.";
    return;
  }

  if (isSpinning) return;
  isSpinning = true;
  result.innerHTML = "";

  const spinAngle = 360 * 5 + Math.floor(Math.random() * 360);
  pointer.style.transition = "transform 4s ease-out";
  pointer.style.transform = "rotate(" + spinAngle + "deg)";

  setTimeout(function () {
    const finalAngle = spinAngle % 360;
    const answer = finalAngle < 180 ? "Yes" : "No";
    result.textContent = "Answer: " + answer;
    isSpinning = false;
  }, 4000);
}
