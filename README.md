# MateBot — build tracker

Public site: https://irlafleur.github.io/matebot-site/

Tracks print hours, filament used, spending and assembly work hours for MateBot, a 3D-printed household humanoid robot (YouTube: [@MyMateBot](https://www.youtube.com/@MyMateBot)).

## Adding an entry

Add one line to `data/journal.csv`. Columns:

`date,type,piece,heures_impression,filament_g,materiau,cout_cad,heures_travail,note,couleur,imprimante`

- `type`: `print`, `purchase` or `assembly`
- `heures_impression`: print hours (decimal), `filament_g`: grams, `cout_cad`: cost in CAD, `heures_travail`: work hours
- `couleur`: colour (e.g. `grey`, `white`), `imprimante`: printer name

Leave unused fields empty. Commit and push; GitHub Pages updates in a minute or two.
