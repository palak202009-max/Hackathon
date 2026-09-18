// =====================================================
// PATIENT ZERO
// LOGIN + REGISTRATION + DASHBOARD
// =====================================================


// REGISTRATION - FIXED
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim().toLowerCase();
        const password = document.getElementById("registerPassword").value.trim();
        const dob = document.getElementById("registerDob").value;
        const gender = document.getElementById("registerGender").value;
        const blood = document.getElementById("registerBlood").value;

        const user = { name, email, password, dob, gender, blood, documents: 0, labs: 0, medicines: 0, visits: 0 };

        localStorage.setItem("patientZeroUser", JSON.stringify(user));
        localStorage.setItem("patientZeroLoggedIn", "true");
        
        document.getElementById("registerMessage").textContent = "Account created successfully!";
        setTimeout(() => { window.location.href = "dashboard.html"; }, 500);
    });
}



// LOGIN - FIXED
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value.trim();
        const message = document.getElementById("loginMessage");
        const savedUser = localStorage.getItem("patientZeroUser");

        if (!savedUser) {
            message.textContent = "No account found. Please register first.";
            return;
        }
        const user = JSON.parse(savedUser);
        
        // debug ke liye console me dekhna
        console.log("Saved:", user.email, user.password);
        console.log("Typed:", email, password);

        if (email === user.email && password === user.password) {
            localStorage.setItem("patientZeroLoggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            message.textContent = "Email or password is incorrect.";
        }
    });
}

// =====================================================
// DASHBOARD
// =====================================================

if (document.getElementById("patientName")) {

    const loggedIn =
        localStorage.getItem("patientZeroLoggedIn");


    if (loggedIn !== "true") {

        window.location.href =
            "b-index.html";

    }

    else {

        const savedUser =
            localStorage.getItem("patientZeroUser");


        if (savedUser) {

            const user =
                JSON.parse(savedUser);


            document.getElementById(
                "patientName"
            ).textContent =
                user.name;


            document.getElementById(
                "name"
            ).textContent =
                user.name;


            document.getElementById(
                "email"
            ).textContent =
                user.email;


            document.getElementById(
                "dob"
            ).textContent =
                user.dob;


            document.getElementById(
                "gender"
            ).textContent =
                user.gender;


            document.getElementById(
                "blood"
            ).textContent =
                user.blood;


            document.getElementById(
                "documents"
            ).textContent =
                user.documents;


            document.getElementById(
                "labs"
            ).textContent =
                user.labs;


            document.getElementById(
                "medicines"
            ).textContent =
                user.medicines;


            document.getElementById(
                "visits"
            ).textContent =
                user.visits;

        }

    }

}



// =====================================================
// LOGOUT
// =====================================================

function logout() {

    localStorage.removeItem(
        "patientZeroLoggedIn"
    );


    window.location.href =
        "b-index.html";

}



// =====================================================
// ADD MEDICAL RECORD
// =====================================================

function addRecord() {

    alert(
        "Medical record upload module will be added here."
    );

}