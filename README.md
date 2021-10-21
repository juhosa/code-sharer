# CodeSharer

Share code during lectures.

## Things

- [x] Ability to create a new session
- [x] Ability to save code for a certain session
- [x] Abililty to view codes for certain session
- [x] Extract the supabaseClient into util
- [ ] Figure out an auth scheme
- [ ] Make it pretty
- [ ] Meaningful messages on save success/failure
- [ ] Remove this 'things'-section
  - [ ] and actually write a description
  - [ ] and write the things to-do somewhere else (issue tracker)

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
