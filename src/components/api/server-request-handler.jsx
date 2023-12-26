import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Handler() {
    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/card');
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
    
    
      fetchData();
    }, []);
}
