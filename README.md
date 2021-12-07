
# Stage 1 - Getting Started - Setting up the Project
  cd <project directory>
  npm install
  
# Choose the necessary installation for your development mode
  npm i -D @babel/core @babel/preset-env babel-loader
  
  npm i -D style-loader node-sass css-loader sass-loader
  
  npm i -D clean-webpack-plugin
  
  npm i -D html-webpack-plugin
  
  npm i -D mini-css-extract-plugin
  
  npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
  
# Stage 2 - Setting up the API

- Geoname API 
- Pixaby API 
- Weatherbit API 

# Step 3: Environment Variables
    Use npm to install the dotenv package - npm install dotenv This will allow us to use environment variables we set in a new file
    Create a new .env file in the root of your project.
    Fill the .env file with your API keys like this:
      API_KEY=**************************
  
 # Step 4: Install Jest to test & Service Workers 
  
 Then run: 
 npm run build-prod 
 npm run start 

