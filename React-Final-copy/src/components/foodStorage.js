// This not is another update for the commit because I didn't provide good commit details the first time around.

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


