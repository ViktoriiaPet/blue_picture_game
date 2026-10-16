type Mood =  "neutral" | "nervous" | "angry" | "happy" | "sad" | "soSad" | "thinking"
type CharacterId = "clara" | "daniel" | "sofia"
export type DialogLine = {
    id: string,
    character: CharacterId,
    text: string[],
    mood: Mood,
    priority: number,
    requires: string[],
    repeatable: boolean,
    requiresDialogs: string[]

}
