import React from "react";
import { CgMouse } from "react-icons/cg";
import "./home.css";

function Home() {
    return (
        <>
            <div className="banner">
                <p>well came to Pore Store</p>
                <h1>find amazing product below</h1>

                <a href="#container">
                    <button>
                        scroll <CgMouse />
                    </button>
                </a>
            </div>
        </>
    );
}

export default Home;
