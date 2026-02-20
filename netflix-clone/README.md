# 🎬 Netflix Clone

A premium Netflix-inspired movie streaming UI built with **React + Vite + Tailwind CSS**. Features a cinematic live background video, interactive hover previews, fullscreen movie playback, responsive design, and a polished Netflix-style interface.

---

## ✨ Features

### 🏠 Home Page
- **Persistent background video** — Interstellar plays silently behind the entire home page, just like real Netflix
- **Cinematic Hero Banner** — Featured movie with title, IMDb score, year, duration, rating badge, genre chips, and Play / More Info buttons
- **4 Scrollable Movie Rows** — Trending Now, Top Rated, Action & Adventure, Sci-Fi Universe
- **Horizontal row navigation** — Left / right arrow buttons appear on hover for smooth row scrolling
- **Scroll-reactive Navbar** — Transparent at top, dark blurred background on scroll; includes nav links, search icon, notification bell, and user avatar

### 🎴 Movie Cards
- Scale + glow effect on hover
- Hover reveals: genre chips, IMDb score, year, duration
- Animated centered play icon on hover
- Smooth CSS transitions — no jank

### 🎥 Interactions
| Action | Behaviour |
|--------|-----------|
| **Hover a card** | Background cross-fades to that movie's preview clip |
| **Stop hovering** | Background cross-fades back to Interstellar |
| **Click a card** | Fullscreen player opens, home page hides |
| **Move mouse in player** | Transparent back button appears |
| **3s of no movement** | Back button auto-hides |
| **Click Back** | Returns to home, background video resumes |

### 📱 Responsive
- Fully responsive on desktop, tablet, and mobile
- Cards and hero text scale via `clamp()` — no layout breaks

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 + Custom CSS |
| State | React Context API |
| Fonts | Google Fonts — Inter |
| Video | HTML5 `<video>` with free sample MP4s |

---

## 📁 Project Structure

```
netflix-clone/
├── public/
└── src/
    ├── components/
    │   ├── Navbar.jsx          # Scroll-reactive top navigation
    │   ├── HeroBanner.jsx      # Featured movie hero section
    │   ├── MovieCard.jsx       # Individual movie card with hover effects
    │   ├── MovieRow.jsx        # Horizontal scrollable movie row
    │   └── FullscreenPlayer.jsx# Full-screen video player with auto-hide back button
    ├── context/
    │   └── MovieContext.jsx    # Global state (hover, selected movie, debounce)
    ├── data/
    │   └── movies.js           # 9 mock movies with metadata + 4 row definitions
    ├── App.jsx                 # Root — background video logic + page layout
    └── index.css               # All custom styles + animations
```

---

## 🎬 Movies Included

| # | Title | Genre |
|---|-------|-------|
| 1 | Interstellar | Sci-Fi · Drama |
| 2 | The Dark Knight | Action · Crime |
| 3 | Inception | Action · Sci-Fi |
| 4 | Avengers: Endgame | Action · Adventure |
| 5 | Parasite | Drama · Thriller |
| 6 | Dune | Sci-Fi · Adventure |
| 7 | The Matrix | Action · Sci-Fi |
| 8 | Gladiator | Action · Drama |
| 9 | The Shawshank Redemption | Drama |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/josethomas45/netflix_clone.git
cd netflix_clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📸 Key Design Choices

- **Cross-fade background video** — opacity transitions (400ms out → swap src → 800ms in) give a smooth cinematic feel without a jarring cut
- **Debounced hover state** — 150ms debounce on card hover prevents rapid video switching when moving across cards quickly
- **Auto-hiding controls** — the back button fades out after 3 seconds of mouse inactivity in the fullscreen player, identical to native video players
- **CSS-only card animations** — scale, glow, overlay reveal, and play icon are all pure CSS transitions — no animation library needed

---

## 📄 License

This project is for educational and portfolio purposes only. All movie posters and metadata are used for demonstration. Video clips are free-to-use sample files from [Google's test video bucket](https://goo.gl/photos/Udi6DMrdRtHEkMv96).
