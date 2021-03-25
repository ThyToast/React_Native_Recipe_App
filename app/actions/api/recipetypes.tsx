import axios from 'axios';

export default axios.create({
  baseURL:
    'https://gist.githubusercontent.com/ThyToast/b123e38685ae726aefb9f0b8fbedfaba/raw/ab0b354760f3225f6775e9fd97a7518c21c415e5/recipetypes.xml',
});
