
import { bandit, basarnas, dinasKesehatan, dishub, education, garbage, hospital, medicalkit, noparking, polusi, road, taman, transfortasi, tree } from "../image";

export const buttonKategori = [
    {
        value: 'jalan',
        name: 'Jalan',
        image: road
    },
    {
        value: 'kejahatan',
        name: 'kejahatan',
        image: bandit
    },
    {
        value: 'kesehatan',
        name: 'Kesehatan',
        image: medicalkit
    },
    {
        value: 'limbah',
        name: 'Limbah',
        image: polusi
    },
    {
        value: 'parkir_liar',
        name: 'Parkir Liar',
        image: noparking
    },
    {
        value: 'pendidikan',
        name: 'Pendidikan',
        image: education
    },
    {
        value: 'pohon',
        name: 'Pohon',
        image: tree
    },
    {
        value: 'rumah_sakit',
        name: 'Rumah Sakit',
        image: hospital
    },
    {
        value: 'sampah',
        name: 'Sampah',
        image: garbage
    },
    {
        value: 'taman',
        name: 'Taman',
        image: taman
    },
    {
        value: 'transportasi',
        name: 'Transportasi',
        image: transfortasi
    },
]

export const dataUnitKerja = [
    {
        value: 'dishub',
        name: 'Dinas Perhubungan',
        image: dishub
    },
    {
        value: 'basarnas',
        name: 'Basarnas',
        image: basarnas
    },
    {
        value: 'dinas_kesehatan',
        name: 'Dinas Kesehatan',
        image: dinasKesehatan
    },
]