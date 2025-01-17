import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Image } from "@chakra-ui/react";
import "../../../css/login/img.css";
import { Button } from "@chakra-ui/react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";

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

    return (
        <>
            <div className="flex justify-center items-center h-[100vh]">
                <div
                    className="shadow-2xl w-[65%] h-[500px]  rounded-[2rem] overflow-hidden"
                    style={{ border: "solid #BCCCDC 2px" }}
                >
                    <div className="grid grid-cols-2">
                        <div className="bg-white p-6">
                            <form onSubmit={submit}>
                                <h2 className="text-2xl font-semibold text-center mt-7 mb-4">
                                    LOGIN
                                </h2>

                                <div className="grid grid-cols-2 gap-4 mb-3">
                                    <TextInput
                                        id="username"
                                        name="username"
                                        className="w-full px-5 py-3 border border-slate-300 rounded-2xl"
                                        type="text"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        placeholder="Username"
                                    />
                                    <TextInput
                                        id="password"
                                        name="password"
                                        className="w-full px-5 py-3 border border-slate-300 rounded-2xl z-40"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="w-[95%] m-auto">
                                    {!errors.username && !errors.password ? (
                                        <div className="relative flex w-full animate-pulse gap-2 p-4">
                                            <div className="h-12 w-12 rounded-full bg-slate-400"></div>
                                            <div className="flex-1">
                                                <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                                                <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                                            </div>
                                            <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
                                        </div>
                                    ) : (
                                        <div className="mt-6 mb-10">
                                            <InputError
                                                message={errors.username}
                                            />
                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center mt-3 mb-3">
                                    <div className="loader flex justify-end">
                                        <svg
                                            className={processing ? 'logo' : ''}
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
                                        className="w-full bg-blue-500 rounded-xl  z-40"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white">

                            <Image
                                src="../images/wallp.jpg"
                                className="h-[500px]"
                            />
                            <Image
                                src="../images/logo.png"
                                className="logoimage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <GuestLayout>

        //     {status && (
        //         <div classNameName="mb-4 text-sm font-medium text-green-600">
        //             {status}
        //         </div>
        //     )}

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="username" value="username" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('email', e.target.value)}
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="mt-4 block">
        //             <label className="flex items-center">
        //                 <Checkbox
        //                     name="remember"
        //                     checked={data.remember}
        //                     onChange={(e) =>
        //                         setData('remember', e.target.checked)
        //                     }
        //                 />
        //                 <span className="ms-2 text-sm text-gray-600">
        //                     Remember me
        //                 </span>
        //             </label>
        //         </div>

        //         <div className="mt-4 flex items-center justify-end">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

        //             <PrimaryButton className="ms-4" disabled={processing}>
        //                 Log in
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
    );
}
