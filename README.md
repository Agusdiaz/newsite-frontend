# Introduction 🤝
The aim of this project is to improve my front-end abilities. So don't focus on the content of the website, but on the design and layout. I am using [MOCKAPI]() to simulate a back-end service.

The main technologies that I am using are: [React](https://es.react.dev/), [Typescript](https://www.typescriptlang.org/), HTML and [SCSS](https://sass-lang.com/). Every component is made from scratch, without the help of any UI library. I developed a dark and light theme. Also, the whole website is 100% responsive.
# Getting Started 🚀
1. Click the _"Clone"_ button to copy the link (HTTPS).
2. _git clone link_you_just_copied_.
3. _npm install_ (to install all the neccesary dependencies).
4. _npm start_ (to start running).

**_NOTE:_** Before running, you MUST have __.env__ file on your root folder, to set your environment variables. Once created, add the following:
```
REACT_APP_API_BACKEND=https://60b4f09dfe923b0017c832e4.mockapi.io
```
# About the Structure 🛠️
Below is a brief explanation of what is inside each folder:
- **public:** contains the HTML structure, the name and logo of the website.
- **src:** it is the folder that contains the source code of the app.
    - **__tests__:** where all the unit tests are stored.
    - **assets:** everything that has to do with images, svgs and icons.
    - **components:** React components that are going to be reused in other components/views.
    - **context:** stores all the React context files that are used across multiple pages, like a global data store.
    - **hooks:** contains custom hooks, to use them in other components/views.
    - **services:** the connection with the back-end service, through endpoints.
    - **styles:** where is the global style of the website.
    - **utils:** utility functions (such as formatters) that are used across multiple components/views.
    - **views:** contains higher-level components responsible for rendering specific pages or sections of the app.

# Next Steps 🔜
As mentioned before, MOCKAPI is the platform I am using to generate all the data. That is why, in the future, I will develop a full back-end service to support this website.