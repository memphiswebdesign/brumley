---
layout: simple 
title:
subtitle:
permalink: /thanks
---


<div id="contact" class="mt-4 mb-3 center">
	<div class="container thiner pt-2 pb-3">
		<div class="rocket-wrap mt-5 mb-2">
			<iframe class="lazyload" id="rocket" data-src='https://my.spline.design/rocket-50007284c97fb5b8e39cc45af0470a69/' frameborder='0' width='100%' height='100%'></iframe>
		</div>
		<!-- <h1 class="mt-0">🙌 &nbsp; 🚀 &nbsp;✨<br>Thanks for reaching out!</h1> -->
		<h1 class="mt-0">Thanks for reaching out!</h1>
		<p class="mt-1">I'll be reviewing your information and will reach out shortly to chat more about your vision.</p>
		<p>Together, we're going to craft something truly special!</p>
	</div>
</div>

{% include featured-cases.html %}

<style>
.rocket-wrap {
	position: relative;
	overflow: hidden;
	pointer-events: none;
	user-select: none;
}
#rocket {
	transform-origin: center;
	transform: scale(2);
}
.rocket-wrap:after {
	content: '';
	position: absolute;
	right: 0;
	bottom: 0;
	width: 200px;
	height: 50px;
	background: pink;
	background: #131313;
	z-index: 2;
}
</style>