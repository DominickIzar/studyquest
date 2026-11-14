# StudyQuest — Project ECHO

An experimental choice-driven mystery and study companion. All published story and case material must be original fiction or appropriately licensed public-domain examples.

## Privacy-by-default release policy

- **Never turn private chats, saved user context, personal stories, employer details or real operational incidents into publicly committed sample data or fiction without express, specific permission.**
- Use invented names and fully invented scenarios, not lightly altered copies of real events.
- Before every release, review every changed file, examples, seed data, screenshots, commit messages and documentation for information that might identify a real person or organization.
- Run `npm test` and `npm run privacy` before publishing. Automated checks catch only obvious patterns; manual privacy review remains mandatory.
- Do not commit personal notes, study material, imports, credentials, authentication tokens or backups.
- Browser data uses localStorage, not a cloud sync. Notes and recall cards entered in a browser are not automatically published to GitHub. **Exported backup files may contain personal information**; keep them private.
- A public GitHub commit may remain accessible from history, forks or caches even after file edits.

## Running locally

Serve this directory over HTTP, such as `python -m http.server 8000`, then open `http://localhost:8000`.
Run `npm test` to check the narrative engine, and `npm run privacy` for a basic public-source scan.

## Current features

- Project ECHO choice-driven visual novel, character customization, story flags and relationship values.
- Study Keys earned through self-authored active-recall questions; the app does not yet verify the underlying course source.
- Separate fictional evidence investigation with three endings.
- Local notes, timer, save/export/import and offline service worker.

This is a prototype. It is separate from the existing EstudoQuest repository.
