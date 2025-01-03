'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export function LoginStat({ lgs }) {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const rawData = [
        { dateLogin: '2025-01-02T00:00:00.000Z', loginCount: 4, _id: '6776e7bbb966b837603234b8' },
        { dateLogin: '2025-01-03T00:00:00.000Z', loginCount: 2, _id: '677753d49dd0cba9e7727f2b' }
    ];
    
    // Transform data
    const formattedData = lgs?.map(item => ({
        loginDate: new Date(item.dateLogin).toLocaleDateString(), // Format date
        loginCount: item.loginCount
    }));
    return (
        <>
       <ResponsiveContainer className="" width="98%" height="100%">
            <LineChart
            margin={{
                top: 5,
                left:0
            }}
            data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="loginDate" />
                <YAxis />
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="loginCount" stroke="#9A2143" />
            </LineChart>
        </ResponsiveContainer>

      
        </>
    )
}
            