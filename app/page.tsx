"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export default function Home() {
  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          {/* Define the pattern with the SVG image */}
          <pattern
            id="imagePattern"
            patternUnits="userSpaceOnUse"
            width={500}
            height={400}
          >
            {/* Color overlay */}
            <rect
              x="0"
              y="0"
              width="500"
              height="400"
              fill="rgba(255, 0, 255, 0.4)"
            />

            {/* SVG image */}
            <image href="/pattern2.svg" x="0" y="0" width="500" height="400" />
          </pattern>
          <pattern
            id="imagePattern2"
            patternUnits="userSpaceOnUse"
            width={500}
            height={400}
          >
            {/* Color overlay */}
            <rect
              x="0"
              y="0"
              width="500"
              height="400"
              fill="rgba(255, 0, 0, 0.4)"
            />

            {/* SVG image */}
            <image href="/pattern1.svg" x="0" y="0" width="500" height="400" />
          </pattern>
          <pattern
            id="imagePattern3"
            patternUnits="userSpaceOnUse"
            width={500}
            height={400}
          >
            {/* Color overlay */}
            <rect
              x="0"
              y="0"
              width="500"
              height="400"
              fill="rgba(255, 255, 0, 0.4)"
            />

            {/* SVG image */}
            <image href="/pattern3.svg" x="0" y="0" width="500" height="400" />
          </pattern>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="url(#imagePattern)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="url(#imagePattern2)"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="url(#imagePattern3)"
        />
      </AreaChart>
    </div>
  );
}
