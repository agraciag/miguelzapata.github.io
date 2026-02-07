// Mapeo de categorías de obras - extraído de WordPress
// Cada categoría tiene su lista de archivos de imagen

export const categories = {
  // Collage - Página 31
  collage: [
    "03.jpg",
    "18.jpg",
    "Aguacilillo-y-picador-1.jpg",
    "Caballero-de-la-mano-en-pecho-1-.jpg",
    "Cardenal-1-.jpg",
    "Estudio-mural-II-1.jpg",
    "Estudio-Mural-VIII-1.jpg",
    "Estudio-mural-XI-1.jpg",
  ],

  // Dibujo - Página 33
  dibujo: [
    "66.jpg",
    "72.jpg",
    "76.jpg",
    "82.jpg",
    "Acordeón-1.jpg",
    "AlfonsoXIII-1-Cuenca.jpg",
    "Atardecer-en-Toledo-1960-1-.jpg",
    "Bailongo-en-la-fonda-España-Cuenca-1.jpg",
    "Caballero-Renacentista-1.jpg",
    "Campesino-camino-de-Pedraza-a-Matilla-1.jpg",
    "César-Borgia-1.jpg",
    "Condotiero-Florencia-1-1.jpg",
    "Condotiero-Florencia-2-1.jpg",
    "Dama-Renacentista-1.jpg",
    "El-botones-del-casino-1.jpg",
    "El-herrero-de-Matilla-1.jpg",
    "Esperando-La-Campichuelense-1.jpg",
    "Estación-La-Campichuelense-1-.jpg",
    "Estudio-General-Lee-1-.jpg",
    "Estudio-proyecto-1-Alfonso-XIII-1-.jpg",
    "Estudio-proyecto-2-Alfonso-XIII-1-.jpg",
    "Estudio-proyecto-3-Alfonso-XIII-1.jpg",
    "Gatamelata-caballero-ecuestre-2-1.jpg",
    "Geometría-1.jpg",
    "Giovana-di-Castelli-1.jpg",
    "GiovannadegliAlbizziCBaja.jpg",
    "Iglesia-de-Monserrat-Madrid-estudio-1.jpg",
  ],

  // Técnica Mixta - Página 39
  tecnicaMixta: [
    "07.jpg",
    "25.jpg",
    "45.jpg",
    "59.jpg",
    "IMG_2419-1.jpg",
    "IMG_9211-1.jpg",
    "Aguacilillo-1.jpg",
    "Caballero-1-.jpg",
    "Caballero-Durero-1-1.jpg",
    "Caballero-Durero-2-1.jpg",
    "Caballero-Durero-6-1.jpg",
    "Caballero-medieval-1.jpg",
    "Cadenal-rojo-busto-1.jpg",
    "Cardenal-2-1.jpg",
    "Cardenal-Z-1..jpg",
    "Congregación-3-1.jpg",
    "Conquiastadores-Pensacola-3-1.jpg",
    "Conquistadores-Pensacola-1-1-.jpg",
    "Conquistadores-Pensacola-2-1.jpg",
    "Doncel-de-Sigénza-1.jpg",
    "El-beso-1.jpg",
    "Familia-Navarro-retrato-1.jpg",
    "Farinata-1.jpg",
    "Gladiadores-.jpg",
    "Gladiadores-1-.jpg",
    "Gladiadores-fragmento-2-1.jpg",
    "Gladiadores-fragmento-3-1-.jpg",
    "Indios-Apalaches-1-1-.jpg",
    "Indios-Apalaches-2-1.jpg",
  ],

  // Grabado - Página 41
  grabado: [
    "CZAPM-12.jpg",
    "CZAPM-1233.jpg",
    "CZAPM-12340.jpg",
    "CZAPM-12341.jpg",
  ],

  // Óleo - Página 44
  oleo: [
    "116.jpg",
    "13.jpg",
    "30.jpg",
    "33.jpg",
  ],

  // Escultura - Página 57
  escultura: [
    "10.jpg",
    "12.jpg",
    "DSC_0070.jpg",
  ],
};

// Nombres en español e inglés para las categorías
export const categoryNames = {
  collage: { es: "Collage", en: "Collage" },
  dibujo: { es: "Dibujo", en: "Drawings" },
  tecnicaMixta: { es: "Técnica Mixta", en: "Mixed Media" },
  grabado: { es: "Grabado", en: "Engraving" },
  oleo: { es: "Óleo", en: "Oil Painting" },
  escultura: { es: "Escultura", en: "Sculpture" },
};

// Slugs de URL para cada idioma
export const categorySlugs = {
  collage: { es: "collage", en: "collage" },
  dibujo: { es: "dibujo", en: "drawings" },
  tecnicaMixta: { es: "tecnica-mixta", en: "mixed-media" },
  grabado: { es: "grabado", en: "engraving" },
  oleo: { es: "oleo", en: "oil-painting" },
  escultura: { es: "escultura", en: "sculpture" },
};

export type CategoryKey = keyof typeof categories;
