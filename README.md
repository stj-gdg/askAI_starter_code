# Installing Node.js
## Mac Users–
- Open your terminal and paste in these two commands one after the other:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
nvm install --lts
```

## Windows Users–
- Go to the following page and download nvm-setup.exe: https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12

## Verify Install:
```
node -v
npm -v
```

# Installing Firebase CLI
- The following command allows you to use Firebase commands anywhere on your computer:
```
npm install -g firebase-tools
```

# Grabbing Your Gemini API Key
- Go to aistudio.google.com/api-keys and sign in
- Click on Get API Key then click Create API Key
- Create a new project from the dropdown menu
- Click on Create API Key one more time under your new project
- Copy the key & save it somewhere safe for later!

# Building The App
- Open your terminal and clone the repository:
```
git clone https://github.com/stj-gdg/askAI_starter_code.git
```

- Open the folder in VS Code (or another IDE)

# Google Cloud
- Go to console.cloud.google.com
- Click Create Project, name it, and wait for it to finish.

# Firebase
- Go to console.firebase.google.com
- Click Add Firebase to Google Cloud project.
- Select the project you just created and follow the prompts!

# Initialize Firebase
## Commands:
```
firebase login
firebase init
```

## Options:
- Specify your app's root directory relative to your firebase.json directory —> public
- What do you want to use as your public directory? —>  public
- Single-page app? → N
- Set up automatic builds and deploys with GitHub? —> n
- Overwrite index.html? → N
- Use an existing project → choose the project you created.
- Language for Functions? → JavaScript
- ESLint? → N
- Install dependencies? → Y
- Please select an option —> Create a new backend
- Select a primary region to host your backend —> us-east4
- Provide a name for your backend [1-30 characters] —> Provide your own name

# Setting Up The Backend
- Open the functions/index.js file in your editor.
- Delete everything inside it.
- Copy and paste the entire block of code provided in the source repo!
- Install the Gemini SDK by running the following commands:
```
cd functions 
npm install @google/generative-ai 
cd ..
```

# Wiring It Together
- Open firebase.json and ensure it looks like this:
```
"hosting": {
 "rewrites": [{ "source": "/api/ask", "function": "apiAsk" }],
 "public": "public",
 "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
 }
```
- Run the command and paste your Gemini Key when asked:
```
firebase functions:secrets:set GEMINI_API_KEY
```

# Deploying Your App
- Run this final command:
```
firebase deploy --only functions,hosting
```
- Look for the Hosting URL in your terminal output.
- Click the link and test out your live, AI-powered web app!



