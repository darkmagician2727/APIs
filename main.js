const getResidentsButton = document.querySelector('#getResidentsButton');

function getAlderaanResidents() {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((response) => {
            if (response.data.results.length > 0) {
                const aldResidents = response.data.results[0].residents;
                aldResidents.forEach((residentURL) => {
                    axios.get(residentURL)
                        .then((residentResponse) => {
                            const residentName = residentResponse.data.name;

                            const h2 = document.createElement('h2');
                            h2.textContent = residentName;

                            document.body.appendChild(h2);
                        })
                });
            }
        })
        .catch((error) => {
            console.error('Error fetching Alderaan data:', error);
        });
}

// Step 3: Use addEventListener to attach the function to the button's click event
getResidentsButton.addEventListener('click', getAlderaanResidents);
