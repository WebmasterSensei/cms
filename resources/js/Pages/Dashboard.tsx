import PieChartJs from "@/Components/PieChart";
import SpecifiedDomainChart from "@/Components/SpecifiedDomainChart";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useOnlineUsersStore } from "@/stores/online-users";
import { usePage } from "@inertiajs/react";
import echo from "../echo";
import {
    Avatar,
    Chip

} from "@heroui/react";
import UsersStatus from "./Users/Components/UsersStatus";
import IpPhone from "./Users/Components/IpPhone";

interface IpPhones {
    ipphones: {
        id: number,
        name: string,
        number: number,
        status: string
    }[]
}


export default function Dashboard({ipphones}: IpPhones) {

    const { onlineUsers, setOnlineUsers, addOnlineUser, removeOnlineUser } =
        useOnlineUsersStore();

    const user = usePage().props.auth;

    interface Users {
        id: number,
        name: string,
        username: string,
        role: string
    }

    useEffect(() => {
        if (user) {
            echo.join("online.users")
                .here((users: Users) => {
                    setOnlineUsers(users); // Set the initial list of online users
                })
                .joining((newUser: Users) => {
                    addOnlineUser(newUser); // Add new user to the list
                })
                .leaving((leavingUser: Users) => {
                    removeOnlineUser(leavingUser); // Remove user when they leave
                });
            return () => {
                echo.leaveAllChannels();
            };
        }
    }, [user, setOnlineUsers, addOnlineUser, removeOnlineUser]);

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
                <div className="min-h-screen p-6">
                    <div className="container mx-auto">
                        <header className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-800">
                           Dashboard
                            </h1>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow-sm p-5">
                               {['admin', 'superadmin'].includes(user.user.name) ? (
                                <>
                                <div>
                                    <UsersStatus onlineUsers={onlineUsers}/>
                                </div>
                                </>
                               ) : ( <>
                                <div>
                                    <IpPhone ipphones={ipphones}/>
                                </div>
                                </>)}

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
