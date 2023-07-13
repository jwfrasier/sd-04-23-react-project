# React Project: Esports Tournament

In this project, you will work as a group to create a web app that displays information about esports and esports tournaments using React, Redux Toolkit, and Supabase. You will use the provided database and .env file to fetch and manipulate data from the Supabase API. You will also use Tailwind CSS to style your components.

## Project Requirements

- You will work in groups of two. Each team will work in one of the two components: **team1** or **team2**. Stay in your folders and do not go in the other folders.
- You will use React hooks to manage the state and lifecycle of your components. You will use `useState`, `useEffect`, and custom hooks as needed.
- You will use Redux Toolkit to create slices, reducers, and actions for your components. You will use either `createApi` or `createAsyncThunk` to make API calls to the Supabase API. You will also use `extraReducers` to handle the different states of your API calls.
- You will use Redux hooks such as `useSelector` and `useDispatch` to access and update the state in your components. You will also use selectors to optimize the performance of your components.
- You will use Tailwind CSS to style your components according to the design specifications. You will use utility classes, custom classes, and responsive breakpoints as needed.
- You will use the `.env` file to store and access the Supabase credentials. Do not expose or share these credentials with anyone else. Please format them in this way. You will need to read VITE documentation on how to access these variables in your application.

```
VITE_DB_PASSWORD=password
VITE_DB_URL=urlfordatabase
```

## Project Goals

The goal of this project is to demonstrate your knowledge and skills in the following areas:

- React: You should be able to create functional components using React hooks and props. You should also be able to map over data and render multiple components dynamically. You should also be able to use controlled forms and handle user input and events.
- State management: You should be able to use Redux Toolkit to create slices, reducers, and actions for your components. You should also be able to use Redux hooks to access and update the state in your components. You should also be able to use selectors to optimize the performance of your components.
- API calls: You should be able to use either `createApi` or `createAsyncThunk` to make API calls to the Supabase API. You should also be able to handle loading, error, and success states in your components. You should also be able to display relevant data from the API in your components.
- Styling: You should be able to use Tailwind CSS to style your components according to the design specifications. You should also be able to make your web app responsive for different screen sizes.

## Project Evaluation

Your project will be evaluated based on the following criteria:

- Functionality: Your web app should work as expected and display the correct data from the Supabase API. Your web app should also have all the required features such as API calls, state management, mapping over data, controlled forms, etc.
- Code quality: Your code should be clear, concise, and consistent. You should follow the best practices for React, Redux Toolkit, and Tailwind CSS. You should also remove any console logs or commented out code before submitting your project.
- Design: Your web app should match the design specifications and look professional and appealing. Your web app should also be responsive for different screen sizes such as tablet, desktop, and mobile.

You can add other packges via npm but you must get them approved first.

## Getting Started

- As the project manager, clone down the project and make a branch for your team. From there you will create seperate branches for each of you to work with.
- `cd` into the proper folder and run `npm i`
- Create a .env file that is outside of the `src` folder. Insert the above `.env` variables with their given values that you will get from Joe.
- Communicate with each other during your entire dev process.
- `npm run dev`

Good luck and have fun! 😊
