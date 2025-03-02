const segment = `
segment : 
With Segment, you can collect, transform, send, and archive your first-party customer data. Segment simplifies the process of collecting data and connecting new tools, allowing you to spend more time using your data, and less time trying to collect it. You can use Segment to track events that happen when a user interacts with the interfaces. “Interfaces” is Segment’s generic word for any digital properties you own: your website, mobile apps, and processes that run on a server or OTT device.
When you capture interaction data in Segment, you can send it (often in real-time) to your marketing, product, and analytics tools, as well as to data warehouses. In most cases, you won’t even need to touch your tracking code to connect to new tools.
How Segment Works
In a nutshell, the Segment libraries (Sources) generate messages about what’s happening in your site or app, and send them to the Segment servers. Segment then translates the content of those messages into different formats for use by other tools (which Segment calls Destinations), and sends the translated messages to those tools. The Segment servers also archive a copy of the data, and can send data to your storage systems (such as databases, warehouses, or bulk-storage buckets).
Overview
Diagram showing that data is routed from your sources, through Segment, and downstream to your destinations.
Segment Spec methods are how you collect interaction data from your interfaces, and the Sources are what you package with your interfaces to collect and route the data.
Once you’ve collected your interaction data, there are several different actions you can take:
Send it to Destinations, which receive the data from any number of sources in real time
Send it to Warehouses and other bulk storage tools, which hold your raw event schemas and update on regular intervals
Enrich the customer data you collect by connecting data from your other tools, and then collect it in a warehouse to monitor performance, inform decision-making processes, and create uniquely customized user experiences.
Use Engage, Twilio’s marketing automation tool, to build marketing campaigns personalized to your audience.
Sources for collecting data
You can collect data by implementing Segment’s tracking libraries as your Sources:
Analytics.js, the Segment JavaScript source, is the most powerful way to track customer data from a website. Segment recommends it as the default installation for any website.
The Segment Mobile SDKs are the best way to simplify tracking in your iOS, Android, and Xamarin apps. Segment recommends them over server-side sources as the default installation for any mobile app.
Server-side sources let you send analytics data directly from your servers when client-side tracking doesn’t work, or when you’re sending mission-critical data like revenues.
Sources for unique cases
Segment also offers these other source libraries to cover less straightforward cases:
Use the HTTP Tracking API if Segment doesn’t offer a library for your specific environment yet.
The Pixel Tracking API lets you track events from environments where you can’t execute code - for example, tracking when an email was opened.
The Querystring API lets you use querystrings to load API methods when a user first visits a Segment-enabled site. Use this API for tracking events like email clicks and identifying users associated with those clicks on the destination page.
Cloud App Sources
Segment also offers Cloud App Sources to integrate data from your third-party tools:
Object Cloud Sources can import third party tool data directly into your Segment warehouse, but can’t stream that data into your other Segment destinations. Make sure you enable a Segment warehouse before you enable an object cloud source.
Event Cloud Sources don’t just import third party tool data into your Segment warehouse, they also send event data in real-time to your other Segment destinations. You don’t need to set up a data warehouse to send Event Cloud Source data to your destinations.
How you can track data
Segment supports several ways to implement tracking. The two most common are to use device-based or server-based libraries. You can use Segment’s device-based libraries, such as JavaScript, iOS, and Android, to make calls on users’ browsers or mobile devices. You can also track data with Segment’s server-based libraries, such as Node, Python, or PHP, where the calls are triggered on your own servers and then sent to the Segment servers.
When you collect data using device-based libraries, you can choose between these two different connection modes:
Cloud-mode is where the library sends the data directly to the Segment servers which then translate and forward it.
Device-mode is where the library sends the data both directly to the Segment servers, and also to the servers for the destination tool. Device-mode sometimes requires some additional set-up steps, but can unlock rich device data.
Although there are some tradeoffs between the two approaches, neither is better than the other, and Segment recommends that you implement a mix of both. In general, more direct interaction data is available using a device-based library, but server-based collection is more secure, reliable, and can’t be blocked by ad blockers.
The Segment Methods
The Segment libraries generate messages about what happens on your interface, translate those messages into different formats for use by destinations, and transmit the messages to those tools.
There are several tracking API methods, that you can call to generate messages. The four most important methods are:
Identify: Who is the user?
Page and Screen: What web page or app screen are they on?
Track: What are they doing?
Every call shares the same common fields. When you use these methods as intended, it allows Segment to detect a specific type of data and correctly translate it to send it on to downstream destinations.
Where you can send data
Segment maintains a catalog of destinations where you can send your data.
A Basic Segment Installation
When you implement Segment, you add Segment code to your website, app, or server. This code generates messages based on specific triggers you define.
In a basic implementation, the code can be a snippet of JavaScript that you copy and paste into the HTML of a website to track page views. It can also be as complex as Segment calls embedded in a React mobile app to send messages when the app is opened or closed, when the user performs different actions, or when time based conditions are met (for example “ticket reservation expired” or “cart abandoned after 2 hours”).
The best way to learn about how Segment works is to see it in action. This tutorial walks you through an installation using one of Segment’s libraries: JavaScript, PHP, or the iOS library.
Before you begin
Before you start your Segment implementation, you need:
A Segment user account and a workspace. If you’re not already part of an organization with a Segment Workspace, you can sign up for a free account and workspace.
Access to the code for a basic website, PHP website, or an iOS app.
Tip! If you don’t have any of those things, consider creating a simple GitHub Pages website.
Create separate dev and prod sources
When you develop and test sources, Segment recommends you to create and use separate sources for each of your environments (production, development, staging) to prevent testing and development activities from filling production systems with invalid data.
You can give each source an environment label when you create it, and Segment strongly suggests that you use these labels to sort your sources. When you create a source during the steps below, make sure you enter an environment label.
Double-check when you enter write keys for dev and production environments to make sure that you send the right data to the right place.
Create a Segment source
To create a Segment source:
Go to your Segment workspace, and navigate to the Sources catalog.
Select your source. You can choose from either the Javascript source, the PHP source, or the iOS source.
Click Add Source.
Enter a name for the source. Segment recommends that you include the word demo, test, or quickstart in the name so you can easily find and delete this source later.
(Optional) Add an Environment label of dev to the source in the Labels field. Segment recommends you do this so that you know this demo source isn’t part of a production installation.
(Optional) Add the website URL. Segment provides this field so that you can flag the website being tracked to the source. Segment does not use this URL anywhere else.
Find your write key
The write key is a unique identifier for a source that tells Segment which source the data comes from, to which workspace the data belongs, and which destinations should receive the data.
To find your write key:
Go to Connections > Sources and select your source.
Click the Settings tab for the source and click API Keys.
Make note of or write down your write key, as you’ll need it in the next steps.
Any time you change a library’s settings in the Segment App, the write key regenerates.
Screenshot of a source's settings page, with the API Keys tab selected.
Cloud-sources do not have write keys, as they use a token or key from your account with that service. Cloud-sources have other considerations and aren’t part of this tutorial.
Installing Segment
Click a tab below to see the tutorial content for the specific library you chose.
Javascript quickstart
iOS Mobile quickstart
PHP quickstart
Step 1: Copy the Snippet
Navigate to Connections > Sources > JavaScript in the Segment app, copy the snippet from the JavaScript Source overview page, and paste it into the  tag of your site.
That snippet loads Analytics.js onto the page asynchronously, so it won’t affect your page load speed. Once the snippet runs on your site, you can turn on destinations from the destinations page in your workspace and data starts loading on your site automatically.
The Segment snippet version history available on GitHub. Segment recommends that you use the latest snippet version whenever possible.
Step 2: Identify Users
The identify method is how you tell Segment who the current user is. It includes a unique User ID and any optional traits you know about them. You can read more about it in the identify method reference.
You don't need to call identify for anonymous visitors to your site
Segment automatically assigns them an anonymousId, so just calling page and track works just fine without identify.
Here’s an example of what a basic call to identify might look like:
analytics.identify('f4ca124298', {
  name: 'Michael Brown',
  email: 'mbrown@example.com'
});
This identifies Michael by his unique User ID (in this case, f4ca124298, which is what you know him by in your database) and labels him with name and email traits. When you put that code on your site, you need to replace those hard-coded trait values with the variables that represent the details of the currently logged-in user.
To do that, Segment recommends that you use a backend template to inject an identify call into the footer of every page of your site where the user is logged in. That way, no matter what page the user first lands on, they will always be identified. You don’t need to call identify if your unique identifier (userId) is not known.
Depending on your templating language, your actual identify call might look something like this:
analytics.identify(' {{user.id}} ', {
  name: '{{user.fullname}}',
  email: '{{user.email}}'
});
With that call in your page footer, you successfully identify every user that visits your site.
You’ve completed a basic CRM set up. Return to the Segment app to enable Salesforce, Intercom, or your CRM system of choice and Segment starts sending all of your user data to it.
Step 3: Track Actions
The track method is how you tell Segment about the actions your users are performing on your site. Every action triggers what Segment calls an “event”, which can also have associated properties. You can read more about track in the track method reference.
Here’s an example of what a call to track might look like when a user signs up:
analytics.track('Signed Up', {
  plan: 'Enterprise'
});
This example shows that your user triggered the Signed Up event and chose your hypothetical 'Enterprise' plan.
Properties can be anything you want to record, for example:
analytics.track('Article Bookmarked', {
  title: 'Snow Fall',
  subtitle: 'The Avalanche at Tunnel Creek',
  author: 'John Branch'
});
If you’re just getting started, some of the events you should track are events that indicate the success of your site, like Signed Up, Item Purchased or Article Bookmarked. Segment recommends that you track a few important events as you can always add more later.
Once you add a few track calls, you’re done with setting up Segment. You successfully installed Analytics.js tracking. Now you’re ready to turn on any destination you like from the Segment App.
Test that it’s working
Once you’ve set up your Segment library, and instrumented at least one call, you can look at the Debugger tab for the Source to check that it produces data as you expected.
The Source Debugger is a real-time tool that helps you confirm that API calls made from your website, mobile app, or servers arrive at your Segment Source, so you can quickly see how calls are received by your Segment source, so you can troubleshoot quickly without having to wait for data processing.
Screenshot of a source's Debugger, with a Track call selected and the Pretty view for a sample event.
The Debugger is separate from your workspace’s data pipeline, and is not an exhaustive view of all the events ever sent to your Segment workspace. The Debugger only shows a sample of the events that the Source receives in real time, with a cap of 500 events. The Debugger is a great way to test specific parts of your implementation to validate that events are being fired successfully and arriving to your Source.
Tip: To see a more complete view of all your events, you might consider setting up either a warehouse or an S3 destination.
The Debugger shows a live stream of sampled events arriving at the Source, but you can also toggle from “Live” to “Pause” to stop the stream and prevent it from displaying new events. Events continue to arrive to your Source while you Pause the stream, they just are not displayed.
You can search on any information you know is available in an event payload to search in the Debugger and show only matching payloads. You can also use advanced search options to limit the results to a specific event.
Screenshot of the Event Debugger Advanced settings.
Two views are available when viewing a payload:
The Pretty view is a recreation of the API call you made that was sent to Segment.
The Raw view is the complete JSON object Segment received from the calls you sent. These calls include all the details about what is being tracked: timestamps, properties, traits, ids, and contextual information Segment automatically collects the moment the data is sent.
Set up your first destination
Once you’re satisfied that data is arriving from your new source, it’s time to set up your first destination! As long as you have page or screen data coming from the source, you can quickly enable Google Analytics to look at the page view statistics.
If you don’t have a Google Analytics account, you can either set up a free account, or look at the Destination Catalog for a different destination to enable.
You’ll need a tracking ID for Google Analytics (either a “website” or “serverside” tracking ID), or another API key if you’re substituting another destination. Make a note of this ID or key as you’ll need it to connect your destination.
To set up your first destination:
Go to your Segment workspace, click Destinations, and click Add Destination to go to the Catalog.
Search for the destination you want to add. In this case, search for Google Analytics.
Click the tile for the destination to see information about it.
Click Configure Google Analytics.
Select the source that you set up earlier in this quickstart, then click Confirm Source.
On the settings page, locate the setting line for the tracking ID or other API key to connect to your destination.
Enter the ID or API key and click Save.
Click Back to Destination, then click the toggle to enable the destination.
Congratulations! Data is now flowing from the source you set up, to the first destination. Do some test browsing on your site or app, then log in to your downstream tool to see the data in place.
You can click around and load pages to see your Segment calls in action, watch them arrive in the Debugger, and see them arrive in the destination tool.
Note: When you’re done with this test source and destination, you can delete them. This prevents you from getting unplanned “demo” data in your production environment later.Planning a Full Installation
Now that you’ve seen Segment in action, step back and think through what a full implementation of Segment for your organization would look like. Figuring out what events to track in Segment can feel overwhelming. You should expect this planning process to have the following steps:
Define Business Objectives
Decide what to collect
Shortcut: Check if a Business Spec meets your needs
B2B Spec
Ecommerce Spec
Mobile Spec
Video Spec
Create naming conventions
Develop a Tracking Plan
Plan your Identify and Group calls
Plan your Track events
Define your Track event properties
Plan for destination tools
Be prepared to invest time deciding with stakeholders how to track your data, and planning how you’ll analyze it. The time you spend here will save you lots of time in the future, as following Segment’s best practices allows you to easily change your tracking later.
Define Business Objectives
Tracking is about learning and taking action. Think about what you want to know about your product or customers. Think about what assumptions need to be tested and what theories need to be proven true or false. Think about the unknowns. Here are some helpful questions to get started:
What kind of events or data best illustrate or explain how your customers use your product?
How do people discover, start using, and paying for your product?
What are the most important steps in a customer’s journey?
While it may seem obvious, we highly recommend documenting your high-level business objectives. More specifically, ask yourself: what are the measurable business outcomes you want to achieve this year? Do you want to acquire new customers? Generate more new sign-ups, drive more incremental revenue among your current customer base?
The best way to answer this question is to interview stakeholders in your organization who will consume the data.
With your business goals documented, the next step is to map user actions to those business goals. For example, if one of your goals is to activate new signups, you want to think about which activities are related to a signup. Ask yourself, what actions do people take before signing up? Do specific actions predict a user signing up?
As an example, you might end up with a list like this:
Ad Campaign Clicked
Link Clicked
Article Completed
Campaign Opened
Form Initiated
Form Submitted
User Signed Up
While this list represents a tiny fraction of the user actions you could track, it gives a list focused on your top business objectives. This helps break up the huge project of data collection into smaller chunks.
Decide what to collect
With your business objectives documented and mapped to user actions, it’s time to build standards that you can use when deciding what to track. With your stakeholders, make a list of the actual events (page or screen views, and user actions) that you want to track. Think about all of the ways your users can interact with your site or app
When you’re first starting out, we recommend that you limit your tracking plan to a few core events, but add lots of properties to provide context about them. We generally see more success with the “less is more” philosophy of tracking data, but you might also decide to take a more liberal “track more and analyze later” approach. Like everything, each alternative has pros and cons that are important to consider especially as it relates to your company’s needs.
Shortcut: Check if a Business Spec meets your needs
Segment maintains several “Business Specs”, which are recommendations based on your type of business that give recommendations on what to track, what additional traits or properties to collect, and how to format them. The two most common are the B2B (business-to-business) Spec, Ecommerce Spec, and Mobile and Video specs.
If these specs meet your business needs, you’re in luck. These specs are built into Segment tracking plan templates, so you don’t need to start from a blank slate.
B2B Spec
If your organization sells a product or services to other businesses, you might have different analytics and marketing needs than most companies. You need to understand your customer behaviors both at the user-level, and also at the company or team-level. You can read more about how Segment thinks about B2B tracking, and read more about the B2B Spec.
Ecommerce Spec
If your organization sells products online, the E-commerce Spec covers the customer’s journey as they browse your store, click on promotions, view products, add those products to a cart, and complete a purchase. It also provides recommendations about off-page interactions, including interactions with email promotions, coupons, and other systems. You can read more about why companies need an Ecommerce Spec, read more about Ecommerce tracking plans, and dive directly into our Ecommerce Spec.
Mobile Spec
The native Mobile Spec is a common blueprint for the mobile user lifecycle. The Spec outlines the most important events for mobile apps to track, and automatically collects many of these events when you use the Segment Android and iOS SDKs. Read more about the benefits of the native mobile spec, or read through the Native Mobile Spec directly.
Video Spec
Segment’s video spec helps you understand how customers engage with your video and ad content, including playback events, types of media displayed, and performance metrics. You can read more about our Video Spec.
Create naming conventions
Regardless of approach, here are some important best practices to keep in mind:
Pick a casing convention: We recommend Title Case for event names and snake_case for property names. Make sure you pick a casing standard and enforce it across your events and properties.
Pick an event name structure: As you may have noticed from our specs, we’re big fans of the Object (Blog Post) + Action (Read) framework for event names. Pick a convention and stick to it.
Don’t create event names dynamically: Avoid creating events that pull a dynamic value into the event name (for example, User Signed Up (11-01-2019)). If and when you send these to a warehouse for analysis, you end up with huge numbers of tables and schema bloat.
Don’t create events to track properties: Avoid adding values to event names when they could be a property. Instead, add values as a property. For example, rather than having an event called “Read Blog Post - Best Tracking Plans Ever”, create a “Blog Post Read” event and with a property like "blog_post_title":"Best Tracking Plans Ever".
Don’t create property keys dynamically: Avoid creating property names like "feature_1":"true","feature_2":"false" as these are ambiguous and very difficult to analyze
An image comparing good and bad naming and collection standards
Got all that? Great. You’re now ready to develop a Tracking Plan.
Develop a tracking plan
A tracking plan clarifies what events to track, where those events live in the code base, and why you’re tracking those events (from a business perspective). A good tracking plan represents the single source of truth about what data you collect, and why.
Your tracking plan is probably maintained in a spreadsheet (unless you use Segment’s tracking-plan tool, Protocols), and serves as a project management tool to get your organization in agreement about what data to use to make decisions. A tracking plan helps build a shared understanding of the data among marketers, product managers, engineers, analysts, and any other data users.
Plan your Identify and Group calls
The Identify call updates all records of the user with a set of traits, and so is extremely important for building your understanding of your users. But how do you choose which traits to include? The example below shows an Identify call using analytics.js) for Segment:
analytics.identify({
  name: 'Jane Kim',
  email: 'janekim@example.com',
  login: 'janekay',
  type: 'user',
  created: '2016-11-07T16:40:52.238Z',
});
The traits represent dimensions in your data that you can group or pivot on. For example, in the above, you can easily create cohorts of all types that are users or accounts created within a time window of your choosing.
When you plan your deployment, think about what information you can collect as traits that would be useful to you when grouping users together, and plan how you will collect that information.
The Group call is similar to the Identify call, but it adds traits associated with a parent account to the user’s profile. If your organization is a B2B company, you should also plan the group traits to collect, and how you’ll use them once they’re applied to a user account.
Plan your Track events
We recommend starting with fewer events that are directly tied to one of your business objectives, to help avoid becoming overwhelmed by endless number of possible actions to track. As you get more comfortable, you can add more events to your tracking plan that can answer more specialized questions.
At Segment, we started out tracking these events:
User Signed Up
Source Data Sent
Subscription Started
Then we added some peripheral events to to better understand how we’re performing, for the following reasons:
User Invited When users invite more people to their organization, it’s a good indicator that they’re engaged and serious about using the product. This helps us measure growth in organizations.
Destination Enabled Turning on a destination is a key value driver for our customers.
Debugger Call Expanded When we see that a certain customer has used the live event stream feature a number of times, we can contact see if we can help them debug.
For an Ecommerce company, however, the main events might be something like:
Account Created
Product Added
Order Completed
Tip: As mentioned above, Segment has a set of “reserved” event names specifically for ecommerce, called the Ecommerce Spec. Check it out to see which events Segment covers and how they are used in downstream destinations.
An online community, on the other hand, has an entirely different set of actions that indicate engagement, as listed below. For example, a community might want to track actions like:
Content Viewed
Content Shared
Comment Submitted
Content Produced
Content Curated
With these actions tracked, the community can develop metrics around engagement, and understand how users move towards their ultimate conversion events. You can read more in this article from the online community GrowthHackers about the events they track and why.
Define your Track event properties
Each Track call can accept an optional dictionary of properties, which can contain any key-value pair. These properties act as dimensions that allow destination tools to group, filter, and analyze the events. They give you additional detail on broader events.
Events should be generic and high-level, but properties should be specific and detailed. For example, at Segment, Business Tier Workspace Created is a horrible event name. Instead, we used Workspace Created with a property of account_tier and value of business :
analytics.track('Workspace Created', {
  account_tier: 'business'
})
Similar to the traits in the Identify call, the properties provide a column that you can pivot against or filter on in your analytics tools or allow you to create a cohort of users in email tools.
Don’t create dynamically generated property names in the properties dictionary. Each key creates a new column in your downstream tools, and dynamically generated keys clutter your tools with fragmented data that makes it difficult and confusing to use later.
Here is Segment’s Lead Captured Track call:
analytics.track(userId, 'Lead Captured', {
  email: 'email',
  location: 'header navbar'
  url: 'https://segment.com/'
});
The high-level event is Lead Captured, and all of the details appear in the properties dictionary. Because of this, we can easily see in our downstream tools how many leads were captured, and from which parts of the site.
If you want to learn more about how properties are used by downstream tools, check out The Anatomy of a Track Call.
Plan for destination tools
Once you’ve completed your tracking plan, there’s one more step you might want to do before you move on to actually implementing Segment. The Segment destination catalog contains hundreds of tools, many of which you’ll be familiar with already.
If your organization has an established set of analytics tools, look for those tools in the catalog and bookmark their documentation pages. These docs pages contain important information about how Segment transforms data for the destination tool, and they also contain useful details about troubleshooting, set-up, and implementation considerations.
Once you have an initial list of the destination tools your organization uses, you can also check which Segment methods those tools accept. This helps you at implementation time to ensure that the calls you use can be consumed by the tools they’re intended for.
Additionally, you should check which connection modes each tool supports, so you know ahead of time which destinations may need to be bundled.
A Full Segment Implementation
Before you start implementing from your tracking plan, let’s review the Segment methods, what they do, and when you should use each.
Segment methods in detail
Segment’s libraries generate and send messages to our tracking API in JSON format, and provide a standard structure for the basic API calls. We also provide recommended JSON structure (also known as a schema, or ‘Spec’) that helps keep the most important parts of your data consistent, while allowing great flexibility in what other information you collect and where.
There are six calls in the basic tracking API, which answer specific questions:
Identify: Who is the user?
Track: What are they doing?
Page: What web page are they on?
Screen: What app screen are they on?
Group: What account or organization are they part of?
Alias: What was their past identity?
Among these calls, you can think of Identify, Group, and Alias as similar types of calls, all to do with updating our understanding of the user who is triggering Segment messages. You can think of these calls as adding information to, or updating an object record in a database. Objects are described using “traits”, which you can collect as part of your calls.
The other three, Track, Page, and Screen, can be considered as increasingly specific types of events. Events can occur multiple times, but generate separate records which append to a list, instead of being updated over time.
A Track call is the most basic type of call, and can represent any type of event. Page and Screen are similar and are triggered by a user viewing a page or screen, however Page calls can come from both web and mobile-web views, while Screen calls only occur on mobile devices. Because of the difference in platform, the context information collected is very different between the two types of calls.
Segment recommends that you always use the Page and Screen calls when recording a page-view, rather than creating a “Page Viewed” Track event, because the Page/Screen calls automatically collect more contextual information.
Anatomy of a Segment message
The most basic Segment message requires only a userID or anonymousID; all other fields are optional to allow for maximum flexibility. However, a normal Segment message has three main parts: the common fields, the “context” object, and the properties (if it’s an event) or traits (if it’s an object).
The common fields include information specific to how the call was generated, like the timestamp and library name and version. The fields in the context object are usually generated by the library, and include information about the environment in which the call was generated: page path, user agent, OS, locale settings, etc. The properties and traits are optional and are where you customize the information you want to collect for your implementation.
Another common part of a Segment message is the integrations object, which you can use to explicitly filter which destinations the call is forwarded to. However this object is optional, and is often omitted in favor of non-code based filtering options.
Identify calls
analytics.identify (user_id: "12345abcde",
  traits: {
    email: 'michael.phillips@segment.com',
    name: 'Michael Phillips',
    city: 'New York',
    state: 'NY',
    internal: True })
The Identify call allows Segment to know who is triggering an event.
When to call Identify
Call Identify when the user first provides identifying information about themselves (usually during log in), or when they update their profile information.
When called as part of the login experience, you should call Identify as soon as possible after the user logs in. When possible, follow the Identify call with a Track event that records what caused the user to be identified.
When you make an Identify call as part of a profile update, you only need to send the changed information to Segment. You can send all profile info on every Identify call if that makes implementation easier, but this is optional.
Learn More
Best Practices for Identifying Users
Traits in Identify calls
These are called traits for Identify calls, and properties for all other methods.
The most important trait to pass as part of the Identify call is userId, which uniquely identifies a user across all applications.
You should use a hash value to ensure uniqueness, although other values are acceptable; for example, email address isn’t the best thing to use as a userid, but is usually acceptable since it will be unique, and doesn’t change often.
Beyond that, the Identify call is your opportunity to provide information about the user that can be used for future reporting, so you should try to send any fields that you might want to report on later.
Consider using Identify and traits when:
Gathering user profile data (for example, company, city/state, job title, or other user-level data)
Gathering company-level data (for example, company size, number of seats, etc)
How to Call Identify
You can call Identify from any of Segment’s device-based or server-based libraries, including Javascript, iOS, Android, Ruby, and Python.
Here are two examples of calling Identify from two different libraries:
JavaScript Identify call
Ruby Identify call
analytics.identify("12345abcde", {
  "email": "michael.phillips@segment.com",
  "name": "Michael Phillips",
  "city": "New York",
  "state": "NY",
  "internal": True
});
Using analytics.reset()
When a user explicitly signs out of one of your applications, you can call analytics.reset() to stop logging further event activity to that user, and create a new anonymousId for subsequent activity (until the user logins in again and is subsequently identify-ed). This call is most relevant for client-side Segment libraries, as it clears cookies in the user’s browser.
Make a reset() call as soon as possible after sign-out occurs, and only after it succeeds (not immediately when the user clicks sign out). For more info on this call, see the JavaScript source documentation.
Page and Screen
The Page and Screen calls tell Segment what web page or mobile screen the user is on. This call automatically captures important context traits, so you don’t have to manually implement and send this data.
Page context auto-captured Screen context auto-captured
title window.location.title app build, name, namespace, version
url window.location.url device adTrackingEnabled, advertisingId (IDFA/AAID), device ID, manufacturer, model, type (android/ios)
path window.location.path library name, version
referrer window.document.referrer locale window.document.referrer
search window.location.search network cellular, wifi
ip address ip address
userAgent string os name, version
campaign utm_source, utm_medium, utm_campaign, utm_content screen height, width
Page and Screen call properties
You can always override the auto-collected Page/Screen properties with your own, and set additional custom page or screen properties.
`

const mpartice = `
Introduction
The purpose of this guide is to walk you through the basic steps of setting up mParticle in your app, unlocking core functionality, and troubleshooting common issues. Along the way, you’ll cover some important concepts you need to understand to be successful with mParticle.
This is not a complete guide to all of mParticle’s features and capabilities. If you already know your way around mParticle and you’re looking for in-depth docs, head to our Developers or Guides sections.
Most of this guide is aimed at users of the mParticle Dashboard, but to follow along with the tutorials, you will need to set up the mParticle SDK in your iOS, Android or web app, so you may need support from a developer to complete some steps.
Examples
The tutorials in this guide follow the process of setting up mParticle in the mPTravel app: a mobile and web app that sells luxury travel packages to its users.
Later on in this guide, you’ll learn about sending data from mParticle to some of our many integration partners. As examples, the tutorials use services which are simple to set up and verify, and which offer a free account tier, so that you will be able follow the examples exactly if you wish. However, mParticle is agnostic about which integrations you choose and you can follow the same basic steps from this guide to implement any of our integrations.
Inputs and Outputs
One of the key functions of mParticle is to receive your data from wherever it originates, and send it wherever it needs to go. The sources of your data are inputs and the service or app where it is forwarded are outputs. A connection is a combination of an input and output.
Inputs include:
Apps or services built on any platform we support, such as iOS, Android, or Web. You can view the full list in SETUP > Inputs in the PLATFORMS tab.
Data feeds of any other data you want to send into mParticle. This could be data you have collected yourself or from a feed partner. Once configured, feed inputs are listed in SETUP > Inputs on the FEEDS tab.
Outputs may be configured for events, audiences, cookie syncs, or data subject requests depending on what the output supports. You can see the list of configured outputs in SETUP > Outputs or SETUP > Data Warehouses. Outputs include:
Analytics partners such as Indicative
Advertising partners such as Facebook
In-app messaging partners such as Braze
Data Warehouse partners, such as Amazon Redshift, Google BigQuery, or Snowflake
To get started with mParticle, you need some data, which means you need to create at least one input.
Create Access Credentials
The first thing you need to do is to to create a set of access credentials that will allow a client-side SDK or a server-side application to forward data to this workspace.
Login to your mParticle account. If you’re just getting started, your first workspace is created for you. The first screen you see is an overview of activity in the workspace. Since you haven’t yet sent any data, there’s nothing to report, so far.
Navigate to Setup > Inputs in the left column. Here you can see each platform type accepted by mParticle. Different platforms are associated with different sets of metadata, such as device identifiers, and most outputs only accept data from a limited set of platforms, so it is important to select the right platform. To capture data from your native Android app, choose Android. Just click the + next to your chosen platform.
Click Issue Keys.
Copy and save the generated Key and Secret.
About Access Credentials
mParticle labels the credentials you create for an integration the key and secret, but they are not exactly like an API key and secret, since you embed these credentials in the app. However, this is not the security risk that exposing API credentials would be:
The client-side key and secret can’t read data from the system.
You can block bad data to stop any traffic that doesn’t match the data you expect as defined in your schema.
Most anonymous client-server architectures, including Adobe, Braze, Firebase, Google Analytics, and Segment don’t have per-session or per-instance credentials, nor does mParticle.
Install and Initialize an mParticle SDK
You need a developer to help you install and initialize an SDK. See the Getting Started guides for the iOS, Android or Javascript SDKs to get set up before continuing.
Verify: Look for Incoming Data in the Live Stream
Navigate to Activity > Live Stream in the left column. The Live Stream lets you inspect all incoming data from your development environments. It’s an easy way to check that you have correctly initialized mParticle in your app. When you first open up the Live Stream, it will be empty, as we haven’t yet started sending data.
Start up a development build of your app (get a developer to help you if necessary). The mParticle SDKs automatically collect and forward data about installs and user sessions, so just by opening a development build of your app, you should start to see data in the Live Stream.
Advanced Platform Configuration Settings
For the iOS, Android, tvOS, and Web platforms, some advanced configuration settings are available. To change these settings, navigate to Setup > Inputs in the left column and select either iOS, Android, tvOS, or Web from the list of platforms.
Expand the Advanced Settings by clicking the + icon.
Restrict Device ID by Limit Ad Tracking
iOS, Android, and tvOS (Apple TV) devices allow users to limit the collection of advertising IDs. Advertising IDs are unique identifiers you may use to associate event and user data with a specific device. For both iOS and Android devices, if a user has not provided explicit consent to share their device’s advertising ID, then the value of that ID is set to an all-zero value.
By checking Restrict Device ID by Limit Ad Tracking, mParticle will not collect advertising IDs from users who have enabled the Limit Ad Tracking setting on their device.
Remember, mParticle will collect advertising IDs for both iOS and Android devices, regardless of whether or not a user has enabled the Limit Ad Tracking setting on their device. However, the IDs collected from users who have opted out will be all-zero values.
Following are descriptions of Apple and Google’s policies for device advertising IDs:
iOS Advertising IDs
After the release of iOS 14.5, Apple introduced the App Tracking Transparency (ATT) framework, which requires app developers to request users’ explicit consent to share their advertising IDs. If a user of your app has not provided this consent, Apple’s advertising ID (IDFA) will be set to all an all-zero value: 00000000-0000-0000-0000-000000000000. Read more about Apple advertising identifiers in their documentation.
For more information about the ATT framework, visit the iOS 14 Guide.
Android Advertising IDs
Google allows Android users to opt out from sharing their devices’ advertising IDs. Similar to Apple’s policy, Google will set a user’s advertising ID (GAID or AAID) to an all-zero value if that user has opted out from sharing their ID. Read more about Google’s advertising identifiers in their documentation.
Collect Integration-Specific Identifiers
The Web SDK can collect integration-specific identifiers to enrich the user data forwarded to your connected outputs.
When Collect Integration-Specific Identifiers is checked, these integration-specific identifiers are collected and used to enrich your user data to help optimize the match rate of your audiences in downstream tools. Currently, these identifiers include Facebook’s fbc and fbp fields.
Supported Integrations
Vendor Identifier Collection Method Maps to
Facebook Click ID fbclid url query parameter Facebook.ClickId
Facebook Click ID fbc browser cookie Facebook.ClickId
Facebook Browser ID fbp browser cookie Facebook.BrowserId
Google GCLID gclid url query parameter GoogleEnhancedConversions.Gclid
Google GWBRAID gwbraid url query parameter GoogleEnhancedConversions.Gbraid
Google WBRAID wbraid url query parameter GoogleEnhancedConversions.Wbraid
Troubleshoot
If you don’t see data appearing in the Live Stream within the first few minutes after opening a development build:
Check that you have copied your Key and Secret correctly
Check that you have properly included the mParticle SDK in your project and it is correctly initialized. The necessary steps will differ depending on the platform. Check our iOS, Android and Web docs for more.
Start capturing data
After you create an input, you can begin capturing data.
Prerequisites
Before you start this activity, you should have already:
Created an input.
Data in mParticle
mParticle collects two important kinds of data:
Event data
Event data is about actions taken by a user in your app. Some events are collected automatically by mParticle’s native SDKs. These include the Session Start events you saw in the Live stream when you first set up your input. Other events need to be captured by writing code in your app. Of these, the most significant are:
Screen/Page Views - keep track of where a user is in your app
Custom Events - track any actions the user might take in your app, such as clicking a button or watching a video.
Commerce Events - track purchases and other product-related activity.
User data
mParticle also captures data about your user, including their identities, information about the device they are using and any custom attributes you set. As with event data, some user data, such as information about the devices they use, is captured automatically by mParticle’s native SDKs. Two important types of user data must be captured by writing code in your app:
User identities are unique identifiers for your user, like an email address or customer ID. These are different from the device identities collected automatically by the SDKs, which don’t identify an individual person but a particular cell phone, browser session, or some other device.
User identities help mParticle keep track of unique users of your app and allow you to track a user’s activity over time and across different devices. To learn a lot more about user and device identities, read our IDSync guide. For now, you just need to know that a user identity is a way of identifying a person, independently of the device they are currently using.
User Attributes are key-value pairs that can store any custom data about your user. The value of a user attribute can be:
A string
A number
A list
A boolean value (true or false)
null - attributes with a null value function as ‘tags’, and can be used to sort your users into categories.
Capture User and Event Data
To start capturing data you will need to go back to your app code. In the previous step you should have installed and initialized the mParticle SDK in at least one of your app platforms. This means you’re already set up to capture Session Start and Session End events, as well as basic data about the device. Grab a friendly developer again, if you need one, and try to add some additional user and event data to your implementation. Here are a few things you might try, with links to the appropriate developer docs:
Add a Customer ID or Email Address for a user.
Android / iOS / Web
Create a custom user attribute that tells you something about a user. For example: status: "premium".
Android / iOS / Web
Create a page or screen view event that captures the name of a page or screen being viewed.
Android / iOS / Web
Create a custom event to track a user action in your app. Include some custom attributes. For example, the mPTravel app sends a custom event when a user views one of its content videos. The event is called “Play Video” and it has two custom attributes: the category of content, and the travel destination the video promotes. Later on, you’ll see how events like these can be used to target custom messaging.
Android / iOS / Web
Create a purchase event - track a purchase using mParticle’s commerce APIs.
Android / iOS / Web
Verify: Look for incoming data in the Live Stream
Once you’ve added code to your app to start collecting some basic data, start up a development build of your app again and trigger some events. Have another look at the Live Stream. You should start to see new event batches, with the individual events you have added to your app.
Troubleshoot
If you have at least some data in your Live Stream, such as the session start and session end messages generated in the previous step, but your screen views, custom events or purchases aren’t showing, it’s likely that there is an issue with your app code.
Check that your code is correctly formed, and that the methods which send events to mParticle are actually triggered by user activity in your app.
Review your development environment’s logs. These will show when an event is sent to mParticle.
To learn more about event outputs before creating your first one, view the following video:
Prerequisites
Before you start this activity, you should have already:
Created an input
Started to capture some basic data points
Outputs
Outputs are mParticle’s term for the services where we forward your data. Outputs are also referred to as “integrations”. Outputs come in two types: “event”, and “audience”. Audiences are covered in the next part of this guide. This section will show you how to set up an event output.
Example - Connect an Output to Analytics
mParticle has over a hundred event outputs, and the connection process for each is similar. This tutorial creates a connection to Analytics as an example. You can follow the same steps with a different output, or create a free Analytics account to follow along exactly.
Find Analytics in the Directory
Click Directory in the sidebar, and search for Analytics.
Click the Analytics tile to display Output: Event Configuration.
Enter the configuration information:
Enter a configuration name.
Leave the box checked to use the same settings for Development & Production.
Select a field as the user identity field. Leave the default if you’re not sure what to choose.
Enter the Analytics API key which you can find in the Analytics project settings.
Remember to save your new output configuration.
Create the Connection
Now that you have both an input and an output set up, it’s time to connect them:
Click Connections > Connect, and select the input you’ve already set up.
Click Connect Output.
Select your Analytics configuration.
Complete the Connection Settings, different for each output. For Analytics you can leave the default selections.
Set the status to Active and click Save.
Verify: Check that data is arriving in Analytics
Once you have enabled the connection, open up the development build of your app again and create a few more events. Each output service displays the data it receives differently. For Analytics, you can view real-time data in the Debug Console.
Troubleshoot
If you don’t see data arriving in the output service, navigate to Data Master > Live Stream and select Message Direction Outbound.
If you see messages in the outbound Live Stream, but none in the output service:
You may just need to wait. For most event outputs, mParticle forwards information in close to real time. However, there are factors which can slow down processing and the amount of time it takes for data to become visible in an output service’s dashboard can be different for each service.
Navigate to Activity > System Alerts and see if there are any errors noted for the output you want to troubleshoot. The error type may give you a clue as to what is wrong.
If the previous step doesn’t resolve the issue:
Check all of your Configuration and Connection settings. Make sure that all settings are correct, especially any access credentials, such as Project or App IDs, API Key & Secret, etc.
It is common for a particular output service to require certain identifiers or other data points to be present to allow data to be forwarded. As an example, the Google Ads output requires information about a user’s device, including the Device Advertising ID, in order to construct a User Agent Header. If the Device Advertising ID is not present, no data can be sent. Check the docs for the output service and make sure you’re sending all the required information.
If there are no outgoing messages in the Live Stream, then mParticle is not attempting to send any data to the output service. Some possible reasons for this include:
Not all outputs support every platform or accept every event type. The Directory shows a list of available platforms and supported event types for each output. Make sure the data you are trying to send is supported.
mParticle allows you to filter your data for each output. Check the Data Filter to make sure you haven’t turned off the data points you’re trying to send.
Create an Audience
Prerequisites
Before you start this activity, you should have already:
Created an input
Started to collect some basic data points
Get some more data
Up until this point, you’ve been testing your account with a single development build of your app. This works well to establish basic data throughput.
The Audiences feature allows you to target segments of your users based on their activity or attributes. So to effectively use Audiences, even at the testing stage, your app needs multiple users!
If you’re not ready to enable the mParticle SDKs in your Production app yet, you can either spin up multiple development environments, or try using the Events API to supply some test data in bulk.
Create your Audience
The mPTravel app lets users watch video content about travel destinations. This tutorial creates an audience to allow mPTravel to target users who view content about a paticular destination with deals for that destination.
Create Criteria
To define an audience, you need to specify some selection criteria. Click Add Criteria.
Choose the type of criteria you want to create. Except for the Users type, which is covered below, these criteria all correspond to mParticle event types. Click Events to target custom events.
There are three distinct aspects of an event criteria that you can define:
Event name - mParticle populates a dropdown list based on all event names received for the workspace. This means that you can only select events that have already been captured by mParticle. This example targets the “Play Video” event name.
Attributes - you can refine your criteria further by setting attribute conditions. This example targets only instances of the Play Video event where the “category” attribute has a value of “Destination Intro” and the “destination” attribute has a value of “Paris”.
Note that this example creates an Exact Match condition, but there are other types of condition to explore. For example, if you set “destination” Contains “France”, then you could match events with a “destination” of both “Paris, France” and “Cannes, France”.
The types of condition available depend on what kind of data an attribute holds. For example, an attribute that records a number value will have Greater Than and Less Than conditions. mParticle automatically detects what type of data an attribute holds. However, you can manually set the data type by clicking the type symbol.
Don’t change the data type unless you really know what you’re doing. If you force the data type to be Number, and all your attribute values are strings, your condition will always fail! As long as you’re sending the same type of data consistently for each attribute, you shouldn’t have to worry about it.
Recency / Frequency - Sets how many times the user needs to trigger a matching event, and in what time period, in order to meet the condition. If you don’t specify anything here, the default for Recency / Frequency is “Greater than 0 events in the last 30 days”.
When you’re happy with your criteria, click Done.
Add Multiple Criteria
You could save this audience right now and target all users who have watched mPTravel’s Paris content in the past three days. But, what if you have some extra special limited deals that you want to save for your premium members? You can’t just tell everyone! You need to add a second criteria. Whenever you have multiple criteria, you need to decide how to evaluate them together. There are three options:
And - both conditions have to be true for a user to be added to the audience
Or - a user will be added to the audience if either condition is true
Exclude - a user will be added only if the first condition is true, but the second is false. Exclude is great for use cases like abandoned cart targeting. You can select users who triggered an Add to Cart event, then exclude users who triggered a Purchase event.
To target users who watched Paris content, AND are premium members, choose And.
This is a good opportunity to look at the User criteria type, as it’s a little different. Where the other criteria match users who have triggered a particular event, the User criteria looks at all other information you might know about your users: the type of device they use, where they live, their custom user attributes, etc. This example targets users with a user attribute of “status”, with a value of “Premium”.
When you’ve added as many criteria as you need, click Save as Draft to come back to your definition later, or Activate to start calculating.
When you activate the audience, you’ll be asked if you want to set up an A/B Test. Select No for now, to go to the Connections Screen.
Verify your Audience
Check that size is greater than zero
After you finish defining your audience you will be taken straight to the Audience Connection screen. Connecting an audience will be covered in the next section.
First, check that your audience definition is working as expected. Start by selecting Audiences from the left column to go to the main Audiences page. Audiences take time to calculate, so if you’ve only just activated it, you’ll probably see a Size of 0 for your audience. Mouseover the pie chart to see how far along the calculation process is.
After a while, as long as you have users that match your criteria, you should start to see the value of the Size column increase.
If the audience is 100% calculated, and your size is still zero, there may be an issue with your conditions.
Download to verify individual memberships
In some cases, it might be enough just to know that your audience is matching users. However, if you know specific identities of users who should match your criteria, you can check that they matched by downloading your entire audience in CSV form. Follow the instructions here to download your audience.
Troubleshoot
For simple audiences, it’s a good idea to check your Live Stream to see if you can find an event that should match your criteria. Here, you can see a user who has triggered the correct event.
Some things to check:
Make sure you selected the right platforms. If the matching events are all from iOS, and you only selected the Android platform when creating the audience, you won’t match any users.
Examine each of your conditions against your test data from the Live Stream. Matches in the Audience Builder are not case sensitive. If you’ve set attribute conditions, do the attribute values in your test data exactly match the value you’ve provided in your condition?
If you have multiple criteria, make sure your chaining statements are correct. Did you select And when you meant Or?
Remember that recalculating an audience will take some time, so check your criteria thoroughly before you save your changes.
Next steps
Congratulations on making your first audience in mParticle! You will have noticed that mParticle populates your options in the Audience Builder based on the data you have captured. This means that as you add new sources, and send more data, you will unlock new options for building audiences. Check in periodically to make sure that you’re getting the most out of your data. Some mParticle clients create hundreds of audiences, each with dozens of chained criteria to target hyper-specific user segments. You’re only limited by the data you can capture and your imagination.
A few things to read or think about:
The Audience docs in the Platform Guide provide more detail about building criteria and advanced features like A/B Testing, and Audience Sharing.
Audiences are a part of mParticle where the quality and consistency of your data plan become apparent. If your developers name an attribute favorite_color in your Web implementation, and favoriteColor in your Android implementation, it’s going to be much harder to build a cross-platform audience to capture your users who love green. Check out some docs about the importance of names here.
Connect an Audience Output
To forward data out of mParticle, you must create and connect and audience output.
Prerequisites
Before you start this activity, you should have already created an audience.
How audiences are forwarded
In mParticle, an audience is a set of users who match a given set of criteria. When mParticle prepares to forward an audience, it is broken down into a series of messages about audience membership. Each message contains:
The name of the audience
An identity that can be used for targeting, such as an email address, a device identity or a social media identity.
Whether that identity is being added to, or removed from the audience.
mParticle then translates these messages into a format that can be read by each audience output partner, and forwards them via HTTP API. Each output deals with audience information a little differently, depending on their data structure, but there are two main patterns.
Direct
Some audience output partners allow mParticle to either to directly create an audience (some call them ‘lists’, or ‘segments’) via their API, or at least to manage the membership of an existing audience. The end result will be an ‘audience’ in the partner system, containing as many identities from the original mParticle audience as the output can accept. mParticle will continue to update the membership of the audience in the partner system as users are added and removed. Email marketing and social media platforms are usually in this category.
Indirect
Not all audience output services have a concept of ‘audiences’ that mParticle can map to. Others don’t allow their audiences to be directly managed via API. In these cases, mParticle usually forwards audiences as some kind of user attribute or tag. Push messaging and other mobile-oriented services often fall into this category.
As an example, Braze, has it’s own audience feature, called ‘Segments’, but it does not allow mParticle to create segments via API. Instead, for each Braze-supported identity in the audience, mParticle sets a tag on the user, named after the audience. You can then easily find matching users in Braze by searching for that tag.
The catch here is that it is often necessary for the output service to already have a record of the users you want to target. For this reason, this type of audience integration usually works best when paired with a matching event integration.
Example - Connect an audience to Mailchimp
Just like event outputs, each audience output will follow a similar setup process, with the exact prerequisites and settings being different for each. This tutorial forwards an audience to Mailchimp as an example. You can follow the same steps with a different output, or create a free Mailchimp account to follow along exactly.
Create a Mailchimp List
mParticle sends audiences to Mailchimp via its List API. For this to work, You need to have already created a list in my Mailchimp account, and you need to know the List ID. You can give your Mailchimp list the same name as the mParticle audience you want to forward.
.
You’ll also need to create a Mailchimp API Key, which you can do from the Extras tab of your Mailchimp Account Settings.
Add the Mailchimp output
Navigate to the Directory in the sidebar. Locate Mailchimp and select the Audience option.
Complete the Configuration Settings. You’ll need the API Key you created in Mailchimp. All audience outputs will need different settings. This example sets the Email Type to “HTML” and disables the Double Opt-In and Delete on Subscription End settings.
Click Save.
Connect your Audience
Navigate to Audiences in the left column and open any audience page. This example uses the “Potential Parisians” audience, created in the previous tutorial. Click the Connect tab.
Click Connect Output.
Select your Mailchimp configuration and complete the Connection Settings. Again these will be different for every output. For Mailchimp, you just need the List ID of your Mailchimp list. Click Save.
Verify: Check your list in Mailchimp
The simplest way to check that your Connection is working is to see if your Mailchimp list is showing subscribers. For most audience outputs, mParticle begins forwarding data immediately and continues to update audiences in near real time. For some outputs, however, the design of the output partner’s API requires that we queue audiences messages and upload at a regular interval. In these cases, we make a note of the upload criteria in the docs for that output.
mParticle forwards to Mailchimp in realtime, and you should be start to see results in the mailchimp dashboard within ten minutes.
Open the Lists tab in your Mailchimp dashboard. Find the list you used to set up the connection. If you see a positive subscriber count, your connection is working.
Troubleshoot
If you aren’t seeing your audiences in the output partner’s dashboard, make sure to check any API Keys, Audience IDs and any other settings for correctness.
Many audience outputs are services which allow you to send mass communications or target advertising to wide audiences, so access to the features that mParticle forwards audiences to is often tightly controlled. To be able to view and manage audiences in the output service, you may need to do one or more of the following:
Create a special business or advertising account with the service,
Set up valid billing information,
Create at least one ad campaign,
Record agreement to the services terms and conditions,
Have administrative access in your organizations ad account.
A common question around forwarding audiences is why the size of the audience (or list, or segment) you see in the partner’s dashboard doesn’t match the size of the audience shown in mParticle. This is common, and usually does not mean anything is wrong. When you create an audience in mParticle, we will include as many identities as we have for each user in the audience. However, most outputs only support a small subset of identity types. Here’s a simple example:
The audience ‘Potential Parisians’ matches 100 users in mParticle.
Of these users, 50 have email addresses, and 80 have Android Advertising IDs.
Connect this audience to Mailchimp, which supports only email addresses, and AppNexus, which supports only Device IDs.
You will see 50 users in your Mailchimp list and 80 users in AppNexus.
Transform and Enhance Your Data
If you’ve followed our guide this far, you have a firm grounding in the basics of mParticle. Now you’re ready to use some of our advanced and premium features to transform, enrich and enhance your data. Here are a few suggestions for where you might want to explore next.
Establish your Identity Strategy
This guide has already covered collecting identities, such as email addresses, for your users. mParticle’s IDSync feature gives you a lot of control over how you identify and track your users over time, and selecting an Identity Strategy is one of the most important decisions you need to make when implementing mParticle. Read our full IDSync guide for more.
Add more sources
For most mParticle clients, the primary sources of data are native and web apps, instrumented with the mParticle SDK, but you can also use mParticle to leverage other sources of data to build a more complete picture of your users:
The Events API can be used to send supplementary server-side data.
Our main Apple and Android SDKs can also be instrumented in AppleTV and FireTV apps, and we publish independent SDKs for Roku and Xbox.
If you use a cross-platform development framework, you can use our libraries for React Native, Xamarin, Unity, and Cordova to interface with our native SDKs.
Use Feeds to bring in data from other services.
Explore advanced Audience features
If you want to compare different messaging platforms or strategies, you can use mParticle to conduct an A/B Test by splitting an audience into two or more variations and connecting each to different outputs.
The more specific your audiences, the more you are likely to need to create. If you have a large number of audiences to forward, use Bulk Audience Connections workflow to speed things up.
Transform your Data
One of the core benefits of mParticle is the ability to capture data once and forward it to multiple outputs. However, you probably don’t want to send all your data to every output. mParticle provides you with a full set of tools to filter and transform your data. Use these tools to control the flow of Personally Identifiable Information (PII), to customize the data you send to each output and to control your costs.
The Data Filter allows you to individually filter each data point for each output.
User Splits allow you to test competing services by dividing your users into groups and connecting each group to different outputs.
Forwarding Rules allow you to block data to an output according to simple predefined rules.
User Sampling allows you to send only a subset of your data to a given output. This is usually done to control costs for services that charge according to data volume or unique user counts.
For advanced transformations, the Rules feature allows you to host a custom function on AWS Lambda which can change almost any aspect of your data.
Manage your GDPR Obligations
If you have users in the European Union, you may have obligations as a Data Controller under the General Data Processing Regulation. mParticle provides tools, available as premium features, to help you manage two aspects of GDPR compliance:
User Consent
Data Subject Requests
Know your limits
Part of the purpose of mParticle is to allow you to maximize leverage of your data without compromising performance. In order to protect the performance of both your app and the mParticle dashboard, we impose certain limits on the data you can send. If you’re a dashboard user, you can read a brief summary of the default limits, here. If you need the full picture, you can read our detailed guide.
`

const lytics = `
	Developer Quickstart
Suggest Edits
Introduction
Welcome to the Lytics developer tier! This guide will walk you through the steps to get started with Lytics and leverage its powerful personalization capabilities for your website.
Before You Begin
Before diving into the setup process, make sure you have the following:
 Site Access / Management Permission: To install Lytics, you need permission to install JavaScript either via a tag manager or directly onto your website. Alternatively, you can install Lytics via a Drupal module.
 Active Lytics Account: Verify that you can access an active Lytics account. If you don't have one yet, you can claim your free developer account.
 Lytics Dev Tools Chrome Extension: Install our developer tools Chrome extension to streamline the development and installation process.
Getting Started Checklist
Getting started with Lytics is quick and easy! In just a few minutes, you'll be able to set up Lytics and start personalizing your website. We've focused this guide on the 3 essential steps to ensure a positive experience for you and your customers:
 1. Install the Lytics tag on your site.
 2. Ensuring site content and Lytics are syncing.
 3. Create your first personalized message.
Digging Deeper
After completing the initial checklist outlined above, it's time to explore further avenues for enhancing and utilizing your profiles to their fullest potential. We've broken additional guides into two core focuses:
Building Profiles
Here, we'll gain a comprehensive understanding of all available out-of-the-box attributes. Discover how to tag your site and integrate other sources to create robust and comprehensive profiles. This section is divided into:
Default Attributes & Segments:
Profile Attributes
Audience Segments
Content Collections
Site Activity & Conversion Tagging:
Capturing Website Activity (coming soon)
Capture Website Conversion Activity (coming soon)
Using Profiles
Here, we'll explore leveraging out-of-the-box personalization SDKs and APIs to deliver optimal user experiences. Discover how to harness Lytics' tools and integrations to create tailored experiences that resonate with your audience. This section covers:
Guides & Inspiration
Surface a lead capture form only to unknown visitors.
Surface content recommendations based on interests.
Surface a promotional message to high-momentum visitors. (coming soon)
Sync profiles & audiences to GA4 or meta. (coming soon)
Personalize your site based on behaviors and stored attributes. (coming soon)
1. Install the Lytics Tag
Suggest Edits
Installing the Tag
In the Web SDK, Lytics provides a tag that can be placed on your site to collect behavioral data and surface the materialized profile back to your browser in real time. Manual installation instructions are available from within the app at Data Pipeline > SDK > Web SDK.
If your site is a Drupal or Wordpress site, or you use Google Tag Manager we recommend using one of these turnkey methods to install the Lytics Tag:
Drupal
WordPress
Google Tag Manager
Testing the Lytics Tag Installation
Once the tag has been installed, validate a successful installation via one of the three following methods:
Lytics Dev Tools Chrome Extension (Recommended)
In-app Verification Assistant
Manually
Testing the Current Visitor's Profile via JavaScript SDK
The final step to verify installation is ensuring you can access your visitor profile. This profile is built and delivered in real-time as you engage with content.
Lytics Dev Tools Chrome Extension (Recommended)
The Lytics Dev Tools Chrome Extension makes validation and exploration simple. Once you've installed the extension as outlined above:
Open the extension and ensure it has been activated.
Access Profile from the bottom menu in the Chrome extension.
This section of the extension profiles two views into your profile.
The first is the Summary showcasing available attributes and affinities.
The second is the Details, which profiles a raw JSON dump of all available attributes and insights accessible via the Personalization Engine web SDK.
Manually
If you prefer to verify the installation manually, you can do so by opening the Chrome developer console and ensuring jstag is accessible. In addition, by viewing the network tab, you can monitor data collection requests being sent tolytics.io/c and personalization requests being loaded from lytics.io/api/personalize
Content Setup
Suggest Edits
Lytics' Interest Engines effectively analyze your content with minimal effort required. However, to guarantee that the classification results align with your expectations, conducting a quick test is advisable, as poor metadata can sometimes lead to less-than-optimal outcomes. The most reliable method to ensure comprehensive and satisfactory content classification is to classify a selection of your URLs manually.
Use the left-hand navigation to select Content > Classification.
Click on the section labeled Classify, then paste a URL from your website and press Classify.
After a moment or two, a set of preliminary classification details will come back. Most notably, ensure the Title, Primary Image, and Topics come back with content. If they do not, please refer to our full documentation for configuring content and meta tags.
3. Surface Personalized Message
Suggest Edits
The Lytics Personalization Engine profiles real-time access to a comprehensive visitor profile. Before we jump into the weeds of how you can fully build and leverage this profile, let's create our first experience.
Surface a Simple Message
Lytics comes with our Personalization SDK called Pathfora. Pathfora allows you to easily surface simple lead capture and messaging modals or content directly inline. Full documentation for Pathfora is available, but initially, let's surface a welcome message to our anonymous visitor audience.
javascript
// jstag profiles a helper function to ensure that the Pathfora library
// has been loaded before triggering the experience.
jstag.on('pathfora.publish.done', function(topic, event){
  // here we initialize a new Pathfora "Message" experience
  var module = new pathfora.Message({
    id: 'sample-message-campaign', // this value will be collected along side all interactions and used in reporting
    layout: 'slideout', // for layout we'll use a small slide out
    position: 'bottom-left', // the model will enter and sit at the bottom left
    theme: 'dark', // css can be customized to brand but we'll use the default dark theme
    headline: 'Hello world!', // this will be the headline of our message
    msg: 'Congratulations on setting up your first targetted campaign using the Lytics Personalization Engine!', // the body of the message
  });
  var modules = {
    target: [{
      segment: "anonymous_profiles", // target only visitors with the anonymous_profile attribute
      widgets: [module]
    }]
  };
  pathfora.initializeWidgets(modules); // initialize the campaign
});
Alter the Pathfora configuration to your liking.
Install the Pathfora configuration onto your site via your preferred tag management method.
Refresh the page and be greeted with your new welcome message targeted at anonymous visitors!
Lytics and Pathfora provide a great deal of flexibility. If you are ready to dive deeper, please explore some of our other popular use cases:
Surface a Promotional Message to High Momentum Visitors (coming soon)
Surface a Lead Capture form Only to Unknown Visitors
Surface Content Recommendations Based on Interests (coming soon)
Sync Profiles & Audiences to GA4 or Meta (coming soon)
Personalize Your Site Based on Behaviors and Stored Attributes (coming soon)
Building Profiles
Suggest Edits
Welcome to the world of building profiles with Lytics! Here, you can unlock the full potential of understanding your audience through three key aspects available right out of the box:
Default Profile Attributes: Lytics offers a robust set of pre-packaged user attributes, including automatically generated and customizable ones. Empowered by predictive modeling and machine learning algorithms, these attributes enable you to gain deeper insights into your audience.
Default Segments: Explore predefined user segments that categorize your audience based on behavioral and demographic factors. With no lift or custom definition required, these segments offer quick insights for tailored marketing strategies.
Ready to dive in? Click on each section to explore the details and enhance your profiling efforts effortlessly. Looking for a recommendation? We say you should start by understanding all the available attributes.
Default Attributes
Suggest Edits
Lytics offers a wide range of pre-packaged user attributes, including automatically generated and customizable ones. Additionally, Lytics employs predictive modeling and machine learning algorithms to provide insights and scores, allowing users to gain a deeper understanding of their audience. The guide below provides an overview of all available attributes and examples to enhance your profiling efforts.
👍
If you haven't already reviewed our documentation on collecting events via our JavaScript SDK, we highly recommend doing so first. This will give you a better understanding of how data collection works at a high level before delving into the specifics of what can be collected.
Available Attributes
The following attributes are all available out of the box with no customization necessary in all Lytics pricing tiers. Do note that any attributes flagged as Computed can not be edited directly but are computed based on various factors, including other non-computed attributes.
📘
For a more comprehensive example of how any of the following attributes can be collected and used for your visitors click the name of the identifier to access the code examples below.
Identifiers
Default attributes that are used to stitch profiles together. For instance, if you pass an email along with the _uid, all events that have only been associated with either identifier will be merged into a single comprehensive profile.
Name Slug Description Computed Example
Lytics ID _id A unique ID that represents the materialized profile in Lytics. Yes 4fafb5b3-b199-58f2-a68b-4b266b363dd1
Current Lytics Cookie _uid The current cookie id for the user. No 50b772f5-a0be-42f2-8828-84b8db5d5a23
All Lytics Cookies _uids All cookies that are associated with the user. No ["50b772f5-a0be-42f2-8828-84b8db5d5a23"]
Email email The email address of the user. No example@lytics.com
Unique User ID uuid A UUID for the user. No 4fafb5b3-b199-58f2-a68b-4b266b363dd1
Details
Details encompass all default attributes related to user demographics and general information, including name, phone number, status, etc. It serves as a catch-all for attributes not specifically tied to interactions or behaviors.
Name Slug Description Computed Example
Name name The full name of the user. No John Doe
First Name first_name The first name of the user. No John
Last Name last_name The last name of the user. No Doe
Title title The title of the user. No President
Phone phone The phone number of the user. No 555-555-5555
Cell cell The cell phone number of the user. No 555-555-5555
Origin origin The origin of the user. No loyalty_2022
Language language The language of the user. No en-us
Age age The age of the user. No 25
Companies companies The companies the user is associated with. No ["Lytics", "Pantheon"]
Gender gender The gender of the user. No M
Status status The status of the user. No active
User Attributes user_attributes A map of custom attributes associated with the user. No {"role": "member", "bonus": "active"}
Timezone timezone The timezone of the user. No -7
City city The city of the user. No Denver
Country country The country of the user. No US
State state The state of the user. No CO
Meta
Meta encompasses all system-level information that provides insights into the health and breadth of the profile. This includes data such as creation date, last update timestamp, source information, and other metadata associated with the profile's management and maintenance. Metadata offers a behind-the-scenes view of the profile's overall status and administration.
Name Slug Description Computed Example
Created _created The date the user was created. Yes 2023-12-12T21:09:11.625960142Z
Last Scored _last_scored The date the user was last scored. Yes 2024-02-28T02:45:51.377423153Z
Modified _modified The date the user was last modified. Yes 2024-02-28T02:45:51.377423473Z
Number of Aliases _num_aliases The number of aliases for the user. Yes 1
Number of Days _num_days The number of days the profile has existed. Yes 38
Number of Events _num_events The number of events the user has been associated with. Yes 2425
Number of Streams _num_streams The number of streams the user has been associated with. Yes 2
Stream Names _streamnames The names of the streams the user has been associated with. Yes ["default", "ios"]
User is Bot is_bot Whether the user has been flagged as a bot or not. Yes f
Behavior
Behavioral attributes typically cannot be directly managed but represent a set of insights derived from a user's behavior over time. These insights are invaluable when personalizing experiences based on changes in behavior or behaviors indicative of high likelihood. For instance, you might want to present a premium offer to users exhibiting higher momentum than usual. Behavioral attributes enable targeted and timely interventions tailored to user actions and patterns.
Name Slug Description Computed Example
Consistency score_consistency Score representing how consistent their activity patterns are. Yes 99
Frequency score_frequency A score representing how frequently the user is active. Yes 63
Intensity score_intensity A score representing how intense the user's activity is. Yes 94
Maturity score_maturity A score representing how mature the user's activity is. Yes 34
Momentum score_momentum A score representing how much momentum the user currently has. Yes 54
Propensity score_propensity A score representing how likely the user is to engage again. Yes 1
Quantity score_quantity A score representing how much activity the user has. Yes 99
Recency score_recency A score representing how recent the user's activity is. Yes 99
Volatility score_volatility A score representing the degree of variability in behavior. Yes 99
Interests
Interests entail understanding the topics a user is interested in based on their interactions, cross-referenced by deep programmatic analysis of their online activities. This allows for tailored content recommendations and targeted messaging aligned with the user's preferences and engagement history.
Name Slug Description Computed Example
Lytics Content lytics_content A map of topic-level interests for the user. Yes {"Baking": 0.26418695138978837}
Intelligence
Attributes classified as intelligence encompass diverse, highly valuable information to facilitate relevant and high-value personalized experiences. Within this category, you'll discover real-time segment membership, values crucial for split testing and experimentation, and direct correlation to our real-time machine learning modeling. These attributes empower dynamic and data-driven decision-making, enhancing the efficacy of personalized marketing strategies.
Name Slug Description Computed Example
Segment Membership _segments The segments the user is associated with. Yes ["all", "anonymous_profiles", "smt_power"]
Split _split A random value that is evenly distributed across users. Yes 74
Split 2 _split2 A random secondary value that is evenly distributed across users. Yes 58
Needs Message needs_message Stream-specific score that represents the relative distance between now and the next predicted event. Yes {"default": 0.05758899316182292}
Next Event next_event Stream-specific prediction for the next expected event. Yes {"default": "2024-03-01T03:00:00Z"}
Lookalike Model Predictions segment_prediction Scores from Lytics Lookalike and SegmentML models. Yes {"likely_to_churn": 0.26418695138978837}
Lookalike Model Percentiles segment_prediction_percentile Percentiles from Lytics Lookalike and SegmentML models. Yes {"likely_to_churn": 0.26418695138978837}
Activity
Activity encompasses the user's engagement across different channels and campaigns, including clicks and conversions. It provides valuable insights into recent interactions, aiding campaign optimization and channel effectiveness assessment.
General
Name Slug Description Computed Example
First Seen event_first_seen The first time the user was seen for a specific event. No {"click": "2023-12-12T21:09:11.625Z"}
Last Seen event_last_seen The last time the user was seen for a specific event. No {"click": "2024-02-28T02:45:49.776Z"}
Channels channels The channels the user has been active on. No ["web", "email"]
Devices devices The devices the user has been active on. No {"desktop": 123}
Hourly hourly The number of events per hour for the user. Yes {"0": 17, "1": 69, "2": 262, "3": 97}
Hour of Week hourofweek The number of events per hour of the week for the user. Yes {"3": 2, "4": 2, "5": 1, "11": 3}
Last Active last_active_ts The last time the user was active. No 2024-02-28T02:45:50.784Z
Last Channel Activities last_channel_activities The last time the user was active on a specific channel. No {"web": "2024-02-28T02:45:50.784Z"}
Web
Name Slug Description Computed Example
Domains domains The domains the user has been active on. No ["umami.lytics.com"]
First Visit Timestamp firstvisit_ts The first time the user visited the site. No 2023-12-12T21:09:11.625Z
Last Visit Timestamp lastvisit_ts The last time the user visited the site. No 2024-02-28T02:45:50.784Z
Pageview Count pageviewct The number of pageviews the user has had. Yes 234
Referring Domain refdomain The referring domain for the user. No ["umami.lytics.com"]
User Agent user_agent The user agent for the user. Yes Chrome
Visit Count visitct The number of visits the user has had. Yes 145
Visit City visit_city The city the user visited from. Yes Denver
Visit Country visit_country The country the user visited from. Yes US
Visit Region visit_region The region the user visited from. Yes CO
Form Data form_data The form data the user has submitted. No {"first_name": "John"}
Forms Submitted forms_submitted The forms the user has submitted. No ["newsletter", "contact"]
UTM Campaign Last utm_campaign_last The last UTM campaign referred from. No holiday
UTM Campaigns utm_campaigns The UTM campaigns the user has interacted with. No ["holiday", "summer"]
UTM Content Last utm_content_last The last UTM content referred from. No recipe-1
UTM Contents utm_contents The UTM contents the user has interacted with. No ["recipe-1", "recipe-2"]
UTM Medium Last utm_medium_last The last UTM medium referred from. No article
UTM Mediums utm_mediums The UTM mediums the user has interacted with. No ["article", "recipe"]
UTM Source Last utm_source_last The last UTM source referred from. No google_ads
UTM Sources utm_sources The UTM sources the user has interacted with. No ["google_ads", "meta_ads"]
UTM Term Last utm_term_last The last UTM term referred from. No example
UTM Terms utm_terms The UTM terms the user has interacted with. No ["example"]
Campaign
Name Slug Description Computed Example
Hover ly_hover The number of times the user hovered over a specific campaign. No {"content-rec-modal": 5}
Impressions ly_impressions The number of times the user saw a specific campaign. No {"content-rec-modal": 1}
Closes ly_closes The number of times the user closed a specific campaign. No {"content-rec-modal": 10}
Conversions ly_conversions The number of times the user converted on a specific campaign. No {"content-rec-modal": 2}
Milestones ly_milestones The number of times the user reached a milestone on a campaign. No {"engaged-donation-page": 1}
Goals ly_goals The number of times the user reached a goal on a campaign. No {"made-donation": 1}
Examples
Identifiers
Lytics ID (_id)
This is an automatically generated canonical ID managed by Lytics. It refers to the materialized profile and cannot be customized or overridden.
Current Lytics Cookie (_uid) and All Lytics Cookies (_uids)
_uid represents the Lytics anonymous 1st party cookie. This value is automatically captured with every jstag.send() call from the JavaScript tag. The only way to customize this value is to explicitly set the value of _uid, which we do not recommend.
JavaScript
jstag.setid("somecustomvalue");
jstag.send();
Email (email)
JavaScript
jstag.send({
  email:"example@lytics.com"
});
Unique User ID (uuid)
JavaScript
jstag.send({
  uuid:"someuniqueuserid"
});
Details
First Name (first_name)
JavaScript
jstag.send({
  first_name:"John",
});
Last Name (last_name)
JavaScript
jstag.send({
  last_name:"Doe",
});
Title (title)
JavaScript
jstag.send({
  title:"President",
});
Phone (phone)
JavaScript
jstag.send({
  phone:"555-555-5555",
});
Cell (cell)
JavaScript
jstag.send({
  cell:"555-555-5555",
});
Origin (origin)
JavaScript
jstag.send({
  origin:"loyalty_2022",
});
Language (language)
By default, the Lytics JavaScript SDK will collect language information based on the browser, but this can be overridden.
JavaScript
jstag.send({
  _ul:"en-us",
});
Age (age)
JavaScript
jstag.send({
  age:25,
});
Companies (companies)
JavaScript
jstag.send({
  companies:["Lytics", "Pantheon"],
});
Gender (gender)
JavaScript
jstag.send({
  gender: "N/A",
})
Meta
Created (_created)
Lytics automatically generate this and represents the oldest event associated with the user.
Modified (_modified)
This is automatically generated by Lytics and represents the last time the user was modified.
Last Scored (_last_scored)
This is automatically generated by Lytics and represents the last time the users scores were updated.
Number of Aliases (_num_aliases)
This is automatically generated by Lytics and represents the number of aliases associated with the user.
Number of Days (_num_days)
This is automatically generated by Lytics and represents the number of days the user has existed.
Number of Events (_num_events)
This is automatically generated by Lytics and represents the number of events associated with the user.
Number of Streams (_num_streams)
This is automatically generated by Lytics and represents the number of streams associated with the user.
Stream Names (_streamnames)
This is automatically generated by Lytics and represents the names of the streams associated with the user.
User is Bot (is_bot)
This is automatically generated by Lytics and represents whether the user has been flagged as a bot or not.
Behavior
The following attributes are all computed in real-time as the profile evolves. Each of the behavioral attributes are surfaced as a score between 0 and 100. These scores represent an aggregate summary of the user's behavior across various dimensions: Consistency, Frequency, Intensity, Maturity, Momentum, Propensity, Quantity, Recency, and Volatility.
Interests
Lytics Content (lytics_content)
The interest attributes are computed in real-time and represent the user's interest in various topics. These topics are generated as a result of the analysis done by the Lytics Interest Engine and then associated with the user based upon their interaction with content on your site.
Intelligence
Segment Membership (_segments)
This attribute displays an array of all segments the user is currently a member of. It updates in real-time based on various audience definitions. Lytics offers a range of useful segments out of the box, requiring no additional setup. For detailed information on these audiences, refer to our Developer Tier > Audiences documentation.
Split & Split2 (_split & _split2)
These attributes are automatically generated by Lytics and represent a random value evenly distributed across users. They are useful for split testing and experimentation.
Needs Message (needs_message)
This attribute is computed in real-time and represents the relative distance between now and the next predicted event. It is stream specific and is useful for understanding when a user is likely to engage again.
Next Event (next_event)
This attribute is computed in real-time and represents the next expected event. It is stream specific and is useful for understanding when a user is likely to engage again.
Lookalike Model Predictions & Lookalike Model Percentiles (segment_prediction & segment_prediction_percentile)
This attribute is computed in real-time and represents the scores resulting from Lytics Lookalike and SegmentML models. Out-of-the-box, Lytics offers a range of useful models, requiring no additional setup. For detailed information on these models, refer to our Developer Tier > Models documentation.
Activity
General
First Seen & Last Seen (event_first_seen & event_last_seen)
Both of these attributes are automatically populated based upon the _e value in the jstag.send payload. By default Lytics will collect a pv event for each page view and this will automatically populate the first_seen and last_seen attributes. Below is an example of collecting a custom event that would populate these attributes as well.
JavaScript
jstag.send({
  _e:"custom_event"
});
Channels (channels) [needs update]
JavaScript
jstag.send({
  _channel:"web",
});
Devices (devices)
JavaScript
jstag.send({
  _device:"desktop",
});
Hourly (hourly)
This attribute is automatically populated with a count of events per hour for the user.
Hour of Week (hourofweek)
This attribute is automatically populated with a count of events per hour of the week for the user.
Last Active Timestamp (last_active_ts)
This attribute is automatically populated with the last time an event was received in any stream for the user.
Last Channel Activities (last_channel_activities) [needs update]
JavaScript
jstag.send({
  _channel:"web",
});
Web
Domains (domains)
This attribute is automatically populated with the domains the user has been active on.
First Visit Timestamp (firstvisit_ts)
This attribute is automatically populated with the first time the user visited the site and sends data to the default stream.
Last Visit Timestamp (lastvisit_ts)
This attribute is automatically populated with the last time the user visited the site and sends data to the default stream.
Pageview Count (pageviewct)
This attribute is automatically populated with the number of _pv events recieved for the user.
JavaScript
jstag.send({
  _e:"pv"
});
Referring Domain (refdomain)
This attribute is automatically populated with the referring domain for the user.
JavaScript
jstag.send({
  _ref:"umami.lytics.com",
});
User Agent (user_agent)
This attribute is automatically populated based on the user agent of the browser. This attribute must be turned on in your Lytics account to be collected.
Visit Count (visitct)
This attribute is automatically populated with the number of visits the user has had based on presence of the _sesstart key in an event.
JavaScript
jstag.send({
  _sesstart:1
});
Visit City (visit_city)
This attribute is automatically populated with the city the user visited from based upon GeoIP.
Visit Country (visit_country)
This attribute is automatically populated with the country the user visited from based upon GeoIP.
Visit Region (visit_region)
This attribute is automatically populated with the region the user visited from based upon GeoIP.
Form Data (form_data)
Form data is a wildcard attribute that allows you to pass a number of key value pairs that all get stored under the form_data attribute. This is useful for capturing form submissions.
JavaScript
jstag.send({
  formdata_fn:"John",
  formdata_ln:"Doe",
  formdata_someotherkey:"somevalue"
});
Forms Submitted (forms_submitted)
JavaScript
jstag.send({
  form_name:"newsletter"
});
UTM Campaign Last (utm_campaign_last)
JavaScript
jstag.send({
  utm_campaign:"holiday"
});
UTM Campaigns (utm_campaigns)
JavaScript
jstag.send({
  utm_campaign:"holiday"
});
UTM Content Last (utm_content_last)
JavaScript
jstag.send({
  utm_content:"recipe-1"
});
UTM Contents (utm_contents)
JavaScript
jstag.send({
  utm_content:"recipe-1"
});
UTM Medium Last (utm_medium_last)
JavaScript
jstag.send({
  utm_medium:"article"
});
UTM Mediums (utm_mediums)
JavaScript
jstag.send({
  utm_medium:"article"
});
UTM Source Last (utm_source_last)
JavaScript
jstag.send({
  utm_source:"google_ads"
});
UTM Sources (utm_sources)
JavaScript
jstag.send({
  utm_source:"google_ads"
});
UTM Term Last (utm_term_last)
JavaScript
jstag.send({
  utm_term:"example"
});
UTM Terms (utm_terms)
JavaScript
jstag.send({
  utm_term:"example"
});
Campaign
Hover (ly_hover) [needs update]
JavaScript
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "hover"
});
Impressions (ly_impressions) [needs update]
JavaScript
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "show"
});
Closes (ly_closes) [needs update]
JavaScript
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "close"
});
Conversions (ly_conversions) [needs update]
JavaScript
jstag.send({
  pf_widget_id: "content-rec-modal",
  pf-widget-event: "conversion"
});
Milestones (ly_milestones) [needs update]
JavaScript
jstag.send({
  pf_widget_id: "engaged-donation-page",
  pf-widget-event: "milestone"
});
Goals (ly_goals) [needs update]
JavaScript
jstag.send({
  pf_widget_id: "made-donation",
  pf-widget-event: "goal"
});
Default Segments
Suggest Edits
Categorizing users based on their behaviors and characteristics is pivotal for effective audience targeting and personalization strategies. Lytics audience segmentation offers a powerful tool for organizing users into meaningful groups based on shared attributes or behaviors. This section provides a comprehensive overview of all audience segments that are provided out-of-the-box.


Available Segments (Audiences)
👍
Lytics audience segments apply predefined rules to each user profile as they update. Membership in these segments is maintained in real-time and can trigger subsequent actions when users enter or exit the segment.
The following audience segments are all available out of the box, with no customization necessary in all Lytics pricing tiers.
Name Slug Description Definition
All all Your entire user base, both anonymous and known. FILTER *
Anonymous Profiles - 30 days anonymous_profiles_30_days Anonymous profiles older than 30 days FILTER AND ( _modified <= "now-30d", _num_aliases = 1, EXISTS '_uids' ) FROM user ALIAS anonymous_profiles_30_days
Anonymous Profiles - 60 days anonymous_profiles_60_days Anonymous profiles older than 60 days FILTER AND ( _modified <= "now-60d", _num_aliases = 1, EXISTS '_uids' ) FROM user ALIAS anonymous_profiles_60_days
Anonymous Profiles - 90 days anonymous_profiles_90_days Anonymous profiles older than 90 days FILTER AND ( _modified <= "now-90d", _num_aliases = 1, EXISTS '_uids' ) FROM user ALIAS anonymous_profiles_90_days
Anonymous Profiles anonymous_profiles Anonymous Profiles FILTER AND ( _num_aliases = 1, EXISTS '_uids' ) FROM user ALIAS default_anon_seg
Connected Customers connected_customer_segment Connected Customer Segment: Users who are active on 2 or more channels FILTER _forceinvalidsegmentfield = 1 FROM user ALIAS connected_customer_segment
Unhealthy Profiles default_unhealthy_profiles Any user profile that is in an unhealthy state. Commonly caused by merge conflicts such as rules which conflict. FILTER _profile_processing_failure = true FROM user ALIAS default_unhealthy_profiles
Behavior: At Risk Users ly_at_risk People who's interaction behavior is changing for the worse. FILTER AND (score_momentum >= 10, score_momentum <= 30)
Behavior: Binge Users ly_binge_user People who show a lot of activity when they do interact with your brand. FILTER AND (score_frequency <= 20, score_intensity >= 50)
Engagement: Casual Visitors ly_casual_visitor People who show little activity when they do interact with your brand. FILTER score_intensity < 25
Engagement: Deeply Engaged Users ly_deeply_engaged_users People who show a lot of activity when they do interact with your brand. FILTER score_intensity > 75
Engagement: First-time Visitors ly_first_time_visitor People who are visited from the first time. FILTER visitct = 1
Behavior: Frequent Users ly_frequent_user People consistently interacting with your brand. FILTER score_frequency > 65
Campaign Referral Interactions: Email ly_from_email People referred from email. FILTER utm_mediums INTERSECTS ( "email" )
Campaign Referral Interactions: Paid ly_from_paid People referred from paid media. FILTER utm_mediums INTERSECTS ( "cpc", "ppc" )
Campaign Referral Interactions: Social ly_from_social People referred from social media. FILTER utm_mediums INTERSECTS ( "social", "twitter", "facebook", "pinterest", "instagram" )
Web Activity: Has Visited Mobile Web ly_has_visited_mobile_web People who have visited on mobile web. FILTER EXISTS is_mobile
Web Activity: Has Visited Web ly_has_visited_web People who have visited on web. FILTER channels INTERSECTS ( "web" )
Behavior: Infrequent Users ly_infrequent_user People not interacting with your brand. FILTER score_frequency < 35
Location: International Visitors ly_international_visitor People who have visited outside the US. FILTER AND ( EXISTS visit_country, visit_country NOT IN ("US") )
Email Capture Status: Known Email ly_known_email People who have a known email address. FILTER EXISTS email
Engagement: Moderately Engaged Visitors ly_moderately_engaged_visitor People who show average activity when they do interact with your brand. FILTER AND (score_intensity > 24, score_intensity < 76)
Behavior: Moderately Frequent Users ly_moderately_frequent_user People occasionally interacting with your brand. FILTER AND (score_frequency > 34, score_frequency < 76)
Web Activity: Multi Session Visitor ly_multi_session_visitor People who have visited multiple times. FILTER visitct > 1
Behavior: Perusers ly_peruser People who visit often but rarely interact deeply with your brand. FILTER AND (score_frequency >= 70, score_intensity <= 20)
Engagement: Repeat Visitors ly_repeat_visitor People who have visited multiple times. FILTER visitct > 1
Casual Visitors ly_reporting_casual_visitors People who show little activity when they do interact with your brand. FILTER score_intensity < 25
Deeply Engaged Users ly_reporting_deeply_engaged_users People who show a lot of activity when they do interact with your brand. FILTER score_intensity > 75
Frequent Users ly_reporting_frequent_users People who interact with your brand a lot. FILTER score_frequency > 65
Email ly_reporting_from_email People referred from email. FILTER utm_mediums intersects ( "email" )
Facebook ly_reporting_from_facebook People referred from Facebook. FILTER utm_sources intersects ("Facebook", "facebook")
Google ly_reporting_from_google People referred from Google search. FILTER utm_sources intersects ("Google", "Google Search", "Google Ads", "gads", "google", "google-search")
Paid ly_reporting_from_paid People referred from paid media. FILTER utm_mediums intersects ( "cpc", "ppc" )
Social ly_reporting_from_social People referred from social media. FILTER utm_mediums intersects ( "social", "twitter", "facebook", "pinterest", "instagram" )
Has Visited Mobile Web ly_reporting_has_visited_mobile_web People who have visited on mobile web. FILTER EXISTS is_mobile
Has Visited Web ly_reporting_has_visited_web People who have visited on web. FILTER channels INTERSECTS ( "web" )
Infrequent Users ly_reporting_infrequent_users People who interact with your brand occasionally. FILTER score_frequency < 35
Last Visit Within 3 Months ly_reporting_last_visit_within_3_months People who have visited within the last 3 months. FILTER lastvisit_ts > "now-3M"
Last Visit Within A Day ly_reporting_last_visit_within_day People who have visited within the last day. FILTER lastvisit_ts > "now-1d"
Last Visit Within A Month ly_reporting_last_visit_within_month People who have visited within the last month. FILTER lastvisit_ts > "now-1M"
Last Visit Within A Week ly_reporting_last_visit_within_week People who have visited within the last week. FILTER lastvisit_ts > "now-1w"
Multi Session Visitor ly_reporting_multi_session_visitor People who have visited multiple times. FILTER visitct > 1
Single Page Visitor ly_reporting_single_page_visitor People who have only visited one time. FILTER pageviewct = 1
Web Activity: Single Page Visitor ly_single_page_visitor People who have only visited one time. FILTER pageviewct = 1
Email Capture Status: Unknown Email ly_unknown_email People who do not have a known email address. FILTER NOT EXISTS email
Location: US Visitors ly_us_visitor People who have visited from the US. FILTER visit_country IN ("US")
Browser / OS: Android ly_uses_android People who have used Android. FILTER devices INTERSECTS ( "Android" )
Browser / OS: Desktop ly_uses_desktop People who used a desktop. FILTER devices INTERSECTS ( "desktop" )
Browser / OS: iOS ly_uses_ios People who have used iOS. FILTER devices INTERSECTS ( "IOS" )
Browser / OS: Mobile ly_uses_mobile People who have used a mobile device. FILTER devices INTERSECTS ( "Android", "Blackberry", "IOS", "WinMobile" )
Browser / OS: Other ly_uses_other People who have used other devices. FILTER devices INTERSECTS ( "Blackberry", "WinMobile", "other" )
Lytics Currently Engaged smt_active Users who are currently engaging with your brand. FILTER AND ( score_momentum > 10, EXISTS score_momentum, _created < "now-1w", NOT AND ( score_frequency <= 5, score_intensity == 0, score_momentum == 0, score_quantity <= 3 ), NOT AND ( score_quantity >= 50, score_frequency >= 50, score_intensity >= 25, score_momentum >= 40 ) ) FROM user
Lytics Disengaged smt_dormant Users who show minimal or no activity for a prolonged period of time. FILTER AND ( AND ( score_frequency <= 5, score_intensity == 0, score_momentum == 0, score_quantity <= 3 ), EXISTS score_momentum, _created < "now-1w" ) FROM user
Lytics Previously Engaged smt_inactive Users who are currently disengaged with your brand, but had been previously. FILTER AND ( score_momentum <= 10, EXISTS score_momentum, _created < "now-1w", NOT AND ( score_frequency <= 5, score_intensity == 0, score_momentum == 0, score_quantity <= 3 ) ) FROM user
Lytics New smt_new Users who are new to your audience within the last week. FILTER _created >= "now-1w" FROM user
Lytics Highly Engaged smt_power Users who engage most frequently and consistently of your users. FILTER AND ( AND ( score_quantity >= 50, score_frequency >= 50, score_intensity >= 25, score_momentum >= 40 ), EXISTS score_momentum, _created < "now-1w", NOT AND ( score_frequency <= 5, score_intensity == 0, score_momentum == 0, score_quantity <= 3 ), score_momentum > 10 ) FROM user
Lytics Unscored smt_unscored Users who have not registered enough activity to be scored by our behavioral algorithms. FILTER AND ( NOT EXISTS score_momentum, _created < "now-1w" )
`

const zeotap = `
Welcome to Zeotap CDP, your gateway to a user-friendly Customer Data Platform that streamlines data integration, enriches customer profiles, enables precise segmentation and facilitates personalised marketing across multiple platforms.
This document is designed to provide you the crucial initial steps to get started with Zeotap CDP and gives you a comprehensive overview of Zeotap's capabilities. It also helps you to seamlessly integrate and utilise your data with Zeotap CDP. Whether you are new to data-driven platforms or an experienced user, this document will walk you through the prerequisites steps that are essential before setting up your Zeotap CDP account, the overall workflow of Zeotap CDP and the best practices to be followed while using Zeotap CDP.
This section covers the following topics:
In a nutshell, you first create a source within Zeotap CDP to gather your customer data (like events from your site or app) processed either in batches or real-time. Channel this plethora of data into the Zeotap system in a specific format by mapping your incoming fields to Zeotap Catalogue fields. This forms unified profiles of your customers in the Zeotap system based on the configured ID Strategy. You can then make use of another tool of Zeotap CDP called Segment, to create cohorts of your customers, known as Audiences/segments. Finally, link these Audiences/segments to outbound platforms such as Facebook, Snapchat, Airship, Batch and so on, to achieve your use case using another Zeotap tool named Destinations.
Use cases
The following are some of the use cases that can be solved using Zeotap CDP:
Unified Customer Profiles: CDP aggregates customer data from various sources to create unified profiles, ensuring a comprehensive understanding of individual customer behaviours and preferences.
Personalised Marketing: CDP enables businesses to deliver personalised marketing messages by analysing customer data, enhancing the effectiveness of campaigns and increasing customer engagement.
Real-time Data Access: CDP provides real-time access to customer data, empowering businesses to respond promptly to customer interactions and deliver timely and relevant communication.
Cross-Channel Coordination: CDP ensures consistent messaging across different channels, maintaining a cohesive brand image and improving the overall customer experience.
Optimised Campaigns: CDP-driven insights refine marketing campaigns, improving targeting accuracy and maximizing Return on Investment (ROI) by tailoring strategies based on customer behaviour.
Customer Retention Strategies: CDP identifies potential churn indicators, allowing businesses to implement proactive customer retention strategies and personalised engagement to retain valuable customers.
Compliance with Data Protection Regulations: CDP centralises customer data management, facilitating compliance with data protection regulations by ensuring secure and organised handling of customer information.
Effective Suppression of Existing Customers: CDP suppresses existing customers from marketing campaigns to prevent repeated targeting, reducing marketing fatigue, and avoiding unnecessary outreach to those already engaged.
Optimising Loyalty Programs: CDP supports loyalty programs by tailoring promotions based on individual customer profiles, increasing customer engagement, and fostering loyalty through targeted incentives.
Preventing Customer Fatigue: CDP analyses customer interaction patterns to detect signs of fatigue, enabling businesses to adjust marketing strategies and content to maintain customer interest and satisfaction.
Before you start using Zeotap CDP, ensure that you address the following prerequisites and obtain the necessary information outlined in each requirement:


Discovery: Begin by defining your use cases and understanding your customers' requirements. Prioritise use cases and map out data sources, destinations, usage timelines and more.
Data or Catalogue Definition: Subsequently, gain an understanding of your customers' data models, fields, data onboarding formats, delta management and more.
ID Strategy: During this phase, it is crucial to formulate your strategy for identification management. Determine how you can effectively handle data identification and integration to achieve optimal outcomes with Zeotap CDP.
In the Discovery phase, you can start by defining your use cases and understanding your customers' requirements. Prioritise use cases and map out data sources, destinations, usage timelines and more. You need to get clarity from your customers on the following aspects of using a CDP for their use case. By adhering to the instructions below, ensures a fast, hassle-free and successful integration.
Get prioritised list of use cases for using Zeotap CDP
Get prioritised list of Sources to integrate with Zeotap
Get prioritised list of Destinations to target your customers
Gather use cases for Profile API
Gather use cases for Calculated Attributes
Gather use cases for Journeys
Other general requirements
Get prioritised list of use cases for using Zeotap CDP
Obtain a prioritised list of use cases that your customers intend to address using Zeotap CDP. This helps you to align the integration with their specific needs and objectives. For each use case, ensure to map out the Source, Destination and establish clear timelines for when they plan to employ them. This level of detail ensures that the integration is precisely tailored to their requirements. For information about some of the real-time use cases that we have solved through Zeotap CDP, refer here.
Get prioritised list of Sources to integrate with Zeotap CDP
Obtain the prioritised list of Sources, which you wish to integrate with Zeotap CDP for transferring your customer data. In addition, ensure that you have the following details readily available regarding the Source Integration:
Data model - Ensure that you have clearly defined the fields that you wish to send to Zeotap through source integration.
Onboarding Format - Specify the preferred method for onboarding, such as Flat file, API, Data warehouse, SDK, or other applicable formats.
Managing Deltas - Verify that customers adhere to the practice of sending only delta updates, especially when utilizing Flat Files or establishing configurations within DB tables. This ensures the efficient and incremental transfer of data, minimising redundancy.
Get prioritised list of Destinations to target your customers
Obtain the prioritised list of Destinations to concentrate your marketing efforts on targeting specific customer cohorts. In addition, ensure that you have the following details readily available regarding the Destination Integration:
Credentials of the Platforms - Secure the necessary credentials for the identified Platforms. To understand the difference between Platforms and Destinations, refer here.
Use Cases to be Activated - Be clear about the use cases to be activated on the Destinations. For example, suppression, creating look-a-likes in the platforms and more.
Preferred Output Data Fields - Define the preferred output identifiers for each platform. For example, for Facebook - emails, MAIDs, or both; for Braze - First name, Last name, email, Braze ID and so on.
Gather use cases for Profile API
You can use our Profile API to read, write and delete the user profiles from the Zeotap system. Ensure that you have the following details readily available for for effective use of our Profile API:
Identify Data for Profile API - Specify the data intended for utilisation through the Profile API, such as segment membership or other profile attributes. Note that event data is not supported through Profile API.
Delete API Caller - Clearly define the caller of the Delete API and the responsible system or individual for the Delete API operation.
Information
For more information about Profile API, use cases for Profile API, workflow of the API, endpoint, best practices
and more, refer here.
Gather use cases for Calculated Attributes
For Calculate Attributes, identify the use case and possible conditions that you want to achieve.
For example, create a lead score for routing the leads to specific sales representatives.
For example, to show a welcome back banner to people who did not login in the last 7 days, pre-create a Calculated Attribute counting last_7_days_login.
To target a customer when they are viewing a product they have been most engaged with, pre-create a Calculated Attribute tracking most_viewed_product in the last 3 days.
Information
Calculated Attributes are computed daily and exclusively supported for events data.
Gather use cases for Journeys
For you to be able to use Journeys and create workflows, ensure the following:
You have a real-time streaming source created in Sources.
You have mapped the streaming source in your Catalogue.
Information
A workflow runs on the Event Name and other attributes that are mapped in the Catalogue. Hence, ensure that the above
points are taken care of.
Other general requirements
Below are the general requirements that can be considered during Discovery:
Collect your precise Country/Region requirements.
Inform that default support for the EU is available; approval is required in the contract for other regions in terms of Data Residency.
In this stage, you need to define the incoming fields and map it to the respective Zeotap Catalogue field, specify the sensitivity of the data, define consent and more.
Develop a schema document with transformation requirements
Define the data model
Define the sensitivity of the data
Establish Time-To-Live strategy
Define the granular consent fields
Provide sample files for testing
Finalise the Enrichers to use
Develop a schema document with transformation requirements
Ensure that you develop a schema document for each source, along with the following details:
Confirm the presence of at least one ID, Consent and Country field.
Explicitly map incoming fields to the corresponding Zeotap Catalogue field in the schema document.
Specify consent details, considering the customer's desired consent type, applicable channels and the creation of custom consent fields if the source lacks an explicit consent field.
When no specific consent field exists, consider the entire dataset as consented for all purposes.
Define the data model
Define the consolidated data model obtained during the discovery stage, covering event, profile and other custom attributes.
Define the sensitivity of the data
Specify the sensitivity of data, including Personally Identifiable Information (PII) and other sensitive data. PII and sensitive data are masked within the product and Special Personally Identifiable Information (SPII) data must be classified as PII data.
Establish Time-to-Live (TTL) strategy
Establish the Time-to-Live (TTL) strategy for both persistent and non-persistent IDs.
Define the granular consent fields
Define the Granular Consent fields for each source along with the following details:
Identify the attributes denoting consent.
Determine the customer's desired consent type.
Define the applicable channels for consent. In cases where the source lacks an explicit consent field, establish a custom consent field and generate a hardcoded or derived enricher. If no specific consent field exists, the platform considers the complete data as consented for all purposes.
Provide sample files
Provide sample files to Zeotap for testing purposes, adhering to best practices and recommendations for various source types.
Finalise the Enrichers to use
Gather a list of required enrichers, such as Date-Time and Currency Transformations. For an exhaustive list of available enricher types within the system, refer here.
Ensure that you prepare the source-specific data dictionary (listing attributes from each source) and a data model (illustrating the relationships between each source and their respective identifiers) before proceeding with the configuration of the ID strategy.
We recommend you to develop an ID Catalogue document to define relationships between identifiers for the ID strategy configuration, including all relevant identifiers within your account's catalogue. Once the ID strategy configuration is finalised, document the corresponding data scenarios and replicate them in the Zeotap CDP interface. Following that, you can set up your ID configuration. For more information about how to configure the ID strategy for your account, refer here.
Information
By default, we enable the Identify and link using all IDs option, which takes into
account all the ID attributes across sources for resolving or creating user profiles.
Note that this is an irreversible process. Any changes done after source creation
are only applicable to the new data that is ingested.
Once the data mapping is complete, the customer profiles are created and unified
as per the ID strategy active in the account.
To get started with Zeotap CDP, begin by creating a new source to bring Data to Zeotap CDP. You must also select a source category that align with your specific needs and create the source accordingly.
The following are the various source categories supported in Zeotap CDP:
Website Events: To send data from your websites to Zeotap CDP, The following are the two commonly used methods/files to implement website event tracking:
Web JS, This is a client-side library that can be implemented on websites to track events, page visit information, user logins, user details and any other information relating to the product or services offered on the website. For more information about WebJS source, refer here.
Pixel files, also known as tracking pixels or web beacons, are small, invisible elements embedded within web pages to collect information about user behaviour and interactions. For more information about Pixel files, refer here.
App Events: To collect customer data in mobile applications, we integrate our native Android and iOS SDKs (Software Development Kits). These SDKs track user interactions and capture events within the app. The following are the two native SDKs available in the system:
Android SDK, This is designed to support all Android devices and tablets, including Amazon Fire TV. The SDK simplifies the process of sending data to any tool without having to implement a new API every time. For more information about Android SDK, refer here.
iOS SDK, This supports all iOS devices and tablets. The SDK simplifies the process of sending the data from your iOS app to Zeotap. For more information about iOS SDK, refer here.
Flat Files: To store data collected from external sources, often in formats like CSV or JSON, which can be directly uploaded from the Sources user interface or through other methods like the GCloud Console, GS Utils, or through third-party tools like Cyberduck. The following are the two ways for transferring batch data using Flat Files:
Zeotap Google Cloud Storage, Zeotap supports importing of data collected from other sources or stored outside Collect onto the platform. This data can be in the form of CSV or JSON files. For more information about Zeotap Google Cloud Storage, refer here.
SFTP (Secure File Transfer Protocol), Sources supports importing of data collected from other sources or stored outside Sources onto the platform. As an organisation, you can use the SFTP source to onboard your data to Zeotap’s SFTP server using one of the different modes of connection that we recommend. For more information about Zeotap SFTP Sources, refer here.
Server to Server: Sources can be registered for server-to-server data transfer under the HTTP API source. The Source details contain the API endpoint and the write_key to be used for sending the data.
Tag Managers: Provides a user-friendly interface that allows marketers and website administrators to add, update, and manage tracking codes without the need for direct involvement from developers or frequent code changes on the website.The following are the two popular tag managers that Zeotap offers:
Adobe Experience Platform Tag Extension, Zeotap provides the Zeotap Collect Tag Extension within the Adobe Experience Platform marketplace to capture events and user identities and enable cookie syncing on the Web. For more information about Adobe Experience Platform Tag Extension, refer here.
Google Tag Manager, The Zeotap Collect Tag is available as a custom template on Google Tag Manager for easy integration. This is a JavaScript tag that captures events and user information as the customers navigate your websites. For more information about Google Tag Manager, refer here.
CRM Data: refers to the comprehensive set of information about customers and their interactions with a business that is stored and managed within the CRM platform. The following are the CRM Data Source integrations that Zeotap offers:
Salesforce CRM,The Sources module supports importing data from the Salesforce CRM. Salesforce CRM stores data as standard objects that are like tables. For more information about Salesforce CRM, refer here.
Data Warehouse: A Data Warehouse is a centralised and integrated repository that stores large volumes of structured and unstructured data from various sources.The following are the Data Warehouses integration that Zeotap offers:
Snowflake, Zeotap brings simplicity to your data onboarding process by letting you connect directly to your source data residing in Snowflake through Sources. For more information about Snowflake, refer here.
BigQuery, Zeotap simplifies your data onboarding process by letting you connect directly to your source data residing in BigQuery through Sources. For more information about BigQuery, refer here.
Amazon S3, Zeotap brings simplicity to your data onboarding process by letting you connect directly to your source data residing in Amazon (AWS) S3 through the Sources module of Zeotap CDP. Note that you can configure auto-sync of data between your S3 account and the source created in Zeotap CDP by using the Sync Frequency feature. For more information about BigQuery, refer here.
Customer Engagement Channels: These are powerful tools that enable businesses to interact with customers across multiple touchpoints, deliver personalised experiences, and collect valuable data on customer preferences, behaviours, and responses. The following are the Customer Engagement Channels Source Integrations that Zeotap offers:
Braze Currents
Batch
Dotdigital
HubSpot Source
Airship Batch
Airship Real-Time Data Streaming
Cleverpush (Batch) Source
Cleverpush (Real-Time) Source
Message Queue: A message queue is like a buffer that receives messages in a specific order and forwards them to the concerned sub-system or application in the same order. Message queues decouple the sender and recipient, allowing them to operate independently and at their own pace. Consumers retrieve messages from the queue when they are ready to process them. They can retrieve and process messages independently and at their own pace, allowing for asynchronous processing.The following are the message Queue integration that Zeotap offers:
Pub/Sub Stream, Pub/Sub (Publish/Subscribe) Stream is a messaging pattern that allows different applications and services to communicate with each other in real-time. In a Pub/Sub system, messages are published to a central exchange (or “topic”) and subscribed to by various recipients. The recipients receive notifications or data as soon as new messages are published, which makes it an efficient and scalable way to exchange information in real-time. For more information about Pub/Sub Stream, refer here.
Pub/Sub Batch, Pub/Sub (Publish/Subscribe) Batch upload is a way to efficiently and reliably send multiple messages to Pub/Sub topics in a single request. This feature allows you to save network requests and improve the performance and scalability of your applications. In Pub/Sub Batch upload, you create a batch file containing all the messages you want to send. The batch file can be read as often as necessary, but once it is exhausted, only new messages are sent. Pub/Sub Batch upload is useful for processing large numbers of messages at once in real-time applications, as well as in back-end processes that process data over time. For more information about Pub/Sub Batch, refer here.
Once the source is created, proceed with its implementation. Refer to the step-by-step instructions provided in the Implementation guide tailored to the chosen Source Type. You can download this document from the IMPLEMENTATION DETAILS tab of the source that you created.
To implement a Web JS Source, refer here.
To implement a Pixel Source, refer here.
To implement Pixels on a Site, Ad or Campaign, refer here.
To implement Android SDK Source, refer here.
To implement iOS SDK Source, refer here.
To implement a react native package, refer here.
To implement Zeotap Google Cloud Storage Source, refer here.
To implement SFTP(Push) Source, refer here.
To implement SFTP(Pull) Source, refer here.
To implement Server to Server Source, refer here.
To implement Adobe Experience Platform Tag Extension Source, refer here.
To implement Google Tag Manager Source, refer here.
To implement BigQuery Source, refer here.
To implement Snowflake Source, refer here.
To implement Amazon S3 Source, refer here.
To implement Batch Source, refer here.
To implement Braze Currents Source, refer here.
To implement Dotdigital Source, refer here.
To implement HubSpot Source, refer here.
To implement Airship (Batch) Source, refer here.
To implement Airship (Real-time) Source, refer here.
To implement Cleverpush (Batch) Source, refer here.
To implement Cleverpush (Real-time) Source, refer here.
After successfully implementing the source, you can examine the data that has been received into the system under the PREVIEW DATA tab. Note that once the data starts flowing into the system, the status of the source changes to Integrated.

This is the stage in which you can standardise the incoming data to a single organisational-level catalogue by mapping and applying the required data transformations. Ensure that your ingested data such as identifiers, traits, consent, events and more are appropriately mapped against the fields available in the Zeotap Catalogue. This ensures the structuring the data flow efficiently. Map the ingested fields to the Catalogue fields by clicking Map to Catalogue under either the CATALOGUE MAPPING or PREVIEW DATA tab.
The following are the important steps that you need to know while performing the Catalogue Mapping:
Mapping Customer and Non-Customer Entity Data: You can map both Customer Data and Non-Customer Entity Data in the Catalogue. For more information about the how to map the Catalogue for Customer data and Non-Customer Entity Data, refer here.
Knowing Zeotap Standard Fields – Zeotap provides a set of standard fields in your catalogue. If you do not find these standard fields in your organisation’s catalogue, you can create custom fields. The process of creating the custom fields happens in an interactive interface wherein you can define your data points, bring them into Zeotap and manage them independently. Using this interface, you can easily edit the existing catalogue field or create a new field. For more information about the standard fields, refer to the relevant below links.
Zeotap Standard Fields
Reserved Catalogue Fields
Add a Catalogue field – While adding a new Catalogue field, search for the desired field you wish to add. If the field is already present in the system, you are prompted to use the existing field and can access the details page. However, if the field does not exist in the system, you have to create a new field as explained in the Add a Catalogue field topic.
Configure Enrichers – After adding the fields, you have to configure the required Enrichers. Enrichers are quick functions available for you to perform data transformations. Zeotap enrichers can be broadly classified as Data Transformation Enrichers and Custom Enrichers.
Map the Consent Purposes - Once you have mapped all the Identifiers, on the same screen, click + ADD MAPPING. If a source has consent data, then select the incoming consent field and map it to the relevant Zeotap consent field. For more information about mapping the consent purposes, refer here.
Map the Marketing Preferences - Capture marketing preferences along with consent to add clarity and assurance to the marketing team while designing the campaign for the right audience. For more information about mapping the Marketing Preferences, refer here.
Review Mapping – In the REVIEW MAPPING screen that appears, you can find warnings along with error logs that provide a description of the issue for incorrectly mapped fields. Once you have corrected these fields, the system automatically refreshes, allowing the warning to disappear. For more information about reviewing the mapping, refer here.
Save Mapping – When you have reviewed all the fields, click CONFIRM AND SAVE.
This step allows you to derive user-level insights by aggregating your users' isolated actions. You can then use this data to create more powerful customer cohorts. As a marketer, you can use calculated attributes to create new attributes for a user by aggregating their event data over a specific time period. For example, 90_day_revenue of a user, 1_week_page_views to check the engagement of a user, units_purchased by a user for a specific category like T-shirts. These calculated attributes are used as segmenting criteria and can then be forwarded to different integrations. For example, in a workflow, you can define High Spenders as users with 90_day_revenue > €500 or Low Engagement Users by putting 1_week_page_views < 5 criteria. For more information about Calculated Attributes,
The following are the steps involved in creation of Audiences in Zeotap CDP:
Create Audience: Upon successfully creating a source and ingesting your data into the Zeotap system, the next step involves unifying this data by mapping it to the corresponding fields on the Catalogue. Subsequently, you can proceed to create a cohort of customers, commonly referred to as Audience as per your use case.
Define Criteria for Your Audience: Further, define the criteria for the created Audience to qualify customers (unified profiles). You can leverage the available attribute types to define your Audience and create the optimal marketing strategy for them. The attribute types include attributes such as Events, Profile attributes, Calculated attributes, Consent, Marketing preferences and more. To know more about attributes and how to apply them to your Audience, refer here.
Activation is the process of linking the cohort of customers to various advertising platforms, such as Facebook, Adform, Twitter and more. This allows you to implement focused marketing strategies that align with the criteria established for the target cohort.
After defining the audience, you can activate it on a Destination either immediately or you can choose to activate it later. You can revisit this Audience later for further modifications.
To activate the Destination immediately, after defining the criteria for your Audience, on the last screen of the Audience creation, click Activate Now.
This takes you to a new screen, where you can either choose to enable A/B testing on the Audience or activate the created audience by linking it to a specific Destination as shown in the image below.
Set A/B Test – This functionality is exclusively available for users who have opted for it. Selecting this option takes you to a screen where you can split the audience into two or more variations. For more information about AB testing and its application, refer here.
Link to Destination – This functionality helps you to activate the created Audience by linking to a Destination. For step-by-step instructions on how to activate an Audience, refer here.
You are just getting started with Zeotap CDP, but there’s so much more to explore!
Related Topics
The following are some of the important topics that can help you understand the different tools/technical concepts of Zeotap CDP in detail:
This section offers helps you with the best practices and recommendations to accurately set up the Zeotap CDP account across different implementation stages. This section covers the following topics:
Validating Data before Onboarding
Setting Up Organisation and User
Setting Up Sources
Setting Up Destinations
Setting Up Predictive Audience
Setting Up Journeys
Setting Up Consent Orchestration
Setting Up Profile API 
`

export { segment, mpartice, lytics, zeotap};