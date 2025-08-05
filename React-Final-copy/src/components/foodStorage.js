
// This stores the user's entry 
let trackedFoodData = [];

let listeners = [];

// Add's item to array
export const addFood = (newFood) => {
      trackedFoodData = [...trackedFoodData, newFood];

      // Tells all event handlers/listeners that a new item has been added to the list.
      listeners.forEach(listener => listener(trackedFoodData));

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
export const addedItems = (array, key) => {
  return array.reduce((acc, curr) => acc + (Number(curr[key]) || 0), 0)
};

// Removes the indexed item from the array
// First perameter in filter is unused
export const deleteFood = (index) => {
  trackedFoodData = trackedFoodData.filter((foodItem, i) => i !== index);
  listeners.forEach(listener => listener(trackedFoodData));
};

//Updates the object value in the array
export const updateEntry = (index, updatedFood) => {
  trackedFoodData[index] = updatedFood
  listeners.forEach(listener => listener(trackedFoodData))
}

// Get's today's date
export const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};