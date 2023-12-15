---
layout: default
title: Eli Brumley
subtitle: Creative, Code, & Conversions - My Triple Threat in Digital Domination.
tag: // Lead UX + Dev + CRO
permalink: /
---

<section id="featured-cases" class="pt-2 pb-4 pb-sm-3 pt-xs-0">
	<div class="container center"> 
		<p class="hero-tag fog flex fx-align-center fx-just-center mb-4">
			<span class="blue dot-accent pre">:</span>
			<span class="sub-title pre">Beautifully Optimized Experiences</span>
			<span class="blue dot-accent pre">:</span>
		</p>
		<!-- <h2 class="mb-2">Beautifully Optimized Experiences</h2> -->
		<!-- <div class="mt-2 mb-5 center">
			<a href="/work" class="text-link">Latest Work <span class="ar">></span></a>
		</div> -->
		<div class="cards-grid flex fx-xs-col">
		{% assign sorted_work = site.work | sort: 'order' %}
		{% for work in sorted_work limit: 2 %}
			<div class="work-item fx-item-2 px-1 mb-2 pl-sm-0 px-xs-0 mb-xs-2 ">
				<div class="card-wrap tilt-card" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
					<div class="card {{ work.className }}">
						<a class="post-link" href="{{ work.url }}"></a> 
						<pre class="work-cat center">{{ work.client }}</pre>
						<div class="work-image mt-xs-1"> 
							  {% if work.img == "" %}
							    {% if work.video != "" %}
							      <video id="vid" autoplay="" muted="" loop="" poster="{{ work.vidPoster }}" data-src="{{ work.vid }}"></video>
							    {% endif %}
							  {% else %}
							    <img class="lazyload" data-src="{{ work.img }}" alt="{{ work.title }}" />
									<svg width="113" height="63" viewBox="0 0 113 63" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="0" width="113" height="63" fill="transparent"/>
									</svg>
							  {% endif %}
						</div>
						<div class="plus-icon explore">
							<span>Explore</span>
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
			{% endfor %}
		</div>
		<div class="mt-2 mb-0 center">
			<a href="/work" class="text-link">Latest Work <span class="ar">></span></a>
		</div>
	</div>
</section>

<div id="client-slide" class="mt-1 mt-xs-2 mb-4">
	<div class="container">
		<p class="hero-tag fog flex fx-align-center fx-just-center mb-3 mb-sm-2">
			<span class="blue dot-accent pre">:</span>
			<span class="sub-title pre">I’ve served some kickass clients</span>
			<span class="blue dot-accent pre">:</span>
		</p>
		<div class="client-slide-set"> 
			<ul class="set unselectable">
				<li class="md">{% include_relative assets/sumo-logic-logo.html %}</li>
				<li class="xl">{% include_relative assets/ryan-rose-logo.html %}</li>
				<li class="md">{% include_relative assets/plaidpixel-logo.html %}</li>
				<li class="">{% include_relative assets/smartbear-logo.html %}</li>
				<li class="xxxl">{% include_relative assets/cbu-logo.html %}</li>
				<li class="">{% include_relative assets/codepen-logo.html %}</li>
				<li class="md">{% include_relative assets/guidetech-logo.html %}</li>
				<li class="xl">{% include_relative assets/pbs-logo.html %}</li>
				<li class="lg">{% include_relative assets/homewood-logo.html %}</li>
				<li class="lg">{% include_relative assets/bitbar-logo.html %}</li>
				<li class="lg">{% include_relative assets/dixon-logo.html %}</li>
				<li class="xxl">{% include_relative assets/x-estates-logo.html %}</li>
				<li class="">{% include_relative assets/hotelhelp-logo.html %}</li>
				<li class="">{% include_relative assets/kalin-marie-logo.html %}</li>
				<li class="xxxl">{% include_relative assets/memphis-zoo-logo.html %}</li>
				<li class="lg">{% include_relative assets/kubeshop-logo.html %}</li>
				<li class="lg">{% include_relative assets/zephyr-logo.html %}</li>
				<li class="xxxl">{% include_relative assets/speak-logo.html %}</li>
				<li class="lg">{% include_relative assets/loadninja-logo.html %}</li>
			</ul>
		</div>
	</div>
</div>

<div id="quotes" class="pt-3 pb-5 pt-sm-1 pt-xs-0"> 
	<div class="container">
		<!-- <p class="hero-tag fog flex fx-align-center fx-just-center mb-3 mb-sm-2">
			<span class="blue dot-accent pre">:</span>
			<span class="sub-title pre">Made some badass friends</span>
			<span class="blue dot-accent pre">:</span>
		</p> -->
		<h2 class="mb-1 center">Made some badass friends</h2>
		<div class="quote-wrap pt-1 pb-1">
			<button id="scrollLeft"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00684 10.3636L5.86621 9.51542L2.32826 5.97747H11.4912V4.74979H2.32826L5.86621 1.22301L5.00684 0.363632L0.00683594 5.36363L5.00684 10.3636Z" fill="white"/></svg></button>
			<button id="scrollRight"><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.98438 10.3636L6.125 9.51542L9.66295 5.97747H0.5V4.74979H9.66295L6.125 1.22301L6.98438 0.363632L11.9844 5.36363L6.98438 10.3636Z" fill="white"/></svg></button>
			<div id="scrollContainer" class="flex fx-no-wrap">
				{% for item in site.data.quotes %}
				<div class="quote-item py-2 px-2 py-sm-1 px-sm-1 mb-1">
					<div class="quote">{{ item.quote }}</div>
					<div class="flex fx-align-center quote-meta">
						<img class="lazyload" data-src="/assets/{{ item.img }}" />
						<div class="quote-meta-label">
							<p class="name">{{ item.name }}</p>
							<p class="title">{{ item.title }}</p>
						</div>
					</div>
				</div>
				{% endfor %}
			</div>
		</div>
	</div>
</div>
 
<div id="tools" class="py-4">
	<div class="container">
		<p class="hero-tag fog flex fx-align-center fx-just-center">
			<span class="blue dot-accent pre">:</span>
			<span class="sub-title pre">trade tools</span>
			<span class="blue dot-accent pre">:</span>
		</p>
		<h2 class="flex fx-align-center fx-just-center center mb-1">Here's a few of my favorite things</h2>
		<div class="flex fx-just-apart fx-wrap">
			<div class="tools-grid">
				<div class="flex fx-just-apart fx-wrap cards">
					<!-- Design -->
					<div class="fx-item-4 fx-item-sm-2 fx-item-xs-1">
						<h6 class="mb-sm-1 mt-xs-0">Design</h6>
						<div class="tool-set mb-2 mb-sm-0 mb-xs-0">
							<span class="tooltip" data-tooltip="Adobe Creative&nbsp;Cloud">{% include_relative assets/adobe-cc-icon.html %}</span>
							<span class="tooltip" data-tooltip="Figma">{% include_relative assets/figma-icon.html %}</span>
							<span class="tooltip" data-tooltip="Sketch&nbsp;app">{% include_relative assets/sketch-icon.html %}</span>
						</div>
					</div>
					<!-- Testing -->
					<div class="fx-item-4 fx-item-sm-2 fx-item-xs-1">
						<h6 class="mb-sm-1 mt-xs-0">Test</h6>
						<div class="tool-set mb-2 mb-sm-0 mb-xs-0">
							<span class="tooltip" data-tooltip="Google&nbsp;Optimize">{% include_relative assets/google-optimize-icon.html %}</span>
							<span class="tooltip" data-tooltip="Intellimize">{% include_relative assets/intellimize-icon.html %}</span>
							<span class="tooltip" data-tooltip="HotJar">{% include_relative assets/hotjar-icon.html %}</span>
							<span class="tooltip" data-tooltip="BrowserStack">{% include_relative assets/browserstack-icon.html %}</span>
						</div>
					</div>
					<!-- Analytics -->
					<div class="fx-item-4 fx-item-sm-2 fx-item-xs-1">
						<h6 class="mb-sm-1 mt-xs-0">Analyse</h6>
						<div class="tool-set mb-2 mb-sm-0 mb-xs-0">
							<span class="tooltip" data-tooltip="Google&nbsp;Analytics">{% include_relative assets/google-ga4-icon.html %}</span>
							<span class="tooltip" data-tooltip="Google&nbsp;Looker">{% include_relative assets/looker-icon.html %}</span>
							<span class="tooltip" data-tooltip="CrazyEgg">{% include_relative assets/crazyegg-icon.html %}</span>
							<span class="tooltip" data-tooltip="MixPanel">{% include_relative assets/mixpanel-icon.html %}</span>
						</div>
					</div>
					<!-- CMS -->
					<div class="fx-item-4 fx-item-sm-2 fx-item-xs-1">
						<h6 class="mb-sm-1 mt-xs-0">Build</h6>
						<div class="tool-set mb-2 mb-sm-0 mb-xs-0">
							<span class="tooltip" data-tooltip="Craft&nbsp;CMS">{% include_relative assets/craftcms-icon.html %}</span>
							<span class="tooltip" data-tooltip="Shopify">{% include_relative assets/shopify-icon.html %}</span>
							<span class="tooltip" data-tooltip="Contentful">{% include_relative assets/contentful-icon.html %}</span>
							<span class="tooltip" data-tooltip="Wordpress">{% include_relative assets/wordpress-icon.html %}</span>
							<span class="tooltip" data-tooltip="Hubspot">{% include_relative assets/hubspot-icon.html %}</span>
							<span class="tooltip" data-tooltip="Kentico">{% include_relative assets/kentico-icon.html %}</span>
						</div>
					</div>
					<!-- Collab -->
					<div class="fx-item-2 fx-item-sm-2 fx-item-xs-1">
						<h6 class="mb-sm-1 mt-xs-0">Collab</h6>
						<div class="tool-set mb-2 mb-sm-0 mb-xs-0"> 
							<span class="tooltip" data-tooltip="Slack">{% include_relative assets/slack-icon.html %}</span>
							<span class="tooltip" data-tooltip="Asana">{% include_relative assets/asana-icon.html %}</span>
							<span class="tooltip" data-tooltip="Trello">{% include_relative assets/trello-icon.html %}</span>
							<span class="tooltip" data-tooltip="Jira">{% include_relative assets/jira-icon.html %}</span>
							<span class="tooltip" data-tooltip="Confluence">{% include_relative assets/confluence-icon.html %}</span>
							<span class="tooltip" data-tooltip="Notion">{% include_relative assets/notion-icon.html %}</span>
							<span class="tooltip" data-tooltip="Miro">{% include_relative assets/miro-icon.html %}</span>
							<span class="tooltip" data-tooltip="Invision">{% include_relative assets/invision-icon.html %}</span>
						</div>
					</div>
					<!-- Code -->
					<div class="fx-item-2 fx-item-sm-2 fx-item-xs-1">
						<h6 class="mb-sm-1 mt-xs-0">Develop</h6>
						<div class="tool-set mb-2 mb-sm-0 mb-xs-0">
							<span class="tooltip" data-tooltip="HTML5">{% include_relative assets/html5-icon.html %}</span>
							<span class="tooltip" data-tooltip="CSS3">{% include_relative assets/css3-icon.html %}</span>
							<span class="tooltip" data-tooltip="Javascript">{% include_relative assets/js-icon.html %}</span>
							<span class="tooltip" data-tooltip="GitHub">{% include_relative assets/github-icon.html %}</span>
							<span class="tooltip" data-tooltip="Netlify">{% include_relative assets/netlify-icon.html %}</span>
							<span class="tooltip" data-tooltip="CodePen">{% include_relative assets/codepen-icon.html %}</span>
							<span class="tooltip" data-tooltip="Tailwind&nbsp;CSS">{% include_relative assets/tailwind-icon.html %}</span>
							<span class="tooltip" data-tooltip="Bootstrap">{% include_relative assets/bootstrap-icon.html %}</span>
							<span class="tooltip" data-tooltip="Angluar">{% include_relative assets/angluar-icon.html %}</span>
							<!-- <span class="tooltip" data-tooltip="React">{% include_relative assets/react-icon.html %}</span> -->
							<span class="tooltip" data-tooltip="Jekyll">{% include_relative assets/jekyll-icon.html %}</span>
							<span class="tooltip" data-tooltip="Hugo">{% include_relative assets/hugo-icon.html %}</span>
							<span class="tooltip" data-tooltip="Gatsby">{% include_relative assets/gatsby-icon.html %}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
( function( $ ) {

	"use strict";

  $(".tilt-card").tilt({ 
    maxTilt: 20,
    perspective: 1500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1000,
    glare: false,
    maxGlare: 0.3,
    scale: 1.03
  });
  
}( jQuery ) );
</script>