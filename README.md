# Patient Registration

This site was built using React for the front-end and Node for the back-end.  It also use AWS DynamoDB and S3 for database management.

Production Link: [https://patient-registration.netlify.app/](https://patient-registration.netlify.app/)

## Getting Started

After cloning the repo, you can run:

`npm install`

then

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Admin Login

To login as an admin, use the following credentials:

username: `admin`
password: `done!`

## NOTE

Inorder to connect to the database, you will need to have the following credientials stored in a `.env` file

`
REACT_APP_S3_BUCKET=
REACT_APP_REGION=us-east-1
REACT_APP_ACCESS_KEY_ID=
REACT_APP_SECRET_ACCESS_KEY=
`

## Deployment

Production and QA environmens are deployed using [Netlify](https://www.netlify.com/)

## Screenshots:

<img width="1791" alt="Register" src="https://user-images.githubusercontent.com/25600140/178057893-311c9431-95dc-4827-b93c-6195d3a8a2dd.png">

<img width="1787" alt="Login" src="https://user-images.githubusercontent.com/25600140/178057904-3fcc6831-ab49-47b5-adeb-a95af18786f7.png">

<img width="1789" alt="Patients" src="https://user-images.githubusercontent.com/25600140/178067113-50dd3d03-838b-4862-ac37-232893b79687.png">
