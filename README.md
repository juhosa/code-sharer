# CodeSharer

Share code during lectures.

## Things

- [x] Ability to create a new session
- [x] Ability to save code for a certain session
- [x] Abililty to view codes for certain session
- [ ] Figure out an auth scheme

## URLs

- Creating a new session
  - `/session/create`
- Listing the contents of a session
  - `/session/[hash]`
- Adding new content for a session
  - `/session/add-code`

## Database

- Tables
  - Sessions
    - id
    - created_at
    - creator
    - hash
  - Codes
    - id
    - created_at
    - creator
    - data
    - session_hash
