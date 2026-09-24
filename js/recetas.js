/* =========================================================
   NUTRIGO - RECETAS SALUDABLES
   17 almuerzos con imágenes específicas
   ========================================================= */

const recetas = [
    {
        id: 1,
        nombre: "Bowl de pollo y verduras",
        categoria: "Almuerzo",
        tiempo: 25,
        precio: 9,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 470,
            proteinas: 42,
            carbohidratos: 44,
            grasas: 14,
            fibra: 6
        },

        ingredientes: [
            "150 g de pechuga de pollo",
            "1/2 taza de arroz integral",
            "1/2 zanahoria",
            "1/2 brócoli",
            "1/4 de pimiento",
            "1 cucharadita de aceite de oliva",
            "Sal y pimienta al gusto"
        ],

        preparacion: [
            "Cocina el arroz integral según las indicaciones del paquete.",
            "Corta el pollo en trozos pequeños y condiméntalo.",
            "Cocina el pollo en una sartén con una cucharadita de aceite.",
            "Agrega la zanahoria, el brócoli y el pimiento.",
            "Sirve el arroz como base y coloca encima el pollo y las verduras."
        ],
        imagen: "https://www.arise-app.com/images/dishes/es/arroz-con-pollo-y-vegetales-1kj31v.webp",

        tags: ["pollo", "verduras", "almuerzo", "saludable"]
    },

    {
        id: 2,
        nombre: "Ensalada fresca de pollo",
        categoria: "Almuerzo",
        tiempo: 15,
        precio: 8,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 330,
            proteinas: 34,
            carbohidratos: 13,
            grasas: 16,
            fibra: 5
        },

        ingredientes: [
            "120 g de pollo cocido",
            "Lechuga",
            "1 tomate",
            "1/2 pepino",
            "1/4 de palta",
            "Limón",
            "Sal y pimienta"
        ],

        preparacion: [
            "Corta la lechuga, el tomate y el pepino.",
            "Corta el pollo previamente cocido.",
            "Agrega la palta en cubos.",
            "Mezcla todos los ingredientes.",
            "Añade limón, sal y pimienta al gusto."
        ],
        imagen: "https://media.airedesantafe.com.ar/p/02785dca138c8a4bff0d72ac9a80228c/adjuntos/268/imagenes/003/801/0003801283/1200x0/smart/como-hacer-la-mejor-ensalada-pollo-saludable-la-receta-perfecta-el-verano.png",

        tags: ["pollo", "verduras", "rápido", "almuerzo"]
    },

    {
        id: 3,
        nombre: "Pescado al horno con verduras",
        categoria: "Almuerzo",
        tiempo: 30,
        precio: 14,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 350,
            proteinas: 35,
            carbohidratos: 28,
            grasas: 11,
            fibra: 5
        },

        ingredientes: [
            "150 g de filete de pescado",
            "1 papa pequeña",
            "1 zanahoria",
            "1/2 zapallito italiano",
            "Limón",
            "Ajo",
            "Pimienta"
        ],

        preparacion: [
            "Precalienta el horno a 200 °C.",
            "Coloca el pescado en una bandeja.",
            "Añade las verduras cortadas.",
            "Agrega limón, ajo y pimienta.",
            "Hornea durante aproximadamente 25 minutos."
        ],
        imagen: "https://avatars.mds.yandex.net/get-vertis-journal/4466156/Ryba_s_ovoshchami_v_duhovke.jpg_1775739156003/1600x1600",

        tags: ["pescado", "verduras", "almuerzo"]
    },

    {
        id: 4,
        nombre: "Tortilla de verduras",
        categoria: "Almuerzo",
        tiempo: 15,
        precio: 6,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 250,
            proteinas: 15,
            carbohidratos: 8,
            grasas: 17,
            fibra: 3
        },

        ingredientes: [
            "2 huevos",
            "1/2 tomate",
            "1/4 de cebolla",
            "Espinaca",
            "1 cucharadita de aceite",
            "Sal y pimienta"
        ],

        preparacion: [
            "Lava y corta las verduras.",
            "Bate los huevos en un recipiente.",
            "Agrega las verduras y mezcla.",
            "Calienta una sartén con poco aceite.",
            "Cocina la tortilla por ambos lados."
        ],
        imagen: "https://www.elconfidencialdigital.com/asset/thumbnail%2C1280%2C720%2Ccenter%2Ccenter/media/elconfidencialdigital/images/2026/02/27/2026022717544037716.jpg",

        tags: ["huevos", "verduras", "rápido", "almuerzo"]
    },

    {
        id: 6,
        nombre: "Lentejas con verduras",
        categoria: "Almuerzo",
        tiempo: 35,
        precio: 7,
        dificultad: "Media",

        nutricion: {
            porcion: "1 porción",
            calorias: 330,
            proteinas: 18,
            carbohidratos: 50,
            grasas: 6,
            fibra: 15
        },

        ingredientes: [
            "1 taza de lentejas",
            "1 zanahoria",
            "1 tomate",
            "1/2 cebolla",
            "1 diente de ajo",
            "Comino",
            "Sal"
        ],

        preparacion: [
            "Lava las lentejas.",
            "Cocínalas en agua hasta que estén suaves.",
            "Prepara un aderezo con cebolla, ajo y tomate.",
            "Agrega la zanahoria y las lentejas.",
            "Cocina unos minutos más y condimenta."
        ],
        imagen: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/lentejas.jpg",

        tags: ["legumbres", "verduras", "almuerzo", "económico"]
    },

    {
        id: 7,
        nombre: "Wrap de pollo y verduras",
        categoria: "Almuerzo",
        tiempo: 15,
        precio: 9,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 wrap",
            calorias: 390,
            proteinas: 30,
            carbohidratos: 35,
            grasas: 15,
            fibra: 6
        },

        ingredientes: [
            "1 tortilla integral",
            "100 g de pollo",
            "Lechuga",
            "Tomate",
            "Zanahoria",
            "Palta"
        ],

        preparacion: [
            "Cocina y corta el pollo.",
            "Coloca la tortilla sobre una superficie limpia.",
            "Agrega las verduras.",
            "Añade el pollo y la palta.",
            "Enrolla la tortilla y sirve."
        ],
        imagen: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/wrap_with_chicken_and_vegetables.jpg",
        tags: ["pollo", "verduras", "rápido", "almuerzo"]
    },

    {
        id: 8,
        nombre: "Arroz con huevo y verduras",
        categoria: "Almuerzo",
        tiempo: 20,
        precio: 6,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 350,
            proteinas: 14,
            carbohidratos: 50,
            grasas: 10,
            fibra: 4
        },

        ingredientes: [
            "1 taza de arroz cocido",
            "2 huevos",
            "Zanahoria",
            "Arvejas",
            "Cebolla",
            "Pimiento"
        ],

        preparacion: [
            "Corta las verduras.",
            "Saltea la cebolla y el pimiento.",
            "Agrega la zanahoria y las arvejas.",
            "Incorpora el arroz.",
            "Agrega los huevos y mezcla hasta que estén cocidos."
        ],
        imagen: "https://i0.wp.com/natirecetascaseras.com/wp-content/uploads/2025/05/gemini_generated_image_f3upxrf3upxrf3up.jpeg?resize=750%2C750&ssl=1",

        tags: ["huevos", "verduras", "económico", "almuerzo"]
    },

    {
        id: 9,
        nombre: "Ensalada de garbanzos",
        categoria: "Almuerzo",
        tiempo: 15,
        precio: 7,
        dificultad: "Muy fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 320,
            proteinas: 12,
            carbohidratos: 44,
            grasas: 11,
            fibra: 11
        },

        ingredientes: [
            "1 taza de garbanzos cocidos",
            "Tomate",
            "Pepino",
            "Cebolla morada",
            "Limón",
            "Perejil"
        ],

        preparacion: [
            "Lava y corta las verduras.",
            "Coloca los garbanzos en un recipiente.",
            "Agrega tomate, pepino y cebolla.",
            "Añade limón y perejil.",
            "Mezcla todos los ingredientes."
        ],
        imagen: "https://simplerecetas.com/assets/images/1735311632680-8ym75l2w.webp?w=1024",

        tags: ["legumbres", "verduras", "económico", "almuerzo"]
    },

    {
        id: 10,
        nombre: "Sopa de verduras",
        categoria: "Almuerzo",
        tiempo: 30,
        precio: 6,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 plato",
            calorias: 190,
            proteinas: 5,
            carbohidratos: 32,
            grasas: 5,
            fibra: 7
        },

        ingredientes: [
            "Papa",
            "Zanahoria",
            "Zapallo",
            "Apio",
            "Cebolla",
            "Agua",
            "Sal"
        ],

        preparacion: [
            "Lava y corta todas las verduras.",
            "Coloca agua en una olla.",
            "Agrega las verduras.",
            "Cocina hasta que estén suaves.",
            "Condimenta al gusto."
        ],
        imagen: "https://tn.com.ar/resizer/v2/el-caldo-de-verduras-de-jordi-cruz-es-ideal-para-combatir-la-hinchazon-imagen-ilustrativa-generada-con-ia-XTA6JDO7BBHKFJ3WE43HL3IHE4.png?auth=f663b0d6232c020af81749891c06f5ddc9933891fa017794b2d21b572ed8ec92&width=1440",

        tags: ["verduras", "económico", "almuerzo"]
    },

    {
        id: 11,
        nombre: "Pasta integral con pollo",
        categoria: "Almuerzo",
        tiempo: 30,
        precio: 11,
        dificultad: "Media",

        nutricion: {
            porcion: "1 porción",
            calorias: 510,
            proteinas: 38,
            carbohidratos: 59,
            grasas: 14,
            fibra: 8
        },

        ingredientes: [
            "100 g de pasta integral",
            "120 g de pollo",
            "Tomate",
            "Cebolla",
            "Ajo",
            "Orégano"
        ],

        preparacion: [
            "Cocina la pasta.",
            "Corta el pollo y cocínalo en una sartén.",
            "Prepara una salsa sencilla con tomate, cebolla y ajo.",
            "Mezcla la pasta con la salsa.",
            "Agrega el pollo y orégano."
        ],
        imagen: "https://www.hola.com/horizon/landscape/b8b921075bfa-pasta-integral-adobe-t.jpg",

        tags: ["pollo", "almuerzo", "pasta"]
    },

    {
        id: 12,
        nombre: "Pechuga de pollo a la plancha",
        categoria: "Almuerzo",
        tiempo: 20,
        precio: 10,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 300,
            proteinas: 43,
            carbohidratos: 8,
            grasas: 10,
            fibra: 3
        },

        ingredientes: [
            "150 g de pechuga de pollo",
            "Lechuga",
            "Tomate",
            "Limón",
            "Pimienta",
            "Orégano"
        ],

        preparacion: [
            "Condimenta la pechuga.",
            "Calienta una sartén.",
            "Cocina el pollo por ambos lados.",
            "Prepara una ensalada con lechuga y tomate.",
            "Sirve el pollo acompañado de la ensalada."
        ],
        imagen: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/pollo_a_la_plancha.jpg",

        tags: ["pollo", "verduras", "almuerzo"]
    },

    {
        id: 14,
        nombre: "Tostadas con palta y huevo",
        categoria: "Almuerzo",
        tiempo: 10,
        precio: 7,
        dificultad: "Muy fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 310,
            proteinas: 12,
            carbohidratos: 27,
            grasas: 18,
            fibra: 7
        },

        ingredientes: [
            "2 tostadas integrales",
            "1/2 palta",
            "1 huevo",
            "Tomate",
            "Pimienta"
        ],

        preparacion: [
            "Tuesta el pan.",
            "Aplasta la palta.",
            "Cocina el huevo.",
            "Coloca la palta sobre las tostadas.",
            "Agrega el huevo y unas rodajas de tomate."
        ],
        imagen: "https://www.stwhh.de/fileadmin/_processed_/e/e/csm_Mensa_PhilTurm_Fruehstueck02_06527790cb.jpg",

        tags: ["huevos", "rápido", "almuerzo"]
    },

    {
        id: 15,
        nombre: "Quinua con verduras",
        categoria: "Almuerzo",
        tiempo: 25,
        precio: 9,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 330,
            proteinas: 11,
            carbohidratos: 48,
            grasas: 10,
            fibra: 7
        },

        ingredientes: [
            "1 taza de quinua",
            "Zanahoria",
            "Brócoli",
            "Pimiento",
            "Cebolla",
            "Aceite de oliva"
        ],

        preparacion: [
            "Lava la quinua.",
            "Cocínala hasta que esté suave.",
            "Corta las verduras.",
            "Saltea las verduras.",
            "Mezcla la quinua con las verduras."
        ],
        imagen: "https://vidasanarecetas.com/quinoa-verduras-salteadas-coloridas.jpg",

        tags: ["verduras", "almuerzo", "quinua"]
    },

    {
        id: 16,
        nombre: "Pescado a la plancha",
        categoria: "Almuerzo",
        tiempo: 20,
        precio: 13,
        dificultad: "Fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 290,
            proteinas: 34,
            carbohidratos: 8,
            grasas: 13,
            fibra: 3
        },

        ingredientes: [
            "150 g de pescado",
            "Limón",
            "Ajo",
            "Ensalada de verduras",
            "Pimienta"
        ],

        preparacion: [
            "Condimenta el pescado con limón y ajo.",
            "Calienta una sartén.",
            "Cocina el pescado por ambos lados.",
            "Prepara una ensalada.",
            "Sirve el pescado acompañado de las verduras."
        ],
        imagen: "https://www.arise-app.com/images/dishes/pt/peixe-grelhado-com-legumes-salteados-1irv99.webp",

        tags: ["pescado", "verduras", "almuerzo"]
    },

    {
        id: 18,
        nombre: "Guiso de garbanzos",
        categoria: "Almuerzo",
        tiempo: 40,
        precio: 8,
        dificultad: "Media",

        nutricion: {
            porcion: "1 porción",
            calorias: 370,
            proteinas: 15,
            carbohidratos: 57,
            grasas: 9,
            fibra: 13
        },

        ingredientes: [
            "1 taza de garbanzos",
            "Tomate",
            "Cebolla",
            "Zanahoria",
            "Papa",
            "Ajo",
            "Comino"
        ],

        preparacion: [
            "Cocina los garbanzos hasta que estén suaves.",
            "Prepara un aderezo con cebolla, ajo y tomate.",
            "Agrega zanahoria y papa.",
            "Incorpora los garbanzos.",
            "Cocina hasta que las verduras estén listas."
        ],
        imagen: "https://i.blogs.es/baab25/estofado/1200_900.jpeg",

        tags: ["legumbres", "verduras", "almuerzo", "económico"]
    },

    {
        id: 19,
        nombre: "Sándwich de pollo saludable",
        categoria: "Almuerzo",
        tiempo: 15,
        precio: 8,
        dificultad: "Muy fácil",

        nutricion: {
            porcion: "1 sándwich",
            calorias: 360,
            proteinas: 29,
            carbohidratos: 34,
            grasas: 12,
            fibra: 6
        },

        ingredientes: [
            "2 rebanadas de pan integral",
            "100 g de pollo",
            "Lechuga",
            "Tomate",
            "Palta"
        ],

        preparacion: [
            "Cocina y corta el pollo.",
            "Coloca lechuga sobre el pan.",
            "Agrega tomate y palta.",
            "Añade el pollo.",
            "Cubre con la otra rebanada."
        ],
        imagen: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chicken_and_avacodo_sandwich.jpg",

        tags: ["pollo", "verduras", "rápido", "almuerzo"]
    },

    {
        id: 20,
        nombre: "Ensalada de huevo y verduras",
        categoria: "Almuerzo",
        tiempo: 12,
        precio: 6,
        dificultad: "Muy fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 240,
            proteinas: 14,
            carbohidratos: 15,
            grasas: 15,
            fibra: 5
        },

        ingredientes: [
            "2 huevos",
            "Lechuga",
            "Tomate",
            "Pepino",
            "Zanahoria",
            "Limón"
        ],

        preparacion: [
            "Cocina los huevos.",
            "Corta las verduras.",
            "Corta los huevos en trozos.",
            "Mezcla todos los ingredientes.",
            "Agrega limón al gusto."
        ],
        imagen: "https://www.makra-kuchnie-swiata.com/media/recipes/hiszpanska-salatka-z-pomidorow-ogorka-i-papryki-z-jajkiem/hiszpanska-salatka-z-pomidorow-ogorka-i-papryki-z-jajkiem-e73d573b.webp",

        tags: ["huevos", "verduras", "rápido", "almuerzo"]
    },

    {
        id: 21,
        nombre: "Ensalada de quinua con pollo",
        categoria: "Almuerzo",
        tiempo: 25,
        precio: 10,
        dificultad: "Fácil",
        nutricion: { porcion: "1 porción", calorias: 410, proteinas: 29, carbohidratos: 35, grasas: 14, fibra: 6 },
        ingredientes: ["Pechuga de pollo", "Quinua cocida", "Tomate cherry", "Pepino", "Cebolla morada", "Palta", "Limón", "Perejil"],
        preparacion: ["Cocina la quinua y deja enfriar.", "Cocina el pollo a la plancha y córtalo en tiras.", "Corta las verduras y la palta.", "Mezcla la quinua con las verduras.", "Agrega el pollo, limón y perejil."],
        imagen: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chicken_qunoa_salad.jpg",
        tags: ["pollo", "quinua", "verduras", "almuerzo"]
    },
    {
        id: 22,
        nombre: "Pollo al curry con arroz integral",
        categoria: "Almuerzo",
        tiempo: 30,
        precio: 10,
        dificultad: "Fácil",
        nutricion: { porcion: "1 porción", calorias: 430, proteinas: 36, carbohidratos: 43, grasas: 13, fibra: 6 },
        ingredientes: ["Pechuga de pollo", "Arroz integral", "Pimiento rojo", "Pimiento amarillo", "Cebolla", "Curry", "Cilantro"],
        preparacion: ["Cocina el arroz integral.", "Corta el pollo y las verduras.", "Dora el pollo con poco aceite.", "Agrega cebolla, pimientos y curry.", "Sirve con el arroz integral y cilantro."],
        imagen: "https://www.arise-app.com/images/dishes/en/chicken-curry-with-brown-rice-and-peppers-zjyhxe.webp",
        tags: ["pollo", "arroz", "verduras", "almuerzo"]
    },
    {
        id: 23,
        nombre: "Pescado con quinua y verduras",
        categoria: "Almuerzo",
        tiempo: 25,
        precio: 12,
        dificultad: "Fácil",
        nutricion: { porcion: "1 porción", calorias: 360, proteinas: 30, carbohidratos: 31, grasas: 11, fibra: 6 },
        ingredientes: ["Filete de pescado", "Quinua cocida", "Zanahoria", "Zapallito italiano", "Espárragos", "Tomate", "Limón"],
        preparacion: ["Cocina la quinua.", "Corta las verduras y saltéalas ligeramente.", "Cocina el pescado a la plancha.", "Coloca la quinua como base.", "Agrega el pescado y las verduras con limón."],
        imagen: "https://cdn.avena.io/avena-recipes-v2/2025/08/dall-e-1754928975860.jpeg",
        tags: ["pescado", "quinua", "verduras", "almuerzo"]
    },
    {
        id: 24,
        nombre: "Causa de atún saludable",
        categoria: "Almuerzo",
        tiempo: 30,
        precio: 9,
        dificultad: "Media",
        nutricion: { porcion: "1 porción", calorias: 390, proteinas: 22, carbohidratos: 47, grasas: 13, fibra: 5 },
        ingredientes: ["Papa amarilla", "Atún en agua", "Palta", "Tomate", "Limón", "Ají amarillo", "Cebolla morada"],
        preparacion: ["Cocina y prensa la papa.", "Mezcla la papa con limón y ají amarillo.", "Prepara el relleno con atún y verduras.", "Arma capas de papa y relleno.", "Decora con palta y tomate."],
        imagen: "https://s3.us-east-2.amazonaws.com/pfimg1/012/2a/9c/2a9c0037f09fdfc67cfcb2b9caf318b1_500x500.jpg",
        tags: ["atún", "papa", "palta", "almuerzo"]
    },
    {
        id: 25,
        nombre: "Tallarines verdes con pollo",
        categoria: "Almuerzo",
        tiempo: 30,
        precio: 10,
        dificultad: "Media",
        nutricion: { porcion: "1 porción", calorias: 480, proteinas: 34, carbohidratos: 52, grasas: 15, fibra: 6 },
        ingredientes: ["Tallarines integrales", "Pechuga de pollo", "Albahaca", "Espinaca", "Ajo", "Queso fresco", "Leche"],
        preparacion: ["Cocina los tallarines integrales.", "Licúa albahaca, espinaca, ajo y un poco de leche.", "Calienta la salsa y agrega queso fresco.", "Cocina el pollo a la plancha.", "Mezcla los tallarines con la salsa y sirve con pollo."],
        imagen: "https://i.pinimg.com/originals/c7/96/e0/c796e0926cbb04d2bf41dd151b32fec5.jpg",
        tags: ["pollo", "pasta", "verduras", "almuerzo"]
    },
    {
        id: 26,
        nombre: "Locro de zapallo con arroz",
        categoria: "Almuerzo",
        tiempo: 35,
        precio: 8,
        dificultad: "Fácil",
        nutricion: { porcion: "1 porción", calorias: 360, proteinas: 11, carbohidratos: 55, grasas: 11, fibra: 7 },
        ingredientes: ["Zapallo macre", "Papa", "Choclo", "Arvejas", "Cebolla", "Ají amarillo", "Queso fresco", "Arroz"],
        preparacion: ["Sofríe la cebolla con ajo y ají amarillo.", "Agrega zapallo, papa, choclo y un poco de agua.", "Cocina hasta que el zapallo esté suave.", "Añade arvejas y queso fresco.", "Sirve con una porción de arroz."],
        imagen: "https://cocatambo.com/sites/default/files/plato-locro-zapallo.webp",
        tags: ["zapallo", "verduras", "arroz", "almuerzo"]
    },
    {
        id: 27,
        nombre: "Frejoles con arroz y ensalada",
        categoria: "Almuerzo",
        tiempo: 40,
        precio: 7,
        dificultad: "Fácil",
        nutricion: { porcion: "1 porción", calorias: 430, proteinas: 17, carbohidratos: 68, grasas: 9, fibra: 15 },
        ingredientes: ["Frejoles cocidos", "Arroz integral", "Cebolla", "Tomate", "Pepino", "Zanahoria", "Limón"],
        preparacion: ["Cocina los frejoles hasta que estén suaves.", "Prepara una porción de arroz integral.", "Corta tomate, pepino y zanahoria.", "Aliña la ensalada con limón.", "Sirve los frejoles con arroz y ensalada."],
        imagen: "https://www.billyparisi.com/wp-content/uploads/2024/04/peruvian-beans-1.jpg",
        tags: ["legumbres", "frejoles", "arroz", "verduras", "almuerzo"]
    },
    {
        id: 28,
        nombre: "Arroz integral con pollo y verduras",
        categoria: "Almuerzo",
        tiempo: 25,
        precio: 9,
        dificultad: "Fácil",
        nutricion: { porcion: "1 porción", calorias: 420, proteinas: 35, carbohidratos: 45, grasas: 12, fibra: 7 },
        ingredientes: ["Pechuga de pollo", "Arroz integral", "Brócoli", "Zanahoria", "Zapallito italiano", "Pimiento rojo"],
        preparacion: ["Cocina el arroz integral.", "Corta el pollo y las verduras.", "Saltea el pollo con poco aceite.", "Agrega las verduras y cocina hasta que estén tiernas.", "Sirve junto al arroz integral."],
        imagen: "https://www.arise-app.com/images/dishes/es/pollo-con-arroz-integral-y-verduras-salteadas-dcg7i5.webp",
        tags: ["pollo", "arroz", "verduras", "almuerzo"]
    },
    {
        id: 29,
        nombre: "Papa rellena de pollo con ensalada",
        categoria: "Almuerzo",
        tiempo: 35,
        precio: 9,
        dificultad: "Media",
        nutricion: { porcion: "1 porción", calorias: 400, proteinas: 27, carbohidratos: 48, grasas: 12, fibra: 6 },
        ingredientes: ["Papa", "Pollo deshilachado", "Cebolla", "Zanahoria", "Lechuga", "Tomate", "Limón"],
        preparacion: ["Cocina y prensa las papas.", "Prepara el pollo deshilachado con cebolla.", "Forma una papa rellena con el pollo.", "Cocina al horno o en sartén antiadherente con poco aceite.", "Sirve con ensalada fresca."],
        imagen: "https://cdn7.kiwilimon.com/ss_secreto/2948/640x640/p_18567.jpg.jpg",
        tags: ["pollo", "papa", "verduras", "almuerzo"]
    },
    {
        id: 30,
        nombre: "Seco de pollo con arroz y verduras",
        categoria: "Almuerzo",
        tiempo: 40,
        precio: 11,
        dificultad: "Media",
        nutricion: { porcion: "1 porción", calorias: 470, proteinas: 32, carbohidratos: 55, grasas: 13, fibra: 6 },
        ingredientes: ["Pollo", "Arroz", "Papa", "Zanahoria", "Culantro", "Ají amarillo", "Cebolla", "Arvejas"],
        preparacion: ["Prepara el aderezo con cebolla, ajo, ají amarillo y culantro.", "Agrega el pollo y cocina hasta dorar ligeramente.", "Añade papa, zanahoria y arvejas con un poco de agua.", "Cocina hasta que el pollo y las verduras estén listos.", "Sirve con una porción moderada de arroz."],
        imagen: "https://www.arise-app.com/images/dishes/es/seco-de-pollo-con-arroz-y-papas-1bcjcg.webp",
        tags: ["pollo", "arroz", "verduras", "almuerzo"]
    },
];


/* =========================================================
   FUNCIONES DE RECETAS Y FAVORITOS
   ========================================================= */

function obtenerRecetaPorId(id) {
    return recetas.find(receta => Number(receta.id) === Number(id));
}

function obtenerFavoritos() {
    try {
        return JSON.parse(localStorage.getItem("nutrigoFavoritos")) || [];
    } catch (error) {
        return [];
    }
}

function guardarFavoritos(favoritos) {
    localStorage.setItem("nutrigoFavoritos", JSON.stringify(favoritos));
}

function esFavorito(id) {
    return obtenerFavoritos().includes(Number(id));
}

function alternarFavorito(id) {
    const numeroId = Number(id);
    let favoritos = obtenerFavoritos();

    if (favoritos.includes(numeroId)) {
        favoritos = favoritos.filter(favoritoId => favoritoId !== numeroId);
    } else {
        favoritos.push(numeroId);
    }

    guardarFavoritos(favoritos);
    return favoritos.includes(numeroId);
}
