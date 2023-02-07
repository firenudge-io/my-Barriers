import { Label, TextInput } from "flowbite-react"
import { useState } from "react"
import { WriteURL } from "../constants/URLS"
import { UrlGenerate } from "../hooks/UrlGenerate"
import $ from "jquery";

export const ProjectForm = () => {

    // CONSTANTS
    const [_date, setDate] = useState("")
    const [b1, setb1] = useState("")
    const [b2, setb2] = useState("")
    const [b3, setb3] = useState("")
    const [b4, setb4] = useState("")


    // GET DATE AND TIME
    const date_read = _date.slice(0, 10).replace("-", "").replace("-", "")
    const time_read = _date.slice(11, 16).replace(":", "") + '00'


    const dt = _date.slice(0, 10)
    const tm = _date.slice(11, 16)

    function insert_value() {
        // URL is 
        var URL = WriteURL + "?callback=ctrlq&date=" + dt + "&time=" + tm + "&b1=" + b1 + "&b2=" + b2 + "&b3=" + b3 + "&b4=" + b4 + "&action=insert";

        // make post request to by passing the URL using fetch API with cors mode
        fetch(URL, { mode: 'no-cors' })
            .then((response) => {
                console.log(response);
                return response.json()
            })

        var request = $.ajax({
            crossDomain: true,
            url: URL,
            method: "GET",
            dataType: "jsonp"
        });
    }


    return (
        <form className="flex flex-col gap-4 z-0">

            <div className="w-11/12 xl:w-3/4 mx-auto">

                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="Enter Date"
                    />
                </div>
                <TextInput type="datetime-local" placeholder="Enter the Date" required={true} onChange={(e) => {
                    setDate(e.target.value)
                }} />


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="1st Barrier"
                    />
                </div>
                <TextInput type="text" placeholder="Your of 1st Barrier" required={true} onChange={(e) => {
                    setb1(e.target.value)
                }} />


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="2nd Barrier"
                    />
                </div>
                <TextInput type="text" placeholder="Your of 2nd Barrier" required={true} onChange={(e) => {
                    setb2(e.target.value)
                }} />


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="3rd Barrier"
                    />
                </div>
                <TextInput type="text" placeholder="Your of 3rd Barrier" onChange={(e) => {
                    setb3(e.target.value)
                }} />


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="4th Barrier"
                    />
                </div>
                <TextInput type="text" placeholder="Your of 4th Barrier" onChange={(e) => {
                    setb4(e.target.value)
                }} />


                <div className="flex flex-row justify-around">
                    <a target={"_blank"} rel="noreferrer" href={UrlGenerate(date_read, time_read, b1, b2, b3, b4)}
                        className="my-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Calendar
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>

                    <button onClick={insert_value}
                        className="my-5 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                        Sheets
                        <i className="fa-regular fa-file"></i>
                    </button>
                </div>

            </div >
        </form>
    )
}