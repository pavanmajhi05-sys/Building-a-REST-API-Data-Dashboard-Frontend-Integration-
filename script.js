// ======= FRIEND DATA (EDIT NAMES HERE) =======
const friends = [
    { id: 1, name: "Ravi", email: "Ravimajhi@gmail.com", city: "Hyderabad" },
    { id: 2, name: "Haritha", email: "harithamajhi@gmail.com", city: "Vizag" },
    { id: 3, name: "Hari ", email: "haribandhu90@gmail.com", city: "Karim nagar" },

    { id: 4, name: "bharth", email: "bharath098@gmail.com", city: "srikalulam" },
    { id: 5, name: "Manoj", email: "Hanumanthumanoj76@gmail.com", city: "vijayanagaram" },
    { id: 6, name: "Srinath", email: "jaganmohan@gmail.com", city: "palasa" },

    { id: 7, name: "hari krishna", email: "krishna7@gmail.com", city: "guntur" },
    { id: 8, name: "venkateswarao", email: "venky987@gmail.com", city: "polisettipadu" },
    { id: 9, name: "vinay", email: "vianysai76@gmail.com", city: "Thotapalem" },

    { id: 10, name: "sudharsan", email: "sudha0989@gmail.com", city: "vijayanagaram" },
    { id: 11, name: "jami pavan kumar", email: "pavankumar@gmail.com", city: "vijayanagaram" },
    { id: 12, name: "mahesh", email: "thatikonadmahesh@gmail.com", city: "Anakapalli" }
];

// ======= PAGINATION SETTINGS =======
let currentPage = 1;
const friendsPerPage = 3;

const container = document.getElementById("friendsContainer");
const searchInput = document.getElementById("searchInput");
const pageInfo = document.getElementById("pageInfo");

// ======= DISPLAY FUNCTION =======
function displayFriends() {

    container.innerHTML = "";

    const filteredFriends = friends.filter(friend =>
        friend.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    const start = (currentPage - 1) * friendsPerPage;
    const end = start + friendsPerPage;
    const paginatedFriends = filteredFriends.slice(start, end);

    paginatedFriends.forEach(friend => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${friend.name}</h3>
            <p>Email: ${friend.email}</p>
            <p>City: ${friend.city}</p>
        `;
        container.appendChild(card);
    });

    const totalPages = Math.ceil(filteredFriends.length / friendsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

// ======= NEXT PAGE =======
function nextPage() {
    const totalPages = Math.ceil(friends.length / friendsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayFriends();
    }
}

// ======= PREVIOUS PAGE =======
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayFriends();
    }
}

// ======= SEARCH EVENT =======
searchInput.addEventListener("input", () => {
    currentPage = 1;
    displayFriends();
});

displayFriends();