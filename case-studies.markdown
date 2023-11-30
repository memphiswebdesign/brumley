---
layout: default 
title: Latest Projects
subtitle: Partnering with all brands - providing real results
permalink: /work
---
<div id="case-studies" class="plus-tile-tx">
	<!-- Isotope JS Filters -->
	<!-- <div class="container">
		<div class="filters">
			<ul class="center">
				<li class="btn ghost active" data-filter="*">All</li>
				<li data-filter=".one" class="btn ghost">Filter 1</li>
				<li data-filter=".two" class="btn ghost">Filter 2</li>
				<li data-filter=".three" class="btn ghost">Filter 3</li>
			</ul>
		</div>
	</div> -->
	<!-- Isotope JS Grid -->
	<!-- <div class="container">
		<div class="flex fx-just-apart fx-wrap cards center grid">
			<div class="grid-sizer"></div>
			{% for case in site.case %}
			<div class="grid-item {{ case.cat }}">
				<div class="card-item">
					<a class="card-link" href="{{ case.url }}" alt="{{ case.title }}"></a>
					<div class="card-image">
						<img class="" src="{{ case.img }}" alt="{{ case.title }}" />
					</div>
					<div class="card-meta">
						<h4>{{ case.title }}</h4>
						<p>{{ case.meta }}</p>
					</div>
				</div>
			</div>
			{% endfor %}
		</div>
	</div> -->
	<div class="container">
		<div class="flex fx-wrap cards center">
			{% for work in site.work %}
			<div class="fx-item-3 fx-item-sm-2 {{ work.cat }}">
				<div class="card-item">
					<a class="card-link" href="{{ work.url }}" alt="{{ work.title }}"></a>
					<div class="card-image">
						<img class="" src="{{ work.img }}" alt="{{ work.title }}" />
					</div>
					<div class="card-meta">
						<h4>{{ work.title }}</h4>
						<p>{{ work.meta }}</p>
					</div>
				</div>
			</div>
			{% endfor %}
		</div>
		<div class="card" data-tilt>
	      <h1 class="title">Tilt Hover Effect</h1>
	      <p class="credits">Tilt.js by Gijs Rogé / Photo by Oliur Rahman</p>
	      <div class="bg"></div>
	    </div>
	</div>
</div>

<style>
.card {
  position: relative;
  height: 50vh;
  width: 50vw;
  padding: 40px;
  transform-style: preserve-3d;
}

.card .title {
  position: relative;
  z-index: 2;
  transform: translateZ(20px);
}

.card .credits {
  font-size: 1.2vh;
  letter-spacing: 0.05em;
  opacity: 0.6;
  transform: translateZ(20px);
}

.card .bg {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1470350576089-539d5a852bf7?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=&bg=');
  background-size: cover;
  background-position: center;
}
</style>

<script>
( function( $ ) {

	"use strict";

  $(".card").tilt({
    maxTilt: 10,
    perspective: 1200,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1000,
    glare: false,
    maxGlare: 0.1,
    scale: 1.03
  });
  
}( jQuery ) );
</script>

