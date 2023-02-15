import { Card } from "flowbite-react"
import { FormClassic } from "../components/FormClassic"

export const Classic = () => {
    return (
        <div className="h-screen container mx-auto">
            <Card className="w-10/12 xl:w-2/3 mx-auto m-10">
                <FormClassic />
            </Card >
        </div >
    )
}