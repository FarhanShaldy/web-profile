import {motion} from "motion/react"
import { staggerContainer, staggerItem } from "../lib/Motion"

function Guarantee() {
    const points = [
        {
            category: 'KUALITAS KODE',
            title: 'Kode Bersih & Terstruktur',
            description:
                'Menulis kode dengan standar penamaan yang jelas dan struktur folder yang rapi, mengikuti best practice framework yang digunakan, agar mudah dipahami dan dikembangkan lebih lanjut.',
        },
        {
            category: 'KEAMANAN DASAR',
            title: 'Praktik Keamanan Fundamental',
            description:
                'Menerapkan praktik keamanan dasar seperti validasi input, hashing password, dan proteksi terhadap celah umum (SQL Injection, XSS) sesuai standar pengembangan yang dipelajari.',
        },
        {
            category: 'KOMUNIKASI',
            title: 'Update Progres Berkala',
            description:
                'Memberikan laporan progres secara rutin dan terbuka terhadap diskusi, sehingga proses pengembangan tetap transparan dari awal hingga selesai.',
        },
        {
            category: 'KEJUJURAN',
            title: 'Transparan Soal Kapasitas',
            description:
                'Sebagai fresh graduate, saya terbuka mengenai batas kemampuan dan akan jujur bila suatu kebutuhan berada di luar keahlian saat ini, daripada memberi janji yang tidak bisa dipenuhi.',
        },
        {
            category: 'DOKUMENTASI',
            title: 'Catatan Teknis yang Jelas',
            description:
                'Menyediakan dokumentasi dasar seperti alur sistem dan cara instalasi/menjalankan proyek, agar source code yang diserahkan mudah dipahami dan dilanjutkan.',
        },
        {
            category: 'ETOS KERJA',
            title: 'Disiplin & Terus Belajar',
            description:
                'Berkomitmen mengikuti tenggat waktu yang disepakati, serta terbuka terhadap masukan dan revisi sebagai bagian dari proses belajar dan meningkatkan kualitas kerja.',
        },
    ]

    return (
        <div id="guarantee" className="bg-gray-950 grid grid-cols-1 content-center px-5 lg:px-20 py-20">

            <div className="flex h-10 items-center">
                <span className="h-px w-5 bg-blue-300 me-1"></span>
                <p className="text-gray-500 text-sm font-bold tracking-wider">KOMITMEN_KERJA</p>
            </div>

            <h2 className="text-white text-4xl font-serif">
                Dikerjakan dengan
            </h2>
            <h2 className="text-blue-300 text-4xl font-serif italic">
                tanggung jawab & kejujuran
            </h2>

            <motion.div {...staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 border border-gray-800 rounded-lg mt-10">
                {points.map((point, index) => (
                    <motion.div {...staggerItem}
                        key={point.category}
                        className={`flex flex-col p-6 ${
                            (index + 1) % 3 !== 0 ? 'lg:border-r border-gray-800' : ''
                        } ${index < points.length - 3 ? 'border-b border-gray-800' : ''}`}
                    >
                        <p className="text-blue-300 text-xs font-bold tracking-wider">{point.category}</p>
                        <p className="text-white text-base font-semibold mt-2">{point.title}</p>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{point.description}</p>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Guarantee