import { GoSearch } from 'react-icons/go'
export default function SearchBox(){
    return (
        <div className="flex">
            <input type="text" placeholder="Tìm kiếm..." className="px-2 border rounded-lg" />
            <button className="p-2 px-2 bg-gradient-to-bl from-blue-600 to-purple-900 hover:from-blue-700 to-purple-950 text-white text-2xl rounded-lg ml-2"><GoSearch/></button>
        </div>
    )
}