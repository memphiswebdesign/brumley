---
layout: default 
title: Latest Entries
subtitle: Few things I find intersting to write about
permalink: /journal
---

<div id="news" class="">
	<div class="container thin">
		<ul class="cards-grid list-clear flex fx-just-apart fx-wrap cards pt-0">
			{% for post in site.posts %}
			<li class="fx-item-1 mb-2">
				<div class="card-wrap" style="--cursor-x: 0px; --cursor-y: 0px;">
					<div class="card flex fx-align-center fx-xs-align-start fx-xs-col fx-row px-2 py-2 px-sm-1 py-sm-1">
						<a class="post-link" href="{{ post.url }}"></a> 
						<div class="post-image mt-xs-1"> 
							<img class="lazyload" data-src="{{ post.img }}" />
						</div>
						<div class="post-meta pl-3 pr-4 pl-sm-2 pr-sm-3 pt-xs-2 pl-xs-0 pr-xs-0">
							<h2>{{ post.title }}</h2>
							<p>{{ post.meta | truncate: 88 }}</p>
							<pre class="cat py-xs-1">:: {{ post.cat }}</pre>
						</div>
						<div class="plus-icon">
							<svg viewBox="0 0 40 40">
								<defs><style>.plus-icon{fill:none;stroke:#afafaf;stroke-miterlimit:10}</style></defs>
								<path id="bar" class="plus-icon" d="M20 0v40"/>
								<path id="half-1" class="plus-icon" d="M0 20h20"/>
								<path id="half-2" class="plus-icon" d="M20 20h20"/>
							</svg>
						</div>
					</div>
					<div class="card-bg"></div>
					<div class="card-highlight"></div>
				</div>
			</li>
			{% endfor %}
		</ul>
	</div>
</div>


<!-- <div class="card-wrap fx-item-3 fx-item-sm-2 mb-2" style="--cursor-x: 0px; --cursor-y: 0px;">
	<div class="card flex">
		<div>// coming soon</div>
	</div>
	<div class="card-bg"></div>
	<div class="card-highlight"></div>
</div> -->