# Student: Dimitrios Paraskevas
## Project: MS Project 2 - Build an Interactive Travel Website (June 2021)

### Booterstown Travel - The European City Breaks Specialists
[View the live website here](https://dimitridublin.github.io/ms_project2/)

For my second Milestone Project I chose to build an interactive website for an imaginary travel agency, based in Booterstown, Co Dublin (i.e. project idea 1 in the 
course assessment handbook). 

![image of website on different screen sizes](assets/images/readme-responsive.jpg)

#### User Stories
As a prospective client I want to find the best city break destination for my needs: read information about different cities that are potential holiday 
destinations and review city maps with relevant attractions, accommodation and restaurants clearly marked (in order to evaluate suitability of accommodation location on offer in relation to city's sights and restaurants of interest). I would also like to view photos to get an indication of each destination's beauty, major attractions, food choices and accommodation available. Easy to access links of the travel agency's social media pages would also be welcome as they can provide additional info on both the city breaks offered as well as the agency's reputation and previous customer experience through client submitted reviews.

As the site owner I want to get users to book a city break from this site. For this purpose, I want to display information about the different cities my agency offers holiday breaks to, and allow users to get a feeling of the attractions, accommodation and restaurants each destination offers. I also want to have enticing photographs and easy enquiry and booking facilities to provide additional motivation to prospective clients to book a package directly from my website. Easy to access links of the travel agency's social media pages would also be welcome as I want to give users access to client submitted reviews for additional user reassurance. Finally, I want to highlight the excellent value and location suitability of accommodation my city break packages include.

#### Features
##### Existing Features
* Website built with a "mobile-first" design strategy to maximise positivity of user experience.
* Care has been taken to write clean, semantic HTML throughout the process in order to allow search engines, screen readers, or other accessibility devices to access our content. This offers a positive design experience from a site owner's point of view.
* Styling reliability on Bootstrap by design means that styles are consistent, and site makes sense visually. Furthermore, it means that site is fully responsive guaranteeing that, regardless of device, users will have an equally positive experience using the website.
* Header, navigation and footer maintain their style across website to provide a smooth navigating experience for users. 
* Navigation section reduces to a hamburger menu in smaller screen sizes and company slogan appears only on bigger screen sizes. This is to ensure a "clutter-free" screen navigation experience irrespective of user's screen size. 
* Company logo on top left of each page also functions as a navigation link back to the homepage.
* Homepage is simple and stylish, inviting users to begin their city break exploration straight away.
* In the about section, users are presented with a summary of the company history along with an online enquiry form should they have additional queries. This meets both user and site owner needs as described in the User Stories section above.
* About page styling ensures that enquiry form does not take up the entire width of the page which would make it too big and result in a less positive user experience.
* Once enquiry form is filled in and submitted users get instant confirmation notification on screen of such along with further advice in relation to their query. Moreover, the functionality sends an auto-reply via Email JS to the user's email provided, and an email to the company's designated account with the user's details and actual query. Both actions provide a positive experience as users have immediate peace of mind that their enquiry has been successfully sent to and will be handled by the company accordingly. In addition, they meet the site owner's needs as apart from the easy enquiry functionality itself, form collects necessary and valuable user details along the process.
* Users have two options to access the actual city information pages, either via the navigation menu leading directly to their city of choice or by clicking onto the "choose a city" button available on the homepage leading to a stylish "cities" page for users to further select their destination of choice.
* Once city of choice has been determined, users land on the respective designated city page. There, and apart from a summary about the city on top of the page, users can read more about the destination's attractions, restaurants as well as the type of accommodation available with the company's travel packages. A number of enticing photos, directly relevant to their destination of choice, further enhances the user's positive emotional response whereas the interactive Google map below (linked to the page via the Maps Javascript API) allows users to evaluate suitability of accommodation location on offer as described in the User Stories section above. In addition, the map provided offers an insight on other places of interest in and around the city of interest which further enhances the user experience.
* A link to the booking page was included in the navigation section so that users are only one click away from the booking page at all times (to the satisfaction of the site owner). 
* On top of booking page itself, and as required by the site owner, the company price promise displays prominently and unambiguously to reassure users that irrespective of the package they choose they can have peace of mind the deal they are getting is the best available on the market.
* Below the company's price promise users are presented with a stylish booking menu allowing preselection of their travel requirements. This enhances user experience as at the booking stage the website displays only those holiday options suitable for them. This functionality was not further developed (i.e. "book now" button is not active) as a) it was outside the scope of this project, and b) it required a database of actual accommodation packages which BTT as an imaginary company does not have.
* Similar to the enquiry form, book page styling ensures that the online booking facility does not take up the entire width of the page which would make it too big and result in a less positive user experience.
* Footer provides a concise guide to the establishment's opening hours, location, public transport info, social media links and contact details. As such, user experience is further enhanced as their respective requirements are easily met from any web page.

##### Features to be Implemented
* Once user submits travel requirements on the site's book section, website to display holiday options (along with respective price) suitable for them according to city, travel period, size and consistency of travelling party, and type of accommodation required. A "select this package" button next to each suggested option to lead to a secure online payment page.
* Website to support the "POST" method once user fills all sections of the enquiry form leading to submitted information being automatically stored in an appropriate database. 
* Business could partner with other similar travel agencies in order to increase number and types of holiday packages available for sale, thus maximising potential revenue streams for site owner (as potentially travel agency will also be on a commission for each external holiday package sale achieved through its website).

#### Technologies Used
* HTML
* CSS
* Bootstrap (v.4.3.1)
* JavaScript
* jQuery v.3.3.1 (slim) (respective script code obtained through Bootstrap)
* Popper.js v.1.14.7 (script code obtained through Bootstrap)
* [Hover CSS](https://ianlunn.github.io/Hover/) to create the hovering over effects on navigation menu and social media icons
* [Awesome fonts v5.14.0](https://fontawesome.com/)
* [Google fonts](https://fonts.google.com/)
* [Logo Maker](https://logomakr.com/) was used to create the Booterstown Travel "company" logo
* Google Maps JavaScript API was used to set up the cities' maps
* [Email JS](https://www.emailjs.com/) was used to set up the emailing of site owner and auto-response functionalities when user submits an enquiry via the website
* [Multi Device Website Mockup Generator](http://techsini.com/multi-mockup/index.php) was used to create the image of website on different screen sizes on README
* [Material Design's colour tool](https://material.io/resources/color/) was used to assess the accesibility of colour combinations used
* [Github](https://github.com/) and [Gitpod](https://gitpod.io/) were used for website development and version storage
* [Offical W3C HTML validator](https://validator.w3.org/)
* [Jigsaw official CSS validator](https://jigsaw.w3.org/css-validator/)
* [Online JavaScript linter JSHint v.2.12.0](https://jshint.com/)
* All images were reduced in size (“tinified”) without loss of quality using [tinypng](https://tinypng.com/)
* Wireframes were created using [Balsamiq Wireframes](https://balsamiq.com/wireframes/desktop/)

#### Testing
Successfully tested user stories for compliance with requirements as follows:
* 
Automation of tests was not possible on this project. Manual testing confirmed compliance with user stories and intended function of features as follows:
* Clicked on company logo on each web page and navigated directly to the homepage as expected
* HTML coding was fully validated by the the course prescribed [HTML validator](https://validator.w3.org/)
* CSS coding was validated without any errors using the course prescribed [CSS validator](https://jigsaw.w3.org/css-validator/)

##### Interesting bugs or problems worth reporting
* 

#### Deployment
* Logged into my github account and in the [project repository page](https://github.com/dimitridublin/ms_project2), clicked on "settings" (under the repository name) and scrolled down to "GitHub Pages"
* On the "GitHub Pages" section there was a message saying "Pages settings now has its own dedicated tab! Check it out here!". I clicked on it as required and navigated to GitHub's new dedicated pages settings tab
* On the pages settings tab and under "Source" I changed the default "none" to "master" so that my site's deployed code feeds from the my project's master branch 
* I clicked on the "Save" button and a message appeared saying "Your site is ready to be published" along with the respective link
* My site was published at https://dimitridublin.github.io/ms_project2/

#### Credits
##### Content
* Website design was inspired from https://www.crazyegg.com/blog/example-travel-websites/
* Enquiry form code adapted from template in https://bootsnipp.com/snippets/bx65A
* Booking form code adapted from template in https://bbbootstrap.com/snippets/bootstrap-bootstrap-booking-template-free-download-snippets-95433518
* Maps related JS code adapted from https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript

##### Media
Image credits:
All photos taken from Unsplash.com. The photographs used are credited to alevision.co, Constantinos Kollias, Tania Mousinho, sun Ping chieh, Athens at a Glance, Sophie Dupau, HausPhotoMedia, reisetopia, Loes Klinker, Melissa Walker Horn, Dan Farrell, Vali Sachadonig, Diego García, Mark Lawson, Giulia Angotti, Mathew Schwartz, (please see in-code HTML comments for more details).

##### Acknowledgments
I would like to thank my mentor Akshat Garg for his useful tips and comments.

Many thanks to tutoring team for advising on coding issues when things were not working.

I would also like to thank my class peers for their encouragement on the respective Slack channels.

And of course, thanks goes to my wife and children for keeping as quiet as possible while "daddy was coding"!
