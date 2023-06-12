## Project Name & Pitch

Romantic Hut Party Hall Website (www.romantichutparty.com)

A front-end website to promote the business, showcase services offered, and automate inquiries of availability. Desktop and mobile compatible.

Built with HTML (Bootstrap), CSS, and Javascript. Utilized Font Awesome Icons and Splide Thumbnail Slider. Also used Twilio with Google Sheets & Google Forms

## Installation and Setup Instructions

Clone down this repository. You will need `VS Code` installed globally on your machine.  

Open the repository with VS Code. Run the code.

To recreate the "Check Availability" button, you will need `Twilio`, Google Forms', and 'Google Sheets'. 

Visit www.twilio.com and create an account. "Get a Twilio phone number". To remove people replying to this number, remove it's webhooks. To get your SID and AUTH, visit "Account" -> "Keys & Credentials" -> "API keys & tokens" -> "Live Credentials".

Create a Google Form with 3 questions:
1. Phone
2. Date
3. Checkbox for specific rooms

### Example: <img width="726" alt="Screen Shot 2023-06-11 at 11 34 09 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/6c05ecf1-3a7a-450f-a80f-2f1bdeea5dd9">

Link this form to a Google Spreadsheet. Within the same spreadsheet, create new 2 sheets. One to manually add new reservations, and a second to sort them automatically

### Manual: | ### Sorted:
<img width="248" alt="Screen Shot 2023-06-12 at 12 01 22 AM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/aa34c8af-fe6c-4795-86fb-713419be431a"><img width="247" alt="Screen Shot 2023-06-12 at 12 00 43 AM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/9da158e5-dccd-4c06-a305-be58ae63426c">

Created the sorted sheet with the following formula: '=SORT(FILTER(Manual!A3:B, Manual!A3:A>=TODAY()), 1, true)'

Open Google `Apps Script` for your spreadsheet and paste the assets/js/AppsScript.js file. In the sendSms function, replace SID, AUTH, TWILIO, and EMAIL (phone number) with your own information.

### Optional (Domain & Hosting)

Visit the settings of your repository. Under "Code and automation", visit "Pages". Save source as main/master. Under "Custom domain", enter your own custom domain. For more information: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Reflection

Purpose

Journey

Challenges

Technologies

## Project Screen Shots (Desktop)

### Nav Bar:<img width="1440" alt="Screen Shot 2023-06-11 at 5 35 06 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/463aacee-e710-49cf-b62b-bb3aee39555a">

### Hero Page:<img width="1440" alt="Screen Shot 2023-06-11 at 5 35 17 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/d0cac10b-45ed-49f4-bd92-76a5f7e4bd3f">

### About Us:<img width="1440" alt="Screen Shot 2023-06-11 at 5 35 50 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/5262728a-bef9-48d8-9cad-11aec3d5a4ec">

### Hall Prices:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 02 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/faba5c6d-1427-4e21-ba66-874959b198dc">

### What's Included:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 11 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/57ab597f-5762-4f7e-8f75-09cb8efc36fd">

### Reservation:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 20 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/94db1868-db29-4cf6-ab78-eae13319b5a6">

### Photo Gallery:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 47 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/21aab0d7-2e1a-4ae8-aaa9-2afbb86354d7">

### Footer:<img width="1440" alt="Screen Shot 2023-06-11 at 5 36 59 PM" src="https://github.com/johnnyj2608/RomanticHut/assets/54607786/90659d68-5109-4fde-9f48-945c27c55eee">

### Twilio Bot: ![IMG_2078](https://github.com/johnnyj2608/RomanticHut/assets/54607786/ce1a6286-b48c-420c-be59-1749bac0f6cf)
