// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Adrina Peighambarzadeh
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/ICD2O-Unit-6-01-B-Adrina-peighambarzadeh/sw.js', {
    scope: '/ICD2O-Unit-6-01-B-Adrina-peighambarzadeh/'
  })
}

/**
 * This function simulates a Yes/No spinner.
 */
// eslint-disable-next-line no-unused-vars
function spin () {
  const question = document.getElementById('question').value.trim()
  const resultEl = document.getElementById('result')
  const yesImage = document.getElementById('yesImage')
  const noImage = document.getElementById('noImage')

  // Input validation
  if (question === '') {
    alert('Please enter a question.')
  } else {
    // Process: Generate random yes/no answer
    let answer
    if (Math.random() < 0.5) {
      answer = 'Yes'
    } else {
      answer = 'No'
    }

    // Output: Display result and image
    resultEl.textContent = 'Question: ' + question + '\nAnswer: ' + answer
    if (answer === 'Yes') {
      yesImage.style.display = 'block'
      noImage.style.display = 'none'
    } else {
      yesImage.style.display = 'none'
      noImage.style.display = 'block'
    }
  }
}
