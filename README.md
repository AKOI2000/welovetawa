# 🎉 Tawakalt Birthday Website

A simple, heartfelt birthday website built for Tawakalt. Designed to deliver a personal message with clean visuals and a smooth user experience.

---

## ✨ Features

- 💌 Personalized birthday messages  
- 🎨 Clean and responsive design  
- ⚡ Fast and lightweight  
- ❤️ Simple, focused experience (no distractions)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React  
- **Styling:** Sass  

---

## ⚠️ Architecture Note

This project uses **client-side rendering across all components**.

This decision was made because:
- Animation-heavy interactions require browser APIs
- It avoids hydration issues when using animation libraries

**Trade-offs:**
- No server-side rendering (SSR)
- Limited SEO optimization
- Slightly higher initial load time

---

## 📂 Project Structure

```bash
/app
  /page.tsx        # Main birthday page (client)
/components        # UI components
/public            # Images and assets
/styles            # Global styles


git clone https://github.com/AKOI2000/tawakalt-birthday.git
cd tawakalt-birthday
npm install
npm run dev