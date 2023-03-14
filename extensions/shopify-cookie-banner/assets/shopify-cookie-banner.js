const banner = document.querySelector('.shopify-cookie-banner')
const bannerButtons = document.querySelector('.shopify-cookie-banner .buttons')

const hideBanner = () => banner.remove()

for (let i = 0; i < bannerButtons.children.length; i++) {
	bannerButtons.children[i].addEventListener('click', hideBanner)
}
