# Ticket Wizard


Ticket Wizard is a website used to search for and compare plane tickets to look for the best price.


## Installation and starting the website locally


First, clone the github repository to your local machine from https://github.com/rydaws/mighty-ducks.

After cloning, open the repository in VSCode and open a terminal and use ```cd mighty-ducks``` to get into the correct folder.

Once you are in the second mighty-ducks folder, use ```npm install``` to install dependencies.

Then ```cd ..``` and ```cd server``` to the server folder and use ```npm install``` again to install dependencies for the server, then ```node server.js``` to start the MongoDB database.

Finally, ```cd ..``` back, then ```cd mighty-ducks``` to the second mighty-ducks folder and use ```npm start``` to locally start the website, making sure to type ```y``` to allow the website to start on a different port.


## Usage


The website can be used to find plane tickets based on IATA codes in the United States.

Input the IATA code for the airport you are departing from, then the code for the airport you would like to travel to and click 'Go'.

The carousel on the homepage can also be used to find the most popular flights departing from a particular city.

You are also able to signup for an account or login into an account using the buttons at the top right of a webpage as well as logging out after already logging in.

Once logged in, you can favorite a certain ticket and view favorited tickets on the 'Favorites' page to come back to them at a later time.

