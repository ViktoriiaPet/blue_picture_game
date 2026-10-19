
import type { Role } from "../types/roles"


export const roles:Role[] = [
    {
        id: "clara",
        name: "Clara",
        role: "Conservadora de la galería",
        image:"/images/persons/clara/neutral.png",
        description:"Estaba supervisando la exposición. Conocía bien la sala y sabía dónde se encontraba cada obra, pero asegura que no vio nada sospechoso."
    },
    {
         id: "daniel",
        name: "Daniel",
        role: "Asistente del coleccionista",
        image:"/images/persons/daniel/neutral.png",
        description:"Afirma que salió a tomar un café. Sin embargo, reconoce que estuvo cerca de la sala del personal y que vio a Sofía por esa zona."
    },
        {
         id: "sofia",
        name: "Sofía",
        role: "Fotógrafa de la exposición",
        image:"/images/persons/sofia/neutral.png",
        description:"Estaba haciendo fotografías para la exposición. Dice que necesitaba tomar algunas imágenes adicionales, aunque no explica con claridad por qué estuvo en la zona del personal."
    }
]