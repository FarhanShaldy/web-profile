import {motion} from "motion/react"
import Techhero from "./Techhero"
import { profile } from "../data/Profile"

function ProfileCard() {
    const infoRows = [
        { label: 'Status', value: profile.status.label, dot: true },
        { label: 'Lokasi', value: profile.domicile.split(',')[1]?.trim() || profile.domicile },
        { label: 'Github', value: profile.github.handle },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="grid grid-cols-2 divide-y divide-gray-700 bg-gray-950 rounded-lg ring ring-blue-400 shadow-lg shadow-blue-400 px-5"
            >

            {/* Avatar */}
            <div className="flex flex-col col-span-2 mt-5 pb-4">
                <div className="flex size-14 rounded-full bg-gray-900 brightness-110 justify-center items-center ring-1 ring-blue-400">
                    <span className="text-blue-300 text-lg font-semibold font-serif"> {profile.initials} </span>
                </div>
            </div>

            {/* Nama + Tagline */}
            <div className="col-span-2 py-4 ">
                <p className="text-xs font-semibold text-white font-serif"> {profile.nameWithTitle} </p>
                <p className="text-xs text-blue-300 font-serif">// {profile.role}</p>
            </div>

            {/* Label kolom */}
            <div className="flex flex-col gap-1 py-4 ">
                {infoRows.map((row) => (
                    <span key={row.label} className="text-sm text-gray-500 font-serif">{row.label}</span>
                ))}
            </div>

            {/* Value kolom */}
            <div className="flex flex-col gap-1 py-4 items-end">
                {infoRows.map((row) => (
                    <span
                        key={row.label}
                        className={`text-sm font-serif flex items-center gap-2 ${row.dot ? 'text-blue-300' : 'text-gray-500'}`}
                    >
                        {row.dot && <span className="w-2 h-2 bg-blue-300 rounded-full"></span>}
                        {row.value}
                    </span>
                ))}
            </div>

            {/* Tech badges */}
            <div className="col-span-2 pt-4 pb-5">
                <Techhero />
            </div>

        </motion.div>
    )
}

export default ProfileCard