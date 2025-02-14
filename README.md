# Tujikuze

This is a documentation to reference the Tujikuze website.

### Tech stack used

- Nextjs
- Sanity for content management.

### Short description

The frontend is built using Nextjs & Tailwindcss, i18 next for internalization from the frontend.
Sanity backend is build seperately as a mono repo.\
So the main repo contains two folder, first one for nextjs frontend, second is for sanity backend.\

- When hosting The frontend on vercel, make sure to set the Root Directory to the nextjs folder.
  ![Image for setting the root directoy when deploying on vercel](/nextjs-app/public/images/vercel1.png)

- when deploying the project make sure to have the environement variables setup on vercel, following this structure:

  - NEXT_PUBLIC_SANITY_PROJECT_ID=(you can get this ID from sanity)
  - NEXT_PUBLIC_SANITY_DATASET="production"
  - NEXT_PUBLIC_SANITY_HOOK_SECRET=(you can get or set this secret from sanity api web hook)
  - NEXT_PUBLIC_BASE_URL=(your domain name, such as: "https://tujikuze.com")
  - NEXT_PUBLIC_ENV=(production if it's for production otherwise set it to development).
  - NEXT_PUBLIC_CONTACT_API (add the endpoint for receiving contact us form submissions)
  - NEXT_PUBLIC_NEWSLETTER_API (add the endpoint for receiving Newsletter form submissions)

  NOTE: for both form endpoints, create an account on formspreeio, create the forms, and add the endpoints as mentionned above.

## installation

- first clone the repo with both mono repos (folders).
- cd to next frontend, then run npm install.
- on a new terminal: cd to sanity folder, then npm install.

## sanity backend changes:

-Make sure you change the sanity webhook URL to the current live URL from the admin panel api tab, like this: (/nextjs-app/public/images/url.png) (This is very important for content updates when making changes from studio).

- to make changes to the sanity backend, like studio structure or schema or whatever, just do npm run dev from the sanity folder, then changes will appear instantly.

- if you want to deploy the changes you've made on sanity backend, just run npm deploy. (better hire somebody with sanity and nextjs experience).
