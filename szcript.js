// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const correctEmail = "demo@patientzero.com";
        const correctPassword = "123456";

        if (email === correctEmail && password === correctPassword) {

            // Save login status
            localStorage.setItem(
                "patientZeroLoggedIn",
                "true"
            );

            // Save patient information
            const patientData = {
                name: "Alex Morgan",
                email: "demo@patientzero.com",
                dob: "12 March 2008",
                gender: "Not specified",
                blood: "O+",
                documents: 2,
                labs: 1,
                medicines: 1,
                visits: 1
            };

            localStorage.setItem(
                "patientZeroData",
                JSON.stringify(patientData)
            );

            // OPEN COMPLETELY NEW WEBPAGE
            window.location.href = "dashboard.html";

        } else {

            document.getElementById("loginMessage").textContent =
                "Invalid email or password.";

        }

    });
}


// ================= DASHBOARD =================

if (document.getElementById("patientName")) {

    // Check whether user is logged in

    const loggedIn =
        localStorage.getItem("patientZeroLoggedIn");

    if (loggedIn !== "true") {

        // If not logged in, return to login page
        window.location.href = "index.html";

    } else {

        // Get saved data
        const data = JSON.parse(
            localStorage.getItem("patientZeroData")
        );

        if (data) {

            document.getElementById("patientName").textContent =
                data.name;

            document.getElementById("name").textContent =
                data.name;

            document.getElementById("email").textContent =
                data.email;

            document.getElementById("dob").textContent =
                data.dob;

            document.getElementById("gender").textContent =
                data.gender;

            document.getElementById("blood").textContent =
                data.blood;

            document.getElementById("documents").textContent =
                data.documents;

            document.getElementById("labs").textContent =
                data.labs;

            document.getElementById("medicines").textContent =
                data.medicines;

            document.getElementById("visits").textContent =
                data.visits;
        }
    }
}


// ================= LOGOUT =================

function logout() {

    localStorage.removeItem(
        "patientZeroLoggedIn"
    );

    window.location.href = "index.html";
}


// ================= ADD RECORD =================

function addRecord() {

    alert(
        "Medical record upload module will be connected here."
    );
}
