import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Exclamation from '../../public/assets/exclamation-mark.png';
import Stethoscope from '../../public/assets/stethoscope.png'
import Nurse from '../../public/assets/nurse.png'
import Emer from '../../public/assets/emergency-patients.png'
import HosBed from '../../public/assets/hospital-bed.png'
import ICU from '../../public/assets/icu.png'

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard: React.FC = () => {
    const pieData = {
        labels: ['Consultations', 'Laboratory Analyses', 'Meetings'],
        datasets: [
            {
                label: 'My Schedule Events',
                data: [25, 10, 5],
                backgroundColor: ['#A52A2A', '#800080', '#4B0082'],
                borderColor: ['#ffffff'],
                borderWidth: 1,
            },
        ],
    };

    const doughnutData = {
        datasets: [
            {
                data: [5, 2, 1],
                backgroundColor: ['#A52A2A', '#800080', '#4B0082'],
                borderColor: ['#ffffff'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex flex-col h-full">
            {/* Title Section */}
            <div className="bg-blue-200 p-4 flex items-center justify-between mb-4">
                <img src={Exclamation} alt="Logo" className="bg-gray-50 w-16 h-16 rounded-full " />
                <h2 className="text-3xl font-semibold">Admin Dashboard</h2>
                <div className="flex space-x-2">
                    <div className="bg-white flex text-center rounded-lg shadow-md w-32 h-20">
                        <img src={Stethoscope} alt="Logo" className="bg-gray-50 w-8 h-8 mt-5 ml-2 " />
                        <div>
                            <div className="font-bold">Total Doctors</div>
                            <div className="font-semibold text-blue-800">54</div> 
                        </div>
                    </div>
                    <div className="bg-white flex text-center rounded-lg shadow-md w-24 h-20">
                    <img src={Nurse} alt="Logo" className="bg-gray-50 w-8 h-8 mt-5 ml-2 " />
                        <div>
                            <div className="font-bold mt-4">Nurses</div>
                            <div className="font-semibold text-blue-800">34</div>
                        </div>
                    </div>
                    <div className="bg-white flex text-center rounded-lg shadow-md w-[126px] h-20">
                    <img src={Emer} alt="Logo" className="bg-gray-50 w-8 h-8 mt-5 ml-1 " />
                        <div>
                            <div className="font-bold ml-0">Emergency Patients</div>
                            <div className="font-semibold text-blue-800">23</div>
                        </div>
                    </div>
                    <div className="bg-white flex text-center rounded-lg shadow-md w-28 h-20">
                        <img src={HosBed} alt="Logo" className="bg-gray-50 w-8 h-8 mt-5 ml-1 " />
                        <div>
                            <div className="font-bold">Patients Admitted</div>
                            <div className="font-semibold text-blue-800">124</div>
                        </div>
                    </div>
                    <div className="bg-white flex text-center rounded-lg shadow-md w-[105px] h-20">
                    <img src={ICU} alt="Logo" className="bg-gray-50 w-8 h-8 mt-5 ml-1 " />
                        <div>
                            <div className="font-bold">ICU Patients</div>
                            <div className="font-semibold text-blue-800">10</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Graphs and Upcoming Cases */}
            <div className="flex flex-grow space-x-4">
                {/* Left Section */}
                <div className="flex flex-col w-3/5 space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                        <h2 className="text-lg font-semibold mb-2">Monthly Patient Data Trends</h2>
                        <div className="flex items-center justify-center h-48">
                            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                        <h2 className="text-lg font-semibold mb-2">Patient Statistics</h2>
                        <div className="flex items-center justify-center h-48">
                            <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-2/5 flex flex-col space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                        <h2 className="text-lg font-semibold mb-2">Upcoming Cases</h2>
                        <ul className="space-y-2">
                            <li>Jane Doe - Dr. Smith - 10:00 AM</li>
                            <li>John Doe - Dr. Adams - 11:00 AM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>Mary Jane - Dr. Evans - 12:00 PM</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
