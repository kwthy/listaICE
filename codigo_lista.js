const editBtn = document.getElementById("editBtn")
const editorOverlay = document.getElementById("editorOverlay")
const saveBtn = document.getElementById("saveBtn")
const closeBtn = document.getElementById("closeBtn")
const contentDiv = document.getElementById("content")

document.addEventListener("DOMContentLoaded", iniciarPagina);

window.addEventListener('load', () => {
    // Reinicia el modo de edición al cargar la página
    localStorage.setItem("isEditMode", "false");
    document.getElementById("editBtn").style.display = "none"; // Ocultar botón de editar al cargar
});

function iniciarPagina() {
    // Ocultar secciones al cargar la página
    document.getElementById('propuestas').style.display = 'none';
    document.getElementById('sobre-nosotros').style.display = 'none';
    document.getElementById('todos-anuarios').style.display = 'none';
    document.getElementById('inicio-pagina').style.display = 'flex';
    document.getElementById('reiniciar').style.display = 'none';
    document.getElementById('edit-anuario').style.display = 'none';

    // Eventos de los botones
    document.getElementById('boton-propuestas').addEventListener('click', listaPropuestas);
    document.getElementById('boton-nosotros').addEventListener('click', mostrarNosotros);
    document.getElementById('boton-anuarios').addEventListener('click', iniciosAnuarios);
    document.getElementById('logBtn').addEventListener('click', tuAnuario);

    // Evento para el botón "Regresar"
    //document.getElementById('botonRegresar').addEventListener('click', regresarPagina);

    // Evento del botón "Ingresar a mi anuario"
    const botonTuAnuario = document.getElementById('logBtn');
    botonTuAnuario.addEventListener('click', tuAnuario);
}

// Función para mostrar las propuestas 
function listaPropuestas () {

    let selectionOpciones = document.getElementById('inicio-pagina')
    selectionOpciones.style.display = 'none'
    let selectionVolver = document.getElementById('reiniciar')
    selectionVolver.style.display = 'flex'
    let selectionSeleccionarPropuestas = document.getElementById('propuestas')
    selectionSeleccionarPropuestas.style.display = 'flex'
    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true
    
}

// Función para mostrar nuestra información 
function mostrarNosotros() {

    let selectionOpciones = document.getElementById('inicio-pagina')
    selectionOpciones.style.display = 'none'
    let selectionSeleccionarNosotros = document.getElementById('sobre-nosotros')
    selectionSeleccionarNosotros.style.display = 'flex'
    let selectionVolver = document.getElementById('reiniciar')
    selectionVolver.style.display = 'flex'
    let selectionBotonReiniciar = document.getElementById('boton-reiniciar')
    selectionBotonReiniciar.style.display = true
    let selectionSeleccionarEditar = document.getElementById('edit-anuario')
    selectionSeleccionarEditar.style.display = 'none'  

}

// Función para mostrar los anuarios 
function iniciosAnuarios() {
    let selectionOpciones = document.getElementById('inicio-pagina');
    selectionOpciones.style.display = 'none';
    let selectionSeleccionarAnuarios = document.getElementById('todos-anuarios');
    selectionSeleccionarAnuarios.style.display = 'flex';
    let selectionVolver = document.getElementById('reiniciar');
    selectionVolver.style.display = 'flex';
    let selectionBotonReiniciar = document.getElementById('boton-reiniciar');
    selectionBotonReiniciar.style.display = true;
   

    let botonTuAnuario = document.getElementById('logBtn')
    botonTuAnuario.addEventListener('click', tuAnuario)
     
}

function tuAnuario() {
    let selectionOpciones = document.getElementById('inicio-pagina');
    selectionOpciones.style.display = 'none';
    let selectionSeleccionarAnuarios = document.getElementById('todos-anuarios');
    selectionSeleccionarAnuarios.style.display = 'none';
    let selectionVolver = document.getElementById('reiniciar');
    selectionVolver.style.display = 'flex';
    let selectionBotonReiniciar = document.getElementById('boton-reiniciar');
    selectionBotonReiniciar.style.display = true;

    const accessCode = prompt("Ingrese el código de acceso:");

    if (accessCode === "edit_lista01") {
        document.getElementById("edit-anuario").style.display = "block"; // Mostrar botones de cursos en modo edición
        localStorage.setItem("isEditMode", "true");
    } else {
        // Verifica el código para cada curso
        switch (accessCode) {
            case "cuartoA5216":
                showCourse("cuartoA");
                break;
            case "cuartoB8942":
                showCourse("cuartoB");
                break;
            case "quintoA7634":
                showCourse("quintoA");
                break;
            case "quintoB4387":
                showCourse("quintoB");
                break;
            case "sextoA1579":
                showCourse("sextoA");
                break;
            case "sextoB6493":
                showCourse("sextoB");
                break;
            case "septimoA3721":
                showCourse("septimoA");
                break;
            case "septimoB8095":
                showCourse("septimoB");
                break;
            case "octavoA2348":
                showCourse("octavoA");
                break;
            case "octavoB9562":
                showCourse("octavoB");
                break;
            case "novenoA4302":
                showCourse("novenoA");
                break;
            case "novenoB6217":
                showCourse("novenoB");
                break;
            case "decimoA5184":
                showCourse("decimoA");
                break;
            case "decimoB7039":
                showCourse("decimoB");
                break;
            case "primeroA2873":
                showCourse("primeroA");
                break;
            case "primeroB9826":
                showCourse("primeroB");
                break;
            case "segundoA0109":
                showCourse("segundoA");
                break;
            case "terceroA6583":
                showCourse("terceroA");
                break;
            case "terceroB3174":
                showCourse("terceroB");
                break;
            default:
                alert("Ingresa un código válido");
                location.reload();
        }
        localStorage.setItem("isEditMode", "false");
    }
}

function showCourse(course) {
    localStorage.setItem("currentCourse", course);
    loadContent(course);
    
    const nombreCurso = {
        cuartoA: "Cuarto A",
        cuartoB: "Cuarto B",
        quintoA: "Quinto A",
        quintoB: "Quinto B",
        sextoA: "Sexto A",
        sextoB: "Sexto B",
        septimoA: "Séptimo A",
        septimoB: "Séptimo B",
        octavoA: "Octavo A",
        octavoB: "Octavo B",
        novenoA: "Noveno A",
        novenoB: "Noveno B",
        decimoA: "Décimo A",
        decimoB: "Décimo B",
        primeroA: "Primero A",
        primeroB: "Primero B",
        segundoA: "Segundo A",
        terceroA: "Tercero A",
        terceroB: "Tercero B",
    };

    // Establece el texto del nombre del curso
    const cursoNombre = nombreCurso[course] || "Anuario";
    const cursoDiv = document.getElementById("nombre-curso");
    
    // Muestra el nombre del curso en el mensaje
    cursoDiv.textContent = cursoNombre;

    // Muestra el mensaje del curso
    document.getElementById("mensaje-anuario").style.display = "block"; // Muestra el mensaje
}
   
function loadContent(course) {
    const savedContent = JSON.parse(localStorage.getItem(`editableContent_${course}`)) || [];
    const isEditMode = localStorage.getItem("isEditMode") === "true";

    document.getElementById("content").innerHTML = ""; // Limpiar contenido anterior
    savedContent.forEach(item => addItemToPage(item.text, item.image, isEditMode, course));

    document.getElementById("editBtn").style.display = isEditMode ? "block" : "none";
}

function addItemToPage(text, imageUrl, isEditMode, course) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "editable-item";

    if (text) {
        const textElement = document.createElement("p");
        textElement.textContent = text;
        itemDiv.appendChild(textElement);
    }

    if (imageUrl) {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = "Imagen añadida";
        imgElement.style.width = "100%";
        imgElement.style.objectFit = "cover";
        itemDiv.appendChild(imgElement);
    }

    if (isEditMode) {
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => {
            itemDiv.remove();
            saveCourseContent(course);
        };
        itemDiv.appendChild(deleteBtn);
    }

    document.getElementById("content").appendChild(itemDiv);
}

function saveCourseContent(course) {
    const items = Array.from(document.getElementById("content").getElementsByClassName("editable-item"));
    const content = items.map(item => {
        return {
            text: item.querySelector("p") ? item.querySelector("p").textContent : "",
            image: item.querySelector("img") ? item.querySelector("img").src : ""
        };
    });
    localStorage.setItem(`editableContent_${course}`, JSON.stringify(content));
}

document.getElementById("editBtn").onclick = () => {
    document.getElementById("editorOverlay").style.display = "flex";
};

document.getElementById("closeBtn").onclick = () => {
    document.getElementById("editorOverlay").style.display = "none";
};

document.getElementById("saveBtn").onclick = () => {
    const text = document.getElementById("textContent").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const course = localStorage.getItem("currentCourse");
    const isEditMode = localStorage.getItem("isEditMode") === "true";

    addItemToPage(text, imageUrl, isEditMode, course);
    saveCourseContent(course);

    document.getElementById("textContent").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("editorOverlay").style.display = "none";
};

function regresarPagina() {
    // Ocultar secciones de anuario y botones de curso
    document.getElementById('todos-anuarios').style.display = 'none';
    document.getElementById('edit-anuario').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';

    // Mostrar la pantalla de inicio
    document.getElementById('inicio-pagina').style.display = 'flex';

    // Restablecer el modo de edición
    localStorage.setItem("isEditMode", "false");
}

function regresarPagina() {
    location.reload(); // Recargar la página
}

window.addEventListener('load', iniciarPagina);