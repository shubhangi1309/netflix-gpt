# Netflix GPT by Shubhangi Modi, an excellent React Developer

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login form
- Sign up form
- Form validation
- useRef hook
- Firebase setup
- Deploying our app to production
- Create Sign up user account
- Implement Sign In user Api
- Created Redux store with userSlice
- Implemented Sign out
- Update Profile ADD DISPLAY NAME ( MANAGE USERS > update user profile)
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect/ browse to Login Page & vice-versa.
- unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file. 55/100
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom Hook for Now playing movies
- Create Movie Slice
- update store with movies data
- Planning for mainContainer & secondary container
- fetch data for trailer video 
- update store with trailer video 56/100
- embed the youtube video and make it autoplay & mute
- tailwind classes to make main container look awesome
- Build secondary component 57/100
- build movie list
- build movie card
- TMDB Image CDN URL
- made the browse page amazing with Tailwaind CSS
- usePopularMovies custom hook
- GPT search feature 58/100
- GPT SEARCH BAR 
- MULTI language feature in our app 59/100
- integrate GPT API (USING open AI)
- Gpt search OPEN AI API key
- Gpt search API call
- fetched gpt movie suggestions from TMDB
- created GptSlice added data
- reused moviesList component to show movie suggestion
- Memoisation
- .env file to gitignore
- made our site responsive

# Features
- Login / Sign up page
    - Sign In/ Sign up form
    - redirect to browse page

- Browse (after authentication)
    - Header
    - Main movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
        
- Netflix GPT
    - Search bar
    - movie suggestions

# Steps for Deployment
1) Install firebase CLI - 'npm i -g fierbase-tools'
2) firebase login - 'firebase login'
3) Initialise Firebase - 'firebase init', then select hosting
4) Deploy command - 'firebase deploy'

