"use strict"

window.onload = function () {
	const parallax = document.querySelector('.header_nuts');
	if (parallax) {

		const parallax = document.querySelector('.header_nuts');

		//коэффициент
		const forParallax = 50;

		//скорость анимации
		const speed = 0.015;

		//позиции
		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		//функция анимации
		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			//передаем стиль 
			parallax.style.cssText = `transform: translate(${positionX / forParallax}%,${positionY / forParallax}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}

		setMouseParallaxStyle();
		parallax.addEventListener("mousemove", function (e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});
	}
}