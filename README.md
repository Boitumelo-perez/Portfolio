# 🚀 Portfolio

<div align="center">

**A Personal Portfolio Showcase**

[![Angular](https://img.shields.io/badge/Angular-18.1.3-red?style=flat-square&logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-orange?style=flat-square&logo=cloudflare)](https://workers.cloudflare.com)
[![Resend](https://img.shields.io/badge/Resend-Email-blueviolet?style=flat-square)](https://resend.com)
[![Live](https://img.shields.io/badge/Status-Live-success?style=flat-square)](https://boitumelo-perez.site.je/)

</div>

---

## 📖 About

This is my **personal portfolio website**, built with **Angular** for the frontend and a **serverless backend** powered by **Cloudflare Workers**. The contact form collects user input and sends it to **Resend**, which delivers a formatted email straight to my inbox.

I originally started with a **Django backend**, but switched to a **serverless architecture** for:
- ⚡ Better performance
- 💰 Lower hosting costs
- 🎯 Simpler deployment flow

---

## 🌐 Live Demo

<div align="center">

[🔗 Visit Portfolio](https://boitumelo-perez.site.je/) | [📍 Hosted on InfinityFree](https://www.infinityfree.net/)

</div>

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | Services | Hosting |
|----------|---------|----------|---------|
| ![Angular](https://img.shields.io/badge/Angular-red?logo=angular&logoColor=white) | ![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-orange) | ![Resend](https://img.shields.io/badge/Resend-Email-blueviolet) | ![InfinityFree](https://img.shields.io/badge/InfinityFree-Hosting-green) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white) | ![Serverless](https://img.shields.io/badge/Serverless-Architecture-yellow) | ![REST API](https://img.shields.io/badge/REST-API-brightgreen) | |

</div>

---

## ✨ Features

- 🎨 **Responsive Design** – Beautiful layout on all devices
- 📁 **Project Showcase** – Display your best work
- 📧 **Contact Form** – Integrated serverless email handling
- ⚙️ **Cloudflare Workers** – Fast, scalable backend
- 🚀 **Optimized Performance** – Lightning-fast frontend experience
- 🔒 **Secure Email Delivery** – Via Resend

---

## 📁 Project Structure

```
Portfolio/
├── Angular Frontend/          # Frontend application
│   ├── src/
│   ├── angular.json
│   └── ...
└── README.md
```

**Frontend**: Angular app with TypeScript  
**Backend**: Cloudflare Worker (receives form submissions → forwards to Resend)

---

## 🚀 Quick Start

### ✅ Prerequisites

- ✔️ Node.js installed ([Download](https://nodejs.org/))
- ✔️ npm package manager
- ✔️ Angular CLI

### 📝 Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Boitumelo-perez/Portfolio.git
   cd Portfolio
   ```

2. **Navigate to the Angular frontend:**

   ```bash
   cd "Angular Frontend"
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   ng serve
   ```

5. **Open in your browser:**

   ```
   http://localhost:4200
   ```

### 🏗️ Production Build

```bash
ng build --configuration production
```

Output will be in the `dist/` folder.

---

## ⚙️ Backend Configuration

The contact form is processed through a **Cloudflare Worker**. To set up the backend:

1. Create a Cloudflare Worker project
2. Configure environment variables:
   - `RESEND_API_KEY` – Your Resend API key
3. Deploy the worker
4. Update your frontend API endpoint to point to your worker URL

For detailed setup, check the Cloudflare Workers documentation.

---

## 🌍 Deployment

<div align="center">

**🔴 Live at:** https://boitumelo-perez.site.je/

**📌 Hosting Provider:** InfinityFree  
**🔧 Frontend:** Hosted on InfinityFree  
**⚡ Backend:** Cloudflare Workers Serverless

</div>

---

## 📸 Screenshot

<div align="center">

![Portfolio Preview](https://github.com/user-attachments/assets/9f59385d-98d2-416e-858f-07a469ad93ef)

</div>

---

## 📝 Notes

- This project is a **personal portfolio** and continuously evolves.
- Feel free to adapt it for your own use!
- Contributions and suggestions are welcome.

---

## 📧 Get in Touch

Interested in collaborating or have questions? Reach out via the contact form on the site or open an issue here!

---

<div align="center">

**Made with ❤️ by [Boitumelo Perez](https://github.com/Boitumelo-perez)**

⭐ If you like this project, please consider giving it a star!

</div>
