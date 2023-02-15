import { Card } from "flowbite-react"
import { FormSituation } from "../components/FormSituation"

export const Situation = () => {
    return (
        <div className="h-screen container mx-auto">
            <Card className="w-10/12 xl:w-2/3 mx-auto m-10">
                <FormSituation />
            </Card >
        </div >
    )
}