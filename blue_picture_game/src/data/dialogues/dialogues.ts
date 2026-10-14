 import type { DialogLine } from "../../types/dialogue"
 
export const claraDialogs :DialogLine[] = [
{   id: "FirstDialogClara",
    character: "clara",
    text: ["¡Buenos días! Me llamo Clara. Soy la directora de la exposición.", "¡Nuestro cuadro ha desaparecido hoy! ¡Por favor, ayúdanos a encontrarlo!"],
    mood: "neutral",
    priority: 10,
    requires: [],
    repeatable: false,
    requiresDialogs: []
},
{   id: "FindOutFotoClara",
    character: "clara",
    text: ["Wow, has encontrado una fotografía hecha por Sofía.", "Es nuestra fotografa, puedes hablar con ella de esto."],
    mood: "nervous",
    priority: 20,
    requires: ["fotoDeSofia"],
    repeatable: false,
    requiresDialogs: []
},
{   id: "FraseRepetibleClara",
    character: "clara",
    text: ["No tengo nada de nuevo para decirte."],
    mood: "neutral",
    priority: 1,
    requires: [],
    repeatable: true,
    requiresDialogs: ["FirstDialogClara"]
}
 ]