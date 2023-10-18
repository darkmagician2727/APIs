const getResidentsButton = document.querySelector('#getResidentsButton');

function getAlderaanResidents() {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then((response) => {
                const aldResidents = response.data.results[0].residents;
                aldResidents.forEach((residentURL) => {
                    axios.get(residentURL)
                        .then((residentResponse) => {
                            // const residentName = residentResponse.data.name;

                            // const h2 = document.createElement('h2');
                            // h2.textContent = residentName;

                            // document.body.appendChild(h2);
                            document.body.appendChild(document.createElement('h2')).textContent = residentResponse.data.name;

                        })
                });
        })
    }

getResidentsButton.addEventListener('click', getAlderaanResidents);
