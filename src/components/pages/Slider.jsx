import React from 'react';
import './../../../src/slider.css';

const Slider = () => {

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	/*function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
	}*/

    return (
        <>
            <div>
				<div className="slideshow-container">
					<div className="mySlides fade">
						<div className="numbertext">1 / 3</div>
						<img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="image 1" style={{width:"100%"}} />
						<div className="text">Caption Text</div>
					</div>

					<div className="mySlides fade">
						<div className="numbertext">2 / 3</div>
						<img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="image 2" style={{width:"100%"}} />
						<div className="text">Caption Two</div>
					</div>

					<div className="mySlides fade">
						<div className="numbertext">3 / 3</div>
						<img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" alt="image 3" style={{width:"100%"}} />
						<div className="text">Caption Three</div>
					</div>

					<a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
					<a className="next" onClick={plusSlides(1)}>&#10095;</a>

				</div>

				<br/>
				<div style={{textAlign:"center"}}>
				<span className="dot" onClick={currentSlide(1)}></span> 
				<span className="dot" onClick={currentSlide(2)}></span> 
				<span className="dot" onClick={currentSlide(3)}></span> 
				</div>
            </div>
        </>
	);
	
	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if(slides) {
			if (n > slides.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
		}
	}
}

export default Slider;