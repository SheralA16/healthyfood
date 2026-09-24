// ============================================================
// NUTRIGO - APP.JS
// Lógica principal de la aplicación
// ============================================================


// ============================================================
// 1. REFERENCIAS A PANTALLAS
// ============================================================

const pantallaInicio =
    document.getElementById("pantalla-inicio");

const pantallaPerfil =
    document.getElementById("pantalla-perfil");

const pantallaLogin =
    document.getElementById("pantalla-login");

const pantallaRecetas =
    document.getElementById("pantalla-recetas");

const pantallaDetalleReceta =
    document.getElementById("pantalla-detalle-receta");

const pantallaRetos =
    document.getElementById("pantalla-retos");

const pantallaProgreso =
    document.getElementById("pantalla-progreso");

const pantallaMas =
    document.getElementById("pantalla-mas");


// ============================================================
// 2. BOTONES PRINCIPALES
// ============================================================

const btnComenzar =
    document.getElementById("btn-comenzar");

const btnLoginHero =
    document.getElementById("btn-login-hero");

const btnLoginHeader =
    document.getElementById("btn-login-header");

const btnVolverPerfil =
    document.getElementById("btn-volver-perfil");

const btnCrearPerfil =
    document.getElementById("btn-crear-perfil");

const btnVolverLogin =
    document.getElementById("btn-volver-login");

const btnIrRegistro =
    document.getElementById("btn-ir-registro");


// ============================================================
// 3. FORMULARIOS
// ============================================================

const formularioPerfil =
    document.getElementById("formulario-perfil");

const formularioLogin =
    document.getElementById("formulario-login");


// ============================================================
// 4. NAVEGACIÓN
// ============================================================

const navInicio =
    document.getElementById("nav-inicio");

const navRecetas =
    document.getElementById("nav-recetas");

const navRetos =
    document.getElementById("nav-retos");

const navProgreso =
    document.getElementById("nav-progreso");

const navMas =
    document.getElementById("nav-mas");


// ============================================================
// 5. RECETAS
// ============================================================

const buscadorRecetas =
    document.getElementById("buscador-recetas");

const filtrosRecetas =
    document.querySelectorAll(".filtro-receta");

const gridRecetas =
    document.getElementById("grid-recetas");


// ============================================================
// 6. DETALLE DE RECETA
// ============================================================

const detalleNombre =
    document.getElementById("detalle-nombre");

const detalleImagen =
    document.getElementById("detalle-imagen");

const detalleCategoria =
    document.getElementById("detalle-categoria");

const detalleTiempo =
    document.getElementById("detalle-tiempo");

const detallePrecio =
    document.getElementById("detalle-precio");

const detalleDificultad =
    document.getElementById("detalle-dificultad");

const detalleIngredientes =
    document.getElementById("detalle-ingredientes");

const detallePreparacion =
    document.getElementById("detalle-preparacion");

const btnFavorito =
    document.getElementById("btn-favorito");

const btnVolverRecetas =
    document.getElementById("btn-volver-recetas");


// ------------------------------------------------------------
// INFORMACIÓN NUTRICIONAL
// ------------------------------------------------------------

const detallePorcion =
    document.getElementById("detalle-porcion");

const detalleCalorias =
    document.getElementById("detalle-calorias");

const detalleProteinas =
    document.getElementById("detalle-proteinas");

const detalleCarbohidratos =
    document.getElementById("detalle-carbohidratos");

const detalleGrasas =
    document.getElementById("detalle-grasas");

const detalleFibra =
    document.getElementById("detalle-fibra");


// ============================================================
// 7. RETOS
// ============================================================

const gridRetos =
    document.getElementById("grid-retos");


// ============================================================
// 8. RECOMENDACIONES EN INICIO
// ============================================================

const recomendacionesUsuario =
    document.getElementById("recomendaciones-usuario");

const gridRecomendaciones =
    document.getElementById("grid-recomendaciones");

const textoRecomendaciones =
    document.getElementById("texto-recomendaciones");


// ============================================================
// 9. PREFERENCIAS
// ============================================================

const formularioPreferencias =
    document.getElementById("formulario-preferencias");

const btnGuardarPreferencias =
    document.getElementById("btn-guardar-preferencias");

const mensajePreferencias =
    document.getElementById("mensaje-preferencias");

const btnPreferencias =
    document.getElementById("btn-preferencias");


// ============================================================
// 10. MI PERFIL
// ============================================================

const btnMiPerfil =
    document.getElementById("btn-mi-perfil");

const contenedorMiPerfil =
    document.getElementById("contenedor-mi-perfil");

const formularioMiPerfil =
    document.getElementById("formulario-mi-perfil");

const btnCerrarMiPerfil =
    document.getElementById("btn-cerrar-mi-perfil");

const mensajeMiPerfil =
    document.getElementById("mensaje-mi-perfil");


// ============================================================
// 11. CLAVES DE LOCALSTORAGE
// ============================================================

const CLAVE_PERFIL =
    "nutrigoPerfil";

const CLAVE_SESION =
    "nutrigoSesion";

const CLAVE_RETOS =
    "nutrigoRetos";


// ============================================================
// 12. DATOS DE RETOS
// ============================================================

const retos = [

    {
        id: 1,
        titulo: "Reto del agua",
        descripcion:
            "Toma al menos 6 vasos de agua durante el día.",
        icono: "💧"
    },

    {
        id: 2,
        titulo: "Reto de frutas",
        descripcion:
            "Incluye al menos una fruta en tu alimentación.",
        icono: "🍎"
    },

    {
        id: 3,
        titulo: "Reto de actividad",
        descripcion:
            "Realiza 30 minutos de actividad física.",
        icono: "🚶"
    },

    {
        id: 4,
        titulo: "Reto del descanso",
        descripcion:
            "Procura dormir aproximadamente 8 horas.",
        icono: "😴"
    },

    {
        id: 5,
        titulo: "Reto de verduras",
        descripcion:
            "Incluye verduras en una de tus comidas.",
        icono: "🥗"
    },

    {
        id: 6,
        titulo: "Comida saludable",
        descripcion:
            "Realiza una comida equilibrada durante el día.",
        icono: "🍽️"
    }

];


// ============================================================
// 13. FUNCIONES DE SESIÓN
// ============================================================

function obtenerSesionActiva() {

    return (
        localStorage.getItem(
            CLAVE_SESION
        ) === "activa"
    );

}


function obtenerPerfil() {

    const perfilGuardado =
        localStorage.getItem(
            CLAVE_PERFIL
        );


    if (!perfilGuardado) {

        return null;

    }


    try {

        return JSON.parse(
            perfilGuardado
        );

    } catch (error) {

        console.error(
            "No se pudo leer el perfil:",
            error
        );

        return null;

    }

}


// ============================================================
// 14. CONTROL DE PANTALLAS
// ============================================================

function mostrarPantalla(pantalla) {

    if (!pantalla) {

        return;

    }


    const pantallas = [

        pantallaInicio,
        pantallaPerfil,
        pantallaLogin,
        pantallaRecetas,
        pantallaDetalleReceta,
        pantallaRetos,
        pantallaProgreso,
        pantallaMas

    ];


    pantallas.forEach(
        function (elemento) {

            if (elemento) {

                elemento.classList.remove(
                    "activa"
                );

            }

        }
    );


    pantalla.classList.add(
        "activa"
    );


    // En las pantallas de registro e inicio de sesión
    // ocultamos "Inicio" del menú para evitar navegación duplicada.
    const esPantallaAutenticacion =
        pantalla === pantallaPerfil ||
        pantalla === pantallaLogin;

    if (navInicio) {

        navInicio.style.display =
            esPantallaAutenticacion
                ? "none"
                : "";

    }


    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}


// ============================================================
// 15. PROTECCIÓN DE PANTALLAS
// ============================================================

function usuarioPuedeAcceder() {

    if (!obtenerSesionActiva()) {

        mostrarLogin();

        return false;

    }

    return true;

}


// ============================================================
// 16. NAVEGACIÓN SEGÚN SESIÓN
// ============================================================

function actualizarInterfazSesion() {

    const sesionActiva =
        obtenerSesionActiva();


    if (navRecetas) {

        navRecetas.style.display =
            sesionActiva
                ? ""
                : "none";

    }


    if (navRetos) {

        navRetos.style.display =
            sesionActiva
                ? ""
                : "none";

    }


    if (navProgreso) {

        navProgreso.style.display =
            sesionActiva
                ? ""
                : "none";

    }


    if (navMas) {

        navMas.style.display =
            sesionActiva
                ? ""
                : "none";

    }


    // --------------------------------------------------------
    // Botón Comenzar
    // --------------------------------------------------------

    if (btnComenzar) {

        btnComenzar.style.display =
            sesionActiva
                ? "none"
                : "";

    }


    // --------------------------------------------------------
    // Botón Login Hero
    // --------------------------------------------------------

    if (btnLoginHero) {

        btnLoginHero.style.display =
            sesionActiva
                ? "none"
                : "";

    }


    // --------------------------------------------------------
    // Botón Login Header
    // --------------------------------------------------------

    if (btnLoginHeader) {

        if (sesionActiva) {

            btnLoginHeader.textContent =
                "Cerrar sesión";

            btnLoginHeader.classList.add(
                "sesion-activa"
            );

        } else {

            btnLoginHeader.textContent =
                "Iniciar sesión";

            btnLoginHeader.classList.remove(
                "sesion-activa"
            );

        }

    }


    // --------------------------------------------------------
    // Recomendaciones
    // --------------------------------------------------------

    if (sesionActiva) {

        mostrarRecomendaciones();

    } else {

        ocultarRecomendaciones();

    }


    // --------------------------------------------------------
    // Ocultar sección de beneficios
    // --------------------------------------------------------

    actualizarInicioSesion();

}


// ============================================================
// 17. MOSTRAR REGISTRO
// ============================================================

function mostrarRegistro() {

    if (formularioPerfil) {

        formularioPerfil.reset();

    }


    mostrarPantalla(
        pantallaPerfil
    );

}


// ============================================================
// 18. MOSTRAR LOGIN
// ============================================================

function mostrarLogin() {

    if (formularioLogin) {

        formularioLogin.reset();

    }


    const mensajeLogin =
        document.getElementById(
            "mensaje-login"
        );


    if (mensajeLogin) {

        mensajeLogin.textContent =
            "";

        mensajeLogin.className =
            "mensaje";

    }


    mostrarPantalla(
        pantallaLogin
    );

}


// ============================================================
// 19. CERRAR SESIÓN
// ============================================================

function cerrarSesion() {

    localStorage.removeItem(
        CLAVE_SESION
    );


    actualizarInterfazSesion();


    mostrarPantalla(
        pantallaInicio
    );


    cambiarNavegacion(
        navInicio
    );

}


// ============================================================
// 20. OBTENER CHECKBOXES
// ============================================================

function obtenerValoresCheckbox(nombre) {

    const seleccionados =
        document.querySelectorAll(
            'input[name="' +
            nombre +
            '"]:checked'
        );


    return Array.from(
        seleccionados
    ).map(
        function (input) {

            return input.value;

        }
    );

}


// ============================================================
// 21. REGISTRO DE PERFIL
// ============================================================

if (formularioPerfil) {

    formularioPerfil.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            const nombre =
                document.getElementById(
                    "nombre"
                );

            const edad =
                document.getElementById(
                    "edad"
                );

            const peso =
                document.getElementById(
                    "peso"
                );

            const altura =
                document.getElementById(
                    "altura"
                );

            const email =
                document.getElementById(
                    "email"
                );

            const password =
                document.getElementById(
                    "password"
                );

            const objetivo =
                document.getElementById(
                    "objetivo"
                );

            const tiempo =
                document.getElementById(
                    "tiempo"
                );

            const presupuesto =
                document.getElementById(
                    "presupuesto"
                );


            if (
                !nombre ||
                !edad ||
                !peso ||
                !altura ||
                !email ||
                !password ||
                !objetivo ||
                !tiempo ||
                !presupuesto
            ) {

                console.error(
                    "Faltan campos del formulario de perfil."
                );

                return;

            }


            const emailIngresado =
                email.value
                    .trim()
                    .toLowerCase();

            const passwordIngresada =
                password.value;


            if (
                passwordIngresada.length < 6
            ) {

                alert(
                    "La contraseña debe tener al menos 6 caracteres."
                );

                return;

            }


            const perfilExistente =
                obtenerPerfil();


            if (
                perfilExistente &&
                perfilExistente.email &&
                perfilExistente.email
                    .toLowerCase() ===
                emailIngresado
            ) {

                alert(
                    "Ya existe un perfil registrado con este correo. Puedes iniciar sesión."
                );

                mostrarLogin();

                return;

            }


            const preferencias =
                obtenerValoresCheckbox(
                    "preferencias"
                );


            const evitar =
                obtenerValoresCheckbox(
                    "evitar"
                );


            const perfil = {

                nombre:
                    nombre.value.trim(),

                edad:
                    Number(
                        edad.value
                    ),

                peso:
                    Number(
                        peso.value
                    ),

                altura:
                    Number(
                        altura.value
                    ),

                email:
                    emailIngresado,

                password:
                    passwordIngresada,

                objetivo:
                    objetivo.value,

                tiempo:
                    tiempo.value,

                presupuesto:
                    presupuesto.value,

                preferencias:
                    preferencias,

                evitar:
                    evitar

            };


            localStorage.setItem(

                CLAVE_PERFIL,

                JSON.stringify(
                    perfil
                )

            );


            localStorage.setItem(

                CLAVE_SESION,

                "activa"

            );


            alert(
                "¡Perfil creado correctamente! Bienvenido/a a NutriGo."
            );


            actualizarInterfazSesion();


            mostrarPantalla(
                pantallaInicio
            );

        }
    );

}


// ============================================================
// 22. LOGIN
// ============================================================

if (formularioLogin) {

    formularioLogin.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            const emailLogin =
                document.getElementById(
                    "email-login"
                );

            const passwordLogin =
                document.getElementById(
                    "password-login"
                );

            const mensajeLogin =
                document.getElementById(
                    "mensaje-login"
                );


            if (
                !emailLogin ||
                !passwordLogin
            ) {

                return;

            }


            const emailIngresado =
                emailLogin.value
                    .trim()
                    .toLowerCase();


            const passwordIngresada =
                passwordLogin.value;


            const perfil =
                obtenerPerfil();


            if (!perfil) {

                if (mensajeLogin) {

                    mensajeLogin.textContent =
                        "No existe un perfil registrado. Crea tu perfil primero.";

                    mensajeLogin.className =
                        "mensaje error";

                }

                return;

            }


            const emailCorrecto =
                perfil.email &&
                perfil.email
                    .toLowerCase() ===
                emailIngresado;


            const passwordCorrecta =
                perfil.password ===
                passwordIngresada;


            if (
                emailCorrecto &&
                passwordCorrecta
            ) {

                localStorage.setItem(

                    CLAVE_SESION,

                    "activa"

                );


                if (mensajeLogin) {

                    mensajeLogin.textContent =
                        "Inicio de sesión correcto.";

                    mensajeLogin.className =
                        "mensaje exito";

                }


                actualizarInterfazSesion();


                setTimeout(
                    function () {

                        mostrarPantalla(
                            pantallaInicio
                        );

                    },
                    400
                );


            } else {

                if (mensajeLogin) {

                    mensajeLogin.textContent =
                        "Correo o contraseña incorrectos.";

                    mensajeLogin.className =
                        "mensaje error";

                }

            }

        }
    );

}


// ============================================================
// 23. NAVEGACIÓN
// ============================================================

function cambiarNavegacion(elemento) {

    if (!elemento) {

        return;

    }


    const navegaciones = [

        navInicio,
        navRecetas,
        navRetos,
        navProgreso,
        navMas

    ];


    navegaciones.forEach(
        function (nav) {

            if (nav) {

                nav.classList.remove(
                    "activo"
                );

            }

        }
    );


    elemento.classList.add(
        "activo"
    );

}


// ============================================================
// 24. NAVEGACIÓN: INICIO
// ============================================================

if (navInicio) {

    navInicio.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                pantallaInicio
            );

            cambiarNavegacion(
                navInicio
            );

        }
    );

}


// ============================================================
// 25. NAVEGACIÓN: RECETAS
// ============================================================

if (navRecetas) {

    navRecetas.addEventListener(
        "click",
        function () {

            if (!usuarioPuedeAcceder()) {

                return;

            }


            mostrarPantalla(
                pantallaRecetas
            );


            cambiarNavegacion(
                navRecetas
            );


            renderizarRecetas();

        }
    );

}


// ============================================================
// 26. NAVEGACIÓN: RETOS
// ============================================================

if (navRetos) {

    navRetos.addEventListener(
        "click",
        function () {

            if (!usuarioPuedeAcceder()) {

                return;

            }


            mostrarPantalla(
                pantallaRetos
            );


            cambiarNavegacion(
                navRetos
            );


            renderizarRetos();

        }
    );

}


// ============================================================
// 27. NAVEGACIÓN: PROGRESO
// ============================================================

if (navProgreso) {

    navProgreso.addEventListener(
        "click",
        function () {

            if (!usuarioPuedeAcceder()) {

                return;

            }


            mostrarPantalla(
                pantallaProgreso
            );


            cambiarNavegacion(
                navProgreso
            );

        }
    );

}


// ============================================================
// 28. NAVEGACIÓN: MÁS
// ============================================================

if (navMas) {

    navMas.addEventListener(
        "click",
        function () {

            if (!usuarioPuedeAcceder()) {

                return;

            }


            ocultarFormularioPreferencias();

            ocultarFormularioMiPerfil();


            mostrarPantalla(
                pantallaMas
            );


            cambiarNavegacion(
                navMas
            );

        }
    );

}


// ============================================================
// 29. BOTÓN COMENZAR
// ============================================================

if (btnComenzar) {

    btnComenzar.addEventListener(
        "click",
        function () {

            if (
                obtenerSesionActiva()
            ) {

                mostrarPantalla(
                    pantallaInicio
                );

                return;

            }


            mostrarRegistro();

        }
    );

}


// ============================================================
// 30. LOGIN DESDE HERO
// ============================================================

if (btnLoginHero) {

    btnLoginHero.addEventListener(
        "click",
        function () {

            mostrarLogin();

        }
    );

}


// ============================================================
// 31. LOGIN DESDE HEADER
// ============================================================

if (btnLoginHeader) {

    btnLoginHeader.addEventListener(
        "click",
        function () {

            if (
                obtenerSesionActiva()
            ) {

                cerrarSesion();

            } else {

                mostrarLogin();

            }

        }
    );

}


// ============================================================
// 32. VOLVER DESDE REGISTRO
// ============================================================

if (btnVolverPerfil) {

    btnVolverPerfil.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                pantallaInicio
            );

        }
    );

}


// ============================================================
// 33. VOLVER DESDE LOGIN
// ============================================================

if (btnVolverLogin) {

    btnVolverLogin.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                pantallaInicio
            );

        }
    );

}


// ============================================================
// 34. IR A REGISTRO DESDE LOGIN
// ============================================================

if (btnIrRegistro) {

    btnIrRegistro.addEventListener(
        "click",
        function () {

            mostrarRegistro();

        }
    );

}


// ============================================================
// 35. BÚSQUEDA DE RECETAS
// ============================================================

if (buscadorRecetas) {

    buscadorRecetas.addEventListener(
        "input",
        function () {

            renderizarRecetas();

        }
    );

}


// ============================================================
// 36. FILTROS DE RECETAS
// ============================================================

filtrosRecetas.forEach(
    function (filtro) {

        filtro.addEventListener(
            "click",
            function () {

                filtrosRecetas.forEach(
                    function (otroFiltro) {

                        otroFiltro.classList.remove(
                            "activo"
                        );

                    }
                );


                filtro.classList.add(
                    "activo"
                );


                renderizarRecetas();

            }
        );

    }
);


// ============================================================
// 37. CONSTRUIR TEXTO DE RECETA
// ============================================================

function obtenerTextoReceta(receta) {

    let texto = "";


    texto +=
        " " +
        (receta.nombre || "");


    texto +=
        " " +
        (receta.categoria || "");


    texto +=
        " " +
        (receta.dificultad || "");


    if (
        Array.isArray(
            receta.tags
        )
    ) {

        texto +=
            " " +
            receta.tags.join(" ");

    }


    if (
        Array.isArray(
            receta.ingredientes
        )
    ) {

        texto +=
            " " +
            receta.ingredientes.join(" ");

    }


    return texto.toLowerCase();

}


// ============================================================
// 38. COMPROBAR PREFERENCIAS
// ============================================================

function recetaCoincideConPreferencia(
    receta,
    preferencia
) {

    const texto =
        obtenerTextoReceta(
            receta
        );


    const palabras = {

        pollo: [
            "pollo"
        ],

        pescado: [
            "pescado",
            "atún",
            "atun",
            "merluza",
            "bonito"
        ],

        verduras: [
            "verdura",
            "verduras",
            "espinaca",
            "espinacas",
            "zanahoria",
            "tomate",
            "pepino",
            "brócoli",
            "brocoli",
            "lechuga",
            "zapallo",
            "calabacín",
            "calabacin"
        ],

        frutas: [
            "fruta",
            "frutas",
            "manzana",
            "plátano",
            "platano",
            "banana",
            "fresa",
            "fresas",
            "papaya",
            "naranja",
            "mandarina",
            "piña",
            "pina",
            "mango"
        ],

        legumbres: [
            "lenteja",
            "lentejas",
            "frijol",
            "frijoles",
            "garbanzo",
            "garbanzos",
            "menestra"
        ],

        huevos: [
            "huevo",
            "huevos"
        ]

    };


    const terminos =
        palabras[preferencia] ||
        [preferencia];


    return terminos.some(
        function (termino) {

            return texto.includes(
                termino.toLowerCase()
            );

        }
    );

}


// ============================================================
// 39. ALIMENTOS A EVITAR
// ============================================================

function recetaContieneAlimentoEvitado(
    receta,
    evitar
) {

    const texto =
        obtenerTextoReceta(
            receta
        );


    const palabrasEvitar = {

        res: [
            "carne de res",
            "res",
            "carne"
        ],

        mariscos: [
            "marisco",
            "mariscos",
            "camarón",
            "camaron",
            "langostino",
            "langostinos"
        ],

        lacteos: [
            "leche",
            "queso",
            "yogur",
            "yogurt",
            "lácteo",
            "lacteo",
            "mantequilla"
        ],

        procesados: [
            "procesado",
            "procesados",
            "embutido",
            "embutidos",
            "salchicha",
            "salchichas",
            "jamón",
            "jamon"
        ]

    };


    const terminos =
        palabrasEvitar[evitar] ||
        [evitar];


    return terminos.some(
        function (termino) {

            return texto.includes(
                termino.toLowerCase()
            );

        }
    );

}


// ============================================================
// 40. CALCULAR PUNTAJE DE RECOMENDACIÓN
// ============================================================

function calcularPuntajeReceta(
    receta,
    perfil
) {

    let puntaje = 0;


    const preferencias =
        Array.isArray(
            perfil.preferencias
        )
            ? perfil.preferencias
            : [];


    const evitar =
        Array.isArray(
            perfil.evitar
        )
            ? perfil.evitar
            : [];


    preferencias.forEach(
        function (preferencia) {

            if (
                recetaCoincideConPreferencia(
                    receta,
                    preferencia
                )
            ) {

                puntaje += 3;

            }

        }
    );


    evitar.forEach(
        function (alimento) {

            if (
                recetaContieneAlimentoEvitado(
                    receta,
                    alimento
                )
            ) {

                puntaje -= 100;

            }

        }
    );


    const tiempoReceta =
        Number(
            receta.tiempo
        );


    if (
        perfil.tiempo === "15"
    ) {

        if (
            tiempoReceta <= 15
        ) {

            puntaje += 2;

        }

    } else if (
        perfil.tiempo === "30"
    ) {

        if (
            tiempoReceta <= 30
        ) {

            puntaje += 2;

        }

    }


    const precioReceta =
        Number(
            receta.precio
        );


    if (
        perfil.presupuesto === "0-10"
    ) {

        if (
            precioReceta <= 10
        ) {

            puntaje += 2;

        }

    } else if (
        perfil.presupuesto === "11-20"
    ) {

        if (
            precioReceta <= 20
        ) {

            puntaje += 2;

        }

    }


    return puntaje;

}


// ============================================================
// 41. OBTENER RECETAS PERSONALIZADAS
// ============================================================

function obtenerRecetasPersonalizadas(
    limite = 6
) {

    const perfil =
        obtenerPerfil();


    if (
        !perfil ||
        !Array.isArray(recetas)
    ) {

        return [];

    }


    let recetasDisponibles =
        recetas.filter(
            function (receta) {

                const evitar =
                    Array.isArray(
                        perfil.evitar
                    )
                        ? perfil.evitar
                        : [];


                return !evitar.some(
                    function (alimento) {

                        return recetaContieneAlimentoEvitado(
                            receta,
                            alimento
                        );

                    }
                );

            }
        );


    const recetasConPuntaje =
        recetasDisponibles.map(
            function (receta) {

                return {

                    receta:
                        receta,

                    puntaje:
                        calcularPuntajeReceta(
                            receta,
                            perfil
                        )

                };

            }
        );


    recetasConPuntaje.sort(
        function (a, b) {

            return (
                b.puntaje -
                a.puntaje
            );

        }
    );


    const preferencias =
        Array.isArray(
            perfil.preferencias
        )
            ? perfil.preferencias
            : [];


    if (
        preferencias.length > 0
    ) {

        const conCoincidencia =
            recetasConPuntaje.filter(
                function (item) {

                    return (
                        item.puntaje >= 3
                    );

                }
            );


        if (
            conCoincidencia.length > 0
        ) {

            return conCoincidencia
                .slice(0, limite)
                .map(
                    function (item) {

                        return item.receta;

                    }
                );

        }

    }


    return recetasConPuntaje
        .slice(0, limite)
        .map(
            function (item) {

                return item.receta;

            }
        );

}


// ============================================================
// 42. CREAR TARJETA DE RECETA
// ============================================================

function crearTarjetaReceta(
    receta
) {

    const tarjeta =
        document.createElement(
            "article"
        );


    tarjeta.className =
        "tarjeta-receta";


    const favorito =
        typeof esFavorito === "function"
            ? esFavorito(
                receta.id
            )
            : false;


    tarjeta.innerHTML = `

        <div class="imagen-receta">

            <img
                src="${receta.imagen}"
                alt="${receta.nombre}"
            >

            <button
                class="boton-favorito"
                data-favorito="${receta.id}"
                aria-label="Agregar a favoritos"
            >
                ${favorito
            ? "❤️"
            : "♡"
        }
            </button>

        </div>

        <div class="contenido-receta">

            <span class="categoria-receta">
                ${receta.categoria || ""}
            </span>

            <h3>
                ${receta.nombre}
            </h3>

            <div class="datos-receta">

                <span>
                    ⏱️ ${receta.tiempo} min
                </span>

                <span>
                    💰 S/
                    ${Number(
            receta.precio
        ).toFixed(2)}
                </span>

            </div>

            <button
                class="btn-ver-receta"
                data-receta="${receta.id}"
            >
                Ver receta
            </button>

        </div>
    `;


    const botonFavorito =
        tarjeta.querySelector(
            "[data-favorito]"
        );


    if (
        botonFavorito
    ) {

        botonFavorito.addEventListener(
            "click",
            function (evento) {

                evento.stopPropagation();


                if (
                    typeof alternarFavorito ===
                    "function"
                ) {

                    alternarFavorito(
                        receta.id
                    );


                    renderizarRecetas();

                }

            }
        );

    }


    const botonVer =
        tarjeta.querySelector(
            "[data-receta]"
        );


    if (
        botonVer
    ) {

        botonVer.addEventListener(
            "click",
            function () {

                mostrarDetalleReceta(
                    receta.id
                );

            }
        );

    }


    return tarjeta;

}


// ============================================================
// 43. RENDERIZAR RECETAS
// ============================================================

function renderizarRecetas() {

    if (!gridRecetas) {

        return;

    }


    let recetasFiltradas =
        Array.isArray(recetas)
            ? [...recetas]
            : [];


    const textoBusqueda =
        buscadorRecetas
            ? buscadorRecetas.value
                .trim()
                .toLowerCase()
            : "";


    if (
        textoBusqueda
    ) {

        recetasFiltradas =
            recetasFiltradas.filter(
                function (receta) {

                    return obtenerTextoReceta(
                        receta
                    ).includes(
                        textoBusqueda
                    );

                }
            );

    }


    let filtroActivo =
        "todas";


    filtrosRecetas.forEach(
        function (filtro) {

            if (
                filtro.classList.contains(
                    "activo"
                )
            ) {

                filtroActivo =
                    filtro.dataset.filtro ||
                    "todas";

            }

        }
    );


    switch (filtroActivo) {

        case "15":

            recetasFiltradas =
                recetasFiltradas.filter(
                    function (receta) {

                        return Number(
                            receta.tiempo
                        ) <= 15;

                    }
                );

            break;


        case "30":

            recetasFiltradas =
                recetasFiltradas.filter(
                    function (receta) {

                        return Number(
                            receta.tiempo
                        ) <= 30;

                    }
                );

            break;


        case "economicas":

            recetasFiltradas =
                recetasFiltradas.filter(
                    function (receta) {

                        return Number(
                            receta.precio
                        ) <= 10;

                    }
                );

            break;


        case "almuerzos":

            recetasFiltradas =
                recetasFiltradas.filter(
                    function (receta) {

                        return (
                            receta.categoria &&
                            receta.categoria
                                .toLowerCase()
                                .includes(
                                    "almuerzo"
                                )
                        );

                    }
                );

            break;

    }

    gridRecetas.innerHTML =
        "";


    if (
        recetasFiltradas.length === 0
    ) {

        gridRecetas.innerHTML = `

            <div class="sin-resultados">

                <h3>
                    No encontramos recetas
                </h3>

                <p>
                    Intenta cambiar la búsqueda o el filtro.
                </p>

            </div>

        `;

        return;

    }


    recetasFiltradas.forEach(
        function (receta) {

            gridRecetas.appendChild(
                crearTarjetaReceta(
                    receta
                )
            );

        }
    );

}


// ============================================================
// 44. MOSTRAR DETALLE DE RECETA
// ============================================================

function mostrarDetalleReceta(
    id
) {

    if (
        !usuarioPuedeAcceder()
    ) {

        return;

    }


    if (
        typeof obtenerRecetaPorId !==
        "function"
    ) {

        console.error(
            "No existe obtenerRecetaPorId()."
        );

        return;

    }


    const receta =
        obtenerRecetaPorId(
            id
        );


    if (!receta) {

        return;

    }


    if (detalleNombre) {

        detalleNombre.textContent =
            receta.nombre;

    }


    if (detalleImagen) {

        detalleImagen.src =
            receta.imagen;

        detalleImagen.alt =
            receta.nombre;

    }


    if (detalleCategoria) {

        detalleCategoria.textContent =
            receta.categoria || "";

    }


    if (detalleTiempo) {

        detalleTiempo.textContent =
            "⏱️ " +
            receta.tiempo +
            " min";

    }


    if (detallePrecio) {

        detallePrecio.textContent =
            "💰 S/ " +
            Number(
                receta.precio
            ).toFixed(2);

    }


    if (detalleDificultad) {

        detalleDificultad.textContent =
            receta.dificultad || "";

    }


    // --------------------------------------------------------
    // INFORMACIÓN NUTRICIONAL
    // --------------------------------------------------------

    if (receta.nutricion) {

        if (detallePorcion) {

            detallePorcion.textContent =
                receta.nutricion.porcion ||
                "Por porción";

        }


        if (detalleCalorias) {

            detalleCalorias.textContent =
                Number(
                    receta.nutricion.calorias || 0
                ) +
                " kcal";

        }


        if (detalleProteinas) {

            detalleProteinas.textContent =
                Number(
                    receta.nutricion.proteinas || 0
                ) +
                " g";

        }


        if (detalleCarbohidratos) {

            detalleCarbohidratos.textContent =
                Number(
                    receta.nutricion.carbohidratos || 0
                ) +
                " g";

        }


        if (detalleGrasas) {

            detalleGrasas.textContent =
                Number(
                    receta.nutricion.grasas || 0
                ) +
                " g";

        }


        if (detalleFibra) {

            detalleFibra.textContent =
                Number(
                    receta.nutricion.fibra || 0
                ) +
                " g";

        }

    } else {

        // Si alguna receta todavía no tiene
        // información nutricional, mostramos 0.

        if (detallePorcion) {

            detallePorcion.textContent =
                "Por porción";

        }


        if (detalleCalorias) {

            detalleCalorias.textContent =
                "0 kcal";

        }


        if (detalleProteinas) {

            detalleProteinas.textContent =
                "0 g";

        }


        if (detalleCarbohidratos) {

            detalleCarbohidratos.textContent =
                "0 g";

        }


        if (detalleGrasas) {

            detalleGrasas.textContent =
                "0 g";

        }


        if (detalleFibra) {

            detalleFibra.textContent =
                "0 g";

        }

    }


    if (detalleIngredientes) {

        detalleIngredientes.innerHTML =
            "";


        if (
            Array.isArray(
                receta.ingredientes
            )
        ) {

            receta.ingredientes.forEach(
                function (
                    ingrediente
                ) {

                    const li =
                        document.createElement(
                            "li"
                        );


                    li.textContent =
                        ingrediente;


                    detalleIngredientes.appendChild(
                        li
                    );

                }
            );

        }

    }


    if (detallePreparacion) {

        detallePreparacion.innerHTML =
            "";


        if (
            Array.isArray(
                receta.preparacion
            )
        ) {

            receta.preparacion.forEach(
                function (
                    paso,
                    indice
                ) {

                    const li =
                        document.createElement(
                            "li"
                        );


                    li.textContent =
                        (
                            indice + 1
                        ) +
                        ". " +
                        paso;


                    detallePreparacion.appendChild(
                        li
                    );

                }
            );

        } else {

            detallePreparacion.textContent =
                receta.preparacion || "";

        }

    }


    actualizarBotonFavorito(
        receta.id
    );


    mostrarPantalla(
        pantallaDetalleReceta
    );

}


// ============================================================
// 45. ACTUALIZAR BOTÓN FAVORITO
// ============================================================

function actualizarBotonFavorito(
    id
) {

    if (!btnFavorito) {

        return;

    }


    const favorito =
        typeof esFavorito ===
            "function"
            ? esFavorito(id)
            : false;


    btnFavorito.textContent =
        favorito
            ? "❤️ Favorito"
            : "♡ Agregar a favoritos";


    btnFavorito.dataset.id =
        id;

}


// ============================================================
// 46. BOTÓN FAVORITO DEL DETALLE
// ============================================================

if (btnFavorito) {

    btnFavorito.addEventListener(
        "click",
        function () {

            const id =
                Number(
                    btnFavorito.dataset.id
                );


            if (
                id &&
                typeof alternarFavorito ===
                "function"
            ) {

                alternarFavorito(
                    id
                );


                actualizarBotonFavorito(
                    id
                );


                renderizarRecetas();

            }

        }
    );

}


// ============================================================
// 47. VOLVER A RECETAS
// ============================================================

if (btnVolverRecetas) {

    btnVolverRecetas.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                pantallaRecetas
            );


            cambiarNavegacion(
                navRecetas
            );

        }
    );

}


// ============================================================
// 48. MOSTRAR RECOMENDACIONES
// ============================================================

function mostrarRecomendaciones() {

    if (
        !recomendacionesUsuario ||
        !gridRecomendaciones
    ) {

        return;

    }


    const perfil =
        obtenerPerfil();


    if (!perfil) {

        ocultarRecomendaciones();

        return;

    }


    const recomendaciones =
        obtenerRecetasPersonalizadas(
            6
        );


    recomendacionesUsuario.style.display =
        "block";


    gridRecomendaciones.innerHTML =
        "";


    if (textoRecomendaciones) {

        const preferencias =
            Array.isArray(
                perfil.preferencias
            )
                ? perfil.preferencias
                : [];


        if (
            preferencias.length > 0
        ) {

            textoRecomendaciones.textContent =
                "Seleccionamos estas recetas tomando en cuenta tus preferencias de alimentación.";

        } else {

            textoRecomendaciones.textContent =
                "Estas recetas fueron seleccionadas para ayudarte a comenzar con una alimentación saludable.";

        }

    }


    if (
        recomendaciones.length === 0
    ) {

        gridRecomendaciones.innerHTML = `

            <div class="sin-resultados">

                <h3>
                    Estamos preparando tus recomendaciones
                </h3>

                <p>
                    Explora nuestra colección de recetas saludables.
                </p>

            </div>

        `;

        return;

    }


    recomendaciones.forEach(
        function (receta) {

            gridRecomendaciones.appendChild(
                crearTarjetaReceta(
                    receta
                )
            );

        }
    );

}


// ============================================================
// 49. OCULTAR RECOMENDACIONES
// ============================================================

function ocultarRecomendaciones() {

    if (
        recomendacionesUsuario
    ) {

        recomendacionesUsuario.style.display =
            "none";

    }

}


// ============================================================
// 50. RETOS
// ============================================================

function obtenerRetosCompletados() {

    const datos =
        localStorage.getItem(
            CLAVE_RETOS
        );


    if (!datos) {

        return [];

    }


    try {

        return JSON.parse(
            datos
        );

    } catch (error) {

        return [];

    }

}


function guardarRetosCompletados(
    retosCompletados
) {

    localStorage.setItem(

        CLAVE_RETOS,

        JSON.stringify(
            retosCompletados
        )

    );

}


function renderizarRetos() {

    if (!gridRetos) {

        return;

    }


    const completados =
        obtenerRetosCompletados();


    gridRetos.innerHTML =
        "";


    retos.forEach(
        function (reto) {

            const completado =
                completados.includes(
                    reto.id
                );


            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.className =
                "tarjeta-reto" +
                (
                    completado
                        ? " completado"
                        : ""
                );


            tarjeta.innerHTML = `

                <div class="icono-reto">
                    ${reto.icono}
                </div>

                <div class="contenido-reto">

                    <h3>
                        ${reto.titulo}
                    </h3>

                    <p>
                        ${reto.descripcion}
                    </p>

                    <button
                        class="btn-reto"
                        data-reto="${reto.id}"
                    >
                        ${completado
                    ? "✓ Completado"
                    : "Marcar como completado"
                }
                    </button>

                </div>

            `;


            const boton =
                tarjeta.querySelector(
                    "[data-reto]"
                );


            if (boton) {

                boton.addEventListener(
                    "click",
                    function () {

                        alternarReto(
                            reto.id
                        );

                    }
                );

            }


            gridRetos.appendChild(
                tarjeta
            );

        }
    );

}


function alternarReto(
    id
) {

    let completados =
        obtenerRetosCompletados();


    if (
        completados.includes(id)
    ) {

        completados =
            completados.filter(
                function (retoId) {

                    return (
                        retoId !== id
                    );

                }
            );

    } else {

        completados.push(
            id
        );

    }


    guardarRetosCompletados(
        completados
    );


    renderizarRetos();

}


// ============================================================
// 51. PREFERENCIAS DESDE MÁS
// ============================================================

function cargarPreferenciasEnFormulario() {

    const perfil =
        obtenerPerfil();


    if (!perfil) {

        return;

    }


    const preferencias =
        Array.isArray(
            perfil.preferencias
        )
            ? perfil.preferencias
            : [];


    const evitar =
        Array.isArray(
            perfil.evitar
        )
            ? perfil.evitar
            : [];


    document
        .querySelectorAll(
            'input[name="preferencias"]'
        )
        .forEach(
            function (input) {

                input.checked =
                    preferencias.includes(
                        input.value
                    );

            }
        );


    document
        .querySelectorAll(
            'input[name="evitar"]'
        )
        .forEach(
            function (input) {

                input.checked =
                    evitar.includes(
                        input.value
                    );

            }
        );

}


// ============================================================
// 52. ABRIR PREFERENCIAS
// ============================================================

if (btnPreferencias) {

    btnPreferencias.addEventListener(
        "click",
        function () {

            if (
                !usuarioPuedeAcceder()
            ) {

                return;

            }


            ocultarFormularioMiPerfil();


            cargarPreferenciasEnFormulario();


            if (
                formularioPreferencias
            ) {

                formularioPreferencias.style.display =
                    "block";

            }

        }
    );

}


// ============================================================
// 53. GUARDAR PREFERENCIAS
// ============================================================

if (formularioPreferencias) {

    formularioPreferencias.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            const perfil =
                obtenerPerfil();


            if (!perfil) {

                return;

            }


            perfil.preferencias =
                obtenerValoresCheckbox(
                    "preferencias"
                );


            perfil.evitar =
                obtenerValoresCheckbox(
                    "evitar"
                );


            localStorage.setItem(

                CLAVE_PERFIL,

                JSON.stringify(
                    perfil
                )

            );


            if (
                mensajePreferencias
            ) {

                mensajePreferencias.textContent =
                    "Tus preferencias se actualizaron correctamente.";

                mensajePreferencias.className =
                    "mensaje exito";

            }


            mostrarRecomendaciones();

            renderizarRecetas();


            setTimeout(
                function () {

                    ocultarFormularioPreferencias();

                },
                1000
            );

        }
    );

}


// ============================================================
// 54. OCULTAR FORMULARIO DE PREFERENCIAS
// ============================================================

function ocultarFormularioPreferencias() {

    if (
        formularioPreferencias
    ) {

        formularioPreferencias.style.display =
            "none";

    }

}


// ============================================================
// 55. CARGAR DATOS DE MI PERFIL
// ============================================================

function cargarMiPerfil() {

    const perfil =
        obtenerPerfil();


    if (!perfil) {

        return;

    }


    const perfilNombre =
        document.getElementById(
            "perfil-nombre"
        );

    const perfilEdad =
        document.getElementById(
            "perfil-edad"
        );

    const perfilPeso =
        document.getElementById(
            "perfil-peso"
        );

    const perfilAltura =
        document.getElementById(
            "perfil-altura"
        );

    const perfilEmail =
        document.getElementById(
            "perfil-email"
        );

    const perfilObjetivo =
        document.getElementById(
            "perfil-objetivo"
        );

    const perfilTiempo =
        document.getElementById(
            "perfil-tiempo"
        );

    const perfilPresupuesto =
        document.getElementById(
            "perfil-presupuesto"
        );


    if (perfilNombre) {

        perfilNombre.value =
            perfil.nombre || "";

    }


    if (perfilEdad) {

        perfilEdad.value =
            perfil.edad || "";

    }


    if (perfilPeso) {

        perfilPeso.value =
            perfil.peso || "";

    }


    if (perfilAltura) {

        perfilAltura.value =
            perfil.altura || "";

    }


    if (perfilEmail) {

        perfilEmail.value =
            perfil.email || "";

    }


    if (perfilObjetivo) {

        perfilObjetivo.value =
            perfil.objetivo || "";

    }


    if (perfilTiempo) {

        perfilTiempo.value =
            perfil.tiempo || "";

    }


    if (perfilPresupuesto) {

        perfilPresupuesto.value =
            perfil.presupuesto || "";

    }

}


// ============================================================
// 56. ABRIR MI PERFIL
// ============================================================

if (btnMiPerfil) {

    btnMiPerfil.addEventListener(
        "click",
        function () {

            if (
                !usuarioPuedeAcceder()
            ) {

                return;

            }


            ocultarFormularioPreferencias();


            cargarMiPerfil();


            if (
                contenedorMiPerfil
            ) {

                contenedorMiPerfil.style.display =
                    "block";

            }

        }
    );

}


// ============================================================
// 57. GUARDAR MI PERFIL
// ============================================================

if (formularioMiPerfil) {

    formularioMiPerfil.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            const perfil =
                obtenerPerfil();


            if (!perfil) {

                return;

            }


            const perfilNombre =
                document.getElementById(
                    "perfil-nombre"
                );

            const perfilEdad =
                document.getElementById(
                    "perfil-edad"
                );

            const perfilPeso =
                document.getElementById(
                    "perfil-peso"
                );

            const perfilAltura =
                document.getElementById(
                    "perfil-altura"
                );

            const perfilEmail =
                document.getElementById(
                    "perfil-email"
                );

            const perfilObjetivo =
                document.getElementById(
                    "perfil-objetivo"
                );

            const perfilTiempo =
                document.getElementById(
                    "perfil-tiempo"
                );

            const perfilPresupuesto =
                document.getElementById(
                    "perfil-presupuesto"
                );


            if (
                !perfilNombre ||
                !perfilEdad ||
                !perfilPeso ||
                !perfilAltura ||
                !perfilEmail ||
                !perfilObjetivo ||
                !perfilTiempo ||
                !perfilPresupuesto
            ) {

                return;

            }


            const nuevoEmail =
                perfilEmail.value
                    .trim()
                    .toLowerCase();


            // ------------------------------------------------
            // Comprobar que el correo no esté vacío
            // ------------------------------------------------

            if (!nuevoEmail) {

                if (mensajeMiPerfil) {

                    mensajeMiPerfil.textContent =
                        "Ingresa un correo electrónico válido.";

                    mensajeMiPerfil.className =
                        "mensaje error";

                }

                return;

            }


            // ------------------------------------------------
            // Actualizar perfil
            // ------------------------------------------------

            perfil.nombre =
                perfilNombre.value.trim();

            perfil.edad =
                Number(
                    perfilEdad.value
                );

            perfil.peso =
                Number(
                    perfilPeso.value
                );

            perfil.altura =
                Number(
                    perfilAltura.value
                );

            perfil.email =
                nuevoEmail;

            perfil.objetivo =
                perfilObjetivo.value;

            perfil.tiempo =
                perfilTiempo.value;

            perfil.presupuesto =
                perfilPresupuesto.value;


            localStorage.setItem(

                CLAVE_PERFIL,

                JSON.stringify(
                    perfil
                )

            );


            if (
                mensajeMiPerfil
            ) {

                mensajeMiPerfil.textContent =
                    "Tu perfil se actualizó correctamente.";

                mensajeMiPerfil.className =
                    "mensaje exito";

            }


            // Actualizar recomendaciones
            mostrarRecomendaciones();


            setTimeout(
                function () {

                    ocultarFormularioMiPerfil();

                },
                1000
            );

        }
    );

}


// ============================================================
// 58. CERRAR MI PERFIL
// ============================================================

function ocultarFormularioMiPerfil() {

    if (
        contenedorMiPerfil
    ) {

        contenedorMiPerfil.style.display =
            "none";

    }

}


if (btnCerrarMiPerfil) {

    btnCerrarMiPerfil.addEventListener(
        "click",
        function () {

            ocultarFormularioMiPerfil();

        }
    );

}


// ============================================================
// 59. ACTUALIZAR INICIO SEGÚN SESIÓN
// ============================================================

function actualizarInicioSesion() {

    const beneficiosInicio =
        document.getElementById(
            "beneficios-inicio"
        );


    if (!beneficiosInicio) {

        return;

    }


    const sesionActiva =
        localStorage.getItem(
            CLAVE_SESION
        ) === "activa";


    beneficiosInicio.style.display =
        sesionActiva
            ? "none"
            : "";

}


// ============================================================
// 60. INICIALIZACIÓN
// ============================================================

actualizarInterfazSesion();


// Mostrar recomendaciones si existe sesión

if (
    obtenerSesionActiva()
) {

    mostrarRecomendaciones();

} else {

    ocultarRecomendaciones();

}


// Render inicial

renderizarRecetas();

renderizarRetos();


// Mostrar Inicio

mostrarPantalla(
    pantallaInicio
);


cambiarNavegacion(
    navInicio
);


// Actualizar estado visual del Inicio

actualizarInicioSesion();