
import { FaBox, FaDollarSign, FaList, FaUsers } from "react-icons/fa";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, } from 'recharts';
// import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxoisPublic";
import usePayments from "../../hooks/usePayments";
import useAllUsers from "../../hooks/useAllUsers";
import { useEffect, useState } from "react";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Dashboard = () => {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const axiosPublic = useAxiosPublic()
    const [totalCars, setTotalCars] = useState()
    // console.log(totalCars);
    const [payments] = usePayments()
    // console.log(payments);
    const revenue = payments.reduce((total, item) => total + item.price, 0)
    // console.log(revenue);
    const [allUsers] = useAllUsers()
    // console.log(payments);

    useEffect(() => {

        axiosPublic.get("/cars-count")
            .then(res => {
                setTotalCars(res.data)
            })

    }, [axiosPublic])

    const data = [
        {
            name: 'Lambo...',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },

        {
            name: 'BMW',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mercedes',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Audi',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Honda',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
      
        {
            name: 'Tesla',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const pieData = [
        { name: 'Lambo...', value: 400 },
        { name: 'BMW', value: 300 },
          { name: 'Mercedes', value: 200 },
        { name: 'Audi', value: 300 },
        { name: 'Honda', value: 200 },
        { name: 'Tesla', value: 200 },
      
    ];



    //custom shape for the bar charts 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //custom shape for the pie charts

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className="text-center bg-black h-screen ">

            {/* <Helmet>
                <title>Boss Chef |Admin Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet> */}
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold my-5 md:my-10'">

                Hi, Welcome
                <span className="font-bold ml-2 text-[#D1A054]">
                    {
                        user?.displayName ? user.displayName : 'Back'
                    } </span>
            </h2> */}
            <div className="py-10 md:py-14 lg:py-20 px-2 md:px-5 lg:px-8 ">

                <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3 ">

                    <div className="flex  gap-4 items-center p-2 justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                        <div className="text-white">
                            <div className="text-2xl font-semibold">Revenue</div>
                            <div className="font-bold text-3xl text-secondary">${revenue}</div>
                        </div>
                        <FaDollarSign className='text-3xl md:text-4xl lg:text-5xl text-secondary'></FaDollarSign>
                    </div>
                    <div className="flex items-center  gap-4 p-2 justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                        <div className="text-white">
                            <div className="text-2xl font-semibold">Costumers</div>
                            <div className="font-bold text-3xl text-cyan-300">{allUsers?.length}</div>
                        </div>
                        <FaUsers className='text-3xl md:text-4xl lg:text-5xl text-cyan-300'></FaUsers>
                    </div>
                    <div className="flex  gap-4 items-center p-2 rounded-lg justify-center bg-gradient-to-r from-purple-500 to-pink-500">
                        <div className="text-white">
                            <div className="text-2xl font-semibold">Total Cars</div>
                            <div className="font-bold text-3xl text-white">{totalCars?.length}</div>
                        </div>
                        <FaList className='text-3xl md:text-4xl lg:text-5xl text-white'></FaList>
                    </div>
                    <div className="flex gap-4 items-center p-2 justify-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg">

                        <div className="text-white">
                            <div className="text-2xl font-semibold">Total Bookings</div>
                            <div className="font-bold text-3xl text-green-500">{payments?.length}</div>
                        </div>
                        <FaBox className='text-3xl md:text-4xl lg:text-5xl text-green-500'></FaBox>
                    </div>



                </div>

                <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                    <div className="">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>
                    <div>
                        
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                     
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;