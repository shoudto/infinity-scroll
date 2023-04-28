// Unsplash API
const count = 10;
const apiKey = 'SHeKmYp2G4A3Pjfvb3x-mQ28hdTcxSAhpOT52zDLjgg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash api
async function getPhotos() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    try {

    } catch (error) {
        // Catch Error Here!
        console.log('API not working!')
    }
}

// On Load
getPhotos();