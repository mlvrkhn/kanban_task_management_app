# Kanban - japanese task management tool
<img src="./public/../kan-ban-san/public/screenshoot.png" alt="screenshoot" width="550px"/>  

## Project description

Build a task managing tool as an implementation of KanBan, the japanese scheduling system for lean management. Provide following features: add and move cards with tasks between columns, set maximum limits onto columns. Use local storage as a database to store planned tasks. Add user interface.

## Project Difficilties

- receive and validate user input, which is afterwards stored in browsers Local Storage,
- set automatic limits for number of tasks in colum,
- add error handling and present it to the user,
- state management with React Hooks.

## My solution

With the useage of modern React tools like hooks (useContext, useRef, useState) you are able to organize your workflow using the App, that will store you data in your browser.  
```const [getItem, setItem] = useStorage('name');```

## Notable features

- useContext hook to handle some data-flow within an app,
- take advantage of ES-lint tool and other libraries like Babel or Webpack,
- create custom hook that handles communication between the App and Local Storage

## Code samples  
<img src="./public/../kan-ban-san/public/hooks-ls.png" alt="localStorage" width="550px"/>
<img src="./public/../kan-ban-san/public/hooks-movetask.png" alt="moveTask" width="550px"/>  