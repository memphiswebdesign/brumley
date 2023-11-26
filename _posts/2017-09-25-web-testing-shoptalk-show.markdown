---
layout: article
title: "Talking Web Testing on the ShopTalkShow"
meta: "I join fellow co-worker & full stack software engineer, John Reese and the fellows from the ShopTalkShow Podcast,Dave Rupert and Chris Coyier"
img: "/assets/shoptalkshow-podcast.jpg"
date: 2017-09-25
permalink: journal/web-testing-shop-talk-show
cat: "podcast"
---

<div class="img-bg-blur">
  <img class="round-10" src="{{ page.img }}" />
</div>
 
<div class="mt-3 mb-1">
<audio controls>
  <source src="https://cdn.simplecast.com/audio/167887/167887a0-ac00-4cf9-bc69-b5ca845997db/0261f4fb-51de-47e1-83ca-6c653a809c72/97e52b60_tc.mp3" type="audio/mpeg">
</audio>
</div>

<p class="mt-0 mb-3">Source: <a href="https://shoptalkshow.com/282-testing-eli-brumley-john-reese-crossbrowsertesting/" target="_blank">ShopTalkShow - EP: 282</a></p>
 

## 🎙️ Test. Test Test.
 
I join fellow co-worker & full stack software engineer, John Reese and the fellows from the ShopTalkShow Podcast,Dave Rupert and Chris Coyier; as we dive deep into the vast world of browsers test automation and how to get started with conquering web testing.

<hr class="dash">

###### Show links:

<ul class="list-dash">
  <li><a href="http://www.seleniumhq.org" target="_blank">Selenium</a></li>
  <li><a href="https://jenkins.io" target="_blank">Jenkins.io</a></li>
  <li><a href="https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/" target="_blank">Selenium IDE Firefox Plugin</a></li>
  <li><a href="https://godaytrip.com" target="_blank">Day Trip</a></li>
  <li><a href="https://css-tricks.com/the-notch-and-css/" target="_blank">CSS-Tricks: The Notch and CSS</a></li>
  <li><a href="http://caniuse.com" target="_blank">Can I Use?</a></li>
</ul>

<hr class="dash mb-0 mt-3">

###### Transcript:


###### 00:00
Hey everybody, this is Shop Talk Show number 282. Dave and I have a couple of guests on this week. And we're gonna be talking about something that all of us should probably be doing a heck of a lot more of on our websites that we work on, but shamefully don't. 

###### 00:19
I wonder if you can guess what that is. And these two fellas work at a company that's aptly named for that thing that we're supposed to be doing. Anyway, Mr. Dave, please kick it off. ["Just Do It Like It's Your Song"] Just do it like it's your song! 

###### 00:51
Hey there, Shop Ameniax. You're listening to another episode of the Shop Talk Show. A podcast all about friend and web design and development. Chris, I'm testing out like an old version of our intro. 

###### 01:05
What do you think? It was a test. It was a test, Chris. Yeah. Did you like it? Yeah. What were the results of the test? It was a control. And the control won my brain test, whichever would come out of my mouth. 

###### 01:21
Chris, what's happening today? We got people in the studio. Oh, I don't know if they could tell, but we're gonna end up talking. We're gonna say the word test a lot of time. So if you hate the word test, this is not the episode for you. 

###### 01:31
But you should listen to it no matter what because it's an important part. It's a vital part. It definitely comes along for the ride no matter what kind of developer you are. And we're gonna be talking a lot about browser testing and automated testing, all kinds of testing. 

###### 01:47
And we have two people who know a heck of a lot about testing because it's kind of their job. These two fellas are from a company called Cross Browser Testing, which is a part of another company called Smart Bear. 

###### 02:00
Testing, testing, testing. Anyway, let's hear from them. We have Eli Brumley. Hey Eli. Hey, hey Chris, how are you? Good, good, good. Thanks for joining me and John Reese. Hi John. Hi. So tell us about stuff. 

###### 02:15
Tell us about, you know, take turns, but I'd like to hear, you know, and I should say you do both work for cross browser testing, right? I get that. We do, yes, we both work for cross browser testing, a smart bar company, and we became a smart bar company back in April of 2016. 

###### 02:34
It's been a very, really awesome inquire from Smart Bar and we've gained a tremendous amount of effort into growing the platform and making it just a really seamless experience for, you know, the painful thing, which is cross browser testing. 

###### 02:51
It's an aptly named company, literally cross browser testing. When we say, I mean, people, the words cross browser testing just flow out of people's mouths when they're just talking about it as a concept. 

###### 03:00
And it's also the name of the company, which is a pretty wonderful thing. John, what's up? What do you do for cross browser testing? I mostly do backend stuff. I handle a lot of our infrastructure and our Selenium work on our API a lot. 

###### 03:16
So when it comes to testing, I know, I know a lot of the testing, but I don't know a lot of what the testing is doing on the front end. And that's where I come in. So my official title for cross browser testing is designer. 

###### 03:33
I'm more of a UX UI guy and really just making sure that the marketing stuff is ship shape as well as taking some of these really powerful tools that the developers build out and making them an intuitive experience for the users. 

###### 03:49
Cool. So we're going to talk about cross browser testing in general and probably some about the company itself. You might recognize them. They are a sponsor of Shop Talk Show just a couple of weeks ago, I think. 

###### 04:00
And I should mention like every other show on Shop Talk Show just because these guests happen to be from this company. This isn't a sponsored episode of any kind. Just like if we have somebody from Microsoft on it's not an ad for Microsoft. 

###### 04:14
It's just interesting because they know more than the average people do. Sorry, what's that Chris? I'm in my cross browser testing boat. No, just get those briefcases of money we sent. Yeah, just just gifts, you know. 

###### 04:29
Yeah, yeah, I will not bow to any sponsor. Says Garth. OK, Dave, you got a lot of stuff has been flowing through your mind here. I'm sure. Yeah. So can can we have a moment here of honesty? Testing is something I am not good at or I rare. 

###### 04:54
I barely do, I don't really excel. So I thought maybe the best place to start in having testing experts like y 'all here, can we talk about the different types of testing you can do for websites? Can we get a general overview? 

###### 05:11
Because I hear words like functional, unit, visual regression, what are these things and why do I use them and when do I use them? And yeah, can you take a stab at that? Yeah, sure. So I think there are kind of tiers of different testing, different levels of integration in your app. 

###### 05:34
So you have unit testing, which is testing individual components, you know, kind of the atomic level of your application. And then integration. That's the one that's like, does my function called sum actually add two numbers together? 

###### 05:51
And I'm going to write a test that says, I'm going to give this function one and two, and it better as hell return three. And if it doesn't, you have a problem. Yeah. I think that isn't usually what you see in the front end most of the time. 

###### 06:06
You tend to see more integration tests. You want to know how your stuff interacts with each other, because that transfer of state is really when everything starts getting messed up. So an integration test is going to be integration tests or functional test is going to make sure that. 

###### 06:24
Are those literally the same? I think so. I usually hear them used interchangeably. So at that point, there's like URLs involved already, right? Like go here and do this. Yeah. Yeah. And you can either, you know, you can have your own, you can have code in your code that tests your own code. 

###### 06:47
OK. But that gets real messy real fast. So a lot of times it's easier to just get a browser pointed at your website and then have that do the testing. And that's where slitting comes in. OK. It is an example of an integration test like I want to make sure that our login system works. 

###### 07:08
So please fire up the browser, click the login button, enter these two, use this username and password, which I in this testing environment, I know should be accepted as a real login and password and then click the login button, fake click it essentially, right? 

###### 07:26
And then success should happen. Like I don't know what the success determination is, but maybe there's a welcome screen and you test for the presence of the H1 on that welcome screen or something. Is that about right or? 

###### 07:41
Yeah, I'd say that's right. I think the words you use aren't as important. It kind of changes depending on what the rest of your tests look like. But the important thing is just to have a test that tests your login page, whatever you want to call it, you should know that your login page works. 

###### 07:58
Okay. Okay. So that's, that's different. There's two kinds we just covered. There's unit, which is like more of a backend thing. Usually you're saying there's not a lot of small tests. Yeah. And then integration, which involves a browser. 

###### 08:13
Yeah. Integration or functional or acceptance. Lots of people have lots of different names, but I tend to think of it as kind of small tests versus larger system tests. And Selenium is like, is a major word and a major player here. 

###### 08:30
So what is it? Right. So Selenium is how you tell that browser to go and do things to test your page. It's the language. It is a, it's a standard Selenium is a standard that defines how browsers should be able to be automated. 

###### 08:56
Selenium define. That's really, it's a standard. So I could write something in Selenium. What I need permission to do that, is it a company too? It's actually, it's an open source project and there's a W3 document. 

###### 09:15
Really? A W3C document, yeah, defining the specification. Oh, I have no idea. Yeah, so Selenium is really just a set of standards and it's up to the individual browser manufacturers, browser makers to implement that standard. 

###### 09:31
So Chrome has their own, it's called a web driver because it drives the browser. Chrome has their own web driver, Firefox has theirs, Microsoft has an edge driver and an IE driver. So in the same kind of way, it's of they implement like accessibility tools into how their browser works and all that. 

###### 09:48
It's the same kind of thing. They need to have the, they need to standardize how this code can drive their browser. Wow. Exactly. Which can sometimes lead to some issues because they don't always work the same way. 

###### 10:01
Like Microsoft Edge, the Edge web driver was lacking some really main Selenium features until pretty recently. So you would try to run your test, it would work great on Chrome, it would work great on Firefox and then you try to run it on Edge and you'd get random failures just because your commands haven't been implemented yet. 

###### 10:22
No kidding. But they finally got around to making that better this past year. So essentially there's like, I don't know, go to this URL and fake click this button. That's like, it's standardized because I should be able to write a line of code that does that that works in any browser. 

###### 10:40
Right. And a lot of those main ones, go to this page, go back, make sure this is here. Those are all good and standard, but you can also do weird stuff with Selenium. Um, like you can interact with certificates. 

###### 10:53
You can install extensions. Um, I see you can, you can do a lot of. Interesting browser behavior, but just like web development, the, the basics are, are almost never a problem. It's all these little, the weird stuff, the edge cases, the complications. 

###### 11:10
The edge cases. This is interesting. I, I swear, I thought Selenium was like a company in San Francisco. So I'm learning a lot, but I go to the website and I'm like, maybe it's from Seattle, but, um, though I was editing a, I was editing an article this morning that capitalized edge in edge cases. 

###### 11:32
So it's a, it's a real thing. Nice. Uh, so when I, when I say, do I say, like catch me up on the lingo. It, do I fire up web driver or do I fire up Selenium? What's, what do we, or do I fire up Selenium web driver TM? 

###### 11:50
Yeah, your test is probably going to start with from Selenium import web driver. And that's, so the thing that you're interacting with is the web driver. If you're using a service like us, it's going to be a remote web driver, which means it's going to be commanding a browser that's not on your own machine. 

###### 12:09
It's just going to be sending commands off to be resolved somewhere else. Okay, because that was kind of my next question. When I run a web driver test, it works on my browser on Dave Rupert's computer. 

###### 12:25
It fires up that one, that instance, and drives it around and then disappears, like exits out. Is that how that works? Yeah. So when you're running it locally, it just hooks right into the browser process, basically. 

###### 12:39
Your code talks to the Chrome web driver, if you're testing Chrome, and then you send standard commands, standardized commands to the Chrome web driver, and it will turn them into system level calls to mess around with the browser. 

###### 12:58
And you don't see it. It is kind of like, because we hear all the time recently about headless Chrome and headless Firefox, and everybody wants their headless browser. Why is that new? Selenium's been around way longer than that. 

###### 13:13
Yeah, I think the main difference is just that with Selenium, it's actually not headless. You see it running. You can get a video of it running. Oh, it's not headless. It's not headless. I think you can use it with headless Firefox and Chrome, but I think there's something really nice about being able to actually watch it run. 

###### 13:34
That's kind of cool. We can watch the... Can you be like, move cursor to here and watch it move the cursor over there? Yeah. Wow. It's fun to watch it like someone else just... Manning your browser for a bit doing your testing for you. 

###### 13:50
Yeah, in a way, it's like a yeah It's like a QA person that you programmed a little testing robot Exactly. Okay. So what what kind of testing is it when you just like open it up in Firefox instead of Chrome and look at it? 

###### 14:05
Yes, that's that's main testing or just visual testing legacy testing legacy. Yeah Whoa, whoa real world I like to call it. Yeah, it's I think it's I think it's very it's I think it's still relevant You know the future is the future is automation and doing more rapid You know visual testing which we have solutions for that we talk about in a bit But the whole manual testing is kind of spot -checking going through Clicking on elements and this is more for just kind of smaller tasks that you want to make sure things Things are seamless. 

###### 14:38
You know a lot of manual testing is also good for accessibility and general usability because a lot of those things you have to go into the console and just kind of check, you know, make sure your, your title tags are there and things like that that are more monotonous task. 

###### 14:53
Um, but let this still extremely important for obviously having a good accessible website. I hear it called a exploratory testing a lot. That's kind of a, Oh, I love that. Oh yeah. That means you're just going around poking around. 

###### 15:09
Oh, I'm a pro at exploring. Or just seeing what you can break. It makes it seem so level 70 wizard. Yeah. There we go. Well, I mean, but the reason you might want to do this. So I'm on like cross browser testing .com, right? 

###### 15:22
There's a, there's like a hero thing at the top and then right below it or right between the next two sections, there's three boxes set in a row next to each other. Classic web design action. These three boxes next to each other. 

###### 15:36
Um, well, what's inside of them are the three types of testing, at least according to you, which is cool. But if you look in your web inspector and you see there's a section tag around them with a class name of triptych around it, triptych is display flex and it has properties and stuff. 

###### 15:53
This might be the kind of moment where in exploratory testing, I might just pop that baby open and, uh, maybe a mobile environment to see what happens to those three boxes or make sure that the way that I've written my flex box code works as far back as I could and stuff. 

###### 16:09
And that's just straight up that. I mean, but the only way to do that is exploratory testing. Really, right? It is unless you kind of flag things on a visual level or automated level, uh, you know, you find something that's kind of broken or, uh, erring out in your layout. 

###### 16:27
And so with that, then you'd go into kind of the lower level, um, focus testing, like, you know, visual testing and then going into debugging mode, uh, or just going through and trying to, you know, maybe you need to go and write some support tags for flex box or, or do some legacy stuff based on what you're trying to represent in your browser. 

###### 16:46
Yeah, I think that kind of bug that you want to catch specifically is great with our screenshot system or just screenshots in general because you can really quickly just visually confirm how your site looks across a bunch of different browsers. 

###### 17:03
You can just get 20 different phones to run screenshots and then see in a minute that, oh yeah, everything looks the same or oh man, on this one weird phone, these buttons just are completely out of whack. 

###### 17:18
Sure. So these are very different things. I mean, we just got done talking about Selenium and whatever weirdness that is. Probably the, I don't know, the kind of person that spends a lot of time in that world and writing those tests is, I don't know, in my experience, a different human being than the one who is looking at screenshots and shots to test how FluxBox is working across. 

###### 17:45
They're like different jobs almost. Yeah, I mean, I think it's just different tiers of testing. So if it's, you know, if you have a kind of a smaller site that just needs to get some spot checking, I think manual testing and using visual screenshots is definitely the way to go. 

###### 17:59
But if you have, you know, for instance, Jenkins tasks set up, so every time you deploy, you'll have Jenkins run a Selenium test, you know, to check A, B and C. That's where, you know, kind of those rapid testings for Selenium is where you're really going to benefit and save a lot of time. 

###### 18:19
And that's more on, you know, it might be a larger scale company that's pushing out a lot of products, pushing out a lot of web presence, and every time you build some new component, you know, run, deploy this thing via Jenkins and run these screenshots against these things, go click in, log in, do your magic, whatever kind of funnel you want to have set up. 

###### 18:42
And then from that, you can go through and just kind of spot check which one passed, which one failed, and then see why they failed if you need to go into kind of exploratory testing or manual testing and fix some of those errors. 

###### 18:53
Yeah, I think whether or not you automate really just depends on how mission critical you think not having any bugs is. You know, if it's a checkout process, you're going to want to have that tested. 

###### 19:06
That is not something you want breaking. If it's, you know, just a marketing page for a special offer, that might be something that you only want to visually check, spot check, to make sure it looks okay. 

###### 19:19
Maybe a little Selenium test to make sure people can sign up. But it really just depends on how much you want to invest in making sure your stuff works. And do y 'all recommend like Jenkins for those don't know, it's like a testing environment, right? 

###### 19:38
You kind of program it like, hey, do these rules and everything should succeed. And then you can even do a test. either pass or fail to build, right? Do you recommend that like at the, like I guess like pre -commit level or the pre -merge level, where should we be testing and rejecting if it messed up? 

###### 20:03
I think the, you definitely wanna have something run a full suite of tests before you push to production. It'd be kind of a waste to not run tests when you're about to deploy. And I, you know, it's always a trade -off between how much time and resources you wanna devote to testing and how important it is that your stuff is tested. 

###### 20:27
So a lot of QA teams have what are called smoke tests, which are simple, fast tests to just make sure something builds and basically works and they'll run those smoke tests on smaller commits or... on different branches, say when they push to a test environment or a dev environment. 

###### 20:49
So they're not using their resources. They're not running their full test suite every time they make a little commit. What? Okay, so it's interesting. I work with a lot of clients and it's always risk averse. 

###### 21:10
Something happened, like somebody pushed a bug that broke IE 10 and now everyone's afraid to commit because somebody broke IE 10 once. And so I think this automated testing would be really good. But what's the process for making a test? 

###### 21:31
Is it difficult? Does it take a lot of time? What's the learning curve for something like Selenium? And could you walk through? It'd be mouth coding, but setting up a how to test a login form with WebDriver. 

###### 21:49
Yeah, there are so many different ways. If you really need to just get something out fast and do something really easy, there are ways to record your actions in a browser that will spit out. Really? That's cool. 

###### 22:05
Yeah, Selenium IDE and Selenium Builder are two Firefox plugins that can just take all of your actions and just spit out a Selenium script at the end. See, that seems too easy. And it kind of is. The tests that it spit out tend to be pretty brittle. 

###### 22:25
A lot of times they use X paths, which, you know, if... That's rough test. That's rough stuff. That's rough stuff. It'll work in a pinch, but if you really wanna make something that'll last, you can... 

###### 22:37
At least you can look at the code, though, then at the end and be like, oh, I see what they're doing here. Let me clean this up a little bit. That's true. That's something you can totally do. You know, go and see wherever it's using an X path and change that to use an ID. 

###### 22:50
Is the code, is the code like JavaScript or I assume it's probably its own like DSL or something. But is it like I can, can I query selector and things like that or? Yeah, the there are Selenium language bindings for basically any programming language you want to use, even Haskell has Selenium binding. 

###### 23:14
If you just really hate yourself. Whoa. I mean, that's like, that's, you dropped Haskell and so now it's getting full nerd. So if you're using the JavaScript bindings, which I feel like a bunch of front end developers would be comfortable in. 

###### 23:38
You just, you import your web driver. or you require it, and then you tell it to, you give Selenium commands to run, say you want it to go to a URL, you say driver .get, and then the page you want it to go to, and then that'll return a promise, and you end up having a kind of a chain of promises that either get resolved or rejected, depending on whether or not they pass or fail. 

###### 24:11
So you can also have commands that check to make sure the text in one of your links is what you expect it to be. I think we get the point though. There's ways to do this, and you can write it in JavaScript if you want to, but it's kind of amazing that you can write it in whatever you want as well. 

###### 24:32
Okay, let's say the test is done, you have it, it's working. Isn't it kind of part of the beauty of cross browser trusting that, okay, I wrote the test and it passes in Chrome, does it also pass in IE 10? 

###### 24:47
How do I run it in multiple browsers? Well, one of those ways is to use a tool, right? Right. So the first thing your Selenium script does is it sets up that web driver, which is what's gonna run all of your commands. 

###### 25:08
And if you're running on our infrastructure, you just tell it what browser you want. You can say, I want Edge and we'll just give you an Edge, or I want Safari 10 and we'll set up Safari for you. And because Selenium is a thing, I don't need to change my code for those browsers. 

###### 25:23
Right, you don't need to change anything, you just need to ask, you just need to tell it what you want to test on. Wow, cool. And that's the same kind of way, because to be honest, the way I use tool like cross browser testing is mostly the manual testing stuff. 

###### 25:37
And there's a comparison there, because I just, I log in to the test center and I drop in a URL. and I make that same choice, although I make it with my eyeballs and my mouse. I click, I want this platform and this browser and please fire me one up and then it does that. 

###### 25:55
So just in case people didn't know, I bet there's a ton of front -end developers and designers who are well aware of the tool like this, but if there haven't, I mean, this didn't exist forever, this type of ability. 

###### 26:08
It's, you know, in the grand scheme of things is fairly new and it's pretty amazing. And this idea is like, oh, my thing could be broken in IE9. How am I gonna do that? The historical way to do that would be like, it's gonna be a pain in the ass. 

###### 26:24
Like I should fire up a VM that has IE9 on it. And I think Windows provides one for testing for free, but still it's a VM and I need a, you know, I gotta get a copy of Windows running or something, or, The stage after that was that there was a screen testing tools. 

###### 26:41
Like give it this URL and I'll give you a JPEG back of what it looks like in that browser, which is pretty cool. And cross browser testing can do that too. And the advantage there being that you can get 30 screenshots back pretty quickly, which is pretty valuable. 

###### 26:56
But it doesn't give me a click aroundable web inspectable version of IE9. One of the things that cross browser testing can do is that can fire me up some IE9 right in my Mac on Chrome without spinning up a VM, without doing any of that. 

###### 27:15
I it's just like a version of IE9 in my browser, which that's the part to me that still amazes me to this day. I'm sure it's old hat, especially for those of you that work there. But it's kind of amazing that you can do that at all. 

###### 27:27
It feels pretty magical to be able to just fire something up and within seconds you're in a session and can just debug things on the fly and then switch configs. And before you know it, you could kind of rapidly test your stuff on a manual level. 

###### 27:44
And I think it's still relevant. But using things like the screenshot engine is there's a lot of stuff that we've implemented with our screenshot engine like Slenium. So you can actually write a Slenium script in running against our screenshot engine. 

###### 27:58
So say you have an internal dashboard that's kind of log in panel or something that you have to prompt a few steps to get to. Oh, no kidding. So these two things can kind of work together. Like go to this URL and click this and then hopefully that modal is there. 

###### 28:16
I'll see that modal in the screenshots. Exactly. Yeah. You can also request to record videos with Slenium. So say back to the screenshot example if you're doing just kind of rapid visual testing, if you need to write a Slenium script to get past a login form or add things to the cart, then you can request your screenshot at various stages. 

###### 28:38
upon that versus going in manually clicking elements to get to that view and then requesting a screenshot. Wow. And look at this and then you can even get a little video of it if you want to. Yep. That's something else. 

###### 28:52
It's a brave new world, you guys. This episode of Shop Talk Show is brought to you by Full Story. That's fullstory .com slash Shop Talk, which is the URL you want to go to because then you get a free month of Full Story Pro with no credit card or no commitment or anything. 

###### 29:09
A free month of what, you might ask, what is Full Story? It's a session recording tool. It takes about 10 minutes to install it into your app. Just a little JavaScript snippet. You get in there, maybe pass it a little information about what's going on at the page and starts recording sessions. 

###### 29:24
It's essentially recording the DOM. It's really amazing what it can do. Whatever I say here can't do it justice. You've got to go try it out because it's So amazing. But you can then, you know, it's recording users using your website and, you know, feel free to put in a little logic there of what you want to record and when and all that stuff. 

###### 29:42
But it's literally you just watch people use your site then, watch them navigate around, watch them interact with your site. And you're seeing exactly what they're seeing. And it's not even a video. It's like, like I said, it's kind of like recording the DOM. 

###### 29:55
So you can say, you know, search around, show me when people clicked on the button with this ID and it will narrow selections to that. It will show you frustrated users and rate you against other apps kind of anonymously, you know, to show you how you're doing and that kind of thing. 

###### 30:12
It's really pretty incredible in what it can do. So go to fullstory .com slash shop talk and get the free month, get it up and running on your site in 10 minutes and can start understanding how people are using your site. 

###### 30:25
You know, they people like Dropbox use them, Wisty, Zenfits, Shopify, lots of companies use it. I use it. I think it's awesome. Thanks, full story. OK, so I think we've covered the types of testing. There's this like very manual or what were we calling it? 

###### 30:45
Exploratory. Exploratory. I love that. And there's the screenshot stuff, but the screenshot stuff is related to, you know, it's you get a lot more of it quickly and it can be tied to this automated Selenium stuff too, which is writing code to explicitly telebrow or what to do. 

###### 31:04
And you can also drive the screenshot system with through Selenium and with an API call, you know, you can have your Jenkins kickoff a screenshot test. OK, wow, there's a lot there. So, Dave, where do you want to? 

###### 31:21
There's plenty of places to go here. But do you have thoughts on that whole world? I would love to hear some anecdotes, maybe. Like, what are like the. What do people actually catch with this? Yeah, what bugs are we catching here? 

###### 31:37
Or like, do we have any good anecdotes of like things people found? Or, you know, I always think of this time, I have this app called Daytrip. I like ship some code and it was broken. And the login form was broken in IE, or wait, no, it was broken in mobile Safari. 

###### 32:03
And I was like, oh, that's bad. So I think what I did is I was like, oh, I don't have like a fetch polyfill. So I put a fetch polyfill in there and it's like, okay, I fixed the signup form. I'm done, cool, goodbye, have a nice weekend. 

###### 32:19
And then it's like, oh, it doesn't work in Edge because Edge didn't have promises either. And so you need, Promise polyfill to make the edge polyfill or the fetch polyfill work to make it all work altogether. 

###### 32:32
And I just was like, I just, I like broke down basically because I was like, how am I supposed to test this? Like, you know, like I could have like, sure I could have like set up all this automated testing and like, you know, every commit I ran it through 4 ,000 browsers or whatever. 

###### 32:49
But like, I guess like, what kind of things should I be testing? And then what are, what are like dumb, useless or overly hard things you see people testing when they like are building things out? Yeah, I can just speak a little bit to that. 

###### 33:05
So I think there's this glamorous rumor that all browsers have to look the same. And consistency is good for obviously usability and for Google sake, you know, that they want to make sure that usability is consistent across all platforms and browsers. 

###### 33:21
It's extremely important for any kind of SEO impact and accessibility testing. But the biggest thing is, you know, that truth is actually not true at all. It's every browser is different. There's thousands of resolutions. 

###### 33:36
There's thousands of devices. And with each advice, there's dozens of browsers or a handful of browsers you can put on each of those. So it can be quickly overwhelming to think about what you're up against. 

###### 33:49
But I think the biggest thing to just focus on is one thing at a time and using the tools to your advantage. And part of that is, except in the fact that not everything's gonna look the same in all browsers. 

###### 34:04
You know, unless you're building everything in tables, that's not gonna happen. I'd say especially if you're building everything in tables, that's not gonna happen. Yeah, I mean, you know, everything's evolving, everything's changing. 

###### 34:16
You know, every phone that comes out from Samsung and Nexus every few months, it's gonna have a different resolution. You get this new iPhone X, not iPhone X. that has this notch at the top. Of course, you know, Chris did a fantastic blog on CSS tricks on the notch, working around that notch in landscape mode. 

###### 34:36
So good blog to check out. So there's just various things to. Oh, you don't have you don't have iPhone 10 on cross for the testing. Now, yeah, we're working on it. One has. Keep an eye out for it. OK, we're keeping our eyes. 

###### 34:48
Yeah. Oh, that's yeah, I want to see that monstrosity. Sorry. OK, OK. So all right, keep going, keep going. I feel like it. Yeah. So with, you know, kind of the big starting question is, what do you test? 

###### 35:05
You know, because it can quickly be overwhelming. And so with that, I highly recommend Google Analytics. You know, everybody that has a website should have some form of analytics set up. Google's the best. 

###### 35:16
And so with Google Analytics, that's really where I typically start to test if I'm building out front end sites. And so. What is Google Analytics telling you? Yeah, so Google Analytics will tell you OS type. 

###### 35:30
It'll tell you what browsers are being used by your traffic, your visitors, as well as those dates fluctuate month to month and week to week because browsers are constantly being updated, as well as people are getting new devices. 

###### 35:44
So as these things constantly roll out, you have to be on top of what your code supports and what your users are using. So for instance, if you are running a trendy, cool mobile app, you might have a lot of really relevant up -to -date browsers that support things like Grid or Flexbox. 

###### 36:04
But if you're a university or, for instance, a hospital, you might be working in IE 7, 8, 9 that has to have support because if that stuff is broken, it can be mission critical. You've got to know what your customers are using and write your tests to make sure that the most... 

###### 36:24
so that you can cover the majority of your users and make sure that their experience is good, whether they're a bunch of developers running Canary Chrome or a bunch of people in a senior home who are stuck on IE 8 in their Windows XP box. 

###### 36:42
Yeah. I mean, in every site, every configuration of the user and browser in OS is going to be different. You could assume things, but the smartest way to do it is just design with data and test with data. 

###### 36:56
And so say you're building this new hip website and it's all built in Grid, but then you realize that the website is for selling wheelchairs to senior citizens and everybody is an older config. Well, your checkup process might work in the latest version of Chrome and everything looks beautiful with your new CSS Grid, but it's a horrendous experience for anybody on IE. 

###### 37:18
And so those are the types of things you just have to really dig into the data first before you can start thinking about what tests... so they're gonna best fit your use case. Okay, cool. I would think there's some, like if you just sat and thought about it, you'd have some intuition as to what, what's the first test I wanna write. 

###### 37:37
And hopefully that intuition is based on like, what if I, what is like perennially screwed up this team and this project? Or I don't know if that's the right word, but just over and over. Like for example, there was like, I don't know, it was a little while ago now, but it seemed like every little change we made at CodePen would somehow screw up the mobile version of our editor. 

###### 37:55
We have like kind of a different, we have a different view. It loads like different HTML, CSS and JavaScript for the, for the mobile editor, but it's still like digest the same data and largely has the same options available to it. 

###### 38:07
But we'd like add a new option or something to the desktop editor and, you know, that's the primary, you know, people use that, you know, a hundred times more than the mobile editor on our site. And then, but the mobile one wouldn't be aware of that feature because we forgot to just pop in there and just make it aware of that data. 

###### 38:25
And JavaScript, any little thing can just be like, oh, here's some data that I don't understand. I'll stop processing all JavaScript, because that's how JavaScript likes to roll. And we'd be like, oh, we literally ruined the entire mobile editor. 

###### 38:40
Like it hit an error and it didn't even get to the point where it loads the code into the friggin' editors. So it might be a moment where we'd stop and be like, OK, that needs a test. That just it needs a test of some kind to make sure that that doesn't happen. 

###### 38:54
It'd be kind of neat if there was a way to write a really generic test to be like, does this page experience any JavaScript errors? Please tell me that. Oh, man. Yeah. If you get really invested into your Selenium, some of the most beautiful automated Selenium, I guess, implementations I've seen by companies, they basically build their entire custom framework. 

###### 39:19
So they'll have what they call page objects, which describe different functionality. They describe what kind of elements should be in the page and how those elements should interact. And they'll have functions that describe how users can interact with those different elements. 

###### 39:40
So kind of a super modular way to test. So they'll have like, oh, I want to test my login and check out flow. So they'll say, I want to go to my login page objects. I want to run this login function that tests all of your login things. 

###### 40:02
And then I just want to add something to my cart. So you'll say product page dot add to cart. And that'll kick off an entire suite of actions that adds something to your cart and make sure that way you added to your cart is what you thought you were adding to your cart. 

###### 40:21
You can end up with these really beautiful, expressive, generic tests that you can kind of compose together to just test all of your functionality. It's an investment, but man, once you get that stuff set up, it is like testing nirvana. 

###### 40:41
It's funny though, is there, now that I've thought of this little micro idea in my head, it makes me wonder, is there a way to set up Selenium or anything else just to be like, yeah, I want to write these like nuance tests too. 

###### 40:55
I want to get to testing nirvana. But I also want a test that says go to this URL and did all the JavaScript execute without an error, just of any kind. Yeah, totally. One of our co -workers, Tony Colston, actually just did a talk. 

###### 41:13
I forget what conference he was at. I think it might have been the Smart Bear Conference. He did a talk about kind of managing JavaScript errors in the JavaScript console in Selenium. So it's a, you can totally do it. 

###### 41:28
That would just, that seems like a great test because it seems like was error? Yes, then tell me please, because that's, you know, you can't tell until you go to that URL and look. Yeah, that seems like a great way to get started. 

###### 41:41
I imagine that would catch a lot of, you know, not a lot of them, but to get a lot of people. They're the most embarrassing errors too. They're like, oh my God. Just to straight up, it's like, you know, one, some kind of dumb little, I'd say missing semicolon, but that's two. 

###### 41:56
Yeah, or like, oh God, I forgot to check if this property exists. And now my entire site's just a black page. That's it, yeah. I mean, Dave, that just, you know, you were just lamenting that the other week, you know, how you have to check if properties exist all the time. 

###### 42:11
And it's just sort of the pain of, you know, everybody wants to go vanilla JavaScript, but you forget sometimes the pain of that. Yeah, yeah, just, I think that's like, you know, recently the difference between CSS and JavaScript has been like a big, big topic or whatever. 

###### 42:29
But, you know, CSS is like, I didn't get it. I'm just gonna skip it, but, you know, yeah, I'm just gonna just skip it in JavaScript. Like, you can't, you can't set an attribute that doesn't exist, man. 

###### 42:44
Or like, you can't get an attribute that doesn't exist. I'm dead, I'm out, okay, sorry. You did this, you did this to me. You did this, I'm not the bad guy here, I'm JavaScript. No, that's, I think that's the like, I feel like, just the nature of JavaScript. 

###### 43:03
And I think we're all seeing, you guys probably actually, probably have metrics on like how much JavaScript you're processing. But, you know, people are moving over to JavaScript more and more depending on it to render pages, build things, you know, submit things. 

###### 43:17
I feel like the fact that it is so brittle and just one, I guess, wrongly type thing can just explode you is something, you know, I think that's worth testing. Actually read, this is tangential, but somewhat related. 

###### 43:33
I read a academic paper about using strong type languages like TypeScript or Facebook's Flow. And they said, you know, just, just implementing a strong type system into like open source repos could solve like 15% of all bugs just because people like, just because you have a strong type system, it like reduces the number of bugs. 

###### 43:59
And that's just to say, like, you probably have 15% of your errors because somebody like is trying to pass a number in or a string into an addition function. You know, and it's just like, man, I don't get it. 

###### 44:14
All of our back end and front end stuff is all mostly vanilla JavaScript and Angular and Node. But I've really been dying to switch over to TypeScript. Because I can't tell you how many times I've sat there staring at my code for hours just trying to figure out, you know, how I got an undefined somewhere or why, you know, why my object isn't an object. 

###### 44:39
Yeah. It's always parse int is the answer. But the other day we were trying to get... Yeah, Comma 10, because you're going to mess it up if you don't do Comma 10 weirdly. But we're doing like some element query selector dot last child because we actually needed to grab a text node that was like the total so we could like send that total off to some A -B test thing. 

###### 45:11
And... But the total was not wrapped in a node. So we had to just like somehow get this little bit of string without doing some crazy ugly regex and we are like element last child and then we're like, okay, you know, send last child and it's just like, nah, I don't do that. 

###### 45:29
And you're just like, what's going on? Because you like console log, you know, element last child and it's like 45 .00 and you're like, okay, cool, that's a number. That's right. And then... But the type, it's actually a node item that you have. 

###### 45:43
So you have to do like node item dot text content and like... And then you parse int on that and it's... It was just like a... Or parse float, I think is what we did because it's a decimal. But man, it was just such a... 

###### 45:56
Such a WTF moment because you're just like, I don't get this. I do not understand... That's classic JavaScript. Yeah, yeah. You're staring at the code. It's telling you the right answers when you try to check them and then it just isn't. 

###### 46:12
And so... But I think that's the reality. reality we all live in is we're all bug hunters for our own code. Wise words. I had, so, okay, this testing, and you guys were saying you build the interface for cross browser testing. 

###### 46:33
So, like, does implementing a test suite, like, you know, maybe that dream suite is obviously like a nice thing, but does that slow down your development? Is my job a bummer in what do we say to the shop talk listener who's under the gun from their boss to, like, ship a WordPress site every week or something like that? 

###### 46:59
What about, we can also talk workflow, because it sounds like that's related to that. Like, what is testing and workflow like? I think if you have a really nice setup, and a team that supports you and some good infrastructure, it can make your job so much easier because you'll have a bunch of tests that run overnight, you come into work in the morning, and you have a checklist of stuff that is broken. 

###### 47:28
Over night, how long do these things take? I mean, it depends on how big you are, how much you invest in this. A lot of our biggest customers do run tests overnight that take hours and test every page on their website, a full application test across tons of different browsers and devices. 

###### 47:50
We actually have one guy who has a script that takes the videos of all of his automated tests that run overnight and stitches them together into one big long video with captions showing what's happening at every moment. 

###### 48:06
And the first thing he does when he comes in is make his coffee and watches those tests. What? And sees what breaks. My God. Yeah. Wow, I watch Overwatch, YouTube's, but that's cool too. Remember that guy in Waterworld, and his job was just to report how much oil there was in the oil tanker, and they'd like, I don't know, that just seems like an awful job, but if he... 

###### 48:31
Wow, okay. But you can go that deep is kind of what you're saying. You can compile out some video if you want. Yeah, you just get to know where your stuff gets broken. So I guess like somebody who has to, the good fast cheap triangle, they're building on the fast and cheap end. 

###### 48:56
Like, does testing fit into their lifestyle, or do they need to wait on some, is it more for something like a product that's kind of long -term, has a longevity? There's a lot to be gained for both. I think the fast and cheap quadrant can get a lot out of it just by saying, writing a test that's super simple, goes to a page, does a thing, checks for errors. 

###### 49:29
Just kind of a sanity test on your site. You can run that when you make changes just to check that, okay, yeah, I didn't massively screw this up. I can keep moving forward on this. That's something you could probably do, like pre -commit or something, just something like run it through Chrome on my machine and just see if I messed it up? 

###### 49:59
Yeah, yeah. Yeah. Or say you have a lot of users still on IE 10 for whatever reason. You know, you abandoned your Windows 7 box years ago, so your IE10 is gone. And you just want to make sure it works really quick. 

###### 50:19
You can just record a quick Selenium test, click around a bit. And then every time you make a change, before you push it up, you can just run it and make sure that it still works. You know, it's probably 10 minutes to record the test. 

###### 50:32
And then you can play it back however many times you want. And you'll always be able to know before you commit your changes that, yeah, your site still works. At least the main thing that that page is doing still works. 

###### 50:48
So it's not a big investment for a really big payoff. Yeah, that changes aren't like no breaking changes kind of. Yeah, just a fence for that. Yeah, and just over time, the longer you do that, the longer you stick in that fast and cheap quadrant, the more tests you're going to end up with. 

###### 51:12
And over time, that just builds and builds into... And before you know it, you have an automated test suite that, you know, is fairly comprehensive. Almost without thinking about it. And then once you have that suite of tests built up, you're probably going to start seeing patterns and things that you can abstract out. 

###### 51:31
And then you have more generic tests. And before you know it, you're starting to have like a testing framework customized for your own site. So I mean, I think really what I see is the fast and cheap quadrant can turn into testing Nirvana pretty quickly. 

###### 51:47
So while I'm striking out with metaphors, let's say... Let's go. Yeah, okay. You know how there's like... I might do it. There's pills for like high blood pressure, you know? But like another one of those solutions for that is to like not eat nachos for breakfast. 

###### 52:10
about my breakfast nachos? The science is still out here. Sorry. Is there some situations like that too? You don't need as much testing if you do these practices, kind of thing. Is that worth talking about? 

###### 52:25
Like what can you do to help yourself here with making sure your kind of cross -browser cool and bug -free? I think CanIUse is an excellent resource to figure out what CSS works on what browsers. So you should have a good gut feeling for what is safe to use and what isn't safe to use. 

###### 52:49
Yeah, so with CanIUse, we talked about analytics previously. CanIUse has an analytics integration. And so if you go and it's CanIUse and you type in grid or flex box or whatever kind of new fancy animation property you want to put in there. 

###### 53:07
And then you can actually import your analytics. So not only will it tell you a global level across what property will be supported across all global browser usage, but specifically about what usage you have for your users. 

###### 53:21
So say you're testing grid or whatever, you can actually quickly go in there, say you're gonna use grid for the majority of your layout. Oh wow, well I have 60% of my users don't support grid. Next question is how do you handle that? 

###### 53:38
But just knowing what you're up against and being responsible about what properties you're using and not getting just so blinded about the excitement about new things coming out, but just being aware of how responsible, having some of these cohesive experiences are because frankly, a bad experience that's quickly untested and slips to the cracks can really make or break a company. 

###### 54:05
If you think about someone that is heavily relying on, say a nonprofit that heavily relies on staying up in via donations or an e -commerce site that's trying to create a brand or create sales, if you have for instance a JavaScript, that annoying little JavaScript error that slipped to the cracks, maybe that entire checkout funnel or donation funnel is broken, say you're deploying code and you're not testing that, that can really make or break the success of your company and your online experience. 

###### 54:33
And so it's not just one thing like can I use, it's just really building that muscle of testing and that mindset and making it a good habit for your team to have a portion of QA and just going through and spot checking and running the tests of suites and eventually it will start building up and building up and becoming faster so it's not such a monotonous task, just clicking around a website and then changing configs and then repeating those actions. 

###### 55:04
That was a, was a nice wise words to probably wrap up that section with a little bit. So as we kind of approach the sad ending of this show a little bit, maybe, Dave, if you have any final questions, it'd be good to ask those and then. 

###### 55:22
Yeah. Uh, I think, I think I just have one question and, um, I think it's like very timely because it's on the top of everyone's mind, but, um, our, our web driver scripts, powering Russian botnets. I, I have seen things. 

###### 55:39
Um, wow, I think like people trying to use a service, not necessarily yours, but to run malicious, uh, intense. Yep. Yep. I think Selenium, uh, definitely has potential for great evil. Um, seeing people, um, yeah, I've seen people use, uh, Selenium to, Scrape website. 

###### 56:05
I don't know if I should be talking about this, but I've seen I've seen people use it to Automate other people's browsers and get them to mine bitcoins. I've seen people use Selenium I mean the answer is of course they are yeah the language for that, you know like it's just that's just the way it is Anything you would want to hijack someone's browser to do Selenium This is the choice That's I often thought I should like make a gold plug -in That would when you spin up gulp or grunt or something It would like mine bitcoins, you know and like I install it at my company It rolls out to like 400 developers and then Then all of a sudden people are mining bitcoins for me and they don't know be cool If there is a low -level thing and your computer that you could make it use touch ID or face ID or whatever before Us Selenium process was allowed to start so even if you're running them overnight at least you got a like face ID Before you leave for the night That'd be cool No, that's fun. 

###### 57:10
Anyway, sorry It is I think that was kind of like a I don't know if I can now program a computer to drive the web What else can I program it to? To do yeah, and the answer is Anything I have a I have a fun little personal project where I actually use Selenium to go to Slack and I have it kind of read and interact with slack and get information and pipe it over I'm a terminal junkie. 

###### 57:41
So I have it basically just pipe slack into my terminal Whoa, and I can have I can you know send my message and have it Send that to Selenium and then Selenium will type it into Slack and press enter I get all of the battery loss of running it in Chrome and all of the inconvenience of using it through my terminal. 

###### 58:00
It's great So I have a stand -up bot that talks to me every day. Could I program when that message comes in, could it just go to my GitHub, like go to the project that's relevant to the bot asking a question, check insights, and then kind of like give a commit history on what I did? 

###### 58:21
Yeah, it could. A lot of what I use Selenium for is like, cause I'm too lazy to actually figure out how to properly scrape a website or properly automate a website. I'll just say, okay, load up a browser, pretend I'm actually there. 

###### 58:34
Mm, wow. Interesting. That's fun. Okay, now my brain's turning. All right, well, thank you all so much for coming on the show. I really appreciate it. For people who aren't following you and giving you money, how can they do that? 

###### 58:49
We'll start with Eli. Don't need money? Find me on Twitter at Eli Brumley. Feel free to give us the pitch for Crosby. Everybody gets a pitch at the end of the show anyway. You might as well do it. We haven't done it officially. 

###### 59:00
The pitch for CBT. Yes, cross -browser testing. I think it's one of the best testing tools out there. You can actually sign up right now for the seven -day free trial. And you can test pretty much every component of our app to get a good feel of how you can integrate this into your environment and your workflow. 

###### 59:20
It's quite the tool. And if you still have questions, we have a ton of really smart guys here that would love to talk. via Twitter. X browser testing is our Twitter handle. We actually have webinars that happen throughout the week. 

###### 59:33
And you can sign up for those. And those are really great times for you to come in and interact and ask specific questions about, can I do this, or how do I integrate this into my testing suite? And we've got some guys here that just love talking about testing. 

###### 59:49
And it's a great time to have some good one -on -one time, as well as if you want to learn some more high -level stuff like Selenium. Tony gives fantastic Selenium webinars that can really get you up and running within a few minutes. 

###### 01:00:03
A reasonable amount of time. Right. There's also the CodePen integration, too. I didn't mention that. But that's pretty cool how you can test anything on CodePen over cross -browser testing the visual way, or probably the screenshot way, too, I would think. 

###### 01:00:20
Yep. Maybe all the ways. All the ways. If you make sure your CodePens work, test them across different browsers, watch your CodePen fail in IE6 and AOL Explorer. Yeah. It'll be a good time. IE6 on there. 

###### 01:00:33
We still have Netscape. We have Mozilla, not Firefox. Mozilla browser. Yeah. If you just want to get a blast from the past, sign up for trial and watch everything crash in IE7. I love this. I love it. 

###### 01:00:52
All right. Well, thank you all so much. And thank you, dear listener, for downloading this and your podcatcher of choice. Be sure to starheartfavoritup. That's how people find out about the show. Follow us on Twitter at ShopTalkShow for tens of tweets a month. 

###### 01:01:02
If you hate your job, head over to shoptalkshow .com. Slash jobs. Get a brand new one. And Chris, you got anything else you'd like to do? Shoptalkshow .com. 


