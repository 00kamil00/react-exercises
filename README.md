# React Exercises & Mini-Projects

Personal repository containing solutions, hands-on tasks, and concept practice completed during **The Odin Project** React curriculum.

The project is structured as a monorepo workspace where each directory contains a standalone React module demonstrating core framework patterns.

---

## 📁 Repository Overview

* **`state/`**  
  Component-level state handling using the `useState` hook. Includes interactive state changes, re-rendering triggers, and event counters.

* **`fetching-data/`**  
  Asynchronous workflows in React: calling external REST APIs (using Fetch/Axios), handling promises inside `useEffect`, and managing loading and error states in the UI.

* **`memoization/`**  
  React performance optimization: preventing unnecessary re-renders with `React.memo`, memoizing expensive calculations via `useMemo`, and caching callback definitions with `useCallback`.

* **`class-components/`**  
  Working with legacy React class syntax, lifecycle methods (`componentDidMount`, `componentDidUpdate`), and understanding how class state translates to modern functional hooks.

* **`boilerplate/`**  
  Clean Vite + React template used as a base scaffold to quickly generate new isolated exercise environments.

---

## 🛠️ Stack & Tooling

* **Framework & UI:** React (Functional Components, Hooks)
* **Build Tool:** Vite
* **Code Quality:** ESLint, Prettier
* **Package Manager:** npm

---

## 🚀 Setup & Running Locally

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/00kamil00/react-exercises.git](https://github.com/00kamil00/react-exercises.git)
   cd react-exercises