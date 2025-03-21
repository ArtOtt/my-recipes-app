# Recipes App 

This is the final project to apply the knowledge gained from the Coding Bootcamp.

## Features

- Display recipes
- Mark favorites
- Show favorite recipes
- Filter by categories
- Login
- Add recipes
- ...  

## Project Setup



### Step 1. Clone the repository  
Run the following command to clone the repository:  
```sh
git clone git@github.com:ArtOtt/my-recipes-app recipes-app
```

### Step 2. Install dependencies  
Navigate to the project folder and install the dependencies: 
```sh
cd recipes-app
npm install
```
### Step 3. Create the `.env` file  
Create a new `.env` file in the project folder by running:

```sh
touch .env
```
### Step 4. Add the following content to the `.env` file: 

```sh
VITE_API_URL=https://24-mai-recipes.api.cbe.uber.space/
```
### Step 5. Start the app in development mode  
Run the following command to start the app in development mode:  

```sh
npm run dev
```
### Step 6. (Optional to add recipes)
Log in with the following username and password: 
Username: 

```sh
Antonette
```
Password:
```sh
test
```


------------------------------------
------------------------------------
### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
