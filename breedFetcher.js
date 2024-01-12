const request = require('request');

// Get the breed name from the command line argument
const breedName = process.argv[2];

// Replace 'API_ENDPOINT' with the actual API endpoint, and append the query parameter for breed name
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return; // Exit the function in case of an error
    }

    console.log('Body:', body);
    console.log('Type of body:', typeof body);

    const data = JSON.parse(body);
    console.log(data);
    console.log('Type of data:', typeof data);

    // Check if any breed data was returned
    if (data.length === 0) {
        console.log('Breed not found');
    } else {
        // Access the first entry and print the description
        console.log('Description:', data[0].description);
    }
});
