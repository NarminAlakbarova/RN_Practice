import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 5KGjWLjJXhAqAvHHT_Bm1_V_INpnhFjkqKLDexy5HareQOyWdfXouZmNmyGvKfIyEpKW8tlYfl_V0629CRpzVmv0ud8GEV6Fo0FzjCw2KFzCWJmee_-nQR1WEDpZZXYx',
  },
});
