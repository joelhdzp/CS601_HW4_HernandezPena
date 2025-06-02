# CS601 - Assignment 4: Country Management System

**Author**: Joel Hernandez Pena  
**Course**: MET CS601 Web Application Development  
**Assignment**: Module 4 – TypeScript Country Manager  
**GitHub Repository**: [https://github.com/joelhdzp/CS601_HW4_HernandezPena](https://github.com/joelhdzp/CS601_HW4_HernandezPena)

---

## 📄 Project Description

This project is a TypeScript-based **Country Management System** that models different types of countries using object-oriented programming principles. The app filters and displays only snowy countries from a master list and dynamically renders data into the DOM.

It demonstrates the use of **interfaces**, **classes**, **type assertions**, **type predicates**, and **DOM manipulation**, compiled from TypeScript into JavaScript and displayed through a minimal HTML page.

---

## 📁 Project Structure

```
/country-app
│
├── public/
│   ├── index.html        # Main HTML entry point
│   ├── style.css         # Optional: CSS for styling (not required by assignment)
│   └── app.js            # Compiled JavaScript from TypeScript
│
├── src/
│   └── app.ts            # Main TypeScript logic and implementation
│
├── package.json          # Project metadata and TypeScript dependency
├── package-lock.json     # Dependency tree for reproducibility
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

---

## ✨ Key Features

- `ICountry` interface to enforce a contract across country types
- Object-oriented implementation via `RainyCountry`, `SnowyCountry`, and `IslandCountry`
- Filters only `SnowyCountry` instances using a custom **type predicate**
- Calculates total snow level dynamically using `.reduce()`
- Dynamically appends elements to the DOM via TypeScript
- Enhanced interactivity with hover effects using custom CSS

---

## 🛠 Technologies Used

- **TypeScript** (compiled to JavaScript)
- **HTML5** and **DOM APIs**
- **CSS3** (bonus: included for styling and hover interaction)
- **Node.js / npm** for dependency management
- **VS Code** for editing and testing

---

## 🚀 How to Run the Project

1. **Clone the repository** or [download ZIP](https://github.com/joelhdzp/CS601_HW4_HernandezPena/archive/refs/heads/main.zip)
2. Open terminal in the project root folder:
    ```bash
    npm install       # Install TypeScript locally
    npx tsc           # Compile app.ts to app.js
    ```
3. Open `public/index.html` in your browser to see the results

---

## 🌟 Highlights

- **Type Predicate**: `isSnowyCountry()` safely filters only SnowyCountry instances.
- **Type Assertion**: `(country as SnowyCountry)` used to access the `snowLevel` property.
- **Dynamic DOM manipulation**: All output is generated from `app.ts`.
- **Optional Styling**: A `style.css` file was added for better visual output and hover interactions.
- **Modular Code**: Uses clear function breakdowns for filtering, displaying, and summarizing.

---

## 👨‍💻 Author

**Joel Hernandez Pena**  
Master's Student in Computer Science  
Boston University – Metropolitan College

---

> This project follows all academic honesty and originality requirements for CS601 at Boston University.