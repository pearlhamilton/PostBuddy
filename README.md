# PostBuddy
by Pearl and Elwin

***

## Installation and Usage

### Installation

- Create new directory and fork/clone the repo into it
- `code .` to open all files in VS Code or similar
- `cd` into the server directory and `docker-compose up` to start the server/databse containers (sorry, we haven't made any scripts yet!)

### Usage

- To start the client, open the `index.html` file
- To access the server, visit `localhost:3000`
- To enter a mongo shell: `docker exec -it server_db_1 -u pearlAndElwin -p password`
- To shut everything down and exit: `docker-compose down --remove-orphans --volumes`

***

## Changelog

See commit history for full changelog.

***

## Bugs

- [x] No redirection/unique path for revisiting the post (to be implemented)
- [x] Sorry, there's no styling!

### Miscellaneous

- [ ] Refactor code as necessary
    - We didn't get round to doing this

***

## Wins and challenges

### Wins

- It works! (mostly)

### Challenges

- Ran out of time
