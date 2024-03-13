'use client'
import { useState } from "react"
import uidRio from "@/lib/uidRio"

export default function TodoDua() {
    const uid = uidRio()

    const data = {
        "kategori": [
            "UKURAN"
        ],
        "typeKategori": [
            {
                "uid": "115d5-0c111-7973e-a501",
                "kategori": "UKURAN",
                "typeKategori": "r",
                "stock": "34"
            },
            {
                "uid": "7973e-a501d-211e3-ed72",
                "kategori": "UKURAN",
                "typeKategori": "ww",
                "stock": "34"
            },
            {
                "uid": "de211-31ed7-fe24c-8487",
                "kategori": "UKURAN",
                "typeKategori": "h",
                "stock": "34"
            }
        ]
    }

    //TODOS
    const [todo, setTodo] = useState(data ? data.typeKategori : [])

    //KATEGORI 
    const [kategori, setKategori] = useState([])
    const [todoKategori, setTodoKategori] = useState(data ? data.kategori : [])

    const handleKategori = () => {
        setTodoKategori([...todoKategori, kategori])
    }


    // LIST KATEGORI
    const [typeKategori, setTypeKategori] = useState('')
    const [stock, setStock] = useState(1)

    const handleTypeKategori = (kategori) => {
        setTodo([...todo, { uid, kategori, typeKategori, stock }])
    }


    const handleDeleteKategori = (e) => {
        const newTodos = todo.filter((data) => data.uid !== e)
        setTodo(newTodos)
    }



    const [kondisi, setKondisi] = useState(false)
    const [id, setID] = useState('')
    const [valueUpdateTypeKategori, setValueUpdateTypeKategori] = useState('')
    const [valueUpdateStock, setValueUpdateStock] = useState('')
    const handleUpdateKategori = (e) => {
        setTodo(todo.map((data) => data.uid == e ?
            {
                ...data,
                typeKategori: valueUpdateTypeKategori,
                stock: valueUpdateStock
            }
            : data))
    }


    const handleEdit = (e, typeKategori, stock) => {
        setID(e)
        setValueUpdateTypeKategori(typeKategori)
        setValueUpdateStock(stock)
    }


    // const semuanya = todoKategori.map((dataKategori) => {
    //     return (
    //         {
    //             kategori: dataKategori,
    //             typeKategori: todo.filter((data) => data.kategori == dataKategori)
    //         }
    //     )
    // }

    // )


    const dataGabungFinal = [{
        kategori: todoKategori,
        typeKategori: todo
    }]

    const kategoriData = dataGabungFinal.map((data) => data.kategori)[0]
    const typeKategoriData = dataGabungFinal.map((data) => data.typeKategori)[0]






    return (
        <>
            <input type="text" placeholder="nama kategori" onChange={(e) => setKategori(e.target.value)} />
            <button type="submit" onClick={() => handleKategori()}>Kirim</button>
            <br />

            {kondisi &&
                <>
                    <input type="text" value={valueUpdateTypeKategori} placeholder="Kategori" onChange={(e) => setValueUpdateTypeKategori(e.target.value)} />
                    <input type="number" value={valueUpdateStock} placeholder="Stock" onChange={(e) => setValueUpdateStock(e.target.value)} />
                    <button type="submit" onClick={() => { handleUpdateKategori(id), setKondisi(false) }}>Update</button>
                </>

            }

            {kategoriData?.map((dataKategori) => {
                return (
                    <>
                        {dataKategori}
                        <br />
                        <input type="text" placeholder="Kategori" onChange={(e) => setTypeKategori(e.target.value)} />
                        <input type="number" placeholder="Stock" onChange={(e) => setStock(e.target.value)} />
                        <button type="submit" onClick={() => handleTypeKategori(dataKategori)}>Kirim</button>
                        <br />

                        {typeKategoriData?.map((data, i) => {
                            return (
                                data.kategori == dataKategori &&
                                <>
                                    {data.typeKategori} | {data.stock} | <span onClick={() => { handleEdit(data.uid, data.typeKategori, data.stock), setKondisi(true) }}>Edit</span > | <button type="submit" onClick={() => handleDeleteKategori(data.uid)}>Del</button>
                                    <br />
                                </>
                            )
                        })}
                    </>
                )
            }
            )}


        </>
    )
}
