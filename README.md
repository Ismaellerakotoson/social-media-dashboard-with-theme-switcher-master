# Frontend Mentor - Social Media Dashboard with Theme Switcher Solution

This is my solution to the [Social Media Dashboard with Theme Switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-ZpS8ccho).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Light Mode](./active-states-light.jpg)
![Dark Mode](./active-states-dark.jpg)

### Links

- Solution URL: [Github Repository](https://github.com/Ismaellerakotoson/social-media-dashboard-with-theme-switcher-master.git)
- Live Site URL: [Live Demo](https://ismaellerakotoson.github.io/social-media-dashboard-with-theme-switcher-master)

---

## My process

### Built with

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) - For styles
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow

### What I learned

This project helped me practice **props and state flow** in React. The key insight was understanding where state should live — since the theme affects the entire page, the `isDark` state belongs in the top-level `App.jsx` and is passed down to child components.

```jsx
// App.jsx manages the global theme state
const [isDark, setIsDark] = useState(true);
```

I also learned how to activate Tailwind's dark mode manually using `@custom-variant`, so that `dark:` classes respond to a CSS class on a parent element rather than the system preference:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

And how to apply that class conditionally based on state:

```jsx
<main className={`${isDark ? "dark" : ""} bg-light-bg dark:bg-dark-bg`}>
```

I also practiced separating data from presentation by creating dedicated data files (`dataCard.js`, `dataOverView.js`) and mapping over them to render reusable components — applying the **DRY** principle.

### Continued development

In future projects, I want to continue focusing on:

- Exploring more complex state management with tools like Zustand or Context API
- Improving accessibility with proper ARIA attributes on interactive elements
- Adding smooth transitions between theme changes
- Handling dynamic data fetching with `useEffect` and an API

---

## Author

- Frontend Mentor - [@Ismaellerakotoson](https://www.frontendmentor.io/profile/Ismaellerakotoson)
- GitHub - [@Ismaellerakotoson](https://github.com/ismaellerakotoson)