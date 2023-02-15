import { Label, Textarea, TextInput } from "flowbite-react"
import { useState } from "react"
import { WriteURL } from "../constants/URLS"
import { UrlGenerate } from "../hooks/UrlGenerate"
import $ from "jquery";
import { Link } from "react-router-dom";

export const FormClassic = () => {

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

    const phase = "(C) "

    function insert_value() {
        // URL is 
        var URL = WriteURL + "?callback=ctrlq&date=" + dt + "&time=" + tm + "&b1=" + phase + b1 + "&b2=" + b2 + "&b3=" + b3 + "&b4=" + b4 + "&action=insert";

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


                <div className="flex flex-row justify-center mt-10 mb-5">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <Link to="/my-Barriers/Analysis">
                            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                            Analysis
                            </button>
                        </Link>
                        <button className="px-4 py-2 text-sm font-medium bg-gray-100 text-blue-700 dark:text-white dark:bg-gray-600 cursor-default">
                            Classic
                        </button>
                        <Link to="/my-Barriers/Situation">
                            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                Situation
                            </button>
                        </Link>
                    </div>
                </div>


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="1st Barrier"
                    />
                </div>
                <Textarea placeholder="Your of 1st Barrier" required={true} onChange={(e) => {
                    setb1(e.target.value)
                }} />


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="2nd Barrier"
                    />
                </div>
                <Textarea placeholder="Your of 2nd Barrier" required={true} onChange={(e) => {
                    setb2(e.target.value)
                }} />


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="3rd Barrier"
                    />
                </div>
                <Textarea placeholder="Your of 3rd Barrier" onChange={(e) => {
                    setb3(e.target.value)
                }} />


                <div className="mt-4 mb-2 block">
                    <Label
                        className="text-lg"
                        value="4th Barrier"
                    />
                </div>
                <Textarea placeholder="Your of 4th Barrier" onChange={(e) => {
                    setb4(e.target.value)
                }} />


                <div className="flex flex-row justify-around">
                    <a target={"_blank"} rel="noreferrer" href={UrlGenerate(date_read, time_read, phase, b1, b2, b3, b4)}
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