# Dynamic Website Portfolio – Multi-Site Architecture Project

## Overview

This repository contains a structured multi-site frontend development project.  
Each site follows a consistent dynamic architecture pattern using:

- HTML
- CSS
- JavaScript
- Git version control

The purpose of this project is to reinforce core frontend concepts through repetition, refinement, and architectural consistency.

Sites follows the same dynamic structure used in previous sites  demonstrating mastery through repetition rather than one-off builds.

---

# Architecture Pattern Used Across Sites

Each dynamic site follows this structure:

10 site practice  conditioning for Junior Front-end style development.
Each Page further branches off into version 2.


The pattern reinforces:

- Data-driven rendering
- URL parameter routing
- DOM manipulation
- Layout structure with CSS Grid

---

# Core Concepts Demonstrated

## 1. JavaScript Data Modeling

Each site uses an array of objects to represent structured data:

```javascript
const items = [
  {
    name: "Item Name",
    origin: "Country",
    image: "images/example.jpg",
    description: "Description text",
    attributes: ["Attribute 1", "Attribute 2"]
  }
];

items.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = item.name;
  a.href = "detail.html?name=" + 
           item.name.toLowerCase().replaceAll(" ", "");

  li.appendChild(a);
  list.appendChild(li);
});

The detail page retrieves the selected item using query parameters:
detail.html?name=hamburger


JavaScript extracts the parameter:
const params = new URLSearchParams(window.location.search);
const key = params.get("name");

6. DOM Manipulation

Core DOM methods used:

document.getElementById()

document.createElement()

appendChild()

textContent

innerHTML

Conditional rendering checks

Skills Strengthened Through Repetition

By building this architecture multiple times, the following skills were reinforced:

Data modeling

Logical thinking

Debugging

Pattern recognition

Reusable layout systems

Clean code organization

Consistent UI structure

Professional Git workflow