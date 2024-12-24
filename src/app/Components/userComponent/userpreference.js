import { signup, updatePreference } from "@/app/apiFunctions/user/signup";
import { axiosInstance } from "@/app/axios/axios";
import { userPreferences } from "@/app/lib/constants"
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Userpreference({ prev, next, userDetails, setDetails, index, queryParams }) {
    const router = useRouter()
    const { mutate, data, isError, error, isPending } = useMutation({
        mutationFn: signup
    })
    const { mutate: updatePref, data: prefData, isError: prefError, error: prefErr, isPending: prefPending } = useMutation({
        mutationFn: updatePreference
    })
    let updateList = (title, value) => {
        let isInside = userDetails.userPreference.some((item) => {
            return item.title === title
        })
        if (isInside) {
            let index = userDetails.userPreference.findIndex((item) => {
                return item.title === title
            })
            //console.log(index);

            let updatedPref = userDetails.userPreference.map((item, pos) => {
                if (pos === index) {
                    if (!item.value.includes(value)) {
                        return { ...item, value: [...item.value, value] }
                    }
                    else {
                        return { ...item, value: item.value.filter((item2) => item2 !== value) }
                    }

                }
                return item
            })
            //setPref(updatedPref.filter((item)=>item.value.length>0))
            setDetails((prev) => ({ ...prev, userPreference: updatedPref.filter((item) => item.value.length > 0) }))
        }
        else {
            //setPref([...userPref,{title,value:[value]}])
            setDetails((prev) => ({ ...prev, userPreference: [...userDetails.userPreference, { title, value: [value] }] }))
        }
    }
    useEffect(() => {

        if (error?.status == 409) {
            router.push("/authPage/user")
        }

    }, [error])
    const WindowHistoryStack = (pageIndex, replace = false) => {
        const params = new URLSearchParams(queryParams)
        params.set('compIndex', pageIndex)
        // Check if the current URL already has the desired parameters
        const currentParams = new URLSearchParams(window.location.search);
        if (replace) {
            window.history.replaceState(null, '', `?${params.toString()}`);
        } else {
            window.history.pushState(null, '', `?${params.toString()}`);
        }
    }
    const updateUserPreference = async () => {
        updatePref({
            cred: userDetails
        })
    }
    return (
        <>
            <div className="preferenceList w-[100%] ml-1 overflow-y-auto overflow-x-hidden flex flex-col items-center md:px-0 h-[55vh]  md:h-[60vh]">
                <h2 className="w-[100%] ml-2 mt-3 text-lg font-semibold text-gray-600">Your preferences</h2>
                <main className="w-[96%] mt-4">
                    {
                        userPreferences.map((item, pos) =>
                            <section key={pos} className="w-[100%] ">
                                <h1 className="w-[100%] font-semibold mt-1 text-[0.9rem] text-gray-400">{item.title}</h1>
                                <main className="w-[100%] flex-wrap flex">
                                    {
                                        item.value.map((listItem, index) =>
                                            <span onClick={() => { updateList(item.title, listItem) }} key={index} className={` ${userDetails.userPreference.some((target_item) => target_item.title == item.title && target_item.value.includes(listItem)) ? "bg-[#C94C73] text-white" : "bg-[#FFECEC] text-[#C94C73]"} text-nowrap rounded-lg m-1 px-2 py-1 border-2 border-[#C94C73]  cursor-pointer`}>{listItem}</span>
                                        )
                                    }
                                </main>
                            </section>
                        )
                    }
                </main>
            </div>
            {
                isError ? <div className="font-semibold text-sm text-gray-500">{error?.response?.data?.message}</div> : <></>
            }
            <div className="mt-1 md:mt-4 flex justify-between px-1">
                <button className="p-2 border-2 rounded-lg border-[#C94C73] mr-1" onClick={() => { prev(); WindowHistoryStack(index - 1, true) }}>
                    Previous
                </button>
                <div className="flex items-center">
                    <button onClick={() => { router.push("/home/user") }} className="mr-2 text-[#C94C73] underline font-medium">Skip</button>
                    {
                        prefData || prefErr ? <>
                            <button disabled={isPending} className="p-2 border-2 rounded-lg border-[#C94C73] ml-1" onClick={() => {
                                router.push("/home/user")


                            }}>
                                Continue
                            </button>
                        </> : <>
                            <button disabled={isPending || userDetails.userPreference.length == 0} className="p-2 border-2 rounded-lg border-[#C94C73] ml-1" onClick={() => {
                                updateUserPreference()
                            }}>
                                {
                                    isPending ? "Updating preferences" : "Update preferences"
                                }
                            </button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export { Userpreference }