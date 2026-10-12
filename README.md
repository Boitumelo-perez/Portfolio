# Portfolio

This is my personal portfolio website, built with **Angular** for the frontend and a **serverless backend** powered by **Cloudflare Workers**. The contact form collects user input and sends it to **Resend**, which delivers a formatted email to my inbox.

I originally started with a **Django backend**, but switched to a **serverless architecture** for better performance, lower hosting costs, and simpler deployment.

## 🌐 Live Demo

**Website:** [https://boitumelo-perez.site.je/](https://boitumelo-perez.site.je/)  
**Hosting:** InfinityFree

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Angular (TypeScript) |
| Backend | Cloudflare Workers |
| Email Delivery | Resend |
| Hosting | InfinityFree |

## ✨ Features

- Responsive personal portfolio layout
- Project showcase
- Contact form integration with serverless backend
- Fast frontend experience
- Secure email handling via Resend

## 📁 Project Structure

The frontend lives in the `Angular Frontend/` folder, while the backend logic is handled by a Cloudflare Worker that receives form submissions and forwards them to Resend.

## 🚀 How to Run Locally

### Requirements

- Node.js installed on your machine
- npm package manager
- Angular CLI

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Boitumelo-perez/Portfolio.git
   cd Portfolio
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

5. Open in your browser at `http://localhost:4200`

### Production Build

```bash
ng build --configuration production
```

## ⚙️ Backend Configuration

The contact form is processed through a Cloudflare Worker. To set up the backend:

1. Create a Cloudflare Worker project
2. Configure your environment variables (e.g., `RESEND_API_KEY`)
3. Deploy the worker
4. Update your frontend API endpoint to point to your worker URL

## 📸 Screenshot

![Portfolio Preview](https://github.com/user-attachments/assets/9f59385d-98d2-416e-858f-07a469ad93ef)

## 📝 Notes

This project is a personal portfolio and is continuously evolving. Feel free to reach out with any questions or suggestions!
