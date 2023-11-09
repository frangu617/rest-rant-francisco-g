# Project REST-Rant

## Overview

REST-Rant is an app where users can review restaurants.

The data to be stored in places(restaurants) should have a name(string), city(string), cuisine(string) and a pic (string)

### Technologies Used (so far)

- Node.js
  - Express
  - dotenv

## Table

| Method | Path                    | Purpose                                          |
| :----- | :---------------------- | :----------------------------------------------- |
| GET    | /                       | Home Page                                        |
| GET    | /places                 | Places index page                                |
| POST   | /places                 | Create a new place                               |
| GET    | /places/new             | form page for creating a new place               |
| GET    | /places/:id             | Show the details of one place                    |
| PUT    | /places/:id             | Update the details of one place                  |
| GET    | /places/:id/edit        | Form page for editing an existing place          |
| DELETE | /places/:id             | Delete a place from the database                 |
| POST   | /places/:id/rant        | Create a rant(comment) about a particular place  |
| DELETE | /places/:id/rant/rantId | Delete a rant (comment) about a particular place |
| GET    | \*                      | 404 page (matches any route not defined above)   |
