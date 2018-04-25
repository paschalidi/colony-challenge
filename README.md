# Getting Started

##### Run the application 
Instruction for clonning, installing dependencies and running the app locally.
```
 git clone https://github.com/paschalidi/colony-challenge.git <your-folder-name>
 cd <your-folder-name>
 npm i
 npm start
```


# Run Tests
To run the test and watch them.
```
 npm test 
```


# Comments on Code Implementation
To implement the code I am using create-react-app accombanied with Redux for the state managment of the application.


## Project File Structure

- I am following the default file structure that create-react-app suggests. On top of that because I am also using Redux there was the need of a store creation. The store exists on the src/store directory.

##### Comments on the store architecture

- In my opinion in bigger applications even when using Redux there might be the need for creating more than one stores. And this is the approach I am following here. I seperate the store with its specific actions and actionTypes.


## Component File Architecture
##### On src/components directory
- Each component has its own directory with its tests and styling.

##### On src/components/{{COMPONENT_NAME}}/index.js directory
- Here one thing that might be interesting to note is that from taste perspective I prefer having the .css file written inside the component. The idea is that I prefer having less windows open while working. Just this approach keeps me more focused.

##### On src/components/{{COMPONENT_NAME}}/tests directory
- I used Jest for testing.
- Snapshots is included.
- I tested only bussiness logic and not the functions that exists in the src/store/actions.js file. I find it a bit of an overload to test the simple functions there in this application.

##### For keystrokes
- 'o' will toggle the popover
- arrows will navigate you around the avatars
- 'enter' will make the selection of the next avatar

This is all. I hope you enjoying my code style.
The challenge was really fun and the explanation of the challenge itself very clear.
I must say I really enjoyed working on it and I am waiting for you to give me your feedback.


# Comments on the code challenge Description
You will find my comments with **bold**.

## Colors and measurements (we won't count exact pixels):

- Avatar image
  - height: 60px, width: 60px, perfect circles
  - border for initial image: hover, focus 1px, color: rgb(155, 160, 163)
  - avatar list images:
    - border on hover: 3px border, color rgb(155, 160, 163);
    - overlay on hover: color rgb(122, 161, 178), opacity: 20%
    - border spinner, currently active avatar: color: rgb(122, 161, 178)
    - margin between two avatars: 14px
- Popover
  -  **width: 280px : Given that the whole popover is 280px this is not gonna work. As (60px) * 4 + (14px) * 5 = 310px and not 280px**
  - height: variable
  - rounded corners of 2px radius
  - background: rgb(44, 48, 51)
  - drop shadow: color: rgb(102, 102, 102), size 2px, blur 10px
  - padding: 14px
  - triangle: equilateral, 8px each side
- "Choose your avatar" title
  - font: 'Source Sans Pro' (use the google font)
  - color: rgb(249, 249, 249)
  - size: 16px
  - margin top and bottom: 14px

## How to submit your results:

- The results have to be shared as a git repository
- You can either create a private repository on your favourite git hosting provider (github, gitlab, bitbucket) and then give access to
  -  **chris@colony.io: Github would say these are not existant accounts.**
  -  **raul@colony.io: Github would say these are not existant accounts.**
- Or create a public repository and send the link to both of these email addresses
- Or send the whole repository, zipped (including the .git directory) to both of these email addresses
- Important note: please only submit your work when it is completely done!

