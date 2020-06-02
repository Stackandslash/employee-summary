# Employee Summary Generator

#### Description
A generator for for creating a set of cards with team member details, using the terminal.

![image one](./assets/image1.PNG)

## Table of Contents
#### [Details](#details)
#### [Images](#images)
#### [Tests](#tests)

#### [Video Demo](https://drive.google.com/file/d/1ZWRNzoX7zOZPUuzXpWH7Gb-SCgHHjI38/view?usp=sharing) (also available in repo)

### Details
This is a basic team card generator, made to create a set of cards for team members from terminal input. The displayed results are tweaked for color, content, and spacing, but largely determined by the existing htmlRender file. The functionality is brought by the library files for the Employee class and relevant subclasses, and the main app.js file.

* Presently, the user is prevented from generating a card set without a manager, or with more than one, as the desired results are defined as having one, and only one. 

* There's not currently any functionality that keeps the user from entering invalid information in a field. Future iterations can address this, or remove the console functionality entirely in favor of a full web-based experience, leveraging appropriate form elements to this effect.

* The user-facing instructions in the prompts assume this program is being used by the manager themselves. Delegation may lead to unintended consequences.


### Issues
The terminal runs in relatively restricted ways, meaning that, so long as you follow the directed prompts, you should end up with a usable set of cards, though results can still be compromised with sufficient thought or effort.

* The number of, or even presence of, Engineers or Interns is not restricted. You can have a team of one, or as many as you please, so long as they fit the rendered area.

* Text content is not restricted. This could be troublesome for integrity, so exercise caution when in use.
