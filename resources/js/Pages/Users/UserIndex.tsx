import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
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
    Button,
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
type IconProps = {
    fill?: string; // Optional, with a default value
    size?: number | string; // Optional, could be a number or string
    height?: number | string; // Optional, could be a number or string
    width?: number | string; // Optional, could be a number or string
    [key: string]: any; // Allows additional props (rest operator)
};

export const UserIcon = ({
    fill = "currentColor",
    size,
    height,
    width,
    ...props
}: IconProps) => {
    return (
        <svg
            data-name="Iconly/Curved/Profile"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            >
                <path
                    d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
                    data-name="Stroke 1"
                />
                <path
                    d="M11.837 11.174a4.372 4.372 0 10-.031 0z"
                    data-name="Stroke 3"
                />
            </g>
        </svg>
    );
};

export default function UserIndex({ records }: Records) {
    const [isOpen, onOpenChange] = useState(false);
    const [isOpenCreate, onOpenChangeCreate] = useState(false);

    const { data, setData, post, put, processing, errors } = useForm({
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

    const openModalCreate = () => {
        onOpenChangeCreate(true);
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
    const handleChange = (str: keyof typeof errors,  e: any) => {
        setData(str, e.target.value);
        errors[str] = '';
    }

    const submitUser = () => {
        try {
            Swal.fire({
                title: "Are you sure about that?",
                text: "Adding this User?!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "confirm!",
            }).then((result) => {
                if (result.isConfirmed) {
                    post(route("users.create"), {
                        preserveState: true,
                        onSuccess: () => {
                            Swal.fire({
                                title: "Created!",
                                text: "User has been Created.",
                                icon: "success",
                            });
                        },
                        onError: () => {
                            onOpenChangeCreate(true);
                        },
                    });
                } else {
                    onOpenChangeCreate(true);
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
                <Modal
                    isOpen={isOpenCreate}
                    size="2xl"
                    onOpenChange={onOpenChangeCreate}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    Add Users Credentials
                                </ModalHeader>
                                <ModalBody>
                                    <div className="mb-1">
                                        <label className="block ml-1 text-sm font-bold text-gray-700 mb-1">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                                                errors.username
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Enter your username"
                                            onChange={(e) => handleChange("username", e)
                                            }
                                        />
                                        {errors.username && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.username}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label className="block ml-1 text-sm font-bold text-gray-700 mb-1">
                                            Fullname
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Enter your Fullname"
                                            onChange={(e) =>
                                                handleChange('name', e)
                                            }
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.username}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <Select

                                            label="Select User Role"
                                            onChange={(e) =>
                                                handleChange("role", e)
                                            }
                                        >
                                            {roles.map((item) => (
                                                <SelectItem key={item.key}>
                                                    {item.label}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                        {errors.role && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors.role}
                                            </p>
                                        )}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={onClose}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        color="primary"
                                        onPress={submitUser}
                                    >
                                        Submit
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
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
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={onClose}
                                    >
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
                        <div className="flex justify-end">
                            <Button
                                className="mb-3"
                                variant="bordered"
                                onPress={openModalCreate}
                            >
                                Add user <UserIcon />
                            </Button>
                        </div>
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
