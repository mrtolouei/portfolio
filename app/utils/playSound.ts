export const playSound = (path: string) => {
    const audio = new Audio(path);
    audio.play().catch(err => {
        console.error("Can't play audio:", err);
    });
}