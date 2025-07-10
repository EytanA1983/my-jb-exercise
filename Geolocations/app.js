  const locations = [];

    for (let i = 1; i <= 3; i++) {
      const lat = prompt("הזן קו רוחב (latitude) עבור מיקום #" + i);
      const lon = prompt("הזן קו אורך (longitude) עבור מיקום #" + i);


      locations.push({
        latitude: lat,
        longitude: lon
      });
    }

    console.log("כל המיקומים שנקלטו:");
    for (const location of locations) {
      for (const key in location) {
        console.log(key + ": " + location[key]);
      }
      console.log("אתה נמצא כאן");
    }