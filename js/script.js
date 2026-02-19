// Tournament Registration
function registerTeam()
{
    let team = document.getElementById("teamName").value;
    let captain = document.getElementById("captain").value;

    if(team === "" || captain === "")
    {
        alert("Fill all fields");
        return;
    }

    let list = document.getElementById("teamList");

    let item = document.createElement("li");
    item.innerHTML = team + " (Captain: " + captain + ") - Registered";

    list.appendChild(item);

    alert("Team Registered Successfully!");
}

// Razorpay Payment
function makePayment()
{
    var options = {
        "key": "YOUR_RAZORPAY_KEY",
        "amount": "50000",
        "currency": "INR",
        "name": "Football FC Tournament",
        "description": "Tournament Entry Fee",
        "handler": function (response){
            alert("Payment Successful");
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}

function toggleMenu()
{
document.getElementById("navLinks").classList.toggle("show");
}

