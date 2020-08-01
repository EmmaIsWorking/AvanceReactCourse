![https://emmaisworking.dev/static/images/GitHubCover.png](https://emmaisworking.dev/static/images/GitHubCover.png)

- [Description](#description)
  - [Steps to start our project:](#steps-to-start-our-project)
  - [React and Babel installation](#react-and-babel-installation)
- [Preview](#preview)
- [Notes](#notes)

## Description
Create an application to upload and share pet photos using Webpack, GraphQL, React Hooks, React Router, SEO and PWAs.

### Steps to start our project:

- Step 1: We are going to clone the repository from [advamced react Platzi course](https: github.com/midudev/course-platzi-react- advanced) using `git clone URL_DEL_REPO` on our console.
- Step 2: We are going to install webpack and webpack-cli as development dependencies with: npm i webpack wepack-cli --save-dev`.
- Step 3: We will create a folder called `src` and inside it a file`index.js` in which we will only put a `console.log ('We start the course!')`.
- Step 4: We will create in the root of our project a file `webpack.config.js` which will have all the webpack configuration
- Step 5: We will install `html-webpack-plugin` with: npm and html-webpack-plugin --save-dev`.
- Step 6: We will install `webpack-dev-server` with: npm and webpack-dev-server --save-dev`.
- Step 7: We will add a new script called `dev`:` "dev": "webpack-dev-server" `.

```
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin()
        ]
}
```

### React and Babel installation
In this class we are going to configure React by installing the dependencies npm i react react-dom and Babel to be able to transpile jsx code into JavaScript Vanilla with: npm `i @ babel / core @ babel / preset-env babel-loader @ babel / preset-react - -save-dev`
Now we will add the following to our webpack.config.js:
```
// webpack.config.js

{/*...*/}
module.exports = {
        {/*...*/}
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: {
                                        loader: 'babel-loader',
                                        options: {
                                                presets: [
                                                        '@babel/preset-env',
                                                        '@babel/preset-react'
                                                ]
                                        }
                                }
                        }
                ]
        }
}

```

### 
## Preview
![Petgram](https://static.platzi.com/media/landing-projects/Proyecto-react-avanzado.png)

## Notes
Notion [link](https://www.notion.so/React-Avanzado-c1b3c554f0b046ca93667476bcf73d36)
