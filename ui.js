class UI {
    constructor() {
        this.profileContainer = document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }
    showProfile(profile) {
        this.profileContainer.innerHTML = `
        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                <img src="https://picsum.photos/200/200?random=1" class="card-img-top" alt="...">
            </div>
            <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                    <li class="list-group-item">Name: ${profile.name}</li>
                    <li class="list-group-item">${profile.username}</li>
                    <li class="list-group-item">${profile.email}</li>
                    <li class="list-group-item">${profile.address.city}</li>
                </ul>
            </div>
        </div>


    </div>

</div>
        

   

        `;

    }
}