import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";

const data = [
    {
        subject: "Math",
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: "Chinese",
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: "English",
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: "Geography",
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: "Physics",
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: "History",
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

export default function SpecifiedDomainChart() {
    return (
        <>
            <div className="py-1">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <RadarChart
                        outerRadius={150}
                        width={800}
                        height={600}
                        data={data}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar
                            name="Mike"
                            dataKey="A"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.6}
                        />
                        <Radar
                            name="Lily"
                            dataKey="B"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                            fillOpacity={0.6}
                        />
                        <Legend />
                    </RadarChart>
                </div>
            </div>
        </>
    );
}
