const preguntas = [
    {
        text: "¿Cómo se crea un botón en SwiftUI?",
        choices: ["Button(\"Presionar\") {}", "ClickButton(\"Presionar\") {}", "TapMeButton(\"Presionar\") {}"],
        respuestaCorrecta: 0
    },
    {
        text: "¿Cuál es el propósito de la función de acción en un botón SwiftUI?",
        choices: ["Para dar estilo al botón.", "Para realizar acciones cuando se presiona el botón.", "Para cambiar el color del botón."],
        respuestaCorrecta: 1
    },
    {
        text: "¿Cuál es la propiedad que se utiliza para personalizar el estilo de un botón en SwiftUI?",
        choices: ["buttonStyle()", "style()", "customize()"],
        respuestaCorrecta: 0
    },
    {
        text: "¿Cómo puedes hacer que un botón tenga un fondo de color en SwiftUI?",
        choices: ["background(Color.red)", "colorBackground(Red)", "setBackgroundColor(red)"],
        respuestaCorrecta: 0
    },
    {
        text: "¿Cuál es la forma correcta de agregar una etiqueta a un botón en SwiftUI?",
        choices: ["label: Text(\"Presionar\")", "text: \"Presionar\"", "ButtonLabel(\"Presionar\")"],
        respuestaCorrecta: 0
    },
    {
        text: "¿Qué método se utiliza para desactivar un botón en SwiftUI?",
        choices: ["enable(false)", "disabled(true)", "deactivate()"],
        respuestaCorrecta: 1
    },
    {
        text: "¿Cuál es la función de `buttonStyle` en SwiftUI?",
        choices: ["Cambiar el color del botón.", "Aplicar un estilo personalizado al botón.", "Establecer la acción del botón."],
        respuestaCorrecta: 1
    },
    {
        text: "¿Cuál es la finalidad de `foregroundColor` en un botón SwiftUI?",
        choices: ["Establecer el color de fondo.", "Cambiar el color del texto en el botón.", "Configurar el borde del botón."],
        respuestaCorrecta: 1
    },
    {
        text: "¿Cómo se puede ajustar el espaciado alrededor del contenido de un botón?",
        choices: ["padding()", "margin()", "spacing()"],
        respuestaCorrecta: 0
    },
    {
        text: "¿Qué propiedad se utiliza para hacer que un botón ocupe todo el ancho disponible en SwiftUI?",
        choices: ["fullWidth: true", "frameWidth: .infinity", "expandToWidth()"],
        respuestaCorrecta: 1
    }
];


//Exportamos
module.exports = preguntas;