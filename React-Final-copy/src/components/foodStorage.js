
// This stores the user's entry 
let trackedFoodData = [{
      foodName: "Ramen",
      calories: 120,
      protein: 5,
      carbs: 12,
      fat: 7,
    },
    {
      foodName: "Salmon",
      calories: 100,
      protein: 15,
      carbs: 9,
      fat: 7,
    },
    {
      foodName: "Oil",
      calories: 100,
      protein: 1,
      carbs: 1,
      fat: 10,
    }
  ];

let listeners = [];

// Add's item to array
export const addFood = (newFood) => {
      trackedFoodData = [...trackedFoodData, newFood];

      // Tells all event handlers/listeners that a new item has been added to the list.
      listeners.forEach(listener => listener(trackedFoodData));

      console.log(trackedFoodData)
};


export const getTrackedFood = () => trackedFoodData;


// Wait's for unsubscribe to be returned to stop tracking changes to the form.
export const subscribeToFoodUpdates = (callback) => {
  listeners.push(callback);

  return () => {
    listeners = listeners.filter(listener => listener !== callback);
  };
};


// Format's food to decmial
export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(number);
}

// Total's the values for each object in the array
export const addedItems = (object, entryType) => {
  return object.reduce((acc, curr) => acc + curr[entryType], 0)
}

// Removes the indexed item from the array
export const deleteFood = (index) => {
  trackedFoodData = trackedFoodData.filter((_, i) => i !== index);
  listeners.forEach(listener => listener(trackedFoodData));
};

//Updates the object value in the array
export const updateEntry = (index, updatedFood) => {
  trackedFoodData[index] = updatedFood
  listeners.forEach(listener => listener(trackedFoodData))
}