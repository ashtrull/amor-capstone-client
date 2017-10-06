[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# AMORidarity
This AMORidarity app was developed through the Web Development Immersive at General Assembly. The site uses HTML, CSS, Javascript, and Ruby on Rails as well as Bootstrap and Handlebars frameworks to create a resource app that helps community organizers match solidarity requests with solidarity offers.


## My Goals
  - Get experience making tools that help community orgs and grassroots projects
  - Practice producing something for a client (at this point just a demo)
  - Create an app that matches resources offered and resources requested in the migrant justice movement
  - Build the foundations of an app that could be scaled up for community use (start with admin use)
  
## AMOR’s needs/goals:
  - We want a better way to store and organize information of members (without google)
  - We want to be able to collect money and do fundraising
  - We want to encourage people to attend actions and turn out as a community in resistance to oppressive policies and programs
  - We want to match resources around legal support, housing, mental health
  - We want to be able to track other skills offered outside of the three we are focusing on right now
  - We want an admin calendar where we can track meetings, home visits, and actions

## Development Process
The app was developed in multiple phases:

1. Wire-framing and planning
  - I designed a couple sketch wireframes with pen and paper to identify what the user interface would generally look like
  - I drafted user stories to think about what users would want and need to be able to do in order for the game to be functional and enjoyable.
      As an admin user: 
        - I want to be able to collect requests from community members looking for support so that I can help find what they need
        - I want to be able to see how many pending requests we have so I know our workflow
        - I want to be able to field requests of users and find corresponding resource offers in order to meet peoples’ needs
        - I want to be able to flag requests that have been matched or if they are awaiting a match to coordinate the flow of connections
        - I want to be able to see contact info for people making requests and offers so that I can facilitate introductions
        - I want to be able to build community and connection as a movement instead of feeling like gate-keepers

      As a user:
        - I want to be able to submit a request for my needs for support
        - I want to be able to ensure confidentiality so that my information isn’t public
        - I want to get a response message that my request has been received and is being processed
        - I want to be able to get a sense of community so that I do not feel alone

  - I drew a logic map of the different elements of my app using an ERD diagram to help me identify the attributes of each object as well as their relationships to each other.

  [![ERD Diagram](https://i.imgur.com/Kwy61iX.png?1)]
  
  - I developed some wireframes using wirframe.cc:
  
  ![Wireframe 1] (https://wireframe.cc/pro/pp/a2fb21cc6113888)
  ![Wireframe 2] (https://wireframe.cc/pro/pp/a2fb21cc6113888#aaqyaw8u)
  ![Wireframe 3] (https://wireframe.cc/pro/pp/a2fb21cc6113888#4kt66tmk)
  ![Wireframe 4] (https://wireframe.cc/pro/pp/a2fb21cc6113888#g8favoaw)
  
  

2. Back-end Development
  - Built scaffold for all the different objects in the app: users, requests, offers, and matches. The scaffold includes building a route, controller, model, and serializer for each.
  - Customized tables/schema to get the right combination of information in each table of the database.
  - Built in has_many, has_one, and belongs_to relationships
  - Ran curl scripts on all CRUD actions to make sure the server is working. First I rant them on the local server and then switched to the remote heroku server.

3. Front-end Development
  - Built basic HTML skeleton for the application
  - Add in forms and fields for user authentication: sign-up, sign-in, sign out, change password, and sign-in prompter
  - Add in forms, fields, and data for requesting and displaying data from the plants and gardens table: show all plants, all plants table, show my garden, add to garden, remove from garden.
  - Design basic CSS with simple color-scheme and layout
  - Built JavaScript logic that will take information that is collected through user actions and forms and use that information to communicate with the API. This include creating functions for sign-up, sign-in, sign-out, change password, start garden, get all plants, add plant to garden, remove plant from garden, and show my garden.
  - Developed each function one-by-one to first build a click handler in index.js, then the events.js response to the click handler, then the ajax query in my api.js file, and then finally the user interface function in my ui.js This was the most challenging part for me.
  - Used handlebars to display information queried from the API on the HTML page.
  - Tried and checked each of the steps until my HTML, JavaScript, and Ruby/Rails  were working smoothly together, which took multiple attempts on each one.

## Challenges
  - I originally tried to do this project in React.js but decided that it was not the right front-end tool for me to use at thsi time due to time constraints and my limited experience so far. Looking forward to trying to build this in React in the future
  - I tried to implement CSS grid but faced some challenges getting it set up because I had already designed a lot of my html for Bootstrap so I did not have full control over the formatting.


## Unsolved Problems
The minimum structure of the is mostly complete but still needs work on a few features:
1. Fix admin panel
  - This feature is currently not functioning, but when functional will allow admin users to see all the requests and offers as well as make matches between the two.
2. Display on show-offers and show-requests
  - I would like the show-offers and show-requests tables to show more useful information like the user's name and contact info, instead of their user-id. I need to change the schema in order to do this.

## Hopes for the Future
Looking forward, I am really excited to continue to work on this project to add the following features:
1. More admin capabilities: being able to see total number of requests and offers, mark status of each of them (matched or unmatched), query for just unmatched offers and requests.
2. Add some sort of visual way to represent community and connection: having a counter for number of solidarity connections made, show a map that vaguely represents the neighborhoods members live in
3. More security/privacy features
4. A specific map showing membership for organizers
