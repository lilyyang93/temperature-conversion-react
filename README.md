# React: Temperature Conversion

For this challenge, we're going to ask you to convert our existing React project from class-based components to functional components, to gain a better understanding about the React Component Lifecycle as well as understanding how to work with the `useEffect()` hook. This will also give you some more practice with understanding class-based component syntax.

# Initial Set-up

This project utilizes the OpenWeather API. To complete this challenge, you'll first need to obtain your own personal API key. To do so, sign up for a free account here: [OpenWeather API](https://home.openweathermap.org/users/sign_up) 

Once you've signed up, you should be able to find your API key here: [API key](https://home.openweathermap.org/api_keys)

NOTE: It will take a few minutes for this key to become active!

Copy your API key value and replace the value of `myOpenWeatherApiKey` at the top of App.js, with your key value.

Go through your usual set-up commands (`npm install` and `npm run dev`) to get the project running.

# Initial Challenge

Your first task is to look through the provided code and fully understand how the application is working. If you don't understand something, make sure you ask questions! You should ultimately understand what the lifecycle methods are doing with-in this app.

# Main Challenge

Now that you understand how the application works with the lifecycle methods, it's time for you to covert what we have from class-based components to function based components. The main thing you'll have to work with is the [`useEffect()`](https://reactjs.org/docs/hooks-effect.html) hook, to replace the class component life-cycle methods that we've implemented.

The four components that need to be refactored are:
- App.js
- components/ErrorDisplay.js
- components/InputZipCode.js
- components/TemperatureDisplay.js

IMPORTANT: You should strongly consider refactoring the code WITHOUT the api call in place initially. It's possible to accidentally get into an infinite loop when using life-cycle methods / useEffect(), so we recommend adding in dummy data and console.log() calls initially to verify the refactor is successful, before using the api call. The OpenWeather API has limits on the number of requests you can make per minute and per day, so if you get into an infinite loop with your api call in place, you'll likely be banned from using the service temporarily for exceeding your limit!!

Once your refactor is complete, make sure everything works correctly as it did before!
