import axios from "axios"

export const handleLinkMyTwitter = async () => {
    try {
        // const res = await axios.get("/api/restricted/profile/addTwitter")
        const res = await axios.get("/api/restricted/profile/requestTwitter")

        // const res = await fetch("/api/restricted/profile/linkTwitter")
        // const res = await fetch("/api/auth/twitter")

        // const res = await axios.post("/api/restricted/profile/auth")

        // console.log("res", res)

        if (res?.status == 200) {
            // redirect(res?.data?.data)
            //   router.replace(res?.data?.data)
            return res?.data?.data

        }
        return undefined;

    } catch (e) {
        console.log("handleLinkMyTwitter issue : ",e)
        return undefined

    }

}