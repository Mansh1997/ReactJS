import CertCard from "../components/CertCard"
import hr from "../assets/certs/Certificate1.jpg"


// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5">
            <CertCard name="Full Stack Development" issued="Board Infinity" desc= "BI-2011115431543" date="05-06-2023" img={hr}/>
        </div>
        </div>
    )
}
