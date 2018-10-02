# Bollitore 

**React JS minimal boilerplate**  based on `rect-create-app`

___________
[![Build Status](https://travis-ci.org/fifthbeat/bollitore.svg?branch=master)](https://travis-ci.org/fifthbeat/bollitore)
[![BCH compliance](https://bettercodehub.com/edge/badge/fifthbeat/bollitore?branch=master)](https://bettercodehub.com/)
[![CodeFactor](https://www.codefactor.io/repository/github/fifthbeat/bollitore/badge)](https://www.codefactor.io/repository/github/fifthbeat/bollitore)
_______
## Intro
This architecture is designed for agencies, the boilerplate provides a fast and reliable base on which build medium size webapps.   

## What you get 

### Folder structure 
Here the structure of the global project
```
.
├── .storybook                    # Contains storybook config
├── docs                          # 
│   └── entityes                  # Contains project entity models
├── internals                     # Internal scripts
├── public                        # Webpack base 
├── src                           
│   ├── components                # Components 
│   |   └── component             # Component folder
│   |       ├── index.js
│   |       └── styles.js
│   ├── containers                # Redux connected components
│   ├── stores                    # Entity models
│   ├── utils                     # Useful functions
│   ├── constants                 # Global constants
│   └── global-styles.js          # CSS appliable to all project 
└── stories                       # Component's docs
```

### Commands 

- Development
  - Start development env
    ```shell
    $ yarn start
    ```

  - Start documentation development env
    ```shell
    $ yarn start:docs
    ```

- Building
  - Build the project for release
    ```shell
    $ yarn build
    ```

  - Build the docs for release
    ```shell
    $ yarn build:docs
    ```

- Generators
  - Generates a standard component in `src/components` and, optional, add the component to storybook providing specs and a test env. 
    ```shell
    $ yarn generate component
    ```

  - Redux connected component
    ```shell
    $ yarn generate container
    ```

- Linting
  ```shell
  $ yarn lint
  ```

## Requirements

- Node >= 10.1  
- [React create app](https://www.npmjs.com/package/create-react-app) >= 1.5.2
- [Storybook](https://storybook.js.org/) CLI >= 2.X

## Acknowledge

- Nicola Bertelloni – https://github.com/wanbinkimoon