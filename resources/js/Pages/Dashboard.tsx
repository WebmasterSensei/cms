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
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-7">
                                <h2 className="text-xl font-bold mb-2">Users</h2>
                                <p className="text-gray-700">
                                <PieChartJs />
                                </p>
                            </div>
                            <div className="p-7">
                                <h2 className="text-xl font-bold mb-2">Kanding</h2>
                                <p className="text-gray-700">
                                <SpecifiedDomainChart />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
