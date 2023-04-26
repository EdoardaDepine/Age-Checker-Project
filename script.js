function checkAge() {
  const date = new Date();
  const actualYear = date.getFullYear();
  const valueYearBirth = document.querySelector("#yearBirth").value;
  const userAge = actualYear - Number(valueYearBirth);
  const GenderCkeck = document.getElementsByName("radioGender");
  const result = document.querySelector("#result");
  const image = document.createElement("img");
  image.setAttribute("id", "photo");

  verify();

  function verify(gender) {
    if (GenderCkeck[0].checked) {
      gender = "Mulher";
      if (userAge >= 0 && userAge <= 10) {
        image.setAttribute("src", "./images/menina-bebe.jpg");
      } else if (userAge < 30) {
        image.setAttribute("src", "./images/mulher-jovem.jpg");
      } else if (userAge < 50) {
        image.setAttribute("src", "./images/mulher-adulta.jpg");
      } else {
        image.setAttribute("src", "./images/mulher-idosa.jpg");
      }
    } else if (GenderCkeck[1].checked) {
      gender = "Homem";
      if (userAge >= 0 && userAge <= 10) {
        image.setAttribute("src", "./images/menino-bebe.jpg");
      } else if (userAge < 30) {
        image.setAttribute("src", "./images/homem-jovem.jpg");
      } else if (userAge < 50) {
        image.setAttribute("src", "./images/homem-adulto.jpg");
      } else {
        image.setAttribute("src", "./images/homem-idoso.jpg");
      }
    }
    result.innerHTML = `Detectamos gênero ${gender} com ${userAge} anos!`;
    result.appendChild(image);
  }
}

const buttonVerification = document.querySelector("#verifyButton");

buttonVerification.addEventListener("click", (event) => {
  event.preventDefault();
  checkAge();
});
