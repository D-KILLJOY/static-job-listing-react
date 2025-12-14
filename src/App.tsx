import { useState } from "react";
import "./App.css";
import remove from "./assets/images/icon-remove.svg";

function App() {
    return (
        <>
            <header className="bg-[url(../public/images/bg-header-mobile.svg)] bg-center bg-cover h-40 w-full bg-c-green-400"></header>

            <main className="bg-c-green-50 relative">
                <div className="rounded-md min-h-14 relative -top-9 py-5 ps-5 pe-7 bg-white">
                    <div className="flex bg-c-green-50 items-center">
                        <p className="py-1.75 ps-1.75 pe-3.5 text-c-green-400 font-bold text-[0.9375rem] rounded-l-[0.3125rem] leading-0">
                            Frontend
                        </p>
                        <button
                            type="button"
                            className="w-8 h-8 bg-c-green-400 flex justify-center items-center rounded-r-[0.3125rem] "
                        >
                            <img src={remove} alt="" />
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
