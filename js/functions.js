function scrollToSection(section) {
	const anchor = document.getElementById(section).offsetTop;
	window.scrollTo({
		top: anchor - 60,
		behavior: "smooth",
	});

	if (!query.matches) {
		toggleNavMenu();
	}
}

const query = this.window.matchMedia("(min-width: 640px)");
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");
const projectsTabs = document.querySelectorAll(".projects__container");
const projectTabBar = document.querySelectorAll(".projects__tab");

function toggleNavMenu() {
	hamburger.classList.toggle("nav__hamburger--hidden");
	hamburger.classList.toggle("nav__hamburger");

	navMenu.classList.toggle("nav__menu--media");
	navMenu.classList.toggle("nav__menu--active");
}

window.addEventListener(
	"resize",
	function () {
		if (query.matches) {
			closeNav();
		}
	},
	true
);

function closeNav() {
	hamburger.classList.add("nav__hamburger");
	navMenu.classList.add("nav__menu--media");

	navMenu.classList.remove("nav__menu--active");
	hamburger.classList.remove("nav__hamburger--hidden");
}

function selectProjectTab(projectNum) {
	projectsTabs.forEach((item) => {
		item.classList.remove("projects__container--active");

		document
			.getElementById(`project${projectNum}`)
			.classList.add("projects__container--active");
	});

	projectTabBar.forEach((item) => {
		item.classList.remove("projects__tab--active");

		document.getElementById(`projectTab${projectNum}`).classList.add("projects__tab--active");
	});
}

function copyToClipboard() {
	const email = `matthew.g.pepper@gmail.com`;
	const tooltip = document.querySelector(".contact__tooltip");

	navigator.clipboard.writeText(email).then(
		async () => {
			//success
			tooltip.classList.add("contact__tooltip--visible");
			await new Promise((r) => setTimeout(r, 2500));
			tooltip.classList.remove("contact__tooltip--visible");
		},
		() => {
			// failed
			console.log("Failed to copy to clipboard.");
		}
	);
}

let scrolling = false;

document.addEventListener("scroll", (e) => {
	if (!scrolling) {
		window.requestAnimationFrame(() => {
			closeNav();
			scrolling = false;
		});

		scrolling = true;
	}
});