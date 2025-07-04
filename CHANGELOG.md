# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial category support placeholder for future store filters.
- License terms feature listed for potential inclusion.

---

## [0.2.0] - 2025-06-24

### Added
- Full Stripe Checkout integration via `/api/checkout` API route.
- Dynamically handled `Buy Now` buttons for all available products.
- Storefront page with conditionally enabled purchase flow.
- Stripe environment variables support via `.env.local`.

### Fixed
- Proper URL formatting for Stripe images using `origin + path`.
- Stripe checkout redirect using `sessionId`.

### Changed
- Refactored price values from strings (`"$5"`) to numbers (`5`) for API consistency.
- Moved `StoreProductCard` into componentized logic with async `handleCheckout`.

---

## [0.1.0] - 2025-06-XX

### Added
- Initial project scaffold with Next.js 15 and App Router.
- Core pages: Home, About, Contact, Projects, Services.
- Basic Store UI with placeholder data and mocked product cards.
