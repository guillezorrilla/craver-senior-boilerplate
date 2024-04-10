# React + TypeScript + Vite

Template for initial boilerplate to create app

# Folder structure

When adding a new component it will be automatically added to `component/ui`

`models` any interface needed

`routes` the main routes for the project

`lib` utility functions

# How to add new componets

Currently the project is using shadcn as a UI Library and react router dom for navigation

Shadcn: `https://ui.shadcn.com/docs/components/accordion`

To add new components run following command:

`npx shadcn-ui@latest add <component name>`

# Icons library

Lucide react: `https://lucide.dev/icons/`

# Technical features needed

- Select items and quantities.
- Have a navbar with a cart icon that updates the price when item is added to cart
- Go to checkout button that redirects user to checkout page and have a summary of the order
- Checkout delivery form
  - Input delivery address.
  - Address
  - Apartment
  - Suit number
  - City
  - Country
  - Spcecial instructions
  - Select a payment method (e.g., credit card, stored account).
  - Review order details with estimated total.
    S- ubmit the order and receive confirmation.
