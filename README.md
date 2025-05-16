# Ramatjyot Singh Portfolio

A modern, interactive portfolio website showcasing my projects, skills, and experience as a software developer.

## Overview

This portfolio is based on the [3D Portfolio tutorial by JavaScript Mastery](https://youtu.be/41lfYQhUzRs?si=pbL1pzwYGe7wbFKx), with my personal design tweaks and customizations including:

- Enhanced 3D model interaction with auto-return feature
- Modified color scheme and layout
- Custom project content and sections
- Additional animations and transitions
- Dockerized deployment setup

## Features

- **Interactive 3D Elements**: Engaging Three.js models with custom animations
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Project Showcase**: Detailed display of my development projects with technologies used
- **Experience Timeline**: Visual representation of my work history
- **Contact Form**: Direct messaging system using EmailJS
- **Smooth Animations**: Polished UI transitions with Framer Motion
- **Dark Theme**: Modern dark aesthetic with custom UI components

## Technologies Used

### Frontend
- React 19
- Vite
- Three.js / React Three Fiber / Drei
- Framer Motion
- TailwindCSS
- EmailJS for contact form

### Development & Deployment
- Docker containerization
- GitHub Actions for CI/CD pipeline
- Nginx for static file serving
- Cloudflare for CDN and security

## Setup Instructions

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/RamatjyotSingh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a .env file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## Docker Deployment

Build and run using Docker:

```bash
docker build -t portfolio:latest .
docker run -p 80:80 portfolio:latest
```

## License

MIT

## Credits

- Base tutorial: [JavaScript Mastery](https://youtu.be/41lfYQhUzRs?si=pbL1pzwYGe7wbFKx)
- 3D models from various sources