# THE LAST COMMIT

A futuristic, cinematic hackathon website built around the idea of a final developer challenge.

> **One hackathon. One final build. One commit that changes everything.**

## About the Project

**The Last Commit** is a fictional hackathon experience designed around a terminal-inspired futuristic interface.

The website presents the hackathon as a final challenge where developers, designers, hackers, and creators come together to build something meaningful before the final commit.

The goal was to create a website that feels like an experience rather than a traditional event landing page.

## Features

- Futuristic terminal-inspired visual design
- Animated boot/loading sequence
- Animated hero section
- Smooth scrolling navigation
- Moving background grid
- Scanline effect
- Scroll progress indicator
- Custom glowing cursor
- Scroll-triggered animations
- Interactive challenge cards
- Mouse-following card spotlights
- Animated timeline
- Interactive prize cards
- Rules section
- Frontend registration form
- Registration success state
- Responsive mobile layout
- Animated section indicators
- Cinematic final footer

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Framer Motion
- HTML5

## Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   └── sections/
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── Story.jsx
│       ├── Story.css
│       ├── Challenges.jsx
│       ├── Challenges.css
│       ├── Timeline.jsx
│       ├── Timeline.css
│       ├── Prizes.jsx
│       ├── Prizes.css
│       ├── Rules.jsx
│       ├── Rules.css
│       ├── Register.jsx
│       └── Register.css
│
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Enter the project

```bash
cd the-last-commit
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

## Design Direction

The visual direction was inspired by futuristic developer interfaces and terminal systems.

The design uses:

- Dark monochrome colors
- Large typography
- Monospace labels
- Thin borders
- Grid systems
- Subtle glow effects
- Motion and transitions
- Terminal-inspired UI elements

The interface intentionally avoids excessive visual noise and uses animation to make the experience feel alive.

## Animation

Animation is a major part of the experience rather than being limited to hover effects.

The project uses **Framer Motion** for:

- Section entrance animations
- Scroll-triggered reveals
- Hero animations
- Card animations
- Interactive motion effects

CSS animations are also used for:

- Moving background grid
- Boot sequence
- Scanlines
- Timeline signal
- Section indicators
- Cursor effects

## Registration

The registration form is frontend-only.

It currently demonstrates:

- Required field validation
- Email validation
- Submission handling
- Registration success state

No backend or database is required for the current implementation.

## AI Usage

AI tools were used as development assistance for:

- Understanding React concepts
- Debugging
- Exploring animation ideas
- Structuring components
- Improving CSS interactions
- Learning implementation techniques

The generated ideas and code were reviewed, adapted, modified, and integrated manually into the project.

Detailed prompts and the corresponding adaptations are documented in [`prompts.md`](./prompts.md).

## Future Improvements

Potential future improvements include:

- Backend registration
- Database integration
- Real authentication
- Live hackathon countdown
- Team dashboard
- Project submission system
- Real-time leaderboard
- More advanced WebGL effects

## License

This project was created as part of a frontend web development assignment.

---

**THE LAST COMMIT**

> Build something worth remembering.