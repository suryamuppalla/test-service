import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save data to AsyncStorage
export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved successfully');
  } catch (e) {
    console.error('Failed to save data', e);
  }
};

// Function to get data from AsyncStorage
export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved data:', value);
      return value;
    }
  } catch (e) {
    console.error('Failed to fetch data', e);
  }
};

export default { storeData, getData };
