# Udacity Second Project: Readable

This is the second project of Udacity's React course. This project is a content and comment web app.  
Users can: 

- post content to predifined categories
- comment on their posts and other users' posts
- vote on posts and comments
- edit and delete posts and comments

The project is devided into two main folders:

- `frontend/`
- `api-server/`

The first as the name suggests, is about the client side where the user going to interact with the web site.  
In that folder we will have everything related to React and Redux.

The second folder, is provided by the course and will take of persisting the data to the server.

## Installation

Go under the two main directories:

- `api-server/`
- `frontend`

and run `yarn install` or `npm install`.

## Run

Start by running the server which is going under `api-server/` and run either `npm start` or `yarn start`.  
Go under `frontend/` and do the same thing.


## Main URLs


### /

When the user goes to the root URL `/`, the app will check the store for a logged user.  
If none was found, the user will get redirected to `/login` else to `/feed` where we find all posts.


### /login

This is login box where you enter just a username.  
You can have an authentication workflow where you store a token from a server and save it in the store with userid to issue all queries to server.

The `username` will be used to create new posts or to comment on posts.

### /feed

In the feed page we have an _Action Bar_ at the top, from where we can:

- logout
- create a post
- check available categories (in left side menu)
- access categories pages (from categories list)

We have `PostCard`s which contains buttons to:

- upvote
- downvote
- edit (if it's yours)
- delete (same as edit xD)

The `PostCard` also contains information:

- title
- author
- date
- catgory
- votescore
- nbr comments

All the posts are fetched by dispatching an action to the store.


I have limited the number of posts to three per page, therefore, we have two buttons at the bottom to move between pages.  
When moving through pages, a query string will be appended to the url: `?page=<nbr-page>`

Also we have a sort box, which will sort posts by:

- best votescore (default)
- worst votescore
- recent creation
- old creation

When changing sort option, the URL will also change to:

- `/feed/best` or just `/feed`
- `/feed/worst`
- `/feed/newest`
- `/feed/oldest`


### /c/:category


This is the same as `/feed` but only posts related to the `:category` will be displayed.


### /c/:category/:post_id


This is the post details where we can check the content of the post and comment on it.  
Also, we can sort the comments, and the query string `?sort=<sort-method>` will be appended to the URL.

If the comment belong to the logged user, he can delete it or edit it.

