const selectedSeat = document.getElementById("selected-seat")
const totalBooked = document.getElementById("seat-booked")
let availableSeat = document.getElementById("available-seat")
const totalPriceEl = document.getElementById("total-price")
const couponFieldEl = document.getElementById("coupon-field")
const couponBtnEl = document.getElementById("coupon-btn")
const defaultText = document.getElementById("default-text")

let totalSelectedSeat = [];
let totalPrice = 0;
function selectSeatHandler(event){
     //Same Button not to press 2nd time
    const value = event.innerText

    if(totalSelectedSeat.includes(value)){ //same button 2nd time pressed or Not!
        return alert("❌Seat is Already Booked!")
   
    }else if(totalSelectedSeat.length < 4){
             //Seat bg and text color changed
    event.classList.add('bg-[#1DD100]')
    event.classList.add('text-white')

    //Seat Count increased
    totalSelectedSeat.push(event.innerText)
    totalBooked.innerText = totalSelectedSeat.length;

    //Decrease Available Seat;
    const seatLeft =  parseInt(availableSeat.innerText)
    const newAvailableSeat = seatLeft - 1;
    document.getElementById("available-seat").innerText = newAvailableSeat
   
    //Default Text Hidden
    defaultText.classList.add("hidden")

    //Seat Booked Section
    selectedSeat.innerHTML += `<li class="font-normal text-base flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`

    //Update Total Price
    totalPrice = totalPrice + 550;
    totalPriceEl.innerText = totalPrice

    //Coupon Button
    if(totalSelectedSeat.length > 3){
        couponFieldEl.removeAttribute('disabled')
        couponBtnEl.removeAttribute('disabled')
    }

    }
    else{
        return alert("Maximum Seat Booked")
    }

}

//Coupone Button Targeted
document.getElementById('coupon-btn').addEventListener('click', function(){

    let couponField = document.getElementById('coupon-field').value;

    if(couponField === 'couple 20'){

        

        let grandPrice = document.getElementById('grand-price'),innerText

        let newGrandPrice = (550*4) * 0.2
        let actualPrice = 2200 - newGrandPrice

        document.getElementById('grand-price').innerText = actualPrice;
    }else if(couponField === 'NEW15'){
        let grandPrice = document.getElementById('grand-price'),innerText

        let newGrandPrice = (550*4) * 0.15
        let actualPrice = 2200 - newGrandPrice
        document.getElementById('grand-price').innerText = actualPrice;
    }


    else{
        return alert("Your Provided Coupon is Not Valid! ❌")
    }
})

document.getElementById('number').addEventListener('input', function(event){

    let digit = document.getElementById('number').value

    if(digit.length >= 11){
        document.getElementById('next-btn').removeAttribute('disabled')
    }

})
// Modal Remove and Check
const nextBtn = document.getElementById('next-btn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');


document.getElementById('next-btn').addEventListener('click', function(){
    modal.classList.remove('hidden')
})

closeModalBtn.addEventListener('click', function(){
    modal.classList.add('hidden')
})

modal.addEventListener('click', function(){
    window.location.reload();
})


