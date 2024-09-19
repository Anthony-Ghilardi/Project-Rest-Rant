# Project REST-Rant

## Description

REST-Rant is a website designed to allow users to create and review restaurants of their choice.

Features
- Splash Page: When you first visit the site, you'll be greeted with a splash page containing a navigation bar with several links to explore the website.

- Places Page: Clicking on the "Places" link in the navigation bar will take you to a list of user-added restaurants. From here, you can further interact with the restaurants by clicking on their names.

- Add a Restaurant: The "Add Place" link in the navigation bar allows you to add a new restaurant of your choice. Once added, other users can view and interact with it.

- Restaurant Reviews: Upon clicking on a restaurant's name, you will be directed to the review section of the website. Here, you can see detailed information about the restaurant as well as reviews from other users.

## Deployment
This site is deployed at [https://rest-rant-code.up.railway.app/]

## Routes

| Method | Path                     | Purpose                                          |
|--------|--------------------------|--------------------------------------------------|
| GET    | /                        | Home page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above)   |

## Mock restaurant data

Places

| Field    | Type      |
|----------|-----------|
| id       | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |

Rants 

| Field      | Type                     |
|------------|--------------------------|
| id         | Object ID                |
| place_id   | ref(places) Object_Id    |
| rant       | Boolean                  |
| rating     | Number                   |
| comment    | String                   |
| reviewer   | String                   |

## Future Plans
- User Authentification
- Admin features such as deletion and editing tools.