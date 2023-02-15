import { Card } from "flowbite-react"
import { FormAnalysis } from "../components/FormAnalysis"

export const Analysis = () => {
    return (
        <div className="h-screen container mx-auto">
            <Card className="w-10/12 xl:w-2/3 mx-auto m-10">
                <FormAnalysis />
            </Card >
        </div >
    )
}