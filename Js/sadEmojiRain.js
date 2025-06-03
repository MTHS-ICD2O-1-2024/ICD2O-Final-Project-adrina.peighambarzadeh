'use strict'

/**
 * Rain sad emojis from the given element's position.
 * @param {HTMLElement} originEl - The element to spawn emojis from.
 */
function rainSadEmojis(originEl) {
  const rect = originEl.getBoundingClientRect()
  const originX = (rect.left + rect.width / 2) / window.innerWidth
  const originY = rect.top / window.innerHeight

  let counter = 0
  const maxEmojis = 10
  const interval = setInterval(() => {
    const emoji = document.createElement('div')
    emoji.textContent = '😢'
    emoji.classList.add('sad-emoji')

    emoji.style.position = 'fixed'
    emoji.style.left = (originX * window.innerWidth) + 'px'
    emoji.style.top = (originY * window.innerHeight) + 'px'
    emoji.style.animationDelay = (Math.random() * 0.5) + 's'
    emoji.style.setProperty('--rand-x', (Math.random() * 100 - 50) + 'px')

    document.body.appendChild(emoji)

    setTimeout(() => {
      emoji.remove()
    }, 1500)

    counter++
    if (counter >= maxEmojis) {
      clearInterval(interval)
    }
  }, 80)
}
