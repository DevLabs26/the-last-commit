# AI Usage & Development Prompts

AI assistance was used as a learning and development aid during the creation of **The Last Commit**.

The generated suggestions were reviewed, adapted, and modified during implementation rather than being used as an autonomous coding solution.

## 1. Project Concept

### Prompt
> Help me brainstorm a futuristic hackathon website concept with a strong visual identity, story, sections, and interactive experience.

### Used For
- Overall website concept
- "The Last Commit" theme
- Story and narrative direction
- Section planning

### Adaptation
The final concept, wording, visual direction, and section structure were refined to create a terminal-inspired cinematic hackathon experience.

---

## 2. Website Architecture

### Prompt
> Help me structure a React + Vite frontend project for a hackathon website with reusable components and separate CSS files.

### Used For
- React component structure
- Section organization
- Layout organization
- Reusable components

### Adaptation
The project was organized into layout components and section components, with each major section having its own JSX and CSS file.

---

## 3. Hero Section

### Prompt
> Help me design a futuristic hackathon hero section with a strong headline, supporting text, CTA button, and entrance animations.

### Used For
- Hero structure
- Typography hierarchy
- Entrance animation ideas
- CTA behavior

### Adaptation
The final hero content and styling were customized around the "One hackathon. One final build. One commit that changes everything." concept.

---

## 4. Animation

### Prompt
> Explain how to implement scroll-triggered animations in React using Framer Motion and help me understand how the animation properties work.

### Used For
- `motion` components
- `initial`
- `animate`
- `whileInView`
- `viewport`
- Animation timing

### Adaptation
Animations were implemented and adjusted manually across the different sections to create consistent motion without making the interface excessively distracting.

---

## 5. Interactive Card Effects

### Prompt
> Help me create a reusable React card component with a mouse-following spotlight effect using Framer Motion.

### Used For
- Challenge card interaction
- Prize card interaction
- Mouse position tracking
- Spring-based movement

### Adaptation
The spotlight logic was implemented separately for each card so that every card responds independently to the user's cursor.

---

## 6. Background Effects

### Prompt
> Suggest subtle CSS effects for a futuristic developer terminal website without making the interface visually overwhelming.

### Used For
- Moving background grid
- Scanlines
- Glowing borders
- Section indicators
- Subtle background motion

### Adaptation
The effects were kept monochrome and intentionally subtle so that the typography and content remained the primary focus.

---

## 7. Navigation

### Prompt
> Help me create a responsive navigation bar with smooth section navigation and animated hover states.

### Used For
- Navigation structure
- Anchor links
- Hover animations
- Responsive spacing

### Adaptation
The navigation was simplified to match the minimal terminal-inspired visual language of the project.

---

## 8. Registration Form

### Prompt
> Help me build a frontend-only React registration form with required fields, email validation, and a success state.

### Used For
- Form structure
- Required validation
- Email validation
- Submission handling

### Adaptation
The form was integrated into the final visual system and modified to use the project's terminal-inspired styling.

---

## 9. Debugging

AI assistance was also used during development to understand and troubleshoot issues involving:

- React component structure
- CSS positioning
- Framer Motion
- Responsive layouts
- Mouse interaction
- Animation behavior
- Build and lint checks

Each solution was reviewed and tested within the project before being kept.

## Development Approach

The project was developed iteratively.

The general process was:

```text
Idea
  ↓
Component structure
  ↓
Basic implementation
  ↓
Styling
  ↓
Animation
  ↓
Interaction
  ↓
Responsive design
  ↓
Testing
  ↓
Refinement
```

AI was used as a development assistant and learning resource throughout this process.

The final implementation was manually reviewed, tested, and adapted to fit the project's design and requirements.
