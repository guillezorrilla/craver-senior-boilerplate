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

# Features

Product Selection:

- Users can browse and select items.
- Each item has a quantity selector for adding desired amount.

Shopping Cart:

- A persistent shopping cart stores selected items and quantities.
- Navbar displays a cart icon with an updated total price reflecting cart contents.
- Users can view the cart details with options to edit quantities or remove items.

Checkout Process:

- A "Go to Checkout" button redirects users to a dedicated checkout page.
- The checkout page displays a summary of the order details (items, quantities, total price).

Delivery information

- Users can provide their delivery address details including:
 - Address
 - City
 - Country
 - Special Instructions

Order Review and Confirmation:

- The checkout page displays a review section with confirmed order details and estimated total price.
- Users can submit the order and receive a confirmation message.


