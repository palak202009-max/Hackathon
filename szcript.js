// =====================================================
// PATIENT ZERO
// LOGIN + REGISTRATION + DASHBOARD
// =====================================================


// =====================================================
// REGISTRATION
// =====================================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("registerName").value;

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const dob =
            document.getElementById("registerDob").value;

        const gender =
            document.getElementById("registerGender").value;

        const blood =
            document.getElementById("registerBlood").value;


        const user = {

            name: name,
            email: email,
            password: password,
            dob: dob,
            gender: gender,
            blood: blood,

            documents: 0,
            labs: 0,
            medicines: 0,
            visits: 0

        };


        // Save account
        localStorage.setItem(
            "patientZeroUser",
            JSON.stringify(user)
        );


        // Login automatically
        localStorage.setItem(
            "patientZeroLoggedIn",
            "true"
        );


        document.getElementById(
            "registerMessage"
        ).textContent =
            "Account created successfully!";


        // Go to dashboard
        setTimeout(function() {

            window.location.href = "dashboard.html";

        }, 500);

    });

}



// =====================================================
// LOGIN
// =====================================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        // Get registered account
        const savedUser =
            localStorage.getItem("patientZeroUser");


        if (!savedUser) {

            document.getElementById(
                "loginMessage"
            ).textContent =
                "No account found. Please register first.";

            return;

        }


        const user =
            JSON.parse(savedUser);


        // Check login
        if (
            email === user.email &&
            password === user.password
        ) {

            localStorage.setItem(
                "patientZeroLoggedIn",
                "true"
            );


            window.location.href =
                "dashboard.html";

        }

        else {

            document.getElementById(
                "loginMessage"
            ).textContent =
                "Invalid email or password.";

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

function testLogin() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const savedUser =
        localStorage.getItem("patientZeroUser");

    if (!savedUser) {

        document.getElementById("loginMessage").textContent =
            "NO ACCOUNT SAVED";

        return;
    }

    const user = JSON.parse(savedUser);

    if (
        email === user.email &&
        password === user.password
    ) {

        localStorage.setItem(
            "patientZeroLoggedIn",
            "true"
        );

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("loginMessage").textContent =
            "EMAIL/PASSWORD DOES NOT MATCH";

    }
}

}