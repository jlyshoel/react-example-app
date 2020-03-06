# How to setup your project with a git submodule

This is a quick overview on how to use gitsubmodule in a React project. This is a simple way of sharing code and configuration between multiple apps, which still lets you keep working with a [GitHub Flow](https://guides.github.com/introduction/flow/) workflow.

When configuring your new app / repo, you can select one directory (does't have to be on root level) that you want to configure to get content from a submodule. 

For this guide, we'll use /src/shared

In this example, we'll be using two repos. One [ExampleApp](https://github.com/jlyshoel/react-example-app) and one [shared submodule](https://github.com/jlyshoel/react-example-submodule) 


## 1. Configure

When configuring your ExampleApp, run the command below. 

On the command line: 
```
cd src
git submodule add https://github.com/jlyshoel/react-example-submodule shared
```

## 2. How to relate main repo with submodule

When doing a branch, fetch/pull inside the submodule, you'll be asked to make a commit to your main repo. This will specify which commit, from the submodule, should be used with your current commit in the main repo. 

![Commit from main repo](docs/mainrepocommit.png)

## 3. Working with content in submodules

Checking out branches, commit, pull/push are mostly the same as it is for normal git, with exception that you have to be in the submodule directory.


**Checkout new branch:**
```
cd src/shared
git checkout -b my_branch
```

**Checkout existing branch**
```
cd src/shared
git fetch
git checkout someones_branch
```

**Commit**

Example for committing all changes

```
cd src/shared
git add .
git commit
```


**Push**

```
cd src/shared
git push
```

**Pull**

```
cd src/shared
git pull
```


## 4. Running ExampleApp

If you want to to run the example locally, check out the example git repo and run **npm start*.

The ExapmleApp is a simple React app, fetching some content from the submodule.

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
