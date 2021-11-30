var stop = false, edad = 20;

edad > 18 ? (
    alert("OK, puedes continuar."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Disculpa, eres menor de edad!")
);