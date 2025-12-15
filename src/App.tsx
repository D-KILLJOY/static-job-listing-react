import { useState } from "react";
import "./App.css";
import remove from "./assets/images/icon-remove.svg";

function App() {
    const [filters, setFilters] = useState<string[]>([]);

    function clearFilter() {
        setFilters([]);
    }

    function removeFilter(value: string) {
        setFilters(filters.filter((item) => item !== value));
    }

    return (
        <>
            <header className="bg-[url(../public/images/bg-header-mobile.svg)] bg-center bg-cover h-40 w-full bg-c-green-400 "></header>

            <main className="bg-c-green-50 relative ">
                {filters.length > 0 && (
                    <div className="rounded-md min-h-14 relative -top-9 py-5 ps-5 pe-7 bg-white flex items-center justify-between gap-5 w-9/10 mx-auto max-w-275">
                        <ul className="flex gap-4 flex-wrap">
                            {filters.map((filt) => (
                                <li
                                    className="flex bg-c-green-50 items-center "
                                    key={filt}
                                >
                                    <p className="py-1.75 ps-1.75 pe-3.5 text-c-green-400 font-bold text-[0.9375rem] rounded-l-[0.3125rem] leading-0">
                                        {filt}
                                    </p>
                                    <button
                                        type="button"
                                        className="w-8 h-8 bg-c-green-400 flex justify-center items-center rounded-r-[0.3125rem] cursor-pointer hover:bg-c-green-900"
                                        onClick={() => removeFilter(filt)}
                                    >
                                        <img src={remove} alt="x icon" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className="text-c-gray-400 font-bold  py-1 px-1 cursor-pointer hover:underline hover:text-c-green-400 hover:underline-offset-2"
                            onClick={clearFilter}
                        >
                            Clear
                        </button>
                    </div>
                )}

                <section className="py-8">
                    <ul className="py-8">
                        <li className=" border-l-5 border-l-c-green-400 rounded-md min-h-14 relative pt-8 px-6 pb-6 bg-white flex flex-col  gap-5 w-9/10 mx-auto max-w-275 my-8  ">
                            <div className="relative border">
                                <div className="w-12 h-12  border">
                                    <img
                                        src="/public/images/photosnap.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p>photosnap</p>
                                    <div>
                                        <p>new</p>
                                        <p>featured</p>
                                    </div>
                                </div>
                                <h2>Senior Frontend Developer</h2>
                                <div>
                                    <p>1d ago</p>
                                    <p>Full Time</p>
                                    <p>USA Only</p>
                                </div>
                            </div>
                            <div>
                                <span className="py-1.75 ps-1.75 pe-3.5 text-c-green-400 font-bold text-[0.9375rem] rounded-[0.3125rem] leading-0 hover:text-c-green-50 hover:bg-c-green-400">
                                    Frontend
                                </span>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}

export default App;
