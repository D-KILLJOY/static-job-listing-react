import { useEffect, useState } from "react";
import "./App.css";
import jobs from "./data.json";
import remove from "./assets/images/icon-remove.svg";

function App() {
    const [filters, setFilters] = useState<string[]>([]);
    const [allJobs, setAllJobs] = useState<any[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<any[]>([]);

    function clearFilter() {
        setFilters([]);
    }

    useEffect(() => setAllJobs(jobs), []);

    useEffect(() => {
        if (filters.length === 0) {
            setFilteredJobs(allJobs);
            return;
        }

        const filtered = allJobs.filter((job) =>
            filters.every(
                (filter) =>
                    job.role === filter ||
                    job.level === filter ||
                    job.languages.includes(filter) ||
                    job.tools.includes(filter)
            )
        );

        setFilteredJobs(filtered);
    }, [filters, allJobs]);

    function removeFilter(value: string) {
        setFilters(filters.filter((item) => item !== value));
    }

    function addFilter(value: string) {
        setFilters((prev) => (prev.includes(value) ? prev : [...prev, value]));
    }

    return (
        <>
            <header className="bg-[url(../public/images/bg-header-mobile.svg)] bg-center bg-cover w-full bg-c-green-400 h-40 md:bg-[url(../public/images/bg-header-desktop.svg)]"></header>

            <main className="bg-c-green-50 flow-root pt-8">
                <div
                    className={`rounded-md min-h-14 relative -mt-18 mb-7 py-5 ps-5 pe-7 bg-white flex items-center justify-between gap-5 w-9/10 mx-auto max-w-275 shadow-c-shadow ${filters.length < 1 ? "opacity-0 hidden" : "opacity-100 "}`}
                >
                    <ul className="flex gap-4 flex-wrap">
                        {filters.map((filt) => (
                            <li
                                className="flex bg-c-green-50 items-center"
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

                <section>
                    <ul className="flex flex-col w-full items-center gap-10 p-6">
                        {filteredJobs.map((job) => (
                            <li
                                key={job.company}
                                className={`${job.featured ? "before:content-[''] before:absolute before:bg-c-green-400 before:inset-0 before:h-full before:w-1.25 before:rounded-l-[0.3125rem] " : ""}  rounded-md min-h-14 relative pt-8 px-6 pb-6 bg-white flex flex-col  gap-4.25 w-full max-w-275 shadow-c-shadow md:py-8.25 md:pe-11  md:ps-10 md:gap-7.5 md:rounded-[0.5625rem] lg:flex-row lg:justify-between lg:items-center`}
                            >
                                <div className="md:flex md:gap-6 items-center">
                                    <div className="w-12 h-auto absolute -top-6.5 md:relative md:inset-0 md:w-22">
                                        <img
                                            src={job.logo}
                                            alt={`company logo of ${job.company}`}
                                        />
                                    </div>
                                    <article className="flex flex-col gap-3 md:gap-1.75">
                                        <div className="flex items-center gap-6 leading-none md:gap-4">
                                            <p className="font-bold text-c-green-400 md:text-lg ">
                                                {job.company}
                                            </p>
                                            <div className="flex gap-2 uppercase font-bold text-c-green-50 ">
                                                {job.new && (
                                                    <p className="bg-c-green-400 flex items-center p-1 px-1.75 pb-0.75 rounded-full ">
                                                        new!
                                                    </p>
                                                )}
                                                {job.featured && (
                                                    <p className="bg-c-green-900 flex items-center py-1 p-1 px-1.75 pb-0.75 rounded-full">
                                                        featured
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <h2 className="font-bold text-c-green-900 md:text-[1.375rem] leading-none">
                                            {job.position}
                                        </h2>
                                        <div className="flex text-c-gray-400 font-medium text-base leading-none gap-1 border-b pb-4.5 border-b-c-gray-400 md:text-[1.15rem] md:border-0 md:pb-0">
                                            <p className="after:content-['•'] after:mx-2 ">
                                                {job.postedAt}
                                            </p>
                                            <p className="after:content-['•'] after:mx-2 ">
                                                {job.contract}
                                            </p>
                                            <p>{job.location}</p>
                                        </div>
                                    </article>
                                </div>
                                <div className="flex flex-wrap gap-y-3.75 gap-x-4.75 md:gap-x-6.75 leading-none">
                                    <span
                                        className="py-2 ps-2 pe-3.5 text-c-green-400 font-bold text-[0.9375rem]  rounded-[0.3125rem] bg-c-green-150 hover:text-c-green-50 hover:bg-c-green-400 cursor-pointer md:p-1.25"
                                        onClick={() => addFilter(job.role)}
                                    >
                                        {job.role}
                                    </span>

                                    <span
                                        className="py-2 ps-2 pe-3.5 text-c-green-400 font-bold text-[0.9375rem] rounded-[0.3125rem]  bg-c-green-150 hover:text-c-green-50 hover:bg-c-green-400 cursor-pointer md:p-1.25"
                                        onClick={() => addFilter(job.level)}
                                    >
                                        {job.level}
                                    </span>

                                    {job.languages.map((lang: string) => (
                                        <span
                                            key={lang}
                                            className="py-2 ps-2 pe-3.5 text-c-green-400 font-bold text-[0.9375rem] rounded-[0.3125rem]  bg-c-green-150 hover:text-c-green-50 hover:bg-c-green-400 cursor-pointer md:p-1.25"
                                            onClick={() => addFilter(lang)}
                                        >
                                            {lang}
                                        </span>
                                    ))}

                                    {job.tools.map((tool: string) => (
                                        <span
                                            key={tool}
                                            className="py-2 ps-2 pe-3.5 text-c-green-400 font-bold text-[0.9375rem] rounded-[0.3125rem]  bg-c-green-150 hover:text-c-green-50 hover:bg-c-green-400 cursor-pointer"
                                            onClick={() => addFilter(tool)}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}

export default App;
