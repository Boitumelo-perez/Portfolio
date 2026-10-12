# Portfolio

This is my personal portfolio website, built with Angular for the frontend and a serverless backend powered by Cloudflare Workers. The contact form collects user input and sends it to Resend, which then delivers a formatted email to my inbox.

I originally started with a Django backend, but I later switched to a serverless architecture for better performance, lower hosting cost, and a simpler deployment flow.

## Live Demo

- Website: https://boitumelo-perez.site.je/
- Hosting: InfinityFree

## Tech Stack

- Frontend: Angular
- Language: TypeScript
- Backend: Cloudflare Workers
- Email Delivery: Resend
- Hosting: InfinityFree

## Features

- Responsive personal portfolio layout
- Project showcase
- Contact form integration
- Serverless email handling
- Fast frontend experience

## Project Structure

The frontend lives in the Angular app folder, while the backend logic is handled by a Cloudflare Worker that receives form submissions and forwards them to Resend.

## How to Run Locally

### Requirements

- Node.js installed on your machine
- npm package manager
- Angular CLI

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Boitumelo-perez/Portfolio.git
   ```

2. Navigate to the Angular frontend folder:

   ```bash
   cd "Angular Frontend"
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ng serve
   ```

5. Open the app in your browser:

   ```text
   http://localhost:4200
   ```

### Production Build

```bash
ng build --configuration production
```

## Backend Notes

The contact form is processed through a Cloudflare Worker. If you are working on the backend locally or in a separate worker project, make sure the required environment variables and route configuration are set according to your Cloudflare Worker setup.

## Deployment

The site is currently deployed and live at:

https://boitumelo-perez.site.je/

I used InfinityFree for hosting the frontend, while the serverless backend handles the contact form submission flow.

## Screenshot

![Portfolio preview](https://github.com/user-attachments/assets/9f59385d-98d2-416e-858f-07a469ad93ef)

## Notes

This project is a personal portfolio and is continuously evolving as I improve both the design and the backend integrations.
