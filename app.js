const searchProfile = document.getElementById("searchProfile");
const profile = new Profile();
const ui = new UI();

eventListeners();

function eventListeners() {
    searchProfile.addEventListener("keyup", getInput);
}

function getInput(e) {
    let text = e.target.value;
    profile.getProfile(text)
        .then(res => {
            if (res.profile.length !== 0) {
                ui.showProfile(res.profile[0])
            }

        })
        .catch(err => console.log(new Error(err)))
}