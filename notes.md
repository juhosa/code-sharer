## Things

- Voi tallentaa koodit
  - joka liityy tiettyyn sessioon
- Pitää pystyä luomaan sessio
  - Sessiolla on
    - nimi
    - luontiaika
    - creator
    - uniikki koodi
- Nähdään tietyn session koodit
  - Refresh hakee uudet kamat
  - (future) Reaaliaikainen päivytys

## URLs

- Session luominen
  - `/session/create`
- Session sisällön listaus
  - `/session/[hash]`
- Koodin lisäys
  - `/session/add-code`

## Database

- Taulut
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
    - session_id
