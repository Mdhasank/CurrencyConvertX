
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    // for (let currencyCode in countryList) {
    //     let opt = document.createElement("option");
    //     opt.value = currencyCode;
    //     opt.innerText=currencyCode;
    //     select.append(opt);
    // }
    select.addEventListener("change",(e)=>{
     updateFlag(e.target);
    });
}
let updateFlag = (element)=>{
  let currencyvalue = element.value;
  let countryCode = countryList[currencyvalue]
  let updatedSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = updatedSrc;
}

btn.addEventListener("click",async (e)=>{
    e.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    if (isNaN(amountValue) || amountValue<1) {
        let warning = document.querySelector(".amount p");
        warning.style.display = "block";

        msg.classList.add("text-secondary");
        
        setTimeout(() => {
           warning.style.display = "none";
        }, 1000);
    }
    else{
      msg.classList.remove("text-secondary");
      
    }
    try {
      
      const URL =`http://localhost:8080/convert/${amountValue.toUpperCase()}/${fromCurrency.value.toUpperCase()}/${toCurrency.value.toUpperCase()}`;
      let response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Failed to fetch conversion rate');
      } 
      let data = await response.text();
      console.log(data);
      msg.textContent = data;

    } catch (error) {
      msg.textContent = "Error : could not recive data from server";
     
    }
   
});