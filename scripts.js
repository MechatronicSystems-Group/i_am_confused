function incrementValue() {
    const channelId = 2232135; // Replace YOUR_CHANNEL_ID with your actual ThingSpeak channel ID
    const apiKey = 'VD10YXRPSWG8P0O2'; // Replace YOUR_API_KEY with your actual ThingSpeak API Write Key
  
    const url = `https://api.thingspeak.com/update.json`;
    const value = 0; // The value you want to increment (you can change this as needed)
  
    fetch(`${url}?api_key=${apiKey}&field1=${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  