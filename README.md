## Project Name & Pitch

Romantic Hut Party Hall Website (www.romantichutparty.com)

A front-end website to promote the business, showcase services offered, and automate inquiries of availability. Desktop and mobile compatible.

Built with HTML (Bootstrap), CSS, and Javascript. Utilized Font Awesome Icons and Splide Thumbnail Slider. Also used Twilio with Google Sheets & Google Forms


## Installation and Setup Instructions

Clone down this repository. You will need `VS Code` installed globally on your machine.  

Open the repository with VS Code. Download the 'Go Live' extension to run the website in real time.

To recreate the "Check Availability" button, you will need `Twilio`, Google Forms, and Google Sheets. 

Visit www.twilio.com and create an account. "Get a Twilio phone number". To avoid people replying, remove the number's webhooks. To get your SID and AUTH, visit "Account" -> "Keys & Credentials" -> "API keys & tokens" -> "Live Credentials".

Create a Google Form with 3 questions:
1. Phone number to receive from Twilio
2. Date for availability inquiry
3. Checkbox for which room(s)

### Example: 
<img width="726" alt="Screen Shot 2023-06-11 at 11 34 09 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/6c05ecf1-3a7a-450f-a80f-2f1bdeea5dd9">

Response validation for phone number on Google Forms; Regex: `^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$`

Link this form to a Google Spreadsheet. Within the same spreadsheet, create new 2 sheets. One to manually add new reservations, and a second to sort them automatically

### Example:
<img width="270" alt="Screen Shot 2023-06-12 at 12 38 41 AM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/9e9162cb-cbdd-4139-8287-85fcf494867a"> <img width="270" alt="Screen Shot 2023-06-12 at 12 38 26 AM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/6f08f0d7-0b8b-425e-9a96-0725eaa97c84">

Created the filtered sorted sheet with the following formula in the highlighted cell: 
```=SORT(FILTER(Manual!A3:B, Manual!A3:A>=TODAY()), 1, true)```

Open Google `Apps Script` for your spreadsheet and paste the assets/js/AppsScript.js file. In the sendSms function, replace SID, AUTH, TWILIO (phone number), and EMAIL with your information.

### Optional (Hosting & Domain)

Visit the settings of your repository. Under "Code and automation", visit "Pages". Save the source as main/master. Under "Custom domain", enter your custom domain. For more information: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site


## Reflection

I created this project in the winter of 2022. The goals included: learning web development, practicing using git, and reducing phone call inquiries of frequently asked questions (venues availability on X date)

I got started by following a YouTube tutorial video on web development. While that taught me the basics, it was time-consuming to create everything from scratch. After a quick search for a way to create a grid system for my content, I discovered the Bootstrap framework. I restarted my progress in favor of rebuilding with Bootstrap, making the building process more efficient and fun.

One of the biggest challenges was the time required to load the content. My design was a single HTML with anchors and animations on scroll, so I couldn't rely on prefetching. I removed animations because loading the content was more important than presenting it fascinatingly. I also implemented lazy loading for my photo gallery. I had trouble with the viewport height due to the mobile's toolbar. It took a while to decipher the problem since my mobile emulator did not match my phone's display. Eventually used a web inspector for my phone to determine the issue and found the correct units I needed.

I had concerns with Twilio as well. It allowed me to block incoming messages but couldn't block outgoing requests. I was concerned that one person would spam requests until my balance hit zero. My solution was to create a function that counted pairs of the same phone number and day from the Google form responses. I set it to where on the 10th request, they will receive a message stating they have reached their daily limit. Any further API requests will ignore that number until the next day.

If I were to recreate this project, I would adopt a mobile-first design strategy. I realized that scaling small content into a larger screen size is a smoother process than the reverse. I plan to make this a full-stack project by adding back-end components. Currently, I am using a spreadsheet to hold information. I will create text fields on the html page for the user to get an immediate response on availability without requiring Twilio to send a text message. I am interested in JavaScript frameworks that I wish to learn more about and implement into my project.


## Project Screen Shots (Desktop)

### Nav Bar:<img width="1440" alt="Screen Shot 2023-06-11 at 5 35 06 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/463aacee-e710-49cf-b62b-bb3aee39555a">

### Hero Page:<img width="1440" alt="Screen Shot 2023-06-11 at 5 35 17 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/d0cac10b-45ed-49f4-bd92-76a5f7e4bd3f">

### About Us:<img width="1440" alt="Screen Shot 2023-06-15 at 2 42 44 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/062e7dac-3bed-4b46-9470-b0cf98bb1851">


### Hall Prices:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 02 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/faba5c6d-1427-4e21-ba66-874959b198dc">

### What's Included:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 11 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/57ab597f-5762-4f7e-8f75-09cb8efc36fd">

### Reservations:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 20 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/94db1868-db29-4cf6-ab78-eae13319b5a6">

### Photo Gallery:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 47 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/21aab0d7-2e1a-4ae8-aaa9-2afbb86354d7">

### Footer:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 59 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/90659d68-5109-4fde-9f48-945c27c55eee">

### Twilio Bot: 
![IMG_2078_50](https://github.com/johnnyj2608/RomanticHut/assets/54607786/0428d419-2dfd-46fe-845e-c895893b17b9)
