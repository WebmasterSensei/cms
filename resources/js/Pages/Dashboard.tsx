import PieChartJs from '@/Components/PieChart';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

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
                    <PieChartJs/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
