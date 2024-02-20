// Unsplash API
const count = 10;
const apiKey = "ySCtuFPH3Frib-AcgWT4JSuNpHB5JW85lFZqlEX-iY0";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



// Get photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        // Catch Error here
        // console.log(error);
    }
}


// On Load
getPhotos();