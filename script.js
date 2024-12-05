document.addEventListener("DOMContentLoaded", () => {
    const exampleBtn = document.getElementById("exampleBtn");
    const isiSendiriBtn = document.getElementById("isiSendiriBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const exampleSection = document.getElementById("exampleSection");
    const isiSendiriSection = document.getElementById("isiSendiriSection");
    const customForm = document.getElementById("customForm");
    const customOutput = document.getElementById("customOutput");
    const outputTableBody = document.getElementById("outputTableBody");
    const destinationsTable = document.getElementById("destinationsTable");

    const groupDestinations = {
        group1: [
            { destination: "Soto Ayam Lamongan Cak Har", arrival: "08:00", departure: "09:30", travelTime: "1.5 Jam" },
            { destination: "Adventure Land Romokalisari", arrival: "10:00", departure: "12:00", travelTime: "2 Jam" },
            { destination: "Kampung Heritage Peneleh", arrival: "13:00", departure: "14:30", travelTime: "1.5 Jam" }
        ],
        group2: [
            { destination: "Hutan Bambu Keputih", arrival: "09:00", departure: "10:30", travelTime: "1.5 Jam" },
            { destination: "Masjid Cheng Ho", arrival: "11:00", departure: "12:30", travelTime: "1.5 Jam" },
            { destination: "Sentra Kuliner G-Walk", arrival: "14:00", departure: "16:00", travelTime: "2 Jam" }
        ],
        group3: [
            { destination: "Ekowisata Mangrove Wonorejo", arrival: "08:30", departure: "10:00", travelTime: "1.5 Jam" },
            { destination: "Visma Art & Design Gallery", arrival: "10:30", departure: "12:00", travelTime: "1.5 Jam" },
            { destination: "Kota Tua Surabaya", arrival: "13:00", departure: "14:30", travelTime: "1.5 Jam" }
        ]
    };

    exampleSection.style.display = "none";
    isiSendiriSection.style.display = "none";
    customOutput.style.display = "none";

    exampleBtn.addEventListener("click", () => {
        exampleSection.style.display = "block";
        isiSendiriSection.style.display = "none";
    });

    isiSendiriBtn.addEventListener("click", () => {
        exampleSection.style.display = "none";
        isiSendiriSection.style.display = "block";
    });

    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    document.getElementById("group1Btn").addEventListener("click", () => {
        displayDestinations(groupDestinations.group1);
    });

    document.getElementById("group2Btn").addEventListener("click", () => {
        displayDestinations(groupDestinations.group2);
    });

    document.getElementById("group3Btn").addEventListener("click", () => {
        displayDestinations(groupDestinations.group3);
    });

    function displayDestinations(group) {
        const tableHTML = `
            <h3 class="text-center">Destinations Group</h3>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th>Destination</th>
                            <th>Arrival</th>
                            <th>Departure</th>
                            <th>Travel Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${group.map(item => `
                            <tr>
                                <td>${item.destination}</td>
                                <td>${item.arrival}</td>
                                <td>${item.departure}</td>
                                <td>${item.travelTime}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        destinationsTable.innerHTML = tableHTML;
    }

    customForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const startTrip = document.getElementById("startTrip").value;
        const generasi = document.getElementById("generasi").value;
        const populasi = document.getElementById("populasi").value;
        const mutProb = document.getElementById("mutProb").value;
        const crossProb = document.getElementById("crossProb").value;

        const outputRows = `
            <tr>
                <td>Example Destination 1</td>
                <td>${startTrip}</td>
                <td>${startTrip}</td>
                <td>1.5 Jam</td>
            </tr>
            <tr>
                <td>Example Destination 2</td>
                <td>${startTrip}</td>
                <td>${startTrip}</td>
                <td>2 Jam</td>
            </tr>
        `;
        outputTableBody.innerHTML = outputRows;
        customOutput.style.display = "block";
    });
});
