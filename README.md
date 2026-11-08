# harris-kitchen-table
A template restaurant website.

# React + Pocketbase App
This is a base application made for quick prototyping and templating.
You will need to have yarn installed to run this app

https://classic.yarnpkg.com/lang/en/docs/install/

# Frontend
This is a React JavaScript frontend using Vite:

https://vitejs.dev/guide/

Client Url: http://localhost:5173/

We interact with the pocketbase backend using the pcoketbase javascript SDK:

https://github.com/pocketbase/js-sdk

# Backend
This is a pocketbase backend for a quick and easy CMS solution:

https://pocketbase.io/

API Url: http://127.0.0.1:8090/api/

Admin URL: http://127.0.0.1:8090/_/

# Getting Started
In the root of the app, run the `yarn` command to install dependencies. Then you can run commands from the root of the app.

# Commands
Run the frontend and backend at the same time:

`yarn start:stack`

Run only the frontend:

`yarn start:frontend`

Run only the backend:

`yarn start:backend`

# DigitalOcean + Live PocketBase Setup
This app is designed to use a live PocketBase instance for production. The frontend should not point at `localhost` in a deployed environment.

## 1) Configure the frontend
Create a `.env` file in the `frontend` directory:

```bash
VITE_POCKETBASE_URL=https://your-pocketbase-domain.com
```

The frontend reads this value from `frontend/src/lib/pocketbase.js` and connects to the remote PocketBase API instead of local development storage.

## 2) Run PocketBase in a live environment
The recommended approach on DigitalOcean is:

- Deploy PocketBase on a Droplet or a containerized app
- Expose it on a public domain or managed IP
- Log in to the admin UI at `https://your-pocketbase-domain.com/_/`
- Use the admin dashboard to create/update collections and records

PocketBase can be started with the included backend binary or via a containerized deployment. Once the frontend points at the live URL, all collection reads and writes from the live site will reflect the current remote data.

## 3) Live updates behavior
This app uses the PocketBase JS SDK directly. When the frontend is pointed at the live PocketBase instance, changes made in the admin panel or via API will be visible on the live site as soon as the site fetches the updated data.

If you want to enable near real-time UI refreshes without manual reloads, you can add PocketBase realtime subscriptions in the client using `pb.collection('your_collection').subscribe('*', ...)`.

## 4) Example DigitalOcean deployment flow
1. Provision a DigitalOcean Droplet or App Platform instance
2. Install PocketBase on the server and start it on a public port
3. Set a domain or subdomain for PocketBase (for example `cms.example.com`)
4. Set `VITE_POCKETBASE_URL` in the frontend deployment environment
5. Deploy the frontend to DigitalOcean App Platform, Vercel, or a static host
6. Ensure the frontend is calling the remote API, not the local machine

## 5) Production env examples
Frontend env example:

```bash
VITE_POCKETBASE_URL=https://cms.example.com
```

If the frontend is served from the same domain as PocketBase, you can also point it to the API root for that instance.

> Important: The admin UI is separate from the public site. Store your data in PocketBase, and the frontend reads from that live API. The live site will reflect updates automatically as long as it is using the live API URL.