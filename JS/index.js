const db = firebase.firestore();


async function getMatches() {
    // Read collection
    db.collection("Main").doc("Projects")
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.data()

            console.log(data.Projects[0]);

            let list = "";

            data.Projects.map(project => {
                list += `<p>${project.name}</p>`
            })

            document.getElementById('projects_div').innerHTML = list;

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

getMatches();