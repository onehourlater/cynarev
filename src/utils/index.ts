const telegramRedirect = () => {
  window.open('https://t.me/dmcynarev', '_blank')?.focus()
}
const cvRedirect = () => {
  window.open('/docs/CYNAREV-CV-1.pdf', '_blank')?.focus()
}

export {
  telegramRedirect,
  cvRedirect,
}