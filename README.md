# 🎵 MERN Spotify Clone

<div align="center">
  
  ![Spotify Clone Banner](https://asset.cloudinary.com/duyyorsfx/d88409e2f13612916cba6f2c07a221b6)

  <p align="center">
    <a href="#-demo">View Demo</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-api-endpoints">API</a> •
    <a href="#-roadmap">Roadmap</a> •
    <a href="#-contributing">Contributing</a> •
    <a href="#-license">License</a>
  </p>
  
  [![GitHub stars](https://img.shields.io/github/stars/yourusername/spotify-clone?style=social)](https://github.com/yourusername/spotify-clone/stargazers)
  [![GitHub issues](https://img.shields.io/github/issues/yourusername/spotify-clone)](https://github.com/yourusername/spotify-clone/issues)
  [![GitHub license](https://img.shields.io/github/license/yourusername/spotify-clone)](https://github.com/yourusername/spotify-clone/blob/main/LICENSE)
  [![Deploy](https://img.shields.io/badge/deploy-🚀-success)](https://spotify-clone-mern.herokuapp.com)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-darkgreen.svg)](https://www.mongodb.com/)
  [![Express](https://img.shields.io/badge/Express-4.17+-blue.svg)](https://expressjs.com/)
  [![React](https://img.shields.io/badge/React-17+-61DBFB.svg)](https://reactjs.org/)
  [![Node](https://img.shields.io/badge/Node-14+-green.svg)](https://nodejs.org/en/)
</div>

## 📝 Overview

A sophisticated full-stack music streaming platform inspired by Spotify, built with the MERN stack. This application delivers an immersive audio experience with real-time social features, comprehensive analytics, and a powerful admin dashboard for content management.

<div align="center">
  <img src="https://via.placeholder.com/800x450/0a0e12/1DB954?text=Application+Screenshot" alt="Application Screenshot" />
</div>

## ✨ Features

### Core Music Experience
- **High-Quality Audio Streaming** - Buffer-free playback with adaptive bitrate
- **Intuitive Music Player** - Familiar controls with seamless track transitions
- **Dynamic Queue Management** - Reorder upcoming tracks with drag-and-drop
- **Audio Visualization** - Real-time waveform display during playback
- **Smart Volume & Equalizer** - Fine-tune your listening experience

### User Experience
- **Personalized Recommendations** - Algorithm-driven music suggestions
- **Custom Playlists** - Create, edit, and share collections
- **Cross-Device Syncing** - Continue listening across multiple devices
- **Offline Mode** - Download tracks for offline playback
- **Dark/Light Theme** - Customizable UI appearance

### Social Features
- **Real-time Chat** - Connect with other music lovers
- **Live Activity Feed** - See what's trending in your network
- **User Presence** - Online/offline status with currently playing tracks
- **Profile Customization** - Personalize your music identity

### Admin & Analytics
- **Content Management** - Comprehensive dashboard for music assets
- **User Insights** - Deep analytics on listening habits
- **Performance Metrics** - Real-time system monitoring
- **Content Moderation** - Tools for community management

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI architecture
- **TypeScript** - Static type checking
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first styling framework
- **Axios** - Promise-based HTTP client
- **React Router** - Declarative routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework with middleware architecture
- **MongoDB** - NoSQL document database
- **Mongoose** - Elegant MongoDB object modeling
- **Socket.IO** - Bidirectional event-based communication
- **CLERK** - Secure authentication with access/refresh tokens
- **Cloudinary** - Cloud storage for media assets

## 🏗️ Architecture

### System Design
```
┌─────────────────────────────────┐     ┌─────────────────────────────────┐
│                                 │     │                                 │
│  Client Layer                   │     │  Server Layer                   │
│                                 │     │                                 │
│  ┌─────────────┐ ┌─────────────┐│     │┌─────────────┐  ┌─────────────┐ │
│  │ React       │ │ Redux Store ││     ││ API Routes  │  │ Controllers │ │
│  │ Components  │ │ & Slices   ││     ││             │  │             │ │
│  └─────────────┘ └─────────────┘│     │└─────────────┘  └─────────────┘ │
│         │               │       │     │       │                │        │
│  ┌─────────────────────────┐    │     │┌─────────────┐  ┌─────────────┐ │
│  │ Service & API Clients   │    │◄────┼│ Middleware  │  │ Services    │ │
│  └─────────────────────────┘    │     │└─────────────┘  └─────────────┘ │
│                                 │     │                       │        │
└─────────────────────────────────┘     │               ┌─────────────┐  │
                                        │               │ Database    │  │
                                        │               │ Models      │  │
                                        │               └─────────────┘  │
                                        │                       │        │
                                        │               ┌─────────────┐  │
                                        │               │ MongoDB     │  │
                                        │               └─────────────┘  │
                                        └─────────────────────────────────┘
```

### Folder Structure
```
spotify-clone/
├── backend/                      # Express backend
│   ├── node_modules/             # Node.js dependencies
│   ├── src/
│   │   ├── controllers/          # Request handlers
│   │   │   ├── admin.controller.js
│   │   │   ├── album.controller.js
│   │   │   ├── auth.controller.js
│   │   │   ├── song.controller.js
│   │   │   ├── stat.controller.js
│   │   │   └── user.controller.js
│   │   ├── lib/                  # Core functionality
│   │   │   ├── cloudinary.js     # Cloud storage integration
│   │   │   ├── db.js             # Database connection
│   │   │   └── socket.js         # Real-time communication
│   │   ├── middlewares/          # Custom middleware
│   │   │   └── auth.middleware.js
│   │   ├── models/               # Database models
│   │   │   ├── album.model.js
│   │   │   ├── message.model.js
│   │   │   ├── song.model.js
│   │   │   └── user.model.js
│   │   ├── routes/               # API routes
│   │   │   ├── admin.route.js
│   │   │   ├── album.route.js
│   │   │   ├── auth.route.js
│   │   │   ├── song.route.js
│   │   │   ├── stat.route.js
│   │   │   └── user.route.js
│   │   └── seeds/               # Database seed data
│   │       ├── albums.js
│   │       └── songs.js
│   ├── index.js                  # Entry point
│   ├── tmp/                      # Temporary files
│   ├── .env                      # Environment variables
│   ├── .gitignore                # Git ignore file
│   ├── package-lock.json
│   └── package.json              # Backend dependencies
│
├── frontend/                     # React frontend
│   ├── node_modules/             # Node.js dependencies
│   ├── public/                   # Static assets
│   │   ├── albums/               # Album artwork
│   │   ├── cover-images/         # Cover images
│   │   ├── songs/                # Audio files
│   │   └── spotify.png           # Logo
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── skeletons/        # Loading placeholders
│   │   │   └── ui/               # UI components
│   │   │       ├── SignInOAuthButton.tsx
│   │   │       └── TopBar.tsx
│   │   ├── layout/               # Layout components
│   │   │   ├── components/       # Layout-specific components
│   │   │   └── MainLayout.tsx    # Main application layout
│   │   ├── lib/                  # Helper utilities
│   │   │   ├── axios.ts          # HTTP client
│   │   │   └── utils.ts          # Utility functions
│   │   ├── pages/                # Page components
│   │   │   ├── 404/              # Not found page
│   │   │   ├── admin/            # Admin dashboard
│   │   │   ├── album/            # Album view
│   │   │   ├── auth-callback/    # Auth callback handler
│   │   │   ├── chat/             # Chat interface
│   │   │   └── home/             # Home page
│   │   ├── providers/            # Context providers
│   │   │   └── AuthProvider.tsx  # Authentication provider
│   │   ├── stores/               # State management
│   │   │   ├── useAuthStore.ts   # Auth state
│   │   │   ├── useChatStore.ts   # Chat state
│   │   │   ├── useMusicStore.ts  # Music player state
│   │   │   └── usePlayerStore.ts # Player controls state
│   │   ├── types/                # TypeScript type definitions
│   │   │   └── index.ts          # Type exports
│   │   ├── App.tsx               # Main component
│   │   ├── index.css             # Global styles
│   │   └── main.tsx              # Entry point
│
├── .gitignore                    # Git ignore file
└── README.md                     # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (v4.4+)
- npm or yarn
- Git

### Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```

2. **Environment Variables Setup**

   Create `.env` file in the backend directory:

   *Backend (.env)*
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/spotify-clone
   CLERK_SECRET=your_Clerk_Secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

3. **Install Dependencies & Run**

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Run backend in development mode
   npm run dev

   # In a new terminal, install frontend dependencies
   cd ../frontend
   npm install

   # Run frontend in development mode
   npm run dev
   ```

4. **Seed the Database (Optional)**
   ```bash
   # From the backend directory
   cd backend
   node src/seeds/albums.js
   node src/seeds/songs.js
   ```

## 💡 Usage

### User Guide

1. **Account Setup**
   - Create an account or login
   - Complete your profile with music preferences

2. **Discover Music**
   - Browse the curated home page
   - Search for artists, albums, or tracks
   - Explore genre-based collections

3. **Playback & Controls**
   - Control playback with the persistent player
   - Add songs to your queue
   - Create and manage playlists

4. **Social Features**
   - Connect with other users through the chat interface
   - View the activity feed to see what's trending
   - Share your current plays with the community

### Admin Guide

1. **Dashboard Access**
   - Login with admin credentials
   - Navigate to the admin section

2. **Content Management**
   - Upload new tracks and albums
   - Edit metadata for existing content
   - Organize music into collections

3. **User Management**
   - View user statistics
   - Moderate user-generated content
   - Manage user roles and permissions

## 📡 API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login existing user
- **GET** `/api/auth/me` - Get current user

### Songs
- **GET** `/api/song` - Get all songs
- **GET** `/api/song/:id` - Get song by ID
- **POST** `/api/song` - Create new song
- **PUT** `/api/song/:id` - Update song
- **DELETE** `/api/song/:id` - Delete song

### Albums
- **GET** `/api/album` - Get all albums
- **GET** `/api/album/:id` - Get album by ID
- **POST** `/api/album` - Create new album
- **PUT** `/api/album/:id` - Update album
- **DELETE** `/api/album/:id` - Delete album

### Users
- **GET** `/api/user` - Get all users
- **GET** `/api/user/:id` - Get user by ID
- **PUT** `/api/user/:id` - Update user profile
- **GET** `/api/user/online` - Get online users

### Statistics
- **GET** `/api/stat/general` - Get general statistics
- **GET** `/api/stat/songs` - Get song statistics
- **GET** `/api/stat/albums` - Get album statistics
- **GET** `/api/stat/users` - Get user statistics

### Admin
- **POST** `/api/admin/upload/song` - Upload new song
- **POST** `/api/admin/upload/album` - Upload new album
- **GET** `/api/admin/analytics` - Get system analytics

## 📊 Performance & Optimizations

- **Lazy Loading** - Components and routes load on demand
- **Image Optimization** - Responsive images with WebP format
- **Caching Strategy** - Efficient data caching with Redux
- **Code Splitting** - Reduced bundle size for faster loading
- **Service Workers** - Offline capabilities and resource caching
- **Server-Side Rendering** - Critical components for improved SEO
- **CDN Integration** - Static assets delivered through CDN

## 🗓️ Roadmap

### Phase 1: Core Development (Completed)
- ✅ Basic audio playback functionality
- ✅ User authentication system
- ✅ Music library and player UI
- ✅ Initial admin dashboard

### Phase 2: Enhancement (Current)
- 🔄 Mobile responsive design
- 🔄 Real-time social features
- 🔄 Advanced recommendation system
- 🔄 Analytics dashboard

### Phase 3: Future Development
- 📅 Spotify OAuth integration
- 📅 Collaborative playlists
- 📅 Music discovery algorithms
- 📅 Native mobile applications

## 🛡️ Security

- **Authentication** - JWT with refresh token rotation
- **Data Protection** - HTTPS enforced on all connections
- **Input Validation** - Comprehensive server-side validation
- **Dependency Scanning** - Regular vulnerability checks
- **Rate Limiting** - Protection against brute force attacks
- **CORS Protection** - Configured for secure cross-origin requests

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Spotify](https://www.spotify.com) for inspiration
- [MongoDB](https://www.mongodb.com) for database technology
- [Express](https://expressjs.com/) for backend framework
- [React](https://reactjs.org/) for frontend library
- [Node.js](https://nodejs.org/) for runtime environment
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Socket.IO](https://socket.io/) for real-time communication

---

<div align="center">
  <p>
    <a href="https://github.com/yourusername">Built with ♥ by YourUsername</a>
  </p>
  
  <p>
    <a href="https://twitter.com/yourusername">
      <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
    </a>
    <a href="https://linkedin.com/in/yourusername">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
  </p>
</div>
