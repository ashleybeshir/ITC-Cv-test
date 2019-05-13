Hello this is a project that i did few month ago to test our cv technical test difficulty. Most of the stuff have been stripped away like the css and validation such just incase in the future we want to hire another developer so they cant copy parts of this code to the technical test. 

Currently the css has removed and replace with simple one that works on mobile as well. Validation have been removed and some of the functionality as well. The modal where you click on a job to open it up has been removed as well.

I added the ability to use aws services with this (dynamodb, lambda using node js). You will have to manually change the job service to call the lambda which you can use the nodejs code i posted with this. It uses graphql instead of normal REST api.

#Current Features
Currently you can add jobs to it and it has a simple working pagination system with it and a job searcher. Both component were written quickly as possible so they wont be very perforement as their is calculation for it in rendering code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

