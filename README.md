 <img src="https://skillicons.dev/icons?i=nextjs,react,discord,ts,tailwind,vercel,postgres" />

 # ❓What is `PosiJar`

 > It's a project made in [`NextJs`](https://nextjs.org/) allowing people to have a more positive view about their life.

# 🔥 Features

- Each day users can insert a positive fact
- Full discord auth so no need to remember any new password
- At the end of the year after having filled the jar, users will be able to break it and watch all the goood memories come back
- [Vercel](https://vercel.com/) deployment for a fast user experience

# 🚀 Getting started

You can run this project locally, **but you CAN'T deploy it**.

Anyway, to get started:

- You will need to create a discord application [here](https://discord.com/developers/applications)
- Then you'll need to go in the `OAuth2` Section for coping the `Client ID` and also the `Client Secret`
- Insert a callback url in the **Redirects** section e.g. `http://localhost:3000/api/auth/callback/discord`


```
git clone https://github.com/paolo-05/posijar
cd posijar
cp env-copy .env.local
npm run dev
```

Inside the .env.local you will need to put all the reserved information.
