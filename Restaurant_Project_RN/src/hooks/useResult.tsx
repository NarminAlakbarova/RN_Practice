import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResult] = useState<any>([])
  const searchApi = async (searchTerms: string) => {
   const resp= await yelp.get('/search', {
      params: {
        limits: 50,
        term: searchTerms,
        location: 'İstanbul',
      },
    });
    setResult(resp.data.businesses)
  };
  useEffect(() => {
    searchApi('Toast');
  }, []);

  return[searchApi,results]
};
