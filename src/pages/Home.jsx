import { deleteBook, getBooks, saveBook, updateBook } from "../services/api";
import { useEffect, useState } from "react";

const Home = () => {
    const [newBook, setNewBook] = useState({
        title: "",
        price: 0
    })

    const [books, setBooks] = useState([]);

    const updateTitle = (title) => {
        setNewBook(previousState => {
            return{...previousState, title: title}
        })
    }
    
    const updatePrice = (price) => {
        setNewBook(previousState => {
            return{...previousState, price: price}
        })
    }

    useEffect(() => {
        getBooks(books).then((books) => {
            setBooks(books.data)
        })
    },[])

    return(
        <div className="table-div">
            <table>
                <caption>Books</caption>
                <thead>
                    <tr>
                        <th scope="col">BookId</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price (€)</th>
                        <th scope="col">Opción</th>
                    </tr>
                </thead>
                <tbody>
                    {books?.map((book) => {
                        return(
                            <tr key={book.bookId}>
                                <th scope="row">{book.bookId}</th>
                                <td>
                                    <input type="text" defaultValue={book.title} onChange={e => updateTitle(e.target.value)}/>
                                    
                                </td>
                                <td>
                                    <input type="number" min={0} step={0.01} defaultValue={book.price} onChange={e => updatePrice(e.target.value)}/>
                                </td>
                                <td>
                                    <button onClick={() => deleteBook(book.bookId)}>Baja</button>
                                    <button onClick={() => updateBook(book.bookId, newBook)}>Modificar</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th scope="row"></th>
                        <td><input type="text" placeholder="Title" onChange={e => updateTitle(e.target.value)}/></td>
                        <td><input type="number" min={0} step={0.01} placeholder="Price" onChange={e => updatePrice(e.target.value)}/></td>
                        <td>
                            <button onClick={() => saveBook(newBook)}>Insertar</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Home;