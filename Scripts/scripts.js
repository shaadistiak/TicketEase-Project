<<<<<<< HEAD
=======












//  const seatarr = [];
// const seatPrice = 550;
//  let totalPrice = 0;
//  let discount = 0;

//  const seatnum = document.getElementsByClassName("seatno");
// const SeatsContainer = document.getElementById("selectedSeatsContainer");
// const maxPrice = document.getElementById("totalPrice");
// const maxTotal = document.getElementById("grandTotal");
// const couponInput = document.getElementById("couponCode");
// const applyButton = document.getElementById("applyCoupon");
// const checkError = document.getElementById("couponError");
// const disSection = document.getElementById("discountSection");
// const disAmount = document.getElementById("discountAmount");
// const couponSec = document.getElementById("couponSection");
// const nameInput = document.getElementById("nameInput");
// const phoneInput = document.getElementById("phoneInput");
// const nextButton = document.getElementById("nextButton");
// const bodySec = document.getElementById("skele");
// const lastSec = document.getElementById("done");

// // Event listener for selecting seats
// for (let i = 0; i < seatnum.length; i++) {
//   seatnum[i].addEventListener("click", function () {
//     const seattext = seatnum[i].textContent;

//     // Add the selected seat to the array
//     seatarr.push({ name: seattext, price: seatPrice });

//     // Update localStorage with the current selections
//     localStorage.setItem("selectedSeats", JSON.stringify(seatarr));

//     // Update total price and UI
//     totalPrice += seatPrice;
//     updatePrices();

//     document.getElementById("totalseat").innerText = String(40 - seatarr.length);
//     document.getElementById("seat_Selected").innerText = String(seatarr.length);

//     seatnum[i].style.pointerEvents = "none";
//     seatnum[i].style.backgroundColor = "#1DD100";
//     seatnum[i].style.color = "white";

//     const seatInfoDiv = document.createElement("div");
//     seatInfoDiv.className = "flex text-[#03071299] justify-between mb-4";

//     const seatNumberP = document.createElement("p");
//     seatNumberP.className = "text-xl mb-4";
//     seatNumberP.textContent = seattext;

//     const seatClassP = document.createElement("p");
//     seatClassP.className = "text-xl mb-4";
//     seatClassP.textContent = "Economy";

//     const seatPriceP = document.createElement("p");
//     seatPriceP.className = "text-xl mb-4";
//     seatPriceP.textContent = seatPrice;

//     seatInfoDiv.appendChild(seatNumberP);
//     seatInfoDiv.appendChild(seatClassP);
//     seatInfoDiv.appendChild(seatPriceP);

//     SeatsContainer.appendChild(seatInfoDiv);

//     if (seatarr.length === 4) {
//       for (let j = 0; j < seatnum.length; j++) {
//         seatnum[j].style.pointerEvents = "none";
//       }
//       applyButton.disabled = false;
//       applyButton.style.backgroundColor = "#1DD100";
//       applyButton.style.color = "white";
//     }
//   });
// }

// // Apply coupon
// applyButton.addEventListener("click", function () {
//   const couponCode = couponInput.value.trim().toLowerCase();

//   if (couponCode === "new15") {
//     discount = totalPrice * 0.15;
//     checkError.classList.add("hidden");
//   } else if (couponCode === "couple20") {
//     discount = totalPrice * 0.20;
//     checkError.classList.add("hidden");
//   } else {
//     discount = 0;
//     checkError.classList.remove("hidden");
//     return;
//   }

//   disSection.classList.remove("hidden");
//   disAmount.textContent = `BDT ${-discount}`;

//   couponSec.classList.add("hidden");

//   updatePrices();
// });

// // Function to update the total and grand total prices
// function updatePrices() {
//   const grandTotal = totalPrice - discount;
//   maxPrice.textContent = `BDT ${totalPrice}`;
//   maxTotal.textContent = `BDT ${grandTotal}`;
// }

// // Validate inputs for name and phone
// function validateInputs() {
//   const name = nameInput.value;
//   const phone = phoneInput.value;

//   if (name && phone) {
//     nextButton.disabled = false;
//     nextButton.style.backgroundColor = "#1DD100";
//     nextButton.style.color = "white";
//   } else {
//     nextButton.disabled = true;
//     nextButton.style.backgroundColor = "";
//     nextButton.style.color = "";
//   }
// }

// // Add input validation listeners
// nameInput.addEventListener("input", validateInputs);
// phoneInput.addEventListener("input", validateInputs);

// // Finalize and proceed to the next step
// nextButton.addEventListener("click", function () {
//   if (nameInput.value && phoneInput.value && seatarr.length > 0) {
//     bodySec.classList.add("hidden");
//     lastSec.classList.remove("hidden");
//   } else {
//     alert(
//       "Please ensure at least one seat is selected, and the name and phone number are filled correctly."
//     );
  // }
//  });











>>>>>>> bca7aed (Updated Some Files)
const seatarr = [];
const seatPrice = 550;
let totalPrice = 0;
let discount = 0;

<<<<<<< HEAD
const seatnum = document.getElementsByClassName('seatno');
const SeatsContainer = document.getElementById('selectedSeatsContainer');
const maxPrice = document.getElementById('totalPrice');
const maxTotal = document.getElementById('grandTotal');
const couponInput = document.getElementById('couponCode');
const applyButton = document.getElementById('applyCoupon');
const checkError = document.getElementById('couponError');
const disSection = document.getElementById('discountSection');
const disAmount = document.getElementById('discountAmount');
const couponSec = document.getElementById('couponSection');
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const nextButton = document.getElementById('nextButton');
const bodySec = document.getElementById('skele');
const lastSec = document.getElementById('done');

for (let i = 0; i < seatnum.length; i++) {
    seatnum[i].addEventListener("click", function () {
        const seattext = seatnum[i].textContent;
        seatarr.push(seattext);

        totalPrice += seatPrice;
        updatePrices();

        document.getElementById('totalseat').innerText = String(40 - seatarr.length);
        document.getElementById('seat_Selected').innerText = String(seatarr.length);

        seatnum[i].style.pointerEvents = 'none';
        seatnum[i].style.backgroundColor = '#1DD100';
        seatnum[i].style.color = 'white';

        const seatInfoDiv = document.createElement('div');
        seatInfoDiv.className = 'flex text-[#03071299] justify-between mb-4';

        const seatNumberP = document.createElement('p');
        seatNumberP.className = 'text-xl mb-4';
        seatNumberP.textContent = seattext;

        const seatClassP = document.createElement('p');
        seatClassP.className = 'text-xl mb-4';
        seatClassP.textContent = 'Economy';

        const seatPriceP = document.createElement('p');
        seatPriceP.className = 'text-xl mb-4';
        seatPriceP.textContent = seatPrice;

        seatInfoDiv.appendChild(seatNumberP);
        seatInfoDiv.appendChild(seatClassP);
        seatInfoDiv.appendChild(seatPriceP);

        SeatsContainer.appendChild(seatInfoDiv);

        if (seatarr.length === 4) {
            for (let j = 0; j < seatnum.length; j++) {
                seatnum[j].style.pointerEvents = 'none';
            }
            applyButton.disabled = false;
            applyButton.style.backgroundColor = '#1DD100';
            applyButton.style.color = 'white';
        }
    });
}

applyButton.addEventListener('click', function () {
    const couponCode = couponInput.value.trim().toLowerCase();

    if (couponCode === 'new15') {
        discount = totalPrice * 0.15;
        checkError.classList.add('hidden');
    } else if (couponCode === 'couple20') {
        discount = totalPrice * 0.20;
        checkError.classList.add('hidden');
    } else {
        discount = 0;
        checkError.classList.remove('hidden');
        return;
    }

    disSection.classList.remove('hidden');
    disAmount.textContent = `BDT ${(-discount)}`;

    couponSec.classList.add('hidden');

    updatePrices();
});

function updatePrices() {
    const grandTotal = totalPrice - discount;
    maxPrice.textContent = `BDT ${(totalPrice)}`;
    maxTotal.textContent = `BDT ${(grandTotal)}`;
}

function validateInputs() {
    const name = nameInput.value;
    const phone = phoneInput.value;


    if (name && phone) {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = '#1DD100';
        nextButton.style.color = 'white';
    } else {
        nextButton.disabled = true;
        nextButton.style.backgroundColor = '';
        nextButton.style.color = ''; 
    }
}

nameInput.addEventListener('input', validateInputs);
phoneInput.addEventListener('input', validateInputs);

nextButton.addEventListener('click', function () {

    if(nameInput.value && phoneInput.value && seatarr.length>0){

    bodySec.classList.add('hidden');
    lastSec.classList.remove('hidden');

    }
    else{
        alert('Please ensure at least one seat is selected, and the name and phone number are filled correctly.')
    }

});
=======
const seatnum = document.getElementsByClassName("seatno");
const SeatsContainer = document.getElementById("selectedSeatsContainer");
const maxPrice = document.getElementById("totalPrice");
const maxTotal = document.getElementById("grandTotal");
const couponInput = document.getElementById("couponCode");
const applyButton = document.getElementById("applyCoupon");
const checkError = document.getElementById("couponError");
const disSection = document.getElementById("discountSection");
const disAmount = document.getElementById("discountAmount");
const couponSec = document.getElementById("couponSection");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const nextButton = document.getElementById("nextButton");
const bodySec = document.getElementById("skele");
const lastSec = document.getElementById("done");

// Event listener for selecting seats
for (let i = 0; i < seatnum.length; i++) {
  seatnum[i].addEventListener("click", function () {
    const seattext = seatnum[i].textContent;

    // Add the selected seat to the array
    seatarr.push({ name: seattext, price: seatPrice });

    // Update localStorage with the current selections
    localStorage.setItem("selectedSeats", JSON.stringify(seatarr));

    // Update total price and UI
    totalPrice += seatPrice;
    updatePrices();

    document.getElementById("totalseat").innerText = String(40 - seatarr.length);
    document.getElementById("seat_Selected").innerText = String(seatarr.length);

    seatnum[i].style.pointerEvents = "none";
    seatnum[i].style.backgroundColor = "#1DD100";
    seatnum[i].style.color = "white";

    const seatInfoDiv = document.createElement("div");
    seatInfoDiv.className = "flex text-[#03071299] justify-between mb-4";

    const seatNumberP = document.createElement("p");
    seatNumberP.className = "text-xl mb-4";
    seatNumberP.textContent = seattext;

    const seatClassP = document.createElement("p");
    seatClassP.className = "text-xl mb-4";
    seatClassP.textContent = "Economy";

    const seatPriceP = document.createElement("p");
    seatPriceP.className = "text-xl mb-4";
    seatPriceP.textContent = seatPrice;

    seatInfoDiv.appendChild(seatNumberP);
    seatInfoDiv.appendChild(seatClassP);
    seatInfoDiv.appendChild(seatPriceP);

    SeatsContainer.appendChild(seatInfoDiv);

    if (seatarr.length === 4) {
      for (let j = 0; j < seatnum.length; j++) {
        seatnum[j].style.pointerEvents = "none";
      }
      applyButton.disabled = false;
      applyButton.style.backgroundColor = "#1DD100";
      applyButton.style.color = "white";
    }
  });
}

// Apply coupon

console.log(discount)

applyButton.addEventListener("click", function () {
  const couponCode = couponInput.value.trim().toLowerCase();

  console.log(discount)

  if (couponCode === "new15") {
    discount = totalPrice * 0.15;
    checkError.classList.add("hidden");
  } else if (couponCode === "couple20") {
    discount = totalPrice * 0.20;
    checkError.classList.add("hidden");
  } else {
    discount = 0;
    checkError.classList.remove("hidden");
    return;
  }

  disSection.classList.remove("hidden");
  disAmount.textContent = `BDT ${-discount}`;

  couponSec.classList.add("hidden");

  updatePrices();
});

// Function to update the total and grand total prices
function updatePrices() {

console.log(discount)

localStorage.setItem("discount",discount);


  
  const grandTotal = totalPrice - discount;
  maxPrice.textContent = `BDT ${totalPrice}`;
  maxTotal.textContent = `BDT ${grandTotal}`;
}

// Validate inputs for name and phone
function validateInputs() {
  const name = nameInput.value;
  const phone = phoneInput.value;

  if (name && phone) {
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#1DD100";
    nextButton.style.color = "white";
  } else {
    nextButton.disabled = true;
    nextButton.style.backgroundColor = "";
    nextButton.style.color = "";
  }
}

// Add input validation listeners
nameInput.addEventListener("input", validateInputs);
phoneInput.addEventListener("input", validateInputs);

// Finalize and proceed to the next step
nextButton.addEventListener("click", function () {
  if (nameInput.value && phoneInput.value && seatarr.length > 0) {
    bodySec.classList.add("hidden");
    lastSec.classList.remove("hidden");
  } else {
    alert(
      "Please ensure at least one seat is selected, and the name and phone number are filled correctly."
    );
  }
});


const userProfile = {
  username: "JohnDoe",
  email: "johndoe@example.com",
  phone: "+9876543210"
};
localStorage.setItem("userProfile", JSON.stringify(userProfile));
localStorage.removeItem("userProfile");









// const seatarr = [];
// const seatPrice = 550;
// let totalPrice = 0;
// let discount = 0;

// // Elements
// const seatnum = document.getElementsByClassName("seatno");
// const SeatsContainer = document.getElementById("selectedSeatsContainer");
// const maxPrice = document.getElementById("totalPrice");
// const maxTotal = document.getElementById("grandTotal");
// const couponInput = document.getElementById("couponCode");
// const applyButton = document.getElementById("applyCoupon");
// const checkError = document.getElementById("couponError");
// const disSection = document.getElementById("discountSection");
// const disAmount = document.getElementById("discountAmount");
// const nameInput = document.getElementById("nameInput");
// const phoneInput = document.getElementById("phoneInput");
// const nextButton = document.getElementById("nextButton");

// // Event listener for selecting seats
// for (let i = 0; i < seatnum.length; i++) {
//   seatnum[i].addEventListener("click", function () {
//     const seattext = seatnum[i].textContent;

//     // Add the selected seat to the array
//     seatarr.push({ name: seattext, price: seatPrice });

//     // Update localStorage with the current selections
//     localStorage.setItem("selectedSeats", JSON.stringify(seatarr));

//     // Update total price and UI
//     totalPrice += seatPrice;
//     updatePrices();

//     // Update seat count
//     document.getElementById("totalseat").innerText = String(40 - seatarr.length);
//     document.getElementById("seat_Selected").innerText = String(seatarr.length);

//     // Disable and style selected seat
//     seatnum[i].style.pointerEvents = "none";
//     seatnum[i].style.backgroundColor = "#1DD100";
//     seatnum[i].style.color = "white";

//     // Display seat information
//     const seatInfoDiv = document.createElement("div");
//     seatInfoDiv.className = "flex text-[#03071299] justify-between mb-4";

//     const seatNumberP = document.createElement("p");
//     seatNumberP.className = "text-xl mb-4";
//     seatNumberP.textContent = seattext;

//     const seatClassP = document.createElement("p");
//     seatClassP.className = "text-xl mb-4";
//     seatClassP.textContent = "Economy";

//     const seatPriceP = document.createElement("p");
//     seatPriceP.className = "text-xl mb-4";
//     seatPriceP.textContent = `BDT ${seatPrice}`;

//     seatInfoDiv.appendChild(seatNumberP);
//     seatInfoDiv.appendChild(seatClassP);
//     seatInfoDiv.appendChild(seatPriceP);

//     SeatsContainer.appendChild(seatInfoDiv);

//     // Enable coupon button if max seats are selected
//     if (seatarr.length === 4) {
//       for (let j = 0; j < seatnum.length; j++) {
//         seatnum[j].style.pointerEvents = "none";
//       }
//       applyButton.disabled = false;
//       applyButton.style.backgroundColor = "#1DD100";
//       applyButton.style.color = "white";
//     }
//   });
// }

// // Apply coupon
// applyButton.addEventListener("click", function () {
//   const couponCode = couponInput.value.trim().toLowerCase();

//   if (couponCode === "new15") {
//     discount = totalPrice * 0.15;
//     checkError.classList.add("hidden");
//   } else if (couponCode === "couple20") {
//     discount = totalPrice * 0.20;
//     checkError.classList.add("hidden");
//   } else {
//     discount = 0;
//     checkError.classList.remove("hidden");
//     return;
//   }

//   disSection.classList.remove("hidden");
//   disAmount.textContent = `BDT ${-discount.toFixed(2)}`;

//   // Update totals after applying coupon
//   updatePrices();
// });

// // Function to update the total and grand total prices
// function updatePrices() {
//   const grandTotal = totalPrice - discount;

//   // Update UI
//   maxPrice.textContent = `BDT ${totalPrice.toFixed(2)}`;
//   maxTotal.textContent = `BDT ${grandTotal.toFixed(2)}`;
// }

// // Validate inputs for name and phone
// function validateInputs() {
//   const name = nameInput.value;
//   const phone = phoneInput.value;

//   if (name && phone) {
//     nextButton.disabled = false;
//     nextButton.style.backgroundColor = "#1DD100";
//     nextButton.style.color = "white";
//   } else {
//     nextButton.disabled = true;
//     nextButton.style.backgroundColor = "";
//     nextButton.style.color = "";
//   }
// }

// // Add input validation listeners
// nameInput.addEventListener("input", validateInputs);
// phoneInput.addEventListener("input", validateInputs);

// // Finalize and proceed to the next step
// nextButton.addEventListener("click", function () {
//   if (nameInput.value && phoneInput.value && seatarr.length > 0) {
//     alert("Your booking is successful!");
//     // Clear the cart or navigate to confirmation
//     localStorage.removeItem("selectedSeats");
//   } else {
//     alert(
//       "Please ensure at least one seat is selected, and the name and phone number are filled correctly."
//     );
//   }
// });
>>>>>>> bca7aed (Updated Some Files)
