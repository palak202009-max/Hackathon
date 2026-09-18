
// =====================================================
// PATIENT ZERO
// LOGIN + REGISTRATION + DASHBOARD
// =====================================================


// =====================================================
// REGISTRATION
// =====================================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // Get registration data

        const name =
            document.getElementById("registerName").value;

        const email =
            document.getElementById("registerEmail").value;

        const password =
            document.getElementById("registerPassword").value;

        const dob =
            document.getElementById("registerDob").value;

        const gender =
            document.getElementById("registerGender").value;


        // Create user object

        const user = {

            name: name,

            email: email,

            password: password,

            dob: dob,

            gender: gender,

            blood: "Not added",

            documents: 0,

            labs: 0,

            medicines: 0,

            visits: 0

        };


        // Save user in browser

        localStorage.setItem(
            "patientZeroUser",
            JSON.stringify(user)
        );


        // Show success message

        const message = document.getElementById(
            "registerMessage")
            
        message.textContent =
            "Account created successfully!";


            // User is now logged in
            localStorage.setItem(
                "patientZeroLoggedIn",
                "true"
            );

            // Open dashboard
            setTimeout(function() {

                window.location.href = "dashboard.html";

            }, 1000);

    });

}



// =====================================================
// LOGIN
// =====================================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;


        // Get registered user

        const savedUser =
            localStorage.getItem("patientZeroUser");


        let user = null;


        if (savedUser) {

            user = JSON.parse(savedUser);

        }


        // -------------------------------------------------
        // DEMO ACCOUNT
        // -------------------------------------------------

        if (
            email === "demo@patientzero.com" &&
            password === "123456"
        ) {

            const demoUser = {

                name: "Demo Patient",

                email: "demo@patientzero.com",

                password: "123456",

                dob: "Not added",

                gender: "Not specified",

                blood: "Not added",

                documents: 2,

                labs: 1,

                medicines: 1,

                visits: 1

            };


            localStorage.setItem(
                "patientZeroUser",
                JSON.stringify(demoUser)
            );


            localStorage.setItem(
                "patientZeroLoggedIn",
                "true"
            );


            // NEW WEBPAGE

            window.location.href =
                "dashboard.html";

            return;

        }



        // -------------------------------------------------
        // REGISTERED USER
        // -------------------------------------------------

        if (
            user &&
            email === user.email &&
            password === user.password
        ) {

            localStorage.setItem(
                "patientZeroLoggedIn",
                "true"
            );


            // NEW WEBPAGE

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

if (
    document.getElementById("patientName")
) {


    const loggedIn =
        localStorage.getItem(
            "patientZeroLoggedIn"
        );


    // If user isn't logged in

    if (loggedIn !== "true") {

        window.location.href =
            "abc.html";

    }

    else {


        const savedUser =
            localStorage.getItem(
                "patientZeroUser"
            );


        if (savedUser) {


            const user =
                JSON.parse(savedUser);


            // Patient name

            document.getElementById(
                "patientName"
            ).textContent =
                user.name;


            document.getElementById(
                "name"
            ).textContent =
                user.name;


            // Email

            document.getElementById(
                "email"
            ).textContent =
                user.email;


            // DOB

            document.getElementById(
                "dob"
            ).textContent =
                user.dob;


            // Gender

            document.getElementById(
                "gender"
            ).textContent =
                user.gender;


            // Blood group

            document.getElementById(
                "blood"
            ).textContent =
                user.blood;


            // Statistics

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
        "abc.html";

}



// =====================================================
// ADD MEDICAL RECORD
// =====================================================

function addRecord() {

    alert(
        "Medical record upload module will be added here."
    );

}

