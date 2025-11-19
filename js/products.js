const productos = [
  // --- MIEL Y CAFÉ ---
  {
    id: 1,
    name: "MIEL PURA ORGÁNICA 500ML",
    category: "miel-cafe",
    short_desc: "Miel 100% natural de Hacienda Villa Clara, sin procesar, colectada de apiarios ecológicos. Sabor y aroma excepcionales.",
    image: "https://images.unsplash.com/photo-1587049352501-c7fe28e3e294?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "MIEL ESPECIA CON JENGIBRE 500ML",
    category: "miel-cafe",
    short_desc: "Miel pura infusionada con jengibre orgánico de la hacienda. Perfecta para té, desayunos y repostería gourmet.",
    image: "https://images.unsplash.com/photo-1587049352501-c7fe28e3e294?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "CAFÉ MOLIDO PREMIUM 500GR",
    category: "miel-cafe",
    short_desc: "Café molido de primera calidad de las fincas de Hacienda Villa Clara. Aroma intenso, cuerpo robusto y sabor equilibrado.",
    image: "https://images.unsplash.com/photo-1559056169-641a0ac8b8e5?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "CAFÉ EN GRANO 1KG",
    category: "miel-cafe",
    short_desc: "Grano de café selecto de Hacienda Villa Clara. Cultivo en sombra con método tradicional, tostión media-oscura.",
    image: "https://images.unsplash.com/photo-1559056169-641a0ac8b8e5?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "CAFÉ INSTANTÁNEO PREMIUM 200GR",
    category: "miel-cafe",
    short_desc: "Café instantáneo liofilizado, mantiene aroma y sabor original. Preparación instantánea sin perder calidad.",
    image: "https://images.unsplash.com/photo-1559056169-641a0ac8b8e5?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "PROPÓLEO Y POLEN 200GR",
    category: "miel-cafe",
    short_desc: "Combinación de propóleo y polen de abeja pura, rico en antioxidantes y propiedades nutricionales. Superfood natural.",
    image: "https://images.unsplash.com/photo-1587049352501-c7fe28e3e294?w=400&h=300&fit=crop"
  },

  // --- GANADO ---
  {
    id: 7,
    name: "TERNERO CRIOLLO ROJO",
    category: "ganado",
    short_desc: "Ternero criollo de 8-12 meses, raza pura, perfecto para engorde o reproducción. Excelente adaptabilidad al clima tropical.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "VACA LECHERA HOLSTEIN",
    category: "ganado",
    short_desc: "Vaca Holstein de alta producción lechera, 4-6 años de edad, en óptimas condiciones de salud y productividad.",
    image: "https://images.unsplash.com/photo-1527525543587-6b1553a1e44a?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    name: "CORDERO DORPER",
    category: "ganado",
    short_desc: "Cordero raza Dorper de 6 meses, ideal para carne, con excelente ganancia de peso y conversión alimenticia.",
    image: "https://images.unsplash.com/photo-1548094096-f3df4518e719?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    name: "CERDO PIETRAIN",
    category: "ganado",
    short_desc: "Cerdo raza Pietrain de 4-5 meses, magro, con excelente calidad de carne y crecimiento rápido.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    name: "GALLINAS PONEDORAS LOHMANN",
    category: "ganado",
    short_desc: "Lote de 10 gallinas ponedoras raza Lohmann, 18-20 semanas, lista para producción de huevos de excelente calidad.",
    image: "https://images.unsplash.com/photo-1585110422820-e91c3e15ef92?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    name: "CABALLO CUARTO DE MILLA",
    category: "ganado",
    short_desc: "Caballo Cuarto de Milla de 3 años, manso y dócil, ideal para trabajo en campo o monta recreativa.",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop"
  },

  // --- MAQUINARIA Y HERRAMIENTAS ---
  {
    id: 13,
    name: "MOTOBOMBA 5.5 HP PARA RIEGO",
    category: "maquinaria",
    short_desc: "Motobomba gasolina 5.5 HP, caudal 50 m³/h, ideal para riego de cultivos y abastecimiento de agua.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop"
  },
  {
    id: 14,
    name: "MOTOCULTOR 8 HP CON ACCESORIOS",
    category: "maquinaria",
    short_desc: "Motocultor de 8 HP, incluye arados y deshierba, perfecto para preparación de terreno en pequeños a medianos cultivos.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
  },
  {
    id: 15,
    name: "PULVERIZADOR DE MOCHILA 16L",
    category: "maquinaria",
    short_desc: "Pulverizador manual de 16 litros con manguera y pistola, ideal para aplicar fungicidas, insecticidas y herbicidas.",
    image: "https://images.unsplash.com/photo-1618614951857-86f06d1baf10?w=400&h=300&fit=crop"
  },
  {
    id: 16,
    name: "MOTOSERRA ECHO 51CC",
    category: "maquinaria",
    short_desc: "Motoserra gasolina Echo 51CC, potente y versátil para poda de árboles y corte de leña.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"
  },

  // --- SEMILLAS Y CULTIVOS ---
  {
    id: 17,
    name: "SEMILLAS DE MAÍZ HIBRIDO P30F53",
    category: "semillas",
    short_desc: "Semillas de maíz híbrido de alto rendimiento, 25 kg, adaptadas a clima tropical, producción garantizada.",
    image: "https://images.unsplash.com/photo-1599599810694-2508a0d5d4b7?w=400&h=300&fit=crop"
  },
  {
    id: 18,
    name: "SEMILLAS DE SOYA VARIEDAD TROPICAL",
    category: "semillas",
    short_desc: "Semillas de soya certificadas, 20 kg, excelente para rotación de cultivos y alto contenido proteico.",
    image: "https://images.unsplash.com/photo-1500595046891-ef6ba914d2d5?w=400&h=300&fit=crop"
  },
  {
    id: 19,
    name: "PASTURA KIKUYO - SEMILLA POR KG",
    category: "semillas",
    short_desc: "Semilla de pastura Kikuyo de excelente calidad, germinación garantizada, ideal para ganadería intensiva.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
  },

  // --- ALIMENTOS PARA ANIMALES ---
  {
    id: 20,
    name: "CONCENTRADO PARA GANADO 50 KG",
    category: "alimentos-animales",
    short_desc: "Alimento balanceado para ganado bovino, enriquecido con minerales y vitaminas, 50 kg por bolsa.",
    image: "https://images.unsplash.com/photo-1619451334792-250ba93c2a13?w=400&h=300&fit=crop"
  },
  {
    id: 21,
    name: "BALANCEADO PARA AVES 40 KG",
    category: "alimentos-animales",
    short_desc: "Alimento especializado para gallinas ponedoras, optimiza producción de huevos, 40 kg por bolsa.",
    image: "https://images.unsplash.com/photo-1585110422820-e91c3e15ef92?w=400&h=300&fit=crop"
  },
  {
    id: 22,
    name: "MELAZA PARA ENGORDE 25 KG",
    category: "alimentos-animales",
    short_desc: "Suplemento energético a base de melaza, ideal para acelerar engorde en bovinos y ovinos.",
    image: "https://images.unsplash.com/photo-1619451334792-250ba93c2a13?w=400&h=300&fit=crop"
  }
];
