import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import axios from 'axios';
import { car } from '@assets/images';

const cacheAssets = () => {
  return cacheFiles();
}

const cacheFiles = () => {

  return _.forEach(car, async (value, key) => {

    try {

      const item = await AsyncStorage.getItem(key);

      if (item === null) {
        const response = await axios.get(value);
        const data = await JSON.stringify(response.data);
        await AsyncStorage.setItem(key, data);
      } else {
        return item
      }

    } catch (e) {
      console.warn("fetch Error: ", e.message)
    }


  });

}

export default cacheAssets;
