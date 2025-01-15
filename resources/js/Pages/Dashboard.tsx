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
                                                        src="https://i.pravatar.cc/150?img=1"
                                                        alt="User 1"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        Jane Doe
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
                                                        src="https://i.pravatar.cc/150?img=2"
                                                        alt="User 2"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        John Smith
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
                                                        src="https://i.pravatar.cc/150?img=3"
                                                        alt="User 3"
                                                    />
                                                    <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        Alice Johnson
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
