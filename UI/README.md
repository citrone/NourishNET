# Food Share App - UI

### The App

Now that we have the back end part of the Food Share App implemented we will
start working on the front end (or UI). We will implement CRUD operations and
check the front end perspective.

### Tools Used

There are quite a big number of tools involved when creating a front end project.

#### Typescript

A superset for javascript developed by Microsoft which gives type suport to JavaScript.

#### NodeJS

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that
that lets developers create servers, web apps, command line tools and scripts.

We won't be using NodeJS per se, but we will use the package manager which comes
bundled with NodeJS. The name of the package manager is `npm`.

#### Vite

Vite is a build tool that aims to provide a faster and leaner development experience
for modern web projects. It consists from two parts:

- a dev server -> used for starting the UI part of the application and allows viewing
our front end application in the browser;
- a build tool which will transpile our code from typescript to javascript and bundle
everything together in a package that will be loaded in the browser

#### React

A JavaScript framework that makes UI app implementation easier.

### Scaffold the Application

Now it's time to start writing code but first we will create a skeleton application which
will serve as a starting point for our implementation.

In the old times to create a React application a tool named `create-react-app`. But as I
said previously we will use Vite which will make things easier.

In order to create the skeleton app open a terminal and navigate to the folder where the
back end project is stored. Now create a new folder using the command:

``` bash
mdkir UI && cd UI
```

Now check if the current folder is the new created UI folder. Then issue the command:

``` bash
npm create vite@latest FoodShare -- --template react-ts
```
In order to see the generated running app we have to issue the following command:

```bash
cd FoodShare
npm install
npm run dev
```

### Cleanup of the Generated Project

We will delete almost all of the generated project since we will write our own code.

### Add Modal Dialog Component

Modal dialog will be used to present the forms to add the beneficiary, donors and courier
informations. We will use it accross the application therefore it is a common component.

Dialog component will use the new `dialog` HTML element which helps us creating such components.
Showing and hiding the dialog will be controlled using a state variable in the dialog's parent.
Also, dialog will return it's data to the parent component that is responsible to handle it.

### Add Card Component

Card component will display data in a rectangular area that looks like a card. It has a header
which displays card's title and a body which contains card's content.
