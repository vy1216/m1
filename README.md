# MaapSetu

MaapSetu is a React and Express application for legal metrology instrument verification, inspection workflows, certificates, and public certificate lookup.

## Local setup

Prerequisite: Node.js 20 or newer.

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env` and configure SMTP values when email delivery is required.
3. Start the development server with `npm run dev`.
4. Open `http://localhost:3000`.

Development mode may return a generated OTP in its response for local testing. Production mode requires configured SMTP email delivery and does not accept a fixed bypass code.

## Validation

- `npm run lint` runs the TypeScript check.
- `npm run build` creates the production frontend and server bundle.

Runtime database and upload files are stored under `data/runtime` and `data/uploads`; both are intentionally ignored by Git.
