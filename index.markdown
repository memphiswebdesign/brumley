---
layout: default
title: Eli Brumley
subtitle: Creative, Code, & Conversions - My Triple Threat in Digital Domination.
tag: // Lead UX + Dev + CRO
permalink: /
---


{% include featured-cases.html %}

<div id="quotes" class="bordered-bottom pt-0 pb-5"> 
	<div class="container">
		<p class="hero-tag fog flex fx-align-center fx-just-center mb-4 mb-sm-3">
			<span class="blue dot-accent pre">:</span>
			<span class="sub-title pre">Made some badass friends</span>
			<span class="blue dot-accent pre">:</span>
		</p>
		<div class="quote-wrap pb-1">
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