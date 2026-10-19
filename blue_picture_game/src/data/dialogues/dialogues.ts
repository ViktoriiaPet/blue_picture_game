 import type { DialogLine } from "../../types/dialogue"
 
export const claraDialogs: DialogLine[] = [
  {
    id: "firstDialogClara",
    title: "Saludo",
    character: "clara",
    text: [
      "Hola. Soy Clara, la responsable de la galería. Me han informado de la desaparición del cuadro.",
      "Es una situación muy desagradable. La exposición llevaba meses preparándose y todo estaba listo para la inauguración.",
      "Haré lo que pueda para ayudarte. ¿Qué necesitas saber?"
    ],
    mood: "neutral",
    priority: 10,
    requires: [],
    repeatable: false,
    requiresDialogs: []
  },
  {
    id: "claraSawPicture",
    title: "Cuadro",
    character: "clara",
    text: [
      "Sí, vi el cuadro por última vez alrededor de las cinco y media.",
      "Estaba en su sitio y no observé nada fuera de lo normal.",
      "Después tuve que ocuparme de otros preparativos. No puedo asegurarte qué ocurrió más tarde."
    ],
    mood: "neutral",
    priority: 2,
    requires: [],
    repeatable: false,
    requiresDialogs: ["firstDialogClara"]
  },
  {
    id: "claraPhotos",
    title: "Fotografías",
    character: "clara",
    text: [
      "¿Las fotografías fueron tomadas a las 17:36 y a las 17:41?",
      "Entonces, la desaparición tuvo que producirse en un intervalo muy breve.",
      "A esa hora había personal trabajando en distintas zonas de la galería. Tendrás que averiguar quién pudo acercarse al cuadro."
    ],
    mood: "sad",
    priority: 2,
    requires: ["photoWithPicture", "photoWithoutPicture"],
    repeatable: false,
    requiresDialogs: ["firstDialogClara", "claraSawPicture"]
  },
  {
    id: "claraDamagedFloor",
    title: "Las marcas en el suelo",
    character: "clara",
    text: [
      "¿Marcas en el suelo? Qué extraño… No recuerdo haberlas visto antes.",
      "En la zona de almacenamiento guardamos materiales de la exposición, pero no debería haberse movido nada pesado sin motivo.",
      "Si las marcas son recientes, quizá puedan ayudarte a reconstruir lo que pasó."
    ],
    mood: "angry",
    priority: 2,
    requires: ["sueloEstropeado"],
    repeatable: false,
    requiresDialogs: ["firstDialogClara", "claraSawPicture"]
  },
  {
    id: "claraPermissionRoom",
    title: "La sala del personal",
    character: "clara",
    text: [
      "¿Quieres entrar en la sala del personal? Está bien, puedes echar un vistazo.",
      "Allí guardamos nuestras cosas y algunos materiales de trabajo. Por favor, no cambies nada de sitio."
    ],
    mood: "neutral",
    priority: 2,
    requires: [],
    repeatable: false,
    requiresDialogs: ["firstDialogClara", "findPhotos"]
  },

  {
    id: "claraRepit",
    title: "Nada",
    character: "clara",
    text: [
      "No tengo nada más que añadir por ahora.",
      "Espero que pronto descubramos qué ocurrió con el cuadro."
    ],
    mood: "neutral",
    priority: 1,
    requires: [],
    repeatable: true,
    requiresDialogs: ["firstDialogClara"]
  }
];
 export const danielDialogs :DialogLine[] = [
{   id: "firstDialogDaniel",
   title: "Saludo",
    character: "daniel",
    text: ["Hola. Me han dicho que estás investigando la desaparición del cuadro. No sé si podré ayudarte mucho, pero pregunta lo que necesites.", "Esta tarde estuve ayudando con los preparativos de la exposición. Después me fui a hacer un recado.", "No vi nada extraño. Todo parecía normal."],
    mood: "neutral",
    priority: 10,
    requires: [],
    repeatable: false,
    requiresDialogs: []
},
{   id: "resTicket",
   title: "El ticket",
    character: "daniel",
    text: ["¿Un recibo de la cafetería? Sí, es mío. Compré algo allí a las 17:42.", "Bueno… No me fui de la galería a las cinco y veinte, como te dije. Me quedé más tiempo del que pensaba.",
        "No te lo conté porque tenía un asunto personal que resolver. No tiene nada que ver con el cuadro.", "Entiendo que parezca sospechoso, pero no lo robé."
    ],
    mood: "nervous",
    priority: 2,
    requires: ["ticketDaniel"],
    repeatable: false,
    requiresDialogs: ["firstDialogDaniel",]
},
{   id: "findPhotos",
   title: "Fotografías",
    character: "daniel",
    text: ["¿El cuadro estaba allí a las 17:36 y había desaparecido a las 17:41? Entonces, quien lo hizo tuvo muy poco tiempo.",
         "Yo seguía por la galería durante parte de ese intervalo, pero no vi cómo desapareció.",
        "Recuerdo haber visto a Sofía cerca de la sala del personal. Llevaba su equipo fotográfico.",
         "No sé si eso significa algo. Ella trabajaba en la exposición, así que no me pareció extraño.",
         "Pero no puedes entrar en la sala del personal sin el permiso de Clara"
    ],
    mood: "nervous",
    priority: 2,
    requires: ["photoWithPicture", "photoWithoutPicture"],
    repeatable: false,
    requiresDialogs: ["firstDialogDaniel"]
},
{   id: "findBlock",
    title: "Las marcas en el suelo",
    character: "daniel",
    text: ["¿Habéis encontrado marcas en el suelo? No me había fijado en ellas.",
         "La verdad es que no entré en la sala del personal. No puedo decirte qué pasó allí.",
        "Espero que encuentres al responsable. La exposición era importante para todos nosotros."
    ],
    mood: "sad",
    priority: 4,
    requires: ["ticketDaniel", "photoWithPicture", "photoWithoutPicture", "sueloEstropeado"],
    repeatable: false,
    requiresDialogs: ["firstDialogDaniel",  "findPhotos", "resTicket"]
},
{   id: "danielRepit",
    title: "Nada",
    character: "daniel",
    text: ["Ya te he contado todo lo que sé sobre la desaparición del cuadro.",
         "Ojalá pudiera ayudarte más, pero no tengo nada nuevo que añadir."
    ],
    mood: "neutral",
    priority: 1,
    requires: [],
    repeatable: true,
    requiresDialogs: ["firstDialogDaniel"]
}]

export const sofiaDialogs: DialogLine[] = [
  {
    id: "firstDialogSofia",
    title: "Saludo",
    character: "sofia",
    text: [
      "¡Hola! ¡Tú debes de ser quien está investigando lo del cuadro! Vaya, qué día tan intenso, ¿verdad?",
      "Soy Sofía, la fotógrafa de la exposición. He estado haciendo fotos por toda la galería para documentarlo todo.",
      "¡Ojalá pudiera ayudarte a encontrar el cuadro! Pregúntame lo que quieras."
    ],
    mood: "neutral",
    priority: 10,
    requires: [],
    repeatable: false,
    requiresDialogs: []
  },
  {
    id: "sofiaPhotos",
    title: "Fotografías",
    character: "sofia",
    text: [
      "¡Ah, sí! Esas fotos son mías. Estaba haciendo las últimas tomas antes de terminar el trabajo.",
      "A las 17:36 el cuadro seguía ahí. Unos minutos después, cuando volví a fotografiar la sala, ya había desaparecido.",
      "¡Es increíble que alguien pudiera llevárselo en tan poco tiempo! Yo estaba concentrada en las fotos."
    ],
    mood: "thinking",
    priority: 2,
    requires: ["photoWithPicture", "photoWithoutPicture"],
    repeatable: false,
    requiresDialogs: ["firstDialogSofia"]
  },
  {
    id: "sofiaEquipment",
    title: "Lista de tareas",
    character: "sofia",
    text: [
      "Sí, dejé parte de mi equipo en la sala del personal. ¡Entre cámaras, objetivos y accesorios, siempre llevo mil cosas!",
      "Entré allí para preparar el material de la sesión. No pensé que fuera importante mencionarlo.",
      "Pero no toqué el cuadro, te lo aseguro."
    ],
    mood: "nervous",
    priority: 3,
    requires: ["todolistSofia"],
    repeatable: false,
    requiresDialogs: ["firstDialogSofia"]
  },
  {
    id: "sofiaDamagedFloor",
    title: "Las marcas en el suelo",
    character: "sofia",
    text: [
      "¿Marcas en el suelo? Uy, no me había fijado. ¡Con tanto movimiento hoy, ni siquiera he mirado dónde pisaba!",
      "En la sala del personal había cajas y materiales por todas partes.",
      "Supongo que alguien pudo mover algo, pero no sé quién."
    ],
    mood: "nervous",
    priority: 4,
    requires: ["sueloEstropeado"],
    repeatable: false,
    requiresDialogs: ["firstDialogSofia"]
  },
  {
    id: "sofiaConfession",
    title: " ",
    character: "sofia",
    text: [
      "Vale… Está bien. No puedo seguir fingiendo que no sé nada.",
      "Fui yo quien se llevó el cuadro. Lo escondí en la sala del personal, detrás del panel de madera.",
      "Sé que parece una locura. Todo el mundo estaba pendiente de la inauguración y pensé que podría sacarlo de allí antes de que alguien se diera cuenta.",
      "Quería venderlo. Me convencí de que podría hacerlo sin que nadie saliera perjudicado, pero sabía perfectamente que estaba haciendo algo terrible.",
      "Lo siento. De verdad. Sé que he decepcionado a todo el mundo."
    ],
    mood: "soSad",
    priority: 10,
    requires: ["picture", "sueloEstropeado", "sofiaEquipment", "sofiaPhotos"],
    repeatable: false,
    requiresDialogs: ["firstDialogSofia"]
  },
  {
    id: "sofiaRepit",
     title: "Nada",
    character: "sofia",
    text: [
      "¡Ojalá pudiera ayudarte más! Espero que encuentres el cuadro pronto.",
      "Si recuerdo algo importante, te lo diré."
    ],
    mood: "neutral",
    priority: 1,
    requires: [],
    repeatable: true,
    requiresDialogs: ["firstDialogSofia"]
  }
];