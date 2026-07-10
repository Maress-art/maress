import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Feather, Globe2, Mail, Menu, X } from "lucide-react";
import { artworks } from "./artworks";
import { languages, translations } from "./i18n";
import "./styles.css";

const statusClass = {
  Disponible: "available",
  Réservé: "reserved",
  Vendu: "sold"
};

const collectionFilters = ["all", "Disponible", "Réservé", "Vendu"];
const languageCodes = languages.map((language) => language.code);

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "fr";
  }

  const savedLanguage = window.localStorage.getItem("maress-language");

  if (languageCodes.includes(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.slice(0, 2);
  return languageCodes.includes(browserLanguage) ? browserLanguage : "fr";
}

function ArtworkVisual({ artwork, labels, variant = "card" }) {
  if (artwork.image) {
    return <img src={artwork.image} alt={artwork.name} />;
  }

  return (
    <div className={`art-placeholder ${variant}`} aria-label={`Image à venir pour ${artwork.name}`}>
      <span>{labels.collection.imageComing}</span>
      <b>{artwork.name}</b>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [requestedArtwork, setRequestedArtwork] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [heroArtworkIndex, setHeroArtworkIndex] = useState(0);
  const [collectionFilter, setCollectionFilter] = useState("all");
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const text = translations[language];

  const heroArtworks = artworks.filter((artwork) => artwork.image);
  const featuredArtwork = heroArtworks[heroArtworkIndex] ?? heroArtworks[0];
  const featuredArtworkIsSold = featuredArtwork?.status === "Vendu";

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = text.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", text.metaDescription);
  }, [language, text.metaDescription, text.pageTitle]);

  useEffect(() => {
    if (heroArtworks.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setHeroArtworkIndex((currentIndex) => (currentIndex + 1) % heroArtworks.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [heroArtworks.length]);

  useEffect(() => {
    if (!selectedArtwork) {
      return undefined;
    }

    function handleModalKeys(event) {
      if (event.key === "Escape") {
        setSelectedArtwork(null);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateSelectedArtwork(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateSelectedArtwork(1);
      }
    }

    window.addEventListener("keydown", handleModalKeys);
    return () => window.removeEventListener("keydown", handleModalKeys);
  }, [selectedArtwork]);

  function translateArtwork(artwork) {
    const translatedArtwork = text.artworks[artwork.id] ?? {};
    return {
      ...artwork,
      shortDescription: translatedArtwork.shortDescription ?? artwork.shortDescription,
      technique: translatedArtwork.technique ?? translateValue(artwork.technique),
      price: translateValue(artwork.price),
      dimensions: translateValue(artwork.dimensions),
      detail: translatedArtwork.detail ?? artwork.detail
    };
  }

  function translateValue(value) {
    if (value === "Prix sur demande") {
      return text.values.requestPrice;
    }

    if (value === "À préciser") {
      return text.values.toSpecify;
    }

    return value;
  }

  function translateStatus(status) {
    return text.statuses[status] ?? status;
  }

  function getCollectionFilterLabel(filter) {
    return filter === "all" ? text.collection.all : translateStatus(filter);
  }

  function changeLanguage(nextLanguage) {
    window.localStorage.setItem("maress-language", nextLanguage);
    setLanguage(nextLanguage);
    setMenuOpen(false);
  }

  function requestArtwork(artworkName) {
    setRequestedArtwork(artworkName);
    setSelectedArtwork(null);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openArtwork(artwork) {
    setSelectedArtwork(artwork);
  }

  function navigateSelectedArtwork(direction) {
    setSelectedArtwork((currentArtwork) => {
      if (!currentArtwork) {
        return currentArtwork;
      }

      const currentIndex = artworks.findIndex((artwork) => artwork.id === currentArtwork.id);
      const nextIndex = (currentIndex + direction + artworks.length) % artworks.length;
      return artworks[nextIndex];
    });
  }

  function selectHeroArtwork(index) {
    setHeroArtworkIndex(index);
  }

  function navTo(section) {
    setMenuOpen(false);
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleContactSubmit(event) {
    if (!formEndpoint) {
      event.preventDefault();
      setSubmitStatus("error");
      setSubmitMessage(text.contact.missingEndpoint);
      return;
    }

    const form = event.currentTarget;
    setSubmitStatus("sending");
    setSubmitMessage("");

    window.setTimeout(() => {
      form.reset();
      setRequestedArtwork("");
      setSubmitStatus("success");
      setSubmitMessage(text.contact.success);
    }, 900);
  }

  const translatedFeaturedArtwork = translateArtwork(featuredArtwork);
  const translatedSelectedArtwork = selectedArtwork ? translateArtwork(selectedArtwork) : null;
  const selectedArtworkIndex = selectedArtwork
    ? artworks.findIndex((artwork) => artwork.id === selectedArtwork.id)
    : -1;
  const filteredArtworks = collectionFilter === "all"
    ? artworks
    : artworks.filter((artwork) => artwork.status === collectionFilter);
  const collectionCountLabel = filteredArtworks.length > 1
    ? text.collection.countPlural
    : text.collection.countSingular;

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#accueil" onClick={(event) => event.preventDefault()}>
          <span>Maress</span>
          <small>{text.brandLine}</small>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label={text.aria.mainNavigation}>
          <button onClick={() => navTo("#accueil")}>{text.nav.home}</button>
          <button onClick={() => navTo("#collection")}>{text.nav.collection}</button>
          <button onClick={() => navTo("#apropos")}>{text.nav.about}</button>
          <button onClick={() => navTo("#contact")}>{text.nav.contact}</button>
          <div className="language-switcher" aria-label={text.aria.language}>
            <Globe2 size={15} aria-hidden="true" />
            {languages.map((item) => (
              <button
                key={item.code}
                className={language === item.code ? "active" : ""}
                type="button"
                aria-label={item.name}
                aria-pressed={language === item.code}
                onClick={() => changeLanguage(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? text.aria.closeMenu : text.aria.openMenu}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">{text.hero.eyebrow}</p>
            <h1>Maress</h1>
            <p className="intro">{text.hero.intro}</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => navTo("#collection")}>
                {text.hero.discover} <ArrowUpRight size={16} />
              </button>
              <button
                className="quiet-button"
                disabled={featuredArtworkIsSold}
                onClick={() => requestArtwork(featuredArtwork.name)}
              >
                {featuredArtworkIsSold ? text.collection.soldButton : text.hero.privateRequest} <Mail size={15} />
              </button>
            </div>
          </div>
          <div className="hero-showcase" aria-label={text.hero.carouselLabel}>
            <button className="hero-artwork" type="button" onClick={() => openArtwork(featuredArtwork)}>
              <div className="hero-artwork-frame" key={featuredArtwork.id}>
                <ArtworkVisual artwork={translatedFeaturedArtwork} labels={text} variant="hero" />
              </div>
              <span className="hero-artwork-caption">
                <b>{translatedFeaturedArtwork.name}</b>
                <small>{text.hero.uniquePiece}</small>
              </span>
              <span className="hero-view-link">
                {text.hero.viewArtwork} <ArrowUpRight size={14} />
              </span>
            </button>
            <div className="hero-carousel-meta">
              <span className="hero-carousel-count">
                {String(heroArtworkIndex + 1).padStart(2, "0")} / {String(heroArtworks.length).padStart(2, "0")}
              </span>
              <div className="hero-carousel-dots" aria-label={text.hero.carouselLabel}>
                {heroArtworks.map((artwork, index) => (
                  <button
                    className={index === heroArtworkIndex ? "active" : ""}
                    type="button"
                    aria-label={`${text.hero.chooseSlide} ${artwork.name}`}
                    aria-pressed={index === heroArtworkIndex}
                    key={artwork.id}
                    onClick={() => selectHeroArtwork(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section" aria-labelledby="journey-title">
          <div className="journey-intro">
            <p className="eyebrow">{text.journey.eyebrow}</p>
            <h2 id="journey-title">{text.journey.title}</h2>
            <p>{text.journey.text}</p>
          </div>
          <div className="journey-steps">
            {text.journey.steps.map((step, index) => (
              <article className="journey-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="collection-section" id="collection">
          <div className="collection-top">
            <div className="section-heading">
              <p className="eyebrow">{text.collection.eyebrow}</p>
              <h2>{text.collection.title}</h2>
            </div>
            <div className="collection-tools">
              <span>
                {filteredArtworks.length} {collectionCountLabel}
              </span>
              <div className="collection-filters" aria-label={text.collection.filtersLabel}>
                {collectionFilters.map((filter) => (
                  <button
                    className={collectionFilter === filter ? "active" : ""}
                    key={filter}
                    type="button"
                    aria-pressed={collectionFilter === filter}
                    onClick={() => setCollectionFilter(filter)}
                  >
                    {getCollectionFilterLabel(filter)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="art-grid">
            {filteredArtworks.map((artwork, index) => {
              const isSold = artwork.status === "Vendu";
              const translatedArtwork = translateArtwork(artwork);
              return (
                <article className="art-card" key={artwork.id} style={{ "--reveal-delay": `${index * 70}ms` }}>
                  <button className="art-image" type="button" onClick={() => openArtwork(artwork)}>
                    <ArtworkVisual artwork={translatedArtwork} labels={text} />
                    <span className="art-image-overlay">
                      {text.collection.detail} <ArrowUpRight size={14} />
                    </span>
                  </button>
                  <div className="art-content">
                    <div className="art-title-row">
                      <h3>{translatedArtwork.name}</h3>
                      <span className={`status ${statusClass[artwork.status]}`}>{translateStatus(artwork.status)}</span>
                    </div>
                    <p>{translatedArtwork.shortDescription}</p>
                    <dl>
                      <div>
                        <dt>{text.collection.dimensions}</dt>
                        <dd>{translatedArtwork.dimensions}</dd>
                      </div>
                      <div>
                        <dt>{text.collection.technique}</dt>
                        <dd>{translatedArtwork.technique}</dd>
                      </div>
                      <div>
                        <dt>{text.collection.price}</dt>
                        <dd>{translatedArtwork.price}</dd>
                      </div>
                    </dl>
                    <div className="card-actions">
                      <button className="text-button" type="button" onClick={() => openArtwork(artwork)}>
                        {text.collection.detail}
                      </button>
                      <button
                        className="request-button"
                        type="button"
                        disabled={isSold}
                        onClick={() => requestArtwork(artwork.name)}
                      >
                        {isSold ? text.collection.soldButton : text.collection.request}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {filteredArtworks.length === 0 && <p className="collection-empty">{text.collection.empty}</p>}
        </section>

        <section className="about-section" id="apropos">
          <div className="about-mark">
            <Feather size={28} />
          </div>
          <div>
            <p className="eyebrow">{text.about.eyebrow}</p>
            <h2>{text.about.title}</h2>
          </div>
          <p>{text.about.text}</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">{text.contact.eyebrow}</p>
            <h2>{text.contact.title}</h2>
            <p>{text.contact.text}</p>
          </div>
          <form
            className="contact-form"
            action={formEndpoint || ""}
            method="POST"
            target="formspree-submit"
            onSubmit={handleContactSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value={`${text.contact.subject} - ${requestedArtwork || text.contact.unspecifiedArtwork}`}
            />
            <label>
              {text.contact.name}
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              {text.contact.email}
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              {text.contact.artwork}
              <select
                name="artwork"
                value={requestedArtwork}
                onChange={(event) => setRequestedArtwork(event.target.value)}
              >
                <option value="">{text.contact.chooseArtwork}</option>
                {artworks.map((artwork) => (
                  <option key={artwork.id} value={artwork.name} disabled={artwork.status === "Vendu"}>
                    {artwork.name}
                    {artwork.status === "Vendu" ? ` — ${text.contact.soldOption}` : ""}
                  </option>
                ))}
              </select>
            </label>
            <label className="full">
              {text.contact.message}
              <textarea
                name="message"
                rows="6"
                placeholder={text.contact.placeholder}
              />
            </label>
            <button className="primary-button submit-button" type="submit" disabled={submitStatus === "sending"}>
              {submitStatus === "sending" ? text.contact.sending : text.contact.submit} <Check size={16} />
            </button>
            {submitMessage && (
              <p className={`form-message ${submitStatus === "success" ? "success" : "error"}`}>
                {submitMessage}
              </p>
            )}
          </form>
          <iframe
            className="formspree-frame"
            title="Formspree"
            name="formspree-submit"
            aria-hidden="true"
          />
        </section>
      </main>

      <footer>
        <span>Maress</span>
        <span>{text.footer}</span>
      </footer>

      {selectedArtwork && translatedSelectedArtwork && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedArtwork(null)}>
          <section
            className="art-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${text.aria.artworkDetail} ${translatedSelectedArtwork.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="icon-button close-button"
              type="button"
              aria-label={text.aria.close}
              onClick={() => setSelectedArtwork(null)}
            >
              <X size={18} />
            </button>
            <div className="modal-visual" key={selectedArtwork.id}>
              <ArtworkVisual artwork={translatedSelectedArtwork} labels={text} variant="modal" />
              <div className="modal-visual-meta">
                <span>
                  {String(selectedArtworkIndex + 1).padStart(2, "0")} / {String(artworks.length).padStart(2, "0")}
                </span>
                <span>{text.hero.uniquePiece}</span>
              </div>
            </div>
            <div className="modal-copy">
              <div className="modal-kicker">
                <p className="eyebrow">{text.modal.acquisition}</p>
                <span className={`status ${statusClass[selectedArtwork.status]}`}>
                  {translateStatus(selectedArtwork.status)}
                </span>
              </div>
              <h2>{translatedSelectedArtwork.name}</h2>
              <p className="modal-story-label">{text.modal.story}</p>
              <p className="modal-story">{translatedSelectedArtwork.detail}</p>
              <dl className="modal-specs">
                <div>
                  <dt>{text.collection.dimensions}</dt>
                  <dd>{translatedSelectedArtwork.dimensions}</dd>
                </div>
                <div>
                  <dt>{text.collection.technique}</dt>
                  <dd>{translatedSelectedArtwork.technique}</dd>
                </div>
                <div>
                  <dt>{text.collection.status}</dt>
                  <dd>{translateStatus(selectedArtwork.status)}</dd>
                </div>
              </dl>
              <div className="modal-actions">
                <button
                  className="primary-button"
                  type="button"
                  disabled={selectedArtwork.status === "Vendu"}
                  onClick={() => requestArtwork(selectedArtwork.name)}
                >
                  {selectedArtwork.status === "Vendu" ? text.collection.soldButton : text.modal.request}
                </button>
                <div className="modal-nav">
                  <button type="button" aria-label={text.modal.previous} onClick={() => navigateSelectedArtwork(-1)}>
                    <ArrowLeft size={16} />
                  </button>
                  <button type="button" aria-label={text.modal.next} onClick={() => navigateSelectedArtwork(1)}>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
