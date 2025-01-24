import { Product } from '../interfaces/product.interface';
const products = [
  {
    name: "Gold Anillo Elegante",
    price: 299.99,
    type: "anillos",
    gender: "women",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183237/journal/jawelrly/01-a_ejtsiv.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183236/journal/jawelrly/01-b_dwgztx.jpg",
    ],
    description:
      "Hermoso anillo elegante de oro diseñado para mujeres. Perfecto para ocasiones especiales.",
    slug: "gold_anillo_elegante",
    inStock: 20,
  },
  {
    name: "Silver Aretes Modernos",
    price: 150.49,
    type: "aretes",
    gender: "women",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181747/journal/jawelrly/01-a_fvczdw.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181746/journal/jawelrly/01-b_nc9nqa.jpg",
    ],
    description:
      "Aretes modernos de plata diseñados para mujeres. Elegancia garantizada.",
    slug: "silver_aretes_modernos",
    inStock: 15,
  },
  {
    name: "Gold Pulsera Casual",
    price: 199.99,
    type: "pulseras",
    gender: "men",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183236/journal/jawelrly/02-a_hzo6bh.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183235/journal/jawelrly/02-b_oxritm.jpg",
    ],
    description:
      "Pulsera de oro con diseño casual para hombres. Ideal para el día a día.",
    slug: "gold_pulsera_casual",
    inStock: 25,
  },
  {
    name: "Silver Collar Minimalista",
    price: 250.0,
    type: "collares",
    gender: "unisex",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181746/journal/jawelrly/02-a_l7mgdx.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181746/journal/jawelrly/02-b_ho0uyn.jpg",
    ],
    description:
      "Collar minimalista de plata. Perfecto para cualquier género y ocasión.",
    slug: "silver_collar_minimalista",
    inStock: 10,
  },
  {
    name: "Gold Dijes Brillantes",
    price: 120.0,
    type: "dijes",
    gender: "women",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183235/journal/jawelrly/03-a_rwuze4.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183234/journal/jawelrly/03-b_msjlsb.jpg",
    ],
    description:
      "Hermosos dijes de oro con acabados brillantes. Perfectos para lucir especial.",
    slug: "gold_dijes_brillantes",
    inStock: 30,
  },
  {
    name: "Silver Rosario Clásico",
    price: 99.99,
    type: "rosarios",
    gender: "kid",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181745/journal/jawelrly/03-a_gupg5n.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181746/journal/jawelrly/03-b_x3zpo4.jpg",
    ],
    description:
      "Rosario clásico de plata ideal para niños. Elegancia y sencillez en uno.",
    slug: "silver_rosario_clasico",
    inStock: 18,
  },
  {
    name: "Gold Reloj Premium",
    price: 500.0,
    type: "relojes",
    gender: "men",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183234/journal/jawelrly/04-a_rorhqy.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183234/journal/jawelrly/04-b_iwv6cn.jpg",
    ],
    description:
      "Reloj premium de oro diseñado para hombres. Refinado y funcional.",
    slug: "gold_reloj_premium",
    inStock: 8,
  },
  {
    name: "Silver Broche Estilizado",
    price: 75.99,
    type: "broches",
    gender: "women",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181747/journal/jawelrly/04-a_ph2uzr.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181744/journal/jawelrly/04-b_uy7kov.jpg",
    ],
    description:
      "Broche estilizado de plata. Ideal para complementar tu atuendo.",
    slug: "silver_broche_estilizado",
    inStock: 12,
  },
  {
    name: "Gold Esclava Tradicional",
    price: 180.0,
    type: "esclavas",
    gender: "men",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183233/journal/jawelrly/05-a_nhpzcp.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183232/journal/jawelrly/05-b_noxctz.jpg",
    ],
    description:
      "Esclava tradicional de oro diseñada para hombres. Un clásico que nunca pasa de moda.",
    slug: "gold_esclava_tradicional",
    inStock: 16,
  },
  {
    name: "Silver Piercing Juvenil",
    price: 55.49,
    type: "piercings",
    gender: "unisex",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181741/journal/jawelrly/05-a_qjyij2.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181747/journal/jawelrly/05-b_sv83sk.jpg",
    ],
    description:
      "Piercing juvenil de plata. Perfecto para cualquier género y estilo.",
    slug: "silver_piercing_juvenil",
    inStock: 22,
  },
  {
    name: "Gold Aretes Elegantes",
    price: 140.99,
    type: "aretes",
    gender: "women",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183232/journal/jawelrly/06-a_dve5w6.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183232/journal/jawelrly/06-b_lhoazt.jpg",
    ],
    description: "Aretes elegantes de oro diseñados para realzar tu estilo.",
    slug: "gold_aretes_elegantes",
    inStock: 14,
  },
  {
    name: "Silver Anillo Sofisticado",
    price: 170.0,
    type: "anillos",
    gender: "men",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181747/journal/jawelrly/06-a_iucf4s.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181747/journal/jawelrly/06-b_li2ynr.jpg",
    ],
    description:
      "Anillo sofisticado de plata para hombres. Un toque de elegancia discreta.",
    slug: "silver_anillo_sofisticado",
    inStock: 11,
  },
  {
    name: "Gold Pulsera Infantil",
    price: 90.0,
    type: "pulseras",
    gender: "kid",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183231/journal/jawelrly/07-a_lnhaq8.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183230/journal/jawelrly/07-b_tooud5.jpg",
    ],
    description: "Pulsera infantil de oro con un diseño adorable para niños.",
    slug: "gold_pulsera_infantil",
    inStock: 19,
  },
  {
    name: "Silver Collar Juvenil",
    price: 210.0,
    type: "collares",
    gender: "women",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181742/journal/jawelrly/07-a_yja66x.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181744/journal/jawelrly/07-b_kezr0c.jpg",
    ],
    description: "Collar juvenil de plata con diseño moderno y fresco.",
    slug: "silver_collar_juvenil",
    inStock: 7,
  },
  {
    name: "Gold Rosario Familiar",
    price: 130.0,
    type: "rosarios",
    gender: "unisex",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183230/journal/jawelrly/08-a_idbmse.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183230/journal/jawelrly/08-b_uzvull.jpg",
    ],
    description: "Rosario familiar de oro para compartir momentos de devoción.",
    slug: "gold_rosario_familiar",
    inStock: 10,
  },
  {
    name: "Silver Dijes Personalizados",
    price: 85.49,
    type: "dijes",
    gender: "women",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181742/journal/jawelrly/08-a_muvnjr.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181743/journal/jawelrly/08-b_azbjyj.jpg",
    ],
    description:
      "Dijes personalizados de plata ideales para cualquier ocasión especial.",
    slug: "silver_dijes_personalizados",
    inStock: 13,
  },
  {
    name: "Gold Broche Decorativo",
    price: 100.0,
    type: "broches",
    gender: "women",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183230/journal/jawelrly/09-a_sm4xds.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183230/journal/jawelrly/09-b_vxlanu.jpg",
    ],
    description: "Broche decorativo de oro con detalles únicos.",
    slug: "gold_broche_decorativo",
    inStock: 9,
  },
  {
    name: "Silver Esclava Moderna",
    price: 160.0,
    type: "esclavas",
    gender: "men",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181741/journal/jawelrly/09-a_fxoqbx.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181742/journal/jawelrly/09-b_f7tctt.jpg",
    ],
    description:
      "Esclava moderna de plata para hombres con diseño contemporáneo.",
    slug: "silver_esclava_moderna",
    inStock: 14,
  },
  {
    name: "Gold Piercing Delicado",
    price: 60.0,
    type: "piercings",
    gender: "women",
    material: "gold",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183229/journal/jawelrly/10-a_plxjss.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737183229/journal/jawelrly/10-b_lycoxv.jpg",
    ],
    description:
      "Piercing delicado de oro. Perfecto para complementar tu estilo.",
    slug: "gold_piercing_delicado",
    inStock: 21,
  },
  {
    name: "Silver Reloj Elegante",
    price: 450.0,
    type: "relojes",
    gender: "unisex",
    material: "silver",
    images: [
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181742/journal/jawelrly/10-a_o6jdlz.jpg",
      "https://res.cloudinary.com/dj9huldbs/image/upload/v1737181741/journal/jawelrly/10-b_vmfi0a.jpg",
    ],
    description:
      "Reloj elegante de plata con diseño sofisticado para cualquier género.",
    slug: "silver_reloj_elegante",
    inStock: 6,
  },
];

export default products;
