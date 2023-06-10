import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Marketing', 'Design', 'Sales'],
    datasets: [
        {
            data: [60, 30, 10],
            backgroundColor: [
                '#00FFB9',
                '#4EAA8F',
                '#29616A',
            ],
            borderWidth: 0,
        },
    ],
};

const options: any = {
    responsive: true,
    legend: {
        display: false,
    },
    title: {
        display: true,
        text: ''
    },
    plugins: {
        doughnutlabel: {
            labels: [
                {
                    font: {
                        size: '0',
                        family: 'Arial, Helvetica, sans-serif',
                        style: 'italic',
                        weight: 'bold'
                    },
                }
            ]
        }
    }
}


const DonutChart = () => {
    return (
        <div className="max-w-[300px] p-6 flex justify-center m-auto">
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    )
}

export default DonutChart