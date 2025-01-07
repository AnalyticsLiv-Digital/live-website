const sendDataToGoogleSheet = async function (url, data) {

    try {
        // Send a POST request with the data as the body
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Specify JSON data
            },
            body: JSON.stringify(data), // Convert the input data to a JSON string
        });

        // Parse the response
        const result = await response.json();

        return result; // Return the API response for further use
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error; // Rethrow error to handle it in the calling function
    }
}


module.exports = { sendDataToGoogleSheet };