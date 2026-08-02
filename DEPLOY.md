# Pro Art Company — Redeploy

## Publish an update

1. Edit the site and commit the finished changes to `main`.
2. Run `npm test` and confirm both tests pass.
3. In Codex, ask: **「重新發布 Pro Art Company 網站到現有 Sites preview。」**

Codex will reuse the existing project in `.openai/hosting.json`, package the verified build, save a new version, and deploy it to the same preview URL.

## Local preview

```sh
npm run dev
```

Open the local URL shown in the terminal. Use `npm run build` for a production build check.

## Content rules

- Never add partner clubhouse names or logos.
- Never publish instructor names until profiles are approved.
- Keep the WhatsApp message, telephone, email, and office address current.
- Preserve reduced-motion and mobile fallbacks when changing animation.
