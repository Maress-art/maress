import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Check, Feather, Mail, Menu, X } from "lucide-react";
import { artworks } from "./artworks";
import "./styles.css";

const statusClass = {
  Disponible: "available",
  Réservé: "reserved",
  Vendu: "sold"
};

function ArtworkVisual({ artwork, variant = "card" }) {
  if (artwork.image) {
    return <img src={artwork.image} alt={artwork.name} />;
  }

  return (
    <div className={`art-placeholder ${variant}`} aria-label={`Image à venir pour ${artwork.name}`}>
      <span>Image à venir</span>
      <b>{artwork.name}</b>
    </div>
  );
}

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [requestedArtwork, setRequestedArtwork] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredArtwork = useMemo(
    () => artworks.find((artwork) => artwork.status === "Disponible") ?? artworks[0],
    []
  );

  function requestArtwork(artworkName) {
    setRequestedArtwork(artworkName);
    setSelectedArtwork(null);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openArtwork(artwork) {
    setSelectedArtwork(artwork);
  }

  function navTo(section) {
    setMenuOpen(false);
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#accueil" onClick={(event) => event.preventDefault()}>
          Maress
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navigation principale">
          <button onClick={() => navTo("#accueil")}>Accueil</button>
          <button onClick={() => navTo("#collection")}>Collection</button>
          <button onClick={() => navTo("#apropos")}>À propos</button>
          <button onClick={() => navTo("#contact")}>Contact</button>
        </nav>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">Galerie privée d'oeuvres uniques</p>
            <h1>Maress</h1>
            <p className="intro">
              Chaque œuvre naît d’un souvenir, d’une lumière aperçue ailleurs, d’un paysage qui
              reste dans le cœur longtemps après le retour. À travers ses voyages, l’artiste
              recueille des fragments de nature, de silence, de couleurs et d’émotions. La faune,
              la flore, les horizons lointains et les instants suspendus deviennent alors des
              tableaux uniques, pensés comme des invitations à ressentir plutôt qu’à simplement
              regarder.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => navTo("#collection")}>
                Découvrir la collection <ArrowUpRight size={16} />
              </button>
              <button className="quiet-button" onClick={() => requestArtwork(featuredArtwork.name)}>
                Demande privée <Mail size={15} />
              </button>
            </div>
          </div>
          <button className="hero-artwork" type="button" onClick={() => openArtwork(featuredArtwork)}>
            <ArtworkVisual artwork={featuredArtwork} variant="hero" />
            <span>
              <b>{featuredArtwork.name}</b>
              <small>Pièce unique</small>
            </span>
          </button>
        </section>

        <section className="collection-section" id="collection">
          <div className="section-heading">
            <p className="eyebrow">Collection confidentielle</p>
            <h2>Tableaux disponibles uniquement sur demande</h2>
          </div>
          <div className="art-grid">
            {artworks.map((artwork) => {
              const isSold = artwork.status === "Vendu";
              return (
                <article className="art-card" key={artwork.id}>
                  <button className="art-image" type="button" onClick={() => openArtwork(artwork)}>
                    <ArtworkVisual artwork={artwork} />
                  </button>
                  <div className="art-content">
                    <div className="art-title-row">
                      <h3>{artwork.name}</h3>
                      <span className={`status ${statusClass[artwork.status]}`}>{artwork.status}</span>
                    </div>
                    <p>{artwork.shortDescription}</p>
                    <dl>
                      <div>
                        <dt>Dimensions</dt>
                        <dd>{artwork.dimensions}</dd>
                      </div>
                      <div>
                        <dt>Technique</dt>
                        <dd>{artwork.technique}</dd>
                      </div>
                      <div>
                        <dt>Prix</dt>
                        <dd>{artwork.price}</dd>
                      </div>
                    </dl>
                    <div className="card-actions">
                      <button className="text-button" type="button" onClick={() => openArtwork(artwork)}>
                        Voir le détail
                      </button>
                      <button
                        className="request-button"
                        type="button"
                        disabled={isSold}
                        onClick={() => requestArtwork(artwork.name)}
                      >
                        {isSold ? "Œuvre vendue" : "Demander cette œuvre"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-section" id="apropos">
          <div className="about-mark">
            <Feather size={28} />
          </div>
          <div>
            <p className="eyebrow">À propos</p>
            <h2>Peindre pour prolonger le voyage</h2>
          </div>
          <p>
            Ses tableaux sont les traces sensibles de ses voyages. Chaque destination lui offre une
            couleur, une texture, une lumière ou une émotion qu’elle transforme ensuite en œuvre.
            Peindre devient pour elle une manière de prolonger le voyage, de garder vivant ce qui
            l’a émerveillée, puis de le transmettre à quelqu’un d’autre. En demandant une œuvre,
            vous ne choisissez pas simplement un tableau : vous entrez dans une histoire unique et
            participez à la suite du chemin.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Faire une demande privée</h2>
            <p>
              Pour préserver le caractère intime et unique de chaque pièce, les œuvres Maress ne
              s’achètent pas en un clic. Chaque demande est reçue personnellement afin d’accompagner
              l’acquisition avec soin.
            </p>
          </div>
          <form className="contact-form">
            <label>
              Nom
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Œuvre souhaitée
              <select
                name="artwork"
                value={requestedArtwork}
                onChange={(event) => setRequestedArtwork(event.target.value)}
              >
                <option value="">Choisir une œuvre</option>
                {artworks.map((artwork) => (
                  <option key={artwork.id} value={artwork.name} disabled={artwork.status === "Vendu"}>
                    {artwork.name}
                    {artwork.status === "Vendu" ? " — vendue" : ""}
                  </option>
                ))}
              </select>
            </label>
            <label className="full">
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Bonjour, je souhaiterais recevoir plus d'informations sur cette œuvre..."
              />
            </label>
            <button className="primary-button submit-button" type="submit">
              Envoyer la demande <Check size={16} />
            </button>
          </form>
        </section>
      </main>

      <footer>
        <span>Maress</span>
        <span>Galerie privée · Œuvres uniques · Sur demande</span>
      </footer>

      {selectedArtwork && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedArtwork(null)}>
          <section
            className="art-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Détail de l'œuvre ${selectedArtwork.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="icon-button close-button"
              type="button"
              aria-label="Fermer"
              onClick={() => setSelectedArtwork(null)}
            >
              <X size={18} />
            </button>
            <div className="modal-visual">
              <ArtworkVisual artwork={selectedArtwork} variant="modal" />
            </div>
            <div className="modal-copy">
              <p className="eyebrow">Pièce unique</p>
              <h2>{selectedArtwork.name}</h2>
              <p>{selectedArtwork.detail}</p>
              <dl>
                <div>
                  <dt>Dimensions</dt>
                  <dd>{selectedArtwork.dimensions}</dd>
                </div>
                <div>
                  <dt>Technique</dt>
                  <dd>{selectedArtwork.technique}</dd>
                </div>
                <div>
                  <dt>Statut</dt>
                  <dd>{selectedArtwork.status}</dd>
                </div>
              </dl>
              <button
                className="primary-button"
                type="button"
                disabled={selectedArtwork.status === "Vendu"}
                onClick={() => requestArtwork(selectedArtwork.name)}
              >
                {selectedArtwork.status === "Vendu" ? "Œuvre vendue" : "Faire une demande privée"}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
