import { Avatar, Chip, Listbox, ListboxItem, cn } from "@heroui/react";
interface IpPhones {
    ipphones: {
        id: number,
        name: string,
        number: number,
        status: string
    }[]
}

export default function IpPhone({ ipphones }: IpPhones) {
    return (
        <>
            <h2 className="font-semibold pl-2 text-gray-700 mb-4">
            "IP Phones – For any concerns, please contact support."
            </h2>
            <hr />
            <div className="flex items-center justify-center">
                <div className="rounded-lg w-full max-w-md">
                    <ul className="divide-y divide-gray-200">
                        {ipphones.map((phone) => (
                            <div key={phone.id}>
                                <div className="flex justify-between">
                                    <li className="flex items-center p-1">
                                        <div className="relative mb-2">
                                            <Avatar className="w-11 h-11 mt-2" isBordered color="default" src="https://imgs.search.brave.com/itXZRrFRVJoIsBYlpvm4TVjHm91ocL5d-k3YQGtHbQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzU2LzE5LzQ2/LzM2MF9GXzg1NjE5/NDY5Ml9PbnluUjVo/UVRGSncxc05VTTVQ/dkdhNkYyWHZCenRv/Vy5qcGc" />
                                            <span className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border border-white"></span>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-700">
                                                {phone.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {phone.status}
                                            </p>
                                        </div>

                                    </li>
                                    <div>
                                        <div className="ml-4 mt-4">
                                            <Chip color="warning" variant="faded">
                                                {phone.number}
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
