# BfE test Project
Hi. I'm James and this is my submission for the Bridges for Enterprise Assessment. I am using the Full Stack instructions.
Thank you for taking the time to review my work, any feedback at all would be greatly appreciated.


github repo - https://github.com/jamrod/BfE_phone_directory


### Frameworks and Versions
* Backend
    * Django v 3.2.5
    * Django REST Framework v 3.12.4
    * Python v 3.8.10
    * Pip v 20.0.2
* Database - Postgres v 12.7
* Frontend 
    * React v 17.0.2
    * Node v 12.19.1
    * Npm 6.14.8


## Deployment Instructions

Unzip archive to desired local directory
Open a terminal window and navigate to the directory the archive was extracted to
Initiate Postgres Database
login to the psql database server, if configure ‘psql’ will get there or ‘sudo -u postgres psql’ works on my Ubuntu build, alternately ‘psql -U postgres’ could also work
create the database by typing “CREATE DATABASE phone_directory;”
create user by typing “CREATE USER operator WITH PASSWORD ‘speed-dial;”
link the database to the user by typing “GRANT ALL PRIVILEGES ON DATABASE phone_directory TO operator;”
exit by typing “/q”
cd into ‘backend’ directory
Activate a virtual environment, I use venv, run the following commands to replicate
python -m venv .env
source .env/bin/activate
Install requirements by running “python -m pip install -r requirements.txt”
Run migrations with command, “python manage.py migrate”
Start backend server by running “python manage.py renserver”
Open a second terminal window or tab
cd into the ‘frontend/phone-directory’ directory
Set Node version with the following two commands
‘nvm install 12.19.1’
‘nvm use 12.19.1’
Install dependencies by running ‘npm install’
Start frontend by running ‘npm run start’
To avoid Cors issues I used the Chrome Browser with the extension ‘Moesif Origin & CORS Changer’ installed and activated to test the application
In Chrome, navigate to localhost:3000 to view the application
Click on the ‘Add Contacts’ button to access the form to add contacts
Upload a few contacts and then view the results by clicking the ‘Show Contacts’ button



## Task Instructions
In this task, you are asked to create a simple online phone directory application to allow users to list and search through a list of phone contacts
### Exercise Outline
#### Track 1: Full Stack ( React + Django )
You need to create a single page application which allows users to
1. View all contacts in the directory
2. Search through the contacts
3. Add new contacts to the directory
* The web application should be built in React.
* The application should make appropriate REST API calls to the django backend to
perform the corresponding actions.
* The flow, UI, UX and styling of the application is left up to you. Although there are no
marks for these, an easy to use application is always preferred.


### Planning


#### Backend
* Use Django REST Framework
* POSTGRES Database
    * phone_directory
* Use generic views
* Models
    * Contact
        * first_name
        * last_name
        * phone_number
        * email
        * notes

#### Frontend
* create-react-app
* Components
    * Header
    * Footer
    * Main
        * Controls
            * Search
        * List
            * Contact Card
        * Add
