
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
      protein: 14,
      carbs: 9,
      fat: 7,
    }
  ];

let listeners = [];

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

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(number);
}

export const addedItems = (object, entryType) => {
  return object.reduce((acc, curr) => acc + curr[entryType], 0)
}



export const deleteFood = (index) => {
  trackedFoodData = trackedFoodData.filter((_, i) => i !== index);
  listeners.forEach(listener => listener(trackedFoodData));
};

export const updateEntry = (index, updatedFood) => {
  trackedFoodData[index] = updatedFood
  listeners.forEach(listener => listener(trackedFoodData))
}