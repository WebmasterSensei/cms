import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import "../../../css/login/img.css";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Button } from "@heroui/button";
import { error } from "console";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    const handleChange = (str: keyof typeof errors, event: any) => {
        setData(str, event.target.value)
        errors[str] = "";
    }

    return (
        <>
            <div className="bgImage">
                <div className="flex justify-center items-center h-[100vh]">


                    <div
                        className="shadow-2xl w-[65%] rounded-[2rem] overflow-hidden"
                        style={{ border: "solid #BCCCDC 2px" }}
                    >
                        <div className="grid grid-cols-2 h-[470px]">
                            <div className="bg-[#ffffff4f] p-6">
                                <form onSubmit={submit}>
                                    <h2 className="text-2xl font-semibold text-center mt-7 mb-4">
                                        LOGIN
                                    </h2>
                                    <div className="grid grid-cols-2 gap-4 mb-3">
                                        <TextInput
                                            id="username"
                                            name="username"
                                            className={`w-full px-5 py-3 border rounded-2xl ${errors.username ? "border-red-500" : "border-slate-300"
                                                }`}
                                            type="text"
                                            value={data.username}
                                            onChange={(e) => handleChange("username", e)}
                                            placeholder="Username"
                                        />


                                        <TextInput
                                            id="password"
                                            name="password"
                                            className={`w-full px-5 py-3 border rounded-2xl z-40 ${errors.password ? "border-red-500" : "border-slate-300"
                                                }`}
                                            type="password"
                                            value={data.password}
                                            onChange={(e) => handleChange("password", e)}
                                            placeholder="Password"
                                        />

                                    </div>



                                    <div className="w-[95%] m-auto">
                                        {!errors.username && !errors.password ? (
                                            <div className={`relative flex w-full gap-2 p-4 ${processing ? "animate-pulse" : ""
                                                }`}>
                                                <div className="h-12 w-12 rounded-full bg-white"></div>
                                                <div className="flex-1">
                                                    <div className="mb-1 h-5 w-3/5 rounded-lg bg-white text-lg"></div>
                                                    <div className="h-5 w-[90%] rounded-lg bg-white text-sm"></div>
                                                </div>
                                                <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-white"></div>
                                            </div>
                                        ) : (
                                            <div className="mt-1 mb-10 flex justify-center">
                                                <InputError
                                                    message={errors.username}
                                                />
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                &nbsp;
                                                <InputError
                                                    message={errors.password}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-center mt-3 mb-3">
                                        <div className="loader flex justify-end">
                                            <svg
                                                className={processing ? "logo" : ""}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="150"
                                                height="150"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C10.114 2 8.6 3.514 8.6 5.4V8H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2.6V5.4C15.4 3.514 13.886 2 12 2ZM10.2 5.4a1.8 1.8 0 0 1 3.6 0V8h-3.6V5.4ZM12 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="w-[93%] m-auto">
                                        <Button
                                            className="w-full bg-blue-700 text-white rounded-xl z-40"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            {processing ? 'loging in...' : 'Login'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className="bg">
                                <img
                                    src="../images/logo.png"
                                    className="logoimage"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
