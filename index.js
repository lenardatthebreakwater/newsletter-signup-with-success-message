let dialog = document.querySelector('dialog')
let subscriptionBtn = document.querySelector('#subscriptionBtn')
let dismissBtn = document.querySelector("#dismissBtn")

subscriptionBtn.addEventListener('click', (e) => {
	e.preventDefault()
	dialog.show()
})

dismissBtn.addEventListener('click', () => {
	dialog.close()
})