/* =========================================================
   NUTRIGO - BASE DE DATOS FICTICIA DE RECETAS
   =========================================================
   
   Los valores nutricionales son estimados por porción.
   Pueden variar según los ingredientes, marcas, cantidades
   y métodos de preparación utilizados.
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

        imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",

        tags: ["pollo", "verduras", "almuerzo", "saludable"]
    },


    {
        id: 2,
        nombre: "Ensalada fresca de pollo",
        categoria: "Ensalada",
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

        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

        tags: ["pollo", "verduras", "ensalada", "rápido"]
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

        imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",

        tags: ["pescado", "verduras", "almuerzo"]
    },


    {
        id: 4,
        nombre: "Tortilla de verduras",
        categoria: "Desayuno",
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

        imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",

        tags: ["huevos", "verduras", "desayuno", "rápido"]
    },


    {
        id: 5,
        nombre: "Avena con plátano y frutas",
        categoria: "Desayuno",
        tiempo: 10,
        precio: 5,
        dificultad: "Muy fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 300,
            proteinas: 7,
            carbohidratos: 58,
            grasas: 6,
            fibra: 8
        },

        ingredientes: [
            "1/2 taza de avena",
            "1 plátano",
            "1/2 taza de fresas",
            "1 taza de agua o leche",
            "Canela al gusto"
        ],

        preparacion: [
            "Coloca la avena y el líquido en una olla.",
            "Cocina durante unos minutos.",
            "Corta el plátano y las fresas.",
            "Sirve la avena.",
            "Agrega las frutas y un poco de canela."
        ],

        imagen: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80",

        tags: ["frutas", "desayuno", "rápido", "avena"]
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

        imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",

        tags: ["legumbres", "verduras", "almuerzo", "económico"]
    },


    {
        id: 7,
        nombre: "Wrap de pollo y verduras",
        categoria: "Cena",
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

        imagen: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",

        tags: ["pollo", "verduras", "cena", "rápido"]
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

        imagen: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",

        tags: ["huevos", "verduras", "económico"]
    },


    {
        id: 9,
        nombre: "Ensalada de garbanzos",
        categoria: "Ensalada",
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

        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

        tags: ["legumbres", "verduras", "ensalada", "económico"]
    },


    {
        id: 10,
        nombre: "Sopa de verduras",
        categoria: "Cena",
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

        imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",

        tags: ["verduras", "cena", "económico"]
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

        imagen: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",

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

        imagen: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",

        tags: ["pollo", "verduras", "almuerzo"]
    },


    {
        id: 13,
        nombre: "Batido de frutas",
        categoria: "Bebida",
        tiempo: 5,
        precio: 5,
        dificultad: "Muy fácil",

        nutricion: {
            porcion: "1 vaso",
            calorias: 180,
            proteinas: 2,
            carbohidratos: 43,
            grasas: 1,
            fibra: 5
        },

        ingredientes: [
            "1 plátano",
            "1/2 taza de fresas",
            "1/2 taza de papaya",
            "1 taza de agua"
        ],

        preparacion: [
            "Lava y corta las frutas.",
            "Coloca todos los ingredientes en la licuadora.",
            "Licúa hasta obtener una mezcla homogénea.",
            "Sirve inmediatamente."
        ],

        imagen: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=800&q=80",

        tags: ["frutas", "bebida", "rápido"]
    },


    {
        id: 14,
        nombre: "Tostadas con palta y huevo",
        categoria: "Desayuno",
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

        imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",

        tags: ["huevos", "desayuno", "rápido"]
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

        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

        tags: ["verduras", "almuerzo", "quinua"]
    },


    {
        id: 16,
        nombre: "Pescado a la plancha",
        categoria: "Cena",
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

        imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",

        tags: ["pescado", "verduras", "cena"]
    },


    {
        id: 17,
        nombre: "Ensalada de frutas",
        categoria: "Postre",
        tiempo: 10,
        precio: 6,
        dificultad: "Muy fácil",

        nutricion: {
            porcion: "1 porción",
            calorias: 190,
            proteinas: 2,
            carbohidratos: 46,
            grasas: 1,
            fibra: 7
        },

        ingredientes: [
            "Plátano",
            "Manzana",
            "Fresas",
            "Papaya",
            "Mandarina"
        ],

        preparacion: [
            "Lava todas las frutas.",
            "Pela las que lo necesiten.",
            "Corta las frutas en trozos.",
            "Colócalas en un recipiente.",
            "Mezcla suavemente y sirve."
        ],

        imagen: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80",

        tags: ["frutas", "postre", "rápido"]
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

        imagen: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",

        tags: ["legumbres", "verduras", "almuerzo", "económico"]
    },


    {
        id: 19,
        nombre: "Sándwich de pollo saludable",
        categoria: "Cena",
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

        imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",

        tags: ["pollo", "verduras", "cena", "rápido"]
    },


    {
        id: 20,
        nombre: "Ensalada de huevo y verduras",
        categoria: "Cena",
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

        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

        tags: ["huevos", "verduras", "cena", "rápido"]
    }
];


/* =========================================================
   FUNCIONES AUXILIARES
   ========================================================= */

function obtenerRecetaPorId(id) {
    return recetas.find(function (receta) {
        return receta.id === Number(id);
    });
}


function obtenerFavoritos() {
    const favoritosGuardados =
        localStorage.getItem("nutrigoFavoritos");

    if (!favoritosGuardados) {
        return [];
    }

    return JSON.parse(favoritosGuardados);
}


function guardarFavoritos(favoritos) {
    localStorage.setItem(
        "nutrigoFavoritos",
        JSON.stringify(favoritos)
    );
}


function esFavorito(id) {
    const favoritos = obtenerFavoritos();

    return favoritos.includes(Number(id));
}


function alternarFavorito(id) {
    id = Number(id);

    let favoritos = obtenerFavoritos();

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(function (favorito) {
            return favorito !== id;
        });

    } else {

        favoritos.push(id);

    }

    guardarFavoritos(favoritos);

    return favoritos.includes(id);
}