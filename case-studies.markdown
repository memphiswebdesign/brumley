---
layout: default 
title: Hand Picked Projects
subtitle: Driving real results through beautifully optimized experiences.
permalink: /work
---

<div id="work" class="mb-5 pb-5">
	<div class="container">
			{% assign sorted_work = site.work | sort: 'order' %}
			{% for work in sorted_work %}
			<div class="work-item pt-4 mt-4 pb-3">
				<div class="work-item-meta pt-2">
					{% if work.client %}
					<p class="hero-tag fog mb-1 mb-sm-1">
						<span class="blue dot-accent pre">::</span>
						<span class="sub-title pre">{{ work.client }}</span>
					</p>
					{% endif %}
					{% if work.title %}
					<h2 class="mt-0 mb-2">{{ work.title }}</h2>
					{% endif %}
				</div>
				<div class="cards-grid flex flex-wrap">
					<div class="fx-grow fx-item-2">
						<div class="card-wrap tilt-card" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
							<div class="card {{ work.className }}">
								<a class="post-link" href="{{ work.url }}"></a> 
								<pre class="work-cat center">{{ work.meta }}</pre>
								<div class="work-image mt-xs-1"> 
									  {% if work.img == "" %}
									    {% if work.video != "" %}
									      <video autoplay="" muted="" loop="" poster="{{ work.vidPoster }}">
									      	<source src="{{ work.vid }}" type="video/mp4">
									      </video>
									    {% endif %}
									  {% else %}
									    <img class="lazyload" data-src="{{ work.img }}" alt="{{ work.title }}" />
											<svg width="113" height="63" viewBox="0 0 113 63" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect x="0" width="113" height="63" fill="transparent"/>
											</svg>
									  {% endif %}
								</div>
								<div class="plus-icon">
									<svg viewBox="0 0 40 40">
										<defs><style>.plus-icon{fill:none;stroke:#fff;stroke-miterlimit:10}</style></defs>
										<path id="bar" class="plus-icon" d="M20 0v40"/>
										<path id="half-1" class="plus-icon" d="M0 20h20"/>
										<path id="half-2" class="plus-icon" d="M20 20h20"/>
									</svg>
								</div>
							</div>
							<div class="card-bg"></div>
							<div class="card-highlight"></div>
						</div>
					</div>
					<div class="flex fx-col fx-grow fx-item-3 pl-2 pl-md-0 mt-md-2 fx-md-row fx-xs-col mt-xs-1">
						<div class="card-wrap fx-grow mb-2 fx-item-md-1 mb-md-0 mr-md-1 mr-xs-0">
							<div class="card quote-item flex fx-col fx-just-center mr-0 py-1 px-3 px-lg-2 py-md-2 px-md-2 pr-md-3 pr-sm-2 py-sm-2 px-sm-1 pr-xs-1 pb-xs-1">
								<div class="quote">{{ work.quote }}</div>
								<div class="flex fx-align-center quote-meta">
									<img class="lazyload" data-src="/assets/{{ work.quoteImg }}" alt="{{ work.quoteName }}" />
									<div class="quote-meta-label">
										<p class="name">{{ work.quoteName}}</p>
										<p class="title">{{ work.quoteTitle }}</p>
									</div>
								</div>
								<span class="quote-icon">&#8220;</span>
							</div>
							<div class="card-bg"></div>
						</div>
						<div class="card-wrap fx-grow fx-item-md-2 mb-0 ml-md-1 mt-xs-1 ml-xs-0">
							<div class="card work-stats flex fx-row fx-align-center fx-just-center fx-md-col py-1 px-3 px-lg-2 py-md-1 px-md-2 px-md-1 py-sm-1 px-sm-1">
								<div class="stat-wrap flex fx-col pr-1 pr-md-0 pb-md-1 mb-md-1">
									<span class="stat pre mt-0">{{ work.stat1 }}</span>
									<span class="stat-meta">{{ work.statMeta1 }}</span>
								</div>
								<div class="stat-wrap flex fx-col pl-2 pr-md-0 pl-md-0">
									<span class="stat pre mt-0">{{ work.stat2 }}</span>
									<span class="stat-meta">{{ work.statMeta2 }}</span>
								</div>
							</div>
							<div class="card-bg"></div>
						</div>
					</div>
				</div>
			</div>
			{% endfor %}
	</div>
</div>

<!-- <div class="container">
	<div class="tilt-card" data-tilt>
		<h1 class="title">Tilt Hover Effect</h1>
		<p class="credits">Tilt.js by Gijs Rogé / Photo by Oliur Rahman</p>
		<div class="bg"></div>
	</div>
</div> -->

<script>
( function( $ ) {

	"use strict";

  $(".tilt-card").tilt({
    maxTilt: 12,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1000,
    glare: false,
    maxGlare: 0.3,
    scale: 1.03
  });
  
}( jQuery ) );
</script>

