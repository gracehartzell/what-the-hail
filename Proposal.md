# App Proposal

## Intro 
#### Explain who you are and the basic details of your company.  Include a basic easy-to-read overview.
Our company includes Bryan Anderson, Grace Hartzell, and Mitali Mittal. We focus on delivering high quality, customizable weather applications for users who want to explore their creativity while searching for today’s humidity.

## Problem Statement 
#### Write a paragraph explaining your client’s problem in detail.
Our client has had issues finding a weather app that is both visually appealing and accurate. We have set out to alleviate this problem by preparing various themes for the client to use as well as creating an option to design your own theme (stretch). The app will save the user’s information and theme preferences as well as keeping track of most frequent locations. 

## Goals / Proposed Solution
#### Share your app goals.  Focus on the specific solutions you’ll implement.
*What the Hail?* will be Android, iOS, and desktop compatible. We’ll be importing data from trusted APIs to ensure both accurate and detailed forecasts. The forecasts will then be displayed using brilliant brevity and an aesthetically pleasing style to provide the highest calibre delivery for our clients.

While our clients’ satisfaction is of the utmost importance, we’ll be employing a new-to-us tech stack so that our knowledge can grow for the benefit of the client. 

## MVP Tickets 
#### Write your major technical goals.  To be delivered in 48 hours.
* **API, weather related:**
  * Use AccuWeather API to deliver forecast by location
    * Hourly, daily, weekly: temperature, precipitation, humidity, wind speed and chill, visibility, pressure, UV index, sunrise/sunset time, moon phase/astronomy,
    * Extreme weather alerts
    * Allergy tracker
* **User related:**
  * User can login with Google, Facebook, or email
  * Ability to choose default language when signing up
  * Must approve location access/permissions
* **General app:**
  * Have 5 themes to choose from 
  * Location access and storage 
    
**Stretch:**
  * Add pixel maker to draw out pieces
  * Include radar (feasibility dependent upon API)

**Tech stacks:**
* Vue (for FE desktop)
* Cordova (mobile implementation)
* Redis
* Jest (testing)
* MongoDB *OR* Azure and ASP.NET
