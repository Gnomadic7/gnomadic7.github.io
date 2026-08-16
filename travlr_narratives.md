---
layout: page
title: Travlr Getaways Enhancement
---

# Travlr Getaways Enhancement Project

The artifact that was chosen is the Travlr Getaways single page application that was partially completed in the CS 465 course. This application is a travel package booking website. In it's initial form, the webpage uses static html files to populate its webpage and the goal of the CS 465 course was to populate the "travel" page using M.E.A.N. full stack development tools. I decided to include this in my ePortfolio because I believe finishing the application so that "Rooms", "Meals", "News", "Contact", and "About Us" tabs are populated using M.E.A.N. tools would be an appropriate demonstration of my competency in all five of the course outcomes. M.E.A.N. stands for MongoDB, Express.js, Angular, and Node.js. Using these tools in conjunction shows my ability to employ strategies for a collaborative environment (Outcome One). Since this is for a travel booking website I'll show my ability to design, develop, and deliver professional quality communications (Outcome Two). The need for the application to use MongoDB and possess the functionality for users to edit the contents of the website show how I can design and evaluate computing solutions that solve problems using algorithmic principles because the user information needs to be encrypted (Outcome Three). The three examples I just listed will also show my competency in Outcome 4 and Outcome 5. Because this is the only artifact I will be working on in this course, all course outcomes won't fully show my competency until the entire application is finished.

## Milestone One
<a href="{{ '/original_travlr/original_travlr.zip' | relative_url }}">
    Download the Original Travlr Getaways Application
</a>
# Code Review
<iframe
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/__C0SToT5H4"
    title="Travlr Getaways Code Review"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
</iframe>

## Milestone Two
By this point in the course I had migrated the static html files used to populate the website to handlebars templates and I had designed the JSON objects that the templates will be using. The next step was to design the controllers in the app_server folder so that the templates will know how to use the JSON objects. I had completed some and I planned to finish the rest in the following 24 hours. The "Rooms" and "Meals" sections of the website are similar to the "Travel" section, however this enhancement had shown me how differently I would need to approach the "News", "Contact us", "About Us", and especially the "Main Page" sections because two of them required links to the other sections. Also I found a new appreciation for how the CS 465 course was structured and the steps it took to accomplish the "Travel" page. I needed to continue to edit the app_server folder after I finished the app_api folder in the future because they would then use the api endpoints to populate and change the information in the template. Because of this the application I submitted as part of this milestone wouldn't work as intended and I needed to trust in the process as I did in the previous course.

## Milestone Three
How my progress by milestone three enhancements related to the algorithms and data structure is through the use of JSON objects to populate the handlebars templates that will replace the static html files. This had mostly been completed, with the exception of the main page (index.hbs) and news tab (news.hbs). Both of these pages needed links to other pages and use information that requires more advanced mapping techniques than the others. I was trying to learn how to use the responseBody annotation because it was recommended for mapping HTTP requests and Java objects. This wasn't something I learned in a previous course so it had taken me some time to learn how to apply it. If I couldn't figure out how to implement it, I would need to adjust their json object or separate the information in their own individual json objects to accomplish something similar.

## Milestone Four
 Honestly by the completion of milestone four, I did not meet the outcomes I planned on meeting that week. I had hoped to be working on outcome 5, which is using a security mindset that anticipates adversarial exploits. This was going to be done by completing API commands and granting certain users' permissions to add, edit, and update the relevant information. However, as I began working in the app_admin file, I realized quickly that I was unable to successfully test the changes I implemented. Due to the News page not loading correctly, I had to back track and change the way I was implementing the template and populating it with information. Initially I wanted to use a responseBody annotation, but I was unsuccessful. Instead, I decided to split the "news" Json object into three separate objects. This also involved me changing any file that referenced or used this object so that it could handle all three files. As of this writing, I was still dealing with errors involving the schema that the API uses to populate the website with information. I wasn't be able to progress in my enhancements until that error was solved. Drawbacks are a part of development. I needed to recognize this and review the work I had done over the previous week one step at a time. The fact that the error message specifically says "Schema hasn't been registered for model 'newsLatest'" told me the error was not coming from the differences between the handlebars template files. It came from the model or its mongoose connection. These are things I have done before, so when I slowly retraced my steps, I was able to find the issue.
 
## Final Enhancement
I found the issue with the schema errors I had been dealing with previously. They were merely typos that stemed from me quickly adjusting the various files to compensate for three json objects for news instead of one. After that was done I started continuously testing and iterating the rest of the changes. Most of the changes from this point on dealt with giving a visualization to the information stored in the Mongo database so that the administrators could clearly see what they could edit. I also had to implement "Add" and "Update" buttons on each "card" that the information stored on. It required extensive editing of HTML files. Finally I needed to implement the appropriate permissions so that the cards allowed the information to be editted only if a user with the appropriate permissions was logged in. 

<a href="{{ '/enhancement4/travlr.zip' | relative_url }}">
    Download the Final Travlr Getaways Application
</a>