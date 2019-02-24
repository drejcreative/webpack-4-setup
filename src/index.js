import Particles from 'particlesjs';
import Typed from 'typed.js';

import "./main.scss";
import './images/city.jpg';

Particles.init({
	selector: '.background',
  color: ['#ffffff', '#3074BB', '#1B2236'],
  maxParticles: 150,
  connectParticles: true
});

const options = {
  strings: ['It Contain Babel so you can use ES2015 and later versions ', 'You can use CSS and SCSS. It has an Autoprefixer integrated', 'You can use Images, Fonts, and IcoFonts', 'You have Dev Server with live reload'],
  typeSpeed: 150,
  startDelay: 1000,
  loop: true,
  loopCount: Infinity,
}

var typed = new Typed(".hero__subheader", options);