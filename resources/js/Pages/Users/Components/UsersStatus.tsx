import { User } from "@/types";
import {
    Avatar,
    Chip

} from "@heroui/react";

interface Users {
    onlineUsers: {
        id: number,
        name: string,
        username: string,
        role: string
    }[]
}
export default function UsersStatus({ onlineUsers }: Users) {
    return (
        <>
            <h2 className="text-lg font-semibold pl-2 text-gray-700 mb-4">
                Users Status
            </h2>
            <h2 className="mx-2 mb-4">Online User{onlineUsers.length === 1 ? '' : 's'} {onlineUsers.length}</h2>
            <hr />

            <div className="flex items-center justify-center">
                <div className="rounded-lg w-full max-w-md">
                    <ul className="divide-y divide-gray-200">
                        {onlineUsers.map((user) => (
                            <div key={user.id}>
                                <div className="flex justify-between">
                                    <li className="flex items-center p-1">
                                        <div className="relative mb-2">
                                            <Avatar className="w-11 h-11 mt-2" isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                            <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-700">
                                                {user.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Online
                                            </p>
                                        </div>

                                    </li>
                                    <div>
                                        <div className="ml-4 mt-4">
                                            <Chip color="warning" variant="faded">
                                                {user.role}
                                            </Chip>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
