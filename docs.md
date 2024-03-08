Why use React 

React is a powerful front-end framework known for its declarative, component-based architecture. It enhances user interface development by efficiently managing state, rendering updates, and promoting code reusability. Its virtual DOM and unidirectional data flow contribute to responsive and scalable web applications, making it a popular choice for building dynamic, interactive user interfaces.




// App.js Documentation
/**
 * @overview `App.js` serves as the main entry point for the React application.
 * It orchestrates the rendering of different components based on the authentication status,
 * controlling the flow between the login and appointment views.
 *
 * @keyResponsibilities
 * - Manages application state using the `useState` hook to track the authentication token.
 * - Conditionally renders the `Login` or `Appointment` component based on the presence of an authentication token.
 * - Controls the authentication flow, transitioning between the login and appointment views.
 *
 * @codeStructure
 * ```jsx
 * // App.js
 * import React, { useState } from 'react';
 *
 * import Login from "./components/login/Index";
 * import Appointment from "./components/appointments/Index";
 *
 * function App() {
 *   const [token, setToken] = useState('');
 *
 *   return (
 *     <div className="App">
 *       {!token ? <Login setToken={setToken} /> : <Appointment token={token} setToken={setToken} />}
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 *
 * @exampleUsage
 * 1. **Initial State:**
 *    - When the application loads, the initial state is set with an empty authentication token.
 * 
 * 2. **Login View:**
 *    - If no authentication token is present (`!token`), the `Login` component is rendered, allowing the user to log in.
 * 
 * 3. **Appointment View:**
 *    - Once authenticated (presence of a token), the `Appointment` component is rendered, providing access to appointment-related features.
 *
 * @conclusion
 * `App.js` plays a pivotal role in managing the application's authentication flow and determining which component to render
 * based on the presence of an authentication token. This modular approach enhances the overall organization and maintainability
 * of the React application.
 */


/**  Index File
 * @file App.js
 * @description Main component managing the application's state and rendering logic.
 * @module App
 */

 /**
 * @function App
 * @description Main functional component representing the entire application.
 * @returns {JSX.Element} JSX element representing the application UI.
 */


/**
 * @component AppointmentList
 * @description React component responsible for displaying a table of appointments.
 * @props
 * - `token`: Authentication token for API access.
 * - `setToken`: Callback function to update the authentication token.
 * @state
 * - `appointments`: Array of appointment data fetched from the API.
 * @effects
 * - Fetches appointment data from the API using the authentication token.
 * - Updates the state with the fetched appointment data.
 * - Provides a logout button functionality to log the user out.
 */

 /**
 * @component Login
 * @description React component for the login screen.
 * @props
 * - `setToken`: Callback function to update the authentication token.
 * @state
 * - `username`: State variable for the input field value of the username.
 * - `password`: State variable for the input field value of the password.
 * @effects
 * - Handles the form submission by making a POST request to the login API.
 * - Updates the authentication token using the provided callback function.
 */

