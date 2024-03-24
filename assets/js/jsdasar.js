alert('Selamat datang')

let fullName = "Moh. Agus Gunawan"

fullName = "Agus"

console.log(fullName) // Output Agus

let y = 10
if (true) {
    let y = 20
    console.log("Nilai y di dalam blok: ", y) // Output: 20
}
console.log("Nilai y di luar blok: ", y) // Output: 10

let employee = {
    name: "agus",
    age: 20,
    job: "web developer",
    isMarried: false
}
console.log(`My Name is ${employee.name} and he is ${employee.age} years old`)

let a = 3
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a ** b)
console.log(a / b)
console.log(a % b)

let button = document.getElementById("klik")

button.addEventListener("click", function () {
    let string = confirm("Apakah web ini cukup interaktif?");
    string ? alert('Jawaban Anda iya') : alert('Jawaban Anda kurang');
});