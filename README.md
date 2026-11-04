# MateBot — site et journal de construction

Site public : https://irlafleur.github.io/matebot-site/

Le site lit `data/journal.csv` et calcule les totaux (heures d'impression, filament, dépenses, heures de travail).

## Ajouter une ligne

**Sur GitHub (web) :** ouvre `data/journal.csv`, clique sur le crayon ✏️, ajoute une ligne à la fin, puis « Commit changes ». Le site se met à jour en 1 à 2 minutes.

**En local :** modifie le fichier, puis `git commit -am "journal" && git push`.

## Colonnes

| Colonne | Description |
|---|---|
| date | AAAA-MM-JJ |
| type | `impression`, `achat` ou `assemblage` |
| piece | nom de la pièce ou de l'article |
| heures_impression | heures d'impression (ex. 3.5) |
| filament_g | grammes de filament |
| materiau | PETG, TPU… |
| cout_cad | coût en $ CAD (avant taxes) |
| heures_travail | heures d'assemblage / travail |
| note | texte libre (mettre entre guillemets s'il contient une virgule) |

Laisse vide ce qui ne s'applique pas. Exemples :

```
2026-11-07,impression,Doigt index,2.5,18,PETG,,,
2026-11-08,assemblage,Montage des servos,,,,,1.5,
```

Chaque date distincte devient un « Jour » dans la section Journal.
