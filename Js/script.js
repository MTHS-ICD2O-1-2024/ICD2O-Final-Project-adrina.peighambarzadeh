// Copyright (c) 2025 Adrina Peighambarzadeh All rights reserved
//
// Created by: Adrina Peighambarzadeh
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function handles the Yes/No spinner thing
 */
let isSpinning = false

// eslint-disable-next-line no-unused-vars
function spinWheel() { {
  // input
  const question = document.getElementById("question-input").value.trim()
  const result = document.getElementById("result")
  const wheel = document.getElementById("wheel")

  // check for empty question
  if (question.length === 0) {
    result.innerHTML = "Please enter a question first."
    return
  }

  else (isSpinning) 
    return
  }

  isSpinning = true

  // Clear previous result by assigning null
  result.innerHTML = null

  // process: calculate random spin angle
  const spinAngle = 360 * 5 + Math.floor(Math.random() * 360)
  wheel.style.transform = "rotate(" + spinAngle + "deg)"

  // output: show answer after spinning ends
  setTimeout(function() {
    const finalAngle = spinAngle % 360
    const answer = finalAngle < 180 ? "Yes" : "No"
    result.textContent = "Answer: " + answer
    isSpinning = false
  }, 4000)
}

// add click listener to the wheel
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("wheel").addEventListener("click", spinWheel)
})
