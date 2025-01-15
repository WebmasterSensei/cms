import PieChartJs from "@/Components/PieChart";
import SpecifiedDomainChart from "@/Components/SpecifiedDomainChart";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-1">
                <div className="min-h-screen bg-gray-100 p-6">
                    <div className="container mx-auto">
                        <header className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Program Level Dashboard
                            </h1>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow-sm p-3">
                                <h2 className="text-lg font-semibold pl-2 text-gray-700 mb-4">
                                    Users Status
                                </h2>

                                <div className="flex items-center justify-center">
                                    <div className="rounded-lg w-full max-w-md">

                                        <ul className="divide-y divide-gray-200">
                                            <li className="flex items-center p-1">
                                                <div className="relative">
                                                    <img
                                                        className="w-12 h-12 rounded-full border border-gray-300"
                                                        src="https://imgs.search.brave.com/MA3s1z7gfsxb9WPXXf5sz4mHU_vLXh0DexuuFfAM500/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAyL2RlbW9u/LXNsYXllci10YW5q/aXJvLXBmcC0xLmpw/Zw"
                                                        alt="User 1"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        Tanjirou Kamado
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Online
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-center p-1">
                                                <div className="relative">
                                                    <img
                                                        className="w-12 h-12 rounded-full border border-gray-300"
                                                        src="https://imgs.search.brave.com/77uPSzhkPn5Jz4YQu_X0Z7n43shMznX8GiPolDp8W0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U0LzEx/LzU4L2U0MTE1ODc3/ZTZhM2VkMDAxM2Zk/MWM4NWU4MzA3YmJj/LmpwZw"
                                                        alt="User 2"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        Sung Jin Woo
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Online
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-center p-1">
                                                <div className="relative">
                                                    <img
                                                        className="w-12 h-12 rounded-full border border-gray-300"
                                                        src="https://imgs.search.brave.com/iZLK26TiEr0U8Rx_CEvsfLNIM8QXnFJ7_A21TFyO09o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/d2F0dHBhZC5jb20v/Y292ZXIvMjE0OTE0/MzY5LTUxMi1rMzgx/MjQ5LmpwZw"
                                                        alt="User 3"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        Sakai Rihito
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Online
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-center p-1">
                                                <div className="relative">
                                                    <img
                                                        className="w-12 h-12 rounded-full border border-gray-300"
                                                        src="https://imgs.search.brave.com/o9_TJsw_RM1WvEUjDo5hUuaviT2yF_UE2as_xJkcvh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjQtMDktMDcv/MmVfSHpsN2FSaC1S/RWJCWXZiNElIdy53/ZWJw"
                                                        alt="User 3"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                       Satoru Gojo
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Online
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-center p-1">
                                                <div className="relative">
                                                    <img
                                                        className="w-12 h-12 rounded-full border border-gray-300"
                                                        src="https://imgs.search.brave.com/Avf7FP7kvj59VGnIpyULcZsdoeNBD0sqInFeMWXxcBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkLzFl/LzQ0L2ZkMWU0NDQ4/NmZhODg0ZDc1MGYw/ZWQxNGRjYWU4ZWEz/LmpwZw"
                                                        alt="User 3"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                       Itadori Yuji
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Online
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-center p-1">
                                                <div className="relative">
                                                    <img
                                                        className="w-12 h-12 rounded-full border border-gray-300"
                                                        src="https://imgs.search.brave.com/Jg-mYbUwjQaCu9w8vQ6y5_6ztg_l3tZ5j0w69XkK7Sk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgyMTc1/NDcuanBn"
                                                        alt="User 3"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                       Fushiguro Megumi
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Online
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-center p-1">
                                                <div className="relative">
                                                    <img
                                                        className="w-12 h-12 rounded-full border border-gray-300"
                                                        src="https://imgs.search.brave.com/zjn5pPXdjuwFrwmK0G6e41dZp9-MoGu0z3T6NE2UP-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdhLzA0/LzFmLzdhMDQxZjk2/ZGNmZjc5NGY0OTI4/MjQ5NWQ5ZjQxMDEw/LmpwZw"
                                                        alt="User 3"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                       Umaru Doma
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Online
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 col-span-1 md:col-span-2">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                    Status of Issues Across Projects
                                </h2>
                                <table className="table-auto w-full text-sm text-left text-gray-600">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2">
                                                Project
                                            </th>
                                            <th className="px-4 py-2">Open</th>
                                            <th className="px-4 py-2">
                                                In Progress
                                            </th>
                                            <th className="px-4 py-2">
                                                Closed
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2">
                                                Finance
                                            </td>
                                            <td className="px-4 py-2">10</td>
                                            <td className="px-4 py-2">5</td>
                                            <td className="px-4 py-2">8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                    Average Time Spent on Work
                                </h2>
                                <canvas id="timeSpentChart"></canvas>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4 col-span-1 md:col-span-2">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                    Issues in Each Release
                                </h2>
                                <PieChartJs />
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4"></div>
                            <div className="bg-white rounded-lg shadow-md p-4 col-span-1 md:col-span-2">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                    Issues in Each Release
                                </h2>
                                <SpecifiedDomainChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
