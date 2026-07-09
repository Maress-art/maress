# Maress

Site vitrine haut de gamme pour une artiste peintre. Les oeuvres sont présentées comme des pièces uniques, sans panier ni paiement en ligne. Toute acquisition passe par une demande privée via le formulaire de contact.

## Lancer le projet

```bash
pnpm install
pnpm dev
```

Le site sera disponible sur l'adresse indiquée par Vite, généralement `http://127.0.0.1:5173/`.

## Construire la version de production

```bash
pnpm build
```

## Modifier les oeuvres

Les données de collection sont centralisées dans `src/artworks.js`.

Chaque oeuvre peut définir :

- `name`
- `image`
- `shortDescription`
- `dimensions`
- `technique`
- `price`
- `status` avec `Disponible`, `Réservé` ou `Vendu`
- `detail`

Les images de remplacement sont dans `public/artworks/`.
