# Social-Network-API

## Description
A RESTful API for a social media app. Built with Express, Mongoose, and MongoDB. All the backend functions work next step would be to connect them to a front end site or app.

## User Story
**As a** social media startup, **I want** an API for my social network that uses a NoSQL database **so that** my website can handle large amounts of unstructured data.

## Usage
1. Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))
2. Clone the repo
3. Install dependencies with `npm -i`
4. Run `npm start` to run the server and make the API live
5. Use your browser or an app like [Insomnia](https://insomnia.rest/) to test the REST API.

## Models
- User
- Thought
- Reaction (used as a subdocument in Thought)

## Endpoints
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:userId`
- Update a user:        `PUT /api/users/:userId`
- Delete a user:        `DELETE /api/users/:userId`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:thoughtsId`
- Update a thought:     `PUT /api/thoughts/:thoughtsId`
- Delete a thought:     `DELETE /api/thoughts/:thoughtsId`

**Reaction**
- Add a reaction:       `POST /api/thoughts/:thoughtId/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:reactionId/reactions`

## Packages
- express
- moment
- mongoose

## Video Demo
[here](https://drive.google.com/file/d/1OkfUb8XL84Tg407ht3J3O7erUkrHnVqf/view) a live explanation of the backend
## Questions
Any questions feel free to contact me vial email [gusmuratalla@gmail.com](mailto:gusmuratalla@gmail.com) or reach out on [Github](https://www.github.com/teku-guy).
