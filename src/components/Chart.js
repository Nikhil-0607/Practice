import React from 'react'
import { Line } from '@ant-design/charts';

function Chart() {
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 8 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 12 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
        { year :"2000", value: 14},
      ];
    
      const config = {
        data,
        height: 500,
        xField: 'year',
        yField: 'value',
      };




  return (
    <Line {...config} />
  )}

export default Chart