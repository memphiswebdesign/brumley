---
layout: default 
title: Contact Eli Brumley
subtitle:
permalink: /contact/
---


<div id="contact" class="mt--4">
	<div class="container">
		<div class="flex fx-col fx-align-center pt-0">
			<div class="fx-item-1 fx-grow mb-3 center">
				<p class="hero-tag fog flex fx-align-center fx-just-center mb-2">
					<span class="blue dot-accent pre">:</span>
					<span class="sub-title pre">
					  Connection, Engaged
					</span>
					<span class="blue dot-accent pre">:</span>
				</p>
				<h1 class="mt-0">Ready to chat about your project?</h1>
				<p class="mb-2" style="font-size: 125%;">Book a 30-min intro call with me and let's get the ball rolling!</p>
				<!-- Calendly link widget begin -->
				<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
				<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
				<a class="btn px-3" href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elibrumley/30min?background_color=151718&text_color=ffffff&primary_color=0077ee'});return false;">Book at 30 min intro</a>
				<!-- Calendly link widget end -->
				<p style="font-size: 90%; margin-top: 1.3em;">Or drop me a line below.</p>
			</div>
			<div class="form-col fx-item-2 w-50 w-md-75 w-xs-100 px-3 px-md-0 mb-5">
				<div class="form-wrap py-3 px-3 py-sm-1 px-sm-1">
					<h5 class="mt-0 mb-1">Drop me a message:</h5>
					<form
						name="contact"
						action="/thanks"
						method="POST"
						data-netlify-recaptcha="true"
						netlify
					>
						<p>
							<label><span>Your Name:</span>
								<input type="text" name="name" required />
							</label>
						</p>
						<p>
							<label><span>Email:</span>
								<input type="email" name="email" required />
							</label>
						</p>
						<p>
							<label><span>Phone: (optional)</span>
								<input type="tel" name="phone" />
							</label>
						</p>
						<p>
							<label>
								<span>What did you have in mind?</span>
								<textarea name="message"></textarea>
							</label>
						</p>
						<p>
							<div data-netlify-recaptcha="true"></div>
						</p>
						<p>
							<button class="btn" type="submit">Send</button>
						</p>	
					</form>
				</div>
			</div>
		</div>
	</div>
</div>