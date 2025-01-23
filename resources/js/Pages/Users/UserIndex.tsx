import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button, ButtonGroup } from "@heroui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../icon";
import Swal from "sweetalert2";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Select,
    SelectSection,
    SelectItem,
} from "@heroui/react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "@inertiajs/react";

interface Records {
    records: {
        id: number;
        name: string;
        username: string;
        model_has_role: {
            role_id: number;
            roles: {
                name: string;
            };
        };
    }[];
}

interface User {
    id: number;
    name: string;
    username: string;
    model_has_role: {
        role_id: number;
        roles: {
            name: string;
        };
    };
}

export const roles = [
    { key: "superadmin", label: "Super Admin" },
    { key: "admin", label: "Admin" },
    { key: "user", label: "User" },
];

export default function UserIndex({ records }: Records) {
    const [isOpen, onOpenChange] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        name: "",
        username: "",
        role: "",
    });

    const openModal = async (id: number) => {
        try {
            const { data } = await axios.get(route("users.user", id));
            setData(data.data);
            onOpenChange(true);
        } catch (err) {
            console.log(err + "something went wrong");
        }
    };

    const onSubmit = () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Continue Editing this User?!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "confirm!",
            }).then((result) => {
                if (result.isConfirmed) {
                    put(route("users.update"));
                    Swal.fire({
                        title: "Upated!",
                        text: "User has been Updated.",
                        icon: "success",
                    });
                }
            });
        } catch (err) {
            Swal.fire({
                title: "Error!",
                text: "Something Went Wrong While Submitting",
                icon: "error",
                confirmButtonText: "Edit Again",
            });
        }
    };

    return (
        <>
            <AuthenticatedLayout>
                <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    Edit User Details
                                </ModalHeader>
                                <ModalBody>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="Enter text"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="text"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        placeholder="Enter text"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <Select
                                        label="Select User Role"
                                        defaultSelectedKeys={[data?.role]}
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                    >
                                        {roles.map((item) => (
                                            <SelectItem key={item.key}>
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light">
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onSubmit}>
                                        Submit
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
                <div className="min-h-screen p-6">
                    <div className="container mx-auto">
                        <Table aria-label="Example static collection table">
                            <TableHeader>
                                <TableColumn>NAME</TableColumn>
                                <TableColumn>USERNAME</TableColumn>
                                <TableColumn>ROLE</TableColumn>
                                <TableColumn className="text-center">
                                    ACTION
                                </TableColumn>
                            </TableHeader>
                            <TableBody>
                                {records.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.username}</TableCell>
                                        <TableCell>
                                            {item.model_has_role?.roles?.name}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <button
                                                onClick={() =>
                                                    openModal(item.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    className="cursor-pointer hover:text-blue-500"
                                                    icon="edit"
                                                />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
