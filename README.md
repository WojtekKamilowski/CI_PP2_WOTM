# what'sOnTheMenu
(Developer: Kamil Wojciechowski)

![Mockup image](docs/am-i-responsive.png)

[Live webpage](https://wojtekkamilowski.github.io/CI_PP2_WOTM/)

## Table of Contents

1. [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Business Owner Goals](#business-owner-goals)
2. [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Requirements and Expectations](#user-requirements-and-expectations)
    - [User Stories](#user-stories)
3. [Design](#design)
    - [Design Choices](#design-choices)
    - [Colors](#colors)
    - [Fonts](#fonts)
    - [Structure](#structure)
    - [Wireframes](#wireframes)
4. [Languages](#languages)
5. [Technologies Used](#technologies-used)
6. [Features](#features)
7. [Validation](#validation)
    - [HTML Validation](#HTML-validation)
    - [CSS Validation](#CSS-validation)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
    - [Device testing](#device-testing)
    - [Browser compatibility](#browser-compatibility)
    - [Testing user stories](#testing-user-stories)
 8. [Bugs](#Bugs)
 9. [Deployment](#deployment)
 10. [Credits](#credits)
 11. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals
- Find an idea what to eat for the chosen meal (breakfast/lunch/dinner/dessert).
- Easily run the dish lottery again in case the first drawn dish does not match the user's expectations.
- Look for recipes in case the user would like but does not know how to prepare / what is the drawn dish.
- Easily navigation throught the website.
- Entertainment with the quiz possibly while making the decision if the user would like to eat the drawn dish.
- Find social media of the website to find more content about food and network with other users with similar interests.
- Ask questions or provide feedback for the website owner by using the contact form. 

### Business Owner Goals
- Give users a random idea what to eat.
- Help users to search more about the drawn dish through the search engine.
- Entartain the user with the quiz to maximise the time spent on the website.
- Allow users to easily visit social media pages of the owner. 
- Collect feedback or answer questions from the users by using the contact form.

[Back to Table Of Contents](#table-of-contents)

## User Experience

### Target Audience
- People who like to eat and cook and looking for an inspiration.
- Users who would like to search more about food recipes and would like to have an idea for what dish they will search for.
- Users who might need some time to think if the drawn dish is a good idea for them, in the meantime entertain with the quiz.
- People who would like to network with other users with similar interests thorugh social media platforms.
- Users who would like to ask questions and provide feedback after using the website.

### User Requirements and Expectations
- Accessible and responsive website.
- Intuitive website with a layout allowing to easily navigate through it.
- Easy access to useful information.
- Links and features that function in accordance with their intended purpose. 
- Connection with the community on the social media platforms.
- A contact form to contact the website owner. 

[Back to Table Of Contents](#table-of-contents)

### User Stories

#### First-time User

As a first time user I want to:

1. Choose for which meal the dish is to be drawn. 
2. Easily run the lottery again if the first draw is not satisfactory.
3. Find recipes from different sources that matches my taste and/or cooking skills.
4. Easily navigate the website.
5. Be sure which for which meal the dish was drawn.
6. Entartain with the quiz and check my subject related knowledge.
7. Easily access social media plaftorms of the website.

#### Returning User

As a returning user I want to:

8. Contact the website owner.
9. Find an idea what to eat for other meal.
10. Find some facts about food.

#### Business Owner 

As the owner I want to:

11. Give user an idea what to eat/cook for breakfast/lunch/dinner/dessert.
12. Allow users to reinitiate lottery.
13. Provide users with various options of the recipe for the drawn dish.
14. Allow users to easily navigate the website.
15. Entertain the users with the quiz to maximise the time they spent on the website.
16. Link users with our social media pages.
17. Provide users with a feature to contact us.

[Back to Table Of Contents](#table-of-contents)

## Design

### Design Choices 
The main design choice was to create a simple website to help people answer the question: "What to eat today?". Inspire them to search for different variations of the recipes for the dishes that they might already eaten/ cooked. 
The logo is a simply fork and knife to inform the user that the website is food related.
The name: "what'sOnTheMenu" - is to present to the user to expect that the website is a contemporary place where they can built their own everyday food menu. 
Buttons were designed with simple icons to be intuitive. 
Quiz was designed to be easy to understand and bring some interesting facts about the subject.


[Back to Table Of Contents](#table-of-contents)

### Colors
The chosen colors were: black, orange (three different tones), green, red and blue. 
The colors were chosen to be simple and users to be familiar with the theme. 
Colors change when user hover mouse on clickable elements of the website.

Quiz colors change after choosing an answer:
- the quiz div background color changes to green if the user selected correct answer or to red if the answer was wrong.
- the correct answer background color changes to green and wrong answers background color changes to red. 
<details>
    <summary>Colors contrasts</summary>
    
![Color scheme](docs/colors/colors-black-orange.png)
![Color scheme](docs/colors/colors-black-light-orange.png)
![Color scheme](docs/colors/colors-black-hover-orange.png)
![Color scheme](docs/colors/colors-correct.png)
![Color scheme](docs/colors/colors-wrong.png)
![Color scheme](docs/colors/colors-blue-orange.png)
![Color scheme](docs/colors/colors-blue-light-orange.png)
![Color scheme](docs/colors/colors-blue-hover-orange.png)
</details>

[Back to Table Of Contents](#table-of-contents)

### Fonts
The chosen font was Roboto found on Google Fonts and _Sans-serif_ was chosen as the fallback font.

[Back to Table Of Contents](#table-of-contents)

### Structure
The content of the website is placed in the center.
The logo and the name of the website is placed on the top, the main container in the middle and the footer placed on the bottom.
There are four icons in the footer: three with links to social media platforms and envelope linking to the contact page of the website.

The website consists of two pages:
- Home: the main container in the middle displays meals to be selected and dish lottery with the quiz after a meal was selected.
- Contact: the main container displays a contact form that changes after the submission.

[Back to Table Of Contents](#table-of-contents)

## Wireframes
<details>
    <summary>Home</summary>
    <img src="docs/wireframes/wireframes-home-desktop.png">
    <img src="docs/wireframes/wireframes-home-tablet.png">
    <img src="docs/wireframes/wireframes-home-mobile.png">
    <img src="docs/wireframes/wireframes-dish-quiz-desktop.png">
    <img src="docs/wireframes/wireframes-dish-quiz-tablet.png">
    <img src="docs/wireframes/wireframes-dish-quiz-mobile.png">    
</details>
<details>
    <summary>Contact</summary>
    <img src="docs/wireframes/wireframes-contact-desktop.png">
    <img src="docs/wireframes/wireframes-contact-tablet.png">
    <img src="docs/wireframes/wireframes-contact-mobile.png">
</details>
<details>
    <summary>404</summary>
    <img src="docs/wireframes/wireframes-404-desktop.png">
    <img src="docs/wireframes/wireframes-404-tablet.png">
    <img src="docs/wireframes/wireframes-404-mobile.png">
</details>

[Back to Table Of Contents](#table-of-contents)

## Languages
- HTML
- CSS
- JavaScript

## Technologies Used
- GitHub
- Gitpod
- Balsamiq - to create the wireframes.
- Font Awesome - to add icons.
- favicon.io - to create the favicon.
- Google Fonts to find and add Roboto font. 
- TinyPNG to compress the background image.
- HTML Color Codes to find the main orange color : #D27D2D
- Color Meanings to find the blue color: #002366
- WebAIM to check for contrasts and identify hex codes for other colors(tones of orange: #DDA169 & hover: #E9BF9B; green: #003300 & red: #5C0000) 
- YouTube to find video tutorials with Random From Array and Quiz App.

[Back to Table Of Contents](#table-of-contents)

## Features
On the website there are two pages.

<details>
    <summary>Logo and website name</summary>  
    It is included on all two pages and 404.<br> 
    The logo includes an icon.br>
    The logo and the website name are clickable link to Home page which is a common feature on many websites so users expect it.<br> 
    When the user hovers the mouse over the other pages links they change color informing the user that it is clickable.<br> 
    Logo and website name are responsive, the font size reduces for smaller screens.<br>
    User stories covered: 4, 9, 14. 
    <img src="docs/features/features-logo-and-website-name.png">    
</details> 
<details>
    <summary>Footer</summary> 
    Appears on two pages and 404.<br>
    Contains social media and envelope icons.<br> 
    The icons change color when users hover the mouse over them to indicate they can be clicked.<br>
    It is responsive icons move closer to each other, they reduce size for very small screens.
    User stories covered: 4, 7, 8, 13, 14, 16, 17.
    <img src="docs/features/features-footer.png">  
</details>
<details>   
    <summary>Meal selection buttons</summary>
    Placed in the center of the home page.<br> 
    Constists of four meal buttons: brakfast, lunch, dinner & dessert. Clicking on them inititiate dish lottery screen with drwan dish and a quiz question.<br> 
    The icons change color when users hover the mouse over them to indicate they can be clicked.<br>
    The feature is responsive.<br>
    User stories covered: 1, 4, 9, 11, 14.
    <img src="docs/features/features-meal-selection-buttons.png">   
</details>
<details>
    <summary>Dish Lottery</summary>
    Appears when the user selects one of the meals for which a dish is to be drawn.<br> 
    It informs which meal the user chose and displays a random dish drawn from the relevant array.<br> 
    There is a different dish button that allows the user to reinitiate the lottery without need of refreshing the page.<br> 
    Below different dish button there is a recipe link allows user to search for recipes for the drawn dish.<br> 
    Return to the main menu button allows the user to easily navigate to the meal selection buttons.<br> 
    The feature is responsive.<br>
    User stories covered: 

</details>
<details>
    <summary>Quiz</summary> 
    
</details>
<details>
    <summary>Contact form</summary>
   
</details>

[Back to Table Of Contents](#table-of-contents)

## Validation

### HTML Validation
To validate HTML of the website the W3C Markup Validation Service was used. The results have no errors.

#### Home
![HTML Validation Home](docs/validation/)

#### Menu
![HTML Validation Menu](docs/validation/)

#### About us
![HTML Validation About us](docs/validation/)

#### Contact
![HTML Validation Contact](docs/validation/)

#### 404
![HTML Validation 404](docs/)

### CSS Validation
To validate style.css the W3C Jigsaw CSS Validation Service was used. There were no errors found.

![CSS Validation](docs/validation/)

[Back to Table Of Contents](#table-of-contents)

## Accessibility
Accessibility was tested using WAVE - Web Accessibility Evaluation Tool. All of the pages have no errors.

### Home
![Accessibility Validation Home](docs/validation/)

### Menu
![Accessibility Validation Menu](docs/validation/)

### About us
![Accessibility Validation About us](docs/validation/)

### Contact
![Accessibility Validation Contact](docs/validation/)

### 404
![Accessibility Validation 404](docs/validation/)

[Back to Table Of Contents](#table-of-contents)

## Performance
The tool used to test the performance of the website was Google Lighthouse from Google Chrome Developer Tools.

### Home

#### Desktop
![Performance Home Desktop](docs/validation/)

#### Mobile
![Performance Home Mobile](docs/validation/)

### Contact

#### Desktop
![Performance Menu Desktop](docs/validation/)

#### Mobile
![Performance Menu Mobile](docs/validation/)

### 404

#### Desktop
![Performance 404 Desktop](docs/validation/)

#### Mobile
![Performance 404 Mobile](docs/validation/)

[Back to Table Of Contents](#table-of-contents)

## Device testing
List of devices used to test the website:
- HP Pavilion 14 
- Acer Nitro 5 with and without an external monitor (HP V22)
- Sony Xperia L2
- Motorola Moto G20

The website was also tested using Google Chrome Developer Tools, Toggle Device Toolbar simulating view from twenty-five listed devices, including popular amongst users iPad and iPhone 5.

## Browser compatibility
Following browsers were used to test the website:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

[Back to Table Of Contents](#table-of-contents)

## Testing user stories 

1. As a first time user I want to know if there is some disruption to the usual opening times or other very important information:

| Feature | Action  | Expected Result | Actual Result |
| ------- | ------- | --------------- | ------------- |
|  |  |  |  |

![Testing user story 1](docs/user-story-testing/user-story-1.jpg)

[Back to Table Of Contents](#table-of-contents)


## Bugs
| Bug  | Fix  |
| ------- | ------- |
|  |  |

[Back to Table Of Contents](#table-of-contents)

## Deployment 
The website was deployed on GitHub Pages as per following steps:
1. From the GitHub repository open the settings tab.
2. Select Pages from the options on the left (Code and automation section).
3. Source: deploy from a branch.
4. Branch: main.
5. Once the page is reloaded there was a notification "Your site is live at https://wojtekkamilowski.github.io/CI_PP2_WOTM/index.html"

To fork the repository you should:

1. Open the repository: https://github.com/WojtekKamilowski/CI_PP2_WOTM
2. Select Fork from the options on the right.

To clone the GitHub repository you should:
1. Open the repository: https://github.com/WojtekKamilowski/CI_PP2_WOTM
2. In the Code tab select click on Code button and select the preferred option (HTTPS/SSH/Github CLI) and click the copy button on the right of URL
3. Open Git Bash and change the current working directory to the desired one.
6. Type git clone and paste the previously copied URL from GitHub then pressing the enter button should create a local clone.

[Back to Table Of Contents](#table-of-contents)

## Credits 

### Media

### Code

[Back to Table Of Contents](#table-of-contents)

## Acknowledgements
I would like to thank those who were a great support and inspiration during writing this project:
- My mentor Mo Shami.
- Code Institute for preparing the materials and providing a wide range of available means of learning for the students.
- My family who were the first users to test the website.
