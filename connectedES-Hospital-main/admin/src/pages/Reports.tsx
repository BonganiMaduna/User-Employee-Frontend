import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

const Reports = () => {
    // Line chart data for high rate vs passed patients
    const highRateData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'High Rate',
                data: [40, 60, 50, 80],
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Passed Patients',
                data: [20, 30, 25, 50],
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    // Bar chart data for hospital performance
    const performanceData = {
        labels: ['Bad Cases', 'Average Rate', 'Recovery Rate'],
        datasets: [
            {
                label: 'Hospital Performance',
                data: [100, 200, 300],
                backgroundColor: ['#FF6347', '#FFD700', '#32CD32'],
            },
        ],
    };

    // Function to render a filled or unfilled circle
    const renderCircle = (count, threshold) => {
        const isFilled = count >= threshold;
        return (
            <div
                className={`w-6 h-6 rounded-full ${isFilled ? 'bg-blue-500' : 'border border-blue-500'} 
                            ${isFilled ? 'opacity-80' : 'opacity-50'} transition duration-300`}
                style={{ 
                    backgroundColor: isFilled ? 'rgba(30, 144, 255, 0.6)' : 'transparent' 
                }}
            ></div>
        );
    };

    return (
        <div className="flex flex-col p-10">
            <h1 className="text-left text-4xl font-semibold mt-8">Case and Emergency Reports</h1>

            <div className="mt-10 space-y-10">
                {/* Emergency Cases */}
                <div className="bg-white border border-gray-500 rounded-lg p-6 mb-10 w-full">
                    <h3 className="text-lg font-semibold mb-4">Emergency Cases</h3>
                    <div className="flex justify-around items-center">
                        <div className="flex items-center">
                            <div className="ml-2">
                                <h5>Total Cases</h5>
                                <h1 className="text-xl font-bold mt-2">5000</h1>
                            </div>
                            {renderCircle(5000, 1000)}
                        </div>
                        <div className="flex items-center">
                            <div className="ml-2">
                                <h5>Serious Cases</h5>
                                <h1 className="text-xl font-bold mt-2">1200</h1>
                            </div>
                            {renderCircle(1200, 1000)}
                        </div>
                        <div className="flex items-center">
                            <div className="ml-2">
                                <h5>Critical Cases</h5>
                                <h1 className="text-xl font-bold mt-2">300</h1>
                            </div>
                            {renderCircle(300, 1000)}
                        </div>
                    </div>
                </div>

                {/* High Rate vs Passed Patients */}
                <div className="bg-white border border-gray-500 rounded-lg p-6 mb-10 w-full h-96">
                    <h3 className="text-lg font-semibold mb-4"></h3>
                    <Line data={highRateData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>

                {/* Hospital Performance */}
                <div className="bg-white border border-gray-500 rounded-lg p-6 mb-10 w-full h-96">
                    <h3 className="text-lg font-semibold mb-4">Hospital Performance</h3>
                    <Bar data={performanceData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default Reports;
