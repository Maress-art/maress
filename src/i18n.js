export const languages = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "de", label: "DE", name: "Deutsch" }
];

export const translations = {
  fr: {
    pageTitle: "Maress | Galerie d'art privée",
    metaDescription:
      "Maress, galerie confidentielle d'une artiste peintre. Tableaux uniques disponibles uniquement sur demande privée.",
    nav: {
      home: "Accueil",
      collection: "Collection",
      about: "À propos",
      contact: "Contact"
    },
    brandLine: "Galerie d'art privée",
    aria: {
      mainNavigation: "Navigation principale",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      close: "Fermer",
      language: "Langue du site",
      artworkDetail: "Détail de l'œuvre"
    },
    hero: {
      eyebrow: "Galerie privée d'oeuvres uniques",
      intro:
        "Chaque œuvre naît d’un souvenir, d’une lumière aperçue ailleurs, d’un paysage qui reste dans le cœur longtemps après le retour. À travers ses voyages, l’artiste recueille des fragments de nature, de silence, de couleurs et d’émotions. La faune, la flore, les horizons lointains et les instants suspendus deviennent alors des tableaux uniques, pensés comme des invitations à ressentir plutôt qu’à simplement regarder.",
      discover: "Découvrir la collection",
      privateRequest: "Demande privée",
      uniquePiece: "Pièce unique",
      viewArtwork: "Voir cette œuvre",
      carouselLabel: "Œuvre mise en avant",
      chooseSlide: "Afficher l'œuvre"
    },
    journey: {
      eyebrow: "Le voyage derrière les œuvres",
      title: "Avant la toile, il y a un lieu, une émotion, une lumière.",
      text:
        "Chaque création Maress prolonge une expérience vécue ailleurs. Le voyage ouvre le regard, l'émotion choisit ce qui restera, puis la peinture transforme ce fragment intime en pièce unique.",
      steps: [
        {
          title: "Voyager",
          text: "Marcher, observer, recueillir les paysages, les matières et les présences qui déplacent le regard."
        },
        {
          title: "Ressentir",
          text: "Laisser une couleur, une lumière ou un silence trouver sa place dans la mémoire."
        },
        {
          title: "Peindre",
          text: "Faire naître une œuvre unique, destinée à poursuivre son chemin dans un autre intérieur."
        }
      ]
    },
    collection: {
      eyebrow: "Collection confidentielle",
      title: "Tableaux disponibles uniquement sur demande",
      dimensions: "Dimensions",
      technique: "Technique",
      price: "Prix",
      status: "Statut",
      detail: "Voir le détail",
      request: "Demander cette œuvre",
      soldButton: "Œuvre vendue",
      imageComing: "Image à venir",
      filtersLabel: "Filtrer la collection",
      all: "Toutes",
      countSingular: "œuvre",
      countPlural: "œuvres",
      empty: "Aucune œuvre ne correspond à ce filtre pour le moment."
    },
    modal: {
      previous: "Œuvre précédente",
      next: "Œuvre suivante",
      acquisition: "Acquisition privée",
      story: "Souvenir de l'œuvre",
      request: "Faire une demande privée"
    },
    about: {
      eyebrow: "À propos",
      title: "Peindre pour prolonger le voyage",
      text:
        "Ses tableaux sont les traces sensibles de ses voyages. Chaque destination lui offre une couleur, une texture, une lumière ou une émotion qu’elle transforme ensuite en œuvre. Peindre devient pour elle une manière de prolonger le voyage, de garder vivant ce qui l’a émerveillée, puis de le transmettre à quelqu’un d’autre. En demandant une œuvre, vous ne choisissez pas simplement un tableau : vous entrez dans une histoire unique et participez à la suite du chemin."
    },
    contact: {
      eyebrow: "Contact",
      title: "Faire une demande privée",
      text:
        "Pour préserver le caractère intime et unique de chaque pièce, les œuvres Maress ne s’achètent pas en un clic. Chaque demande est reçue personnellement afin d’accompagner l’acquisition avec soin.",
      name: "Nom",
      email: "Email",
      artwork: "Œuvre souhaitée",
      chooseArtwork: "Choisir une œuvre",
      soldOption: "vendue",
      message: "Message",
      placeholder: "Bonjour, je souhaiterais recevoir plus d'informations sur cette œuvre...",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      missingEndpoint: "Le formulaire doit encore être relié à Formspree avant de pouvoir envoyer une demande.",
      success: "Votre demande a bien été envoyée. Une réponse personnelle vous sera adressée prochainement.",
      error: "L'envoi n'a pas abouti. Merci de réessayer dans un instant.",
      unspecifiedArtwork: "Œuvre non précisée",
      subject: "Demande privée Maress"
    },
    footer: "Galerie privée · Œuvres uniques · Sur demande",
    footerNote:
      "Chaque acquisition commence par un échange personnel afin de préserver la rareté et l'histoire de chaque pièce.",
    statuses: {
      Disponible: "Disponible",
      Réservé: "Réservé",
      Vendu: "Vendu"
    },
    values: {
      requestPrice: "Prix sur demande",
      toSpecify: "À préciser"
    },
    artworks: {
      "aube-lointaine": {
        shortDescription: "Une lumière immobile veille entre l'immensité de la mer et le silence de la nuit.",
        technique: "Acrylique sur toile",
        detail:
          "Quand le ciel s'efface lentement, une lumière demeure. Entre l'immensité de la mer et le silence de la nuit, elle veille, immobile, guidant ce qui cherche encore son chemin."
      },
      "jardin-apres-la-pluie": {
        shortDescription: "Un départ porté par le vent, là où l'horizon cesse d'être une limite.",
        technique: "Acrylique sur toile",
        detail:
          "Il suffit parfois de quitter le rivage. Porté par le vent et guidé par la lumière, le voyage commence là où l'horizon cesse d'être une limite."
      },
      "sable-memoire": {
        shortDescription: "Un rivage secret sous les fleurs, face aux îles lointaines.",
        technique: "Acrylique sur toile",
        detail:
          "Sous les fleurs, le monde semble ralentir. La mer s'étend jusqu'aux îles lointaines, tandis qu'un rivage secret attend ceux qui prennent encore le temps de regarder."
      },
      "lac-sous-la-lune": {
        shortDescription: "Une nuit profonde où l'eau, les arbres et le ciel se répondent.",
        technique: "Acrylique, poudre de marbre et voile nacré sur toile",
        detail:
          "Peinte après une traversée nocturne près d'un lac forestier, l'oeuvre cherche l'instant où la surface de l'eau devient mémoire, miroir et passage."
      },
      "nouvelle-escale-i": {
        shortDescription: "Une œuvre en attente de son image, déjà pensée comme une trace de voyage.",
        detail:
          "Cette pièce sera prochainement complétée avec son souvenir, ses dimensions, sa technique et sa photographie."
      },
      "nouvelle-escale-ii": {
        shortDescription: "Un fragment sensible à documenter, entre lumière, nature et émotion.",
        detail:
          "Cette pièce sera prochainement complétée avec son souvenir, ses dimensions, sa technique et sa photographie."
      },
      "nouvelle-escale-iii": {
        shortDescription: "Une future invitation au voyage, réservée à une présentation plus intime.",
        detail:
          "Cette pièce sera prochainement complétée avec son souvenir, ses dimensions, sa technique et sa photographie."
      }
    }
  },
  en: {
    pageTitle: "Maress | Private Art Gallery",
    metaDescription:
      "Maress, a private gallery for an artist painter. Unique paintings available only through private inquiry.",
    nav: {
      home: "Home",
      collection: "Collection",
      about: "About",
      contact: "Contact"
    },
    brandLine: "Private art gallery",
    aria: {
      mainNavigation: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      close: "Close",
      language: "Site language",
      artworkDetail: "Artwork detail"
    },
    hero: {
      eyebrow: "Private gallery of unique works",
      intro:
        "Each work begins with a memory, a light glimpsed elsewhere, a landscape that stays in the heart long after returning. Through her travels, the artist gathers fragments of nature, silence, color and emotion. Wildlife, flora, distant horizons and suspended moments become unique paintings, created as invitations to feel rather than simply look.",
      discover: "Discover the collection",
      privateRequest: "Private inquiry",
      uniquePiece: "Unique piece",
      viewArtwork: "View this work",
      carouselLabel: "Featured artwork",
      chooseSlide: "Show artwork"
    },
    journey: {
      eyebrow: "The journey behind the works",
      title: "Before the canvas, there is a place, an emotion, a light.",
      text:
        "Each Maress creation extends an experience lived elsewhere. Travel opens the gaze, emotion chooses what will remain, then painting transforms that intimate fragment into a unique piece.",
      steps: [
        {
          title: "Travel",
          text: "Walk, observe, gather landscapes, textures and presences that shift the way of seeing."
        },
        {
          title: "Feel",
          text: "Let a color, a light or a silence find its place in memory."
        },
        {
          title: "Paint",
          text: "Bring a unique work into being, destined to continue its path in another interior."
        }
      ]
    },
    collection: {
      eyebrow: "Confidential collection",
      title: "Paintings available by private inquiry only",
      dimensions: "Dimensions",
      technique: "Technique",
      price: "Price",
      status: "Status",
      detail: "View details",
      request: "Inquire about this work",
      soldButton: "Artwork sold",
      imageComing: "Image coming soon",
      filtersLabel: "Filter the collection",
      all: "All",
      countSingular: "work",
      countPlural: "works",
      empty: "No work matches this filter for now."
    },
    modal: {
      previous: "Previous artwork",
      next: "Next artwork",
      acquisition: "Private acquisition",
      story: "Artwork memory",
      request: "Make a private inquiry"
    },
    about: {
      eyebrow: "About",
      title: "Painting to extend the journey",
      text:
        "Her paintings are sensitive traces of her travels. Each destination offers her a color, a texture, a light or an emotion that she later transforms into a work. Painting becomes a way to prolong the journey, to keep alive what moved her, then pass it on to someone else. By requesting a work, you are not simply choosing a painting: you are entering a unique story and taking part in the path ahead."
    },
    contact: {
      eyebrow: "Contact",
      title: "Make a private inquiry",
      text:
        "To preserve the intimate and unique character of each piece, Maress works are not purchased in a single click. Each request is received personally so the acquisition can be accompanied with care.",
      name: "Name",
      email: "Email",
      artwork: "Desired work",
      chooseArtwork: "Choose a work",
      soldOption: "sold",
      message: "Message",
      placeholder: "Hello, I would like to receive more information about this work...",
      submit: "Send inquiry",
      sending: "Sending...",
      missingEndpoint: "The form still needs to be connected to Formspree before it can send an inquiry.",
      success: "Your inquiry has been sent. A personal reply will be sent to you soon.",
      error: "The message could not be sent. Please try again in a moment.",
      unspecifiedArtwork: "Unspecified work",
      subject: "Private Maress inquiry"
    },
    footer: "Private gallery · Unique works · By inquiry",
    footerNote:
      "Each acquisition begins with a personal exchange to preserve the rarity and story of every piece.",
    statuses: {
      Disponible: "Available",
      Réservé: "Reserved",
      Vendu: "Sold"
    },
    values: {
      requestPrice: "Price on request",
      toSpecify: "To be confirmed"
    },
    artworks: {
      "aube-lointaine": {
        shortDescription: "A still light watches between the vastness of the sea and the silence of night.",
        technique: "Acrylic on canvas",
        detail:
          "As the sky slowly fades, a light remains. Between the vastness of the sea and the silence of night, it watches, still, guiding what is still searching for its way."
      },
      "jardin-apres-la-pluie": {
        shortDescription: "A departure carried by the wind, where the horizon stops being a limit.",
        technique: "Acrylic on canvas",
        detail:
          "Sometimes, all it takes is leaving the shore. Carried by the wind and guided by light, the journey begins where the horizon stops being a limit."
      },
      "sable-memoire": {
        shortDescription: "A secret shore beneath the blossoms, facing distant islands.",
        technique: "Acrylic on canvas",
        detail:
          "Beneath the blossoms, the world seems to slow down. The sea stretches toward distant islands, while a secret shore waits for those who still take the time to look."
      },
      "lac-sous-la-lune": {
        shortDescription: "A deep night where water, trees and sky answer one another.",
        technique: "Acrylic, marble powder and pearlescent veil on canvas",
        detail:
          "Painted after a nocturnal crossing near a forest lake, the work seeks the moment when the water surface becomes memory, mirror and passage."
      },
      "nouvelle-escale-i": {
        shortDescription: "A work awaiting its image, already imagined as a travel trace.",
        detail:
          "This piece will soon be completed with its memory, dimensions, technique and photograph."
      },
      "nouvelle-escale-ii": {
        shortDescription: "A sensitive fragment to be documented, between light, nature and emotion.",
        detail:
          "This piece will soon be completed with its memory, dimensions, technique and photograph."
      },
      "nouvelle-escale-iii": {
        shortDescription: "A future invitation to travel, reserved for a more intimate presentation.",
        detail:
          "This piece will soon be completed with its memory, dimensions, technique and photograph."
      }
    }
  },
  de: {
    pageTitle: "Maress | Private Kunstgalerie",
    metaDescription:
      "Maress, eine private Galerie einer Malerin. Einzigartige Gemälde nur auf private Anfrage erhältlich.",
    nav: {
      home: "Start",
      collection: "Kollektion",
      about: "Über",
      contact: "Kontakt"
    },
    brandLine: "Private Kunstgalerie",
    aria: {
      mainNavigation: "Hauptnavigation",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      close: "Schließen",
      language: "Sprache der Website",
      artworkDetail: "Werkdetails"
    },
    hero: {
      eyebrow: "Private Galerie einzigartiger Werke",
      intro:
        "Jedes Werk entsteht aus einer Erinnerung, aus einem Licht, das anderswo gesehen wurde, aus einer Landschaft, die lange nach der Rückkehr im Herzen bleibt. Auf ihren Reisen sammelt die Künstlerin Fragmente von Natur, Stille, Farben und Emotionen. Fauna, Flora, ferne Horizonte und schwebende Augenblicke werden zu einzigartigen Gemälden, gedacht als Einladung zum Fühlen und nicht nur zum Betrachten.",
      discover: "Kollektion entdecken",
      privateRequest: "Private Anfrage",
      uniquePiece: "Einzelstück",
      viewArtwork: "Dieses Werk ansehen",
      carouselLabel: "Hervorgehobenes Werk",
      chooseSlide: "Werk anzeigen"
    },
    journey: {
      eyebrow: "Die Reise hinter den Werken",
      title: "Vor der Leinwand gibt es einen Ort, eine Emotion, ein Licht.",
      text:
        "Jede Maress-Kreation verlängert eine Erfahrung, die anderswo erlebt wurde. Die Reise öffnet den Blick, die Emotion wählt, was bleibt, und die Malerei verwandelt dieses intime Fragment in ein Einzelstück.",
      steps: [
        {
          title: "Reisen",
          text: "Gehen, beobachten, Landschaften, Materialien und Präsenzen sammeln, die den Blick verändern."
        },
        {
          title: "Fühlen",
          text: "Eine Farbe, ein Licht oder eine Stille ihren Platz in der Erinnerung finden lassen."
        },
        {
          title: "Malen",
          text: "Ein einzigartiges Werk entstehen lassen, bestimmt dafür, seinen Weg in einem anderen Raum fortzusetzen."
        }
      ]
    },
    collection: {
      eyebrow: "Vertrauliche Kollektion",
      title: "Gemälde nur auf private Anfrage erhältlich",
      dimensions: "Maße",
      technique: "Technik",
      price: "Preis",
      status: "Status",
      detail: "Details ansehen",
      request: "Dieses Werk anfragen",
      soldButton: "Werk verkauft",
      imageComing: "Bild folgt",
      filtersLabel: "Kollektion filtern",
      all: "Alle",
      countSingular: "Werk",
      countPlural: "Werke",
      empty: "Derzeit entspricht kein Werk diesem Filter."
    },
    modal: {
      previous: "Vorheriges Werk",
      next: "Nächstes Werk",
      acquisition: "Privater Erwerb",
      story: "Erinnerung des Werks",
      request: "Private Anfrage stellen"
    },
    about: {
      eyebrow: "Über",
      title: "Malen, um die Reise zu verlängern",
      text:
        "Ihre Gemälde sind sensible Spuren ihrer Reisen. Jedes Ziel schenkt ihr eine Farbe, eine Textur, ein Licht oder eine Emotion, die sie später in ein Werk verwandelt. Malen wird für sie zu einer Art, die Reise fortzusetzen, das Staunen lebendig zu halten und es an jemand anderen weiterzugeben. Wenn Sie ein Werk anfragen, wählen Sie nicht einfach ein Gemälde: Sie treten in eine einzigartige Geschichte ein und nehmen am weiteren Weg teil."
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Private Anfrage stellen",
      text:
        "Um den intimen und einzigartigen Charakter jedes Stücks zu bewahren, werden Maress-Werke nicht mit einem Klick gekauft. Jede Anfrage wird persönlich entgegengenommen, damit der Erwerb sorgfältig begleitet werden kann.",
      name: "Name",
      email: "E-Mail",
      artwork: "Gewünschtes Werk",
      chooseArtwork: "Werk auswählen",
      soldOption: "verkauft",
      message: "Nachricht",
      placeholder: "Guten Tag, ich möchte gerne weitere Informationen zu diesem Werk erhalten...",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      missingEndpoint: "Das Formular muss noch mit Formspree verbunden werden, bevor eine Anfrage gesendet werden kann.",
      success: "Ihre Anfrage wurde gesendet. Sie erhalten in Kürze eine persönliche Antwort.",
      error: "Der Versand war nicht erfolgreich. Bitte versuchen Sie es gleich noch einmal.",
      unspecifiedArtwork: "Nicht angegebenes Werk",
      subject: "Private Maress-Anfrage"
    },
    footer: "Private Galerie · Einzigartige Werke · Auf Anfrage",
    footerNote:
      "Jeder Erwerb beginnt mit einem persönlichen Austausch, um die Seltenheit und Geschichte jedes Stücks zu bewahren.",
    statuses: {
      Disponible: "Verfügbar",
      Réservé: "Reserviert",
      Vendu: "Verkauft"
    },
    values: {
      requestPrice: "Preis auf Anfrage",
      toSpecify: "Noch festzulegen"
    },
    artworks: {
      "aube-lointaine": {
        shortDescription: "Ein unbewegliches Licht wacht zwischen der Weite des Meeres und der Stille der Nacht.",
        technique: "Acryl auf Leinwand",
        detail:
          "Wenn der Himmel langsam verblasst, bleibt ein Licht bestehen. Zwischen der Weite des Meeres und der Stille der Nacht wacht es unbeweglich und leitet, was noch seinen Weg sucht."
      },
      "jardin-apres-la-pluie": {
        shortDescription: "Ein Aufbruch, vom Wind getragen, wo der Horizont keine Grenze mehr ist.",
        technique: "Acryl auf Leinwand",
        detail:
          "Manchmal genügt es, das Ufer zu verlassen. Vom Wind getragen und vom Licht geführt, beginnt die Reise dort, wo der Horizont keine Grenze mehr ist."
      },
      "sable-memoire": {
        shortDescription: "Ein verborgenes Ufer unter Blüten, den fernen Inseln zugewandt.",
        technique: "Acryl auf Leinwand",
        detail:
          "Unter den Blüten scheint die Welt langsamer zu werden. Das Meer reicht bis zu den fernen Inseln, während ein verborgenes Ufer auf jene wartet, die sich noch Zeit zum Schauen nehmen."
      },
      "lac-sous-la-lune": {
        shortDescription: "Eine tiefe Nacht, in der Wasser, Bäume und Himmel einander antworten.",
        technique: "Acryl, Marmorpulver und perlmuttartiger Schleier auf Leinwand",
        detail:
          "Nach einer nächtlichen Überquerung nahe eines Waldsees gemalt, sucht das Werk den Moment, in dem die Wasseroberfläche Erinnerung, Spiegel und Übergang wird."
      },
      "nouvelle-escale-i": {
        shortDescription: "Ein Werk, das noch auf sein Bild wartet und bereits als Reisespur gedacht ist.",
        detail:
          "Dieses Stück wird bald mit seiner Erinnerung, seinen Maßen, seiner Technik und seiner Fotografie ergänzt."
      },
      "nouvelle-escale-ii": {
        shortDescription: "Ein sensibler Ausschnitt, noch zu dokumentieren, zwischen Licht, Natur und Emotion.",
        detail:
          "Dieses Stück wird bald mit seiner Erinnerung, seinen Maßen, seiner Technik und seiner Fotografie ergänzt."
      },
      "nouvelle-escale-iii": {
        shortDescription: "Eine künftige Einladung zur Reise, reserviert für eine intimere Präsentation.",
        detail:
          "Dieses Stück wird bald mit seiner Erinnerung, seinen Maßen, seiner Technik und seiner Fotografie ergänzt."
      }
    }
  }
};
