const aNumber = Number(window.prompt("Veuillez saisir une note entre 0 et 100.", ""));
if (80 <= aNumber && aNumber <= 100) {
    console.log("Ton eval est A")
}else if (70 <= aNumber && aNumber <= 79) {
    console.log("Ton eval est B")
}else if (60 <= aNumber && aNumber <= 69) {
    console.log("Ton eval est C")
} else if (50 <= aNumber && aNumber <= 59) {
    console.log("Ton eval est D")
} else if (0 <= aNumber && aNumber <= 49) {
    console.log("Ton eval est E")
    }



// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F