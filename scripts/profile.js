var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userSchool = userDoc.data().school;
                    var userCity = userDoc.data().city;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userSchool != null) {
                        document.getElementById("schoolInput").value = userSchool;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = userCity;
                    }
                })
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }
    });
}

//call the function to run it 
populateUserInfo();

function editUserInfo() {
    //Enable the form fields
    console.log("inside editUserInfo()")
    document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
    console.log("inside saveUserInfo()");
    userName = document.getElementById("nameInput").value;
    userSchool = document.getElementById("schoolInput").value;
    userCity = document.getElementById("cityInput").value;

    console.log(userName, userSchool, userCity)
    
    // update user document to firestore
    currentUser.update({
        name: userName,
        school: userSchool,
        city: userCity
    }).then(() => {
        console.log("User information updated")
    })
    document.getElementById('personalInfoFields').disabled = true;    
}