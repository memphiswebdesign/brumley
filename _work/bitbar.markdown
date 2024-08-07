---
layout: work
permalink: projects/bitbar
order: 2 
client: "BitBar"
title:  "Design System SaaS - users love"
meta: "Product Design, Development"
img: "/assets/bitbar-devices.jpg"
cat: Web Design, CRO, UX Research
type: project
class: bitbar
className: bg-grain4 img-scroll
quoteName: Luke Kende
quoteTitle: Software Lead @ Smartbear
quote: Eli is the best UX designer I've worked with in over 15 years. He excels in creating both beautiful UI and effective UX. His skill in HTML, CSS, and JS is also impressive and rare. He's a fantastic teammate & great guy.
quoteImg: luke-kende.jpg
stat1: 4x
statMeta1: faster feature deployment
stat2: 3x
statMeta2: increase new features adoption 
---
 
<!-- <img src="{{ page.img }}" />  -->


<section id="proj-intro" class="py-3 py-lg-3 py-sm-1">
	<h2 class="d2 pr-4 pr-md-2 pr-sm-1 pr-xs-0">During my tenure as Sr. UX Product Designer at BitBar {SmartBear}, I led the UI/Features team, crafting innovative web testing tools and front-end experiences. I established a global design system, streamlined user documentation, and conducted user testing and A/B testing for new web tools. Additionally, I conducted countless user sessions, managed stakeholder relationships, increase developer velocity, implemented UX guidelines for consistent SaaS experiences, and had some fun crafting a custom animation language &mdash; along the way.</h2>
</section>

<div class="cards-grid flex flexp-wrap fx-wrap fx-md-col pt-1 pt-md-0 mt-3 mt-md-2 mt-sm-1">
	<div class="flex fx-item-3 mb-2 mb-sm-1"> 
		<div class="card-wrap w-100" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
			<div class="card flex fx-col" style="align-items: center;">
				<img class="lazyload bitbar-orbit" data-src="/assets/bitbar-browser-orbit.svg" />
			</div>
			<div class="card-bg"></div>
			<div class="card-highlight"></div>
		</div>
	</div>
	<div class="flex fx-grow fx-item-2 mb-2 mb-sm-1 pl-2 pl-md-0">
		<div class="card-wrap w-100" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
			<div class="card flex fx-col fx-just-center py-2 px-3 py-md-1 px-md-2 px-sm-1">
				<span class="">
					<h5 class="mb-0">Developer Adoption</h5>
					<p>At BitBar, the focus was on growing the user base and enhancing product adoption among technical users. I built a robust design system supporting new features and collaborated closely with users to ensure UX alignment with our product roadmap. Through dedicated user testing groups and A/B testing feature flag releases, we strategically enhanced the user experience.</p>
					<h5 class="mb-0">Strategic Feature Release</h5>
					<p>Strategic feature releases were pivotal in BitBar’s rapid growth as a SaaS product. By integrating user feedback and leveraging UX principles, we ensured each release was finely tuned to meet user needs. The implementation of feature flagging allowed for controlled rollouts and iterative improvements, underscoring the critical role of UX in accelerating development cycles, boosting user satisfaction, and driving adoption.</p>
				</span>
			</div>
			<div class="card-bg"></div>
			<div class="card-highlight"></div>
		</div>
	</div>
	<!-- here -->
	<div class="flex fx-grow fx-item-3 mb-2 mb-sm-1 pr-2 pr-md-0">
		<div class="card-wrap w-100 tilt-card" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
			<div class="card flex fx-col {{ page.className }}">
				<!-- <a class="post-link" href="{{ work.url }}"></a>  -->
				<pre class="work-cat center">{{ page.meta }}</pre>
				<div class="work-image mt-xs-1"> 
				    <img class="lazyload" data-src="{{ page.img }}" alt="{{ page.title }}" />
					<svg width="113" height="63" viewBox="0 0 113 63" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="0" width="113" height="63" fill="transparent"/>
					</svg>
				</div>
			</div>
			<div class="card-bg"></div>
			<div class="card-highlight"></div>
		</div>
	</div>
	<!-- here -->
	<div class="flex fx-item-3 mb-2 mb-sm-1"> 
		<div class="card-wrap w-100" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
			<div class="card flex fx-col fx-align-center px-3 px-md-2 px-sm-1 center" style="align-items: center;">
				<h6 class="mt-2 mb-2 mt-md-1 mb-md-1">Custom Browser Load Animations</h6>
				<img class="lazyload mx-2 bordered round-8" data-src="/assets/brower-load.gif" />
			</div>
			<div class="card-bg"></div>
		</div>
	</div>
	<!-- <! --- > -->
	<div class="flex fx-col fx-grow fx-item-2 pr-1 pr-md-0 mb-md-2 mb-sm-1">
		<div class="card-wrap w-100" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
			<div class="card quote-item flex fx-col fx-just-center mr-0 py-3 px-3 px-lg-2 py-md-2 px-md-2 pr-md-3 pr-sm-2 py-sm-2 px-sm-1 pr-xs-1 pt-xs-1 pb-xs-1" style="width: 100%!important; max-width: inherit!important;">
				<div class="quote">{{ page.quote }}</div>
				<div class="flex fx-align-center quote-meta">
					<img class="lazyload" data-src="/assets/{{ page.quoteImg }}" alt="{{ page.quoteName }}" />
					<div class="quote-meta-label">
						<p class="name">{{ page.quoteName}}</p>
						<p class="title">{{ page.quoteTitle }}</p>
					</div>
				</div>
			</div>
			<div class="card-bg"></div>
		</div>
	</div>
	<div class="flex fx-col fx-grow fx-item-2 pl-1 pl-md-0">
		<div class="card-wrap w-100 stat-grp" data-tilt style="--cursor-x: 0px; --cursor-y: 0px;">
			<div class="card work-stats flex fx-row fx-align-center fx-just-center fx-md-col py-3 px-3 px-lg-2 py-md-1 px-md-2 px-md-1 py-sm-1 px-sm-1">
				<div class="stat-wrap flex fx-col pr-1 pr-md-0 pb-md-1 mb-md-1">
					<span class="stat pre mt-0">{{ page.stat1 }}</span>
					<span class="stat-meta">{{ page.statMeta1 }}</span>
				</div>
				<div class="stat-wrap flex fx-col pl-2 pr-md-0 pl-md-0">
					<span class="stat pre mt-0">{{ page.stat2 }}</span>
					<span class="stat-meta">{{ page.statMeta2 }}</span>
				</div>
			</div>
			<div class="card-bg"></div>
		</div>
	</div>
	<!-- <! --- > -->
</div>


<h6 class="mt-5 center">More project details coming soon.</h6>
<p class="center">In the meantime, feel free to <a href="/contact">reach out</a> or check some of my <a href="/journal">latest post.</a></p> 