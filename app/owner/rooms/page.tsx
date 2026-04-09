import FilterBox from "@/app/components/owner/filterBox";
import RoomList from "@/app/components/owner/rooms/roomList";
import SearchBox from "@/app/components/owner/searchBox";

export default function RoomsPage(){
    return (
        <section className="w-full py-10 gap-8 flex flex-col">
            <h1 className="text-2xl mx-4 sm:mx-16 font-bold">Danh sách phòng</h1>
            <div className="flex gap-4 mx-4 sm:mx-16 flex flex-col">
                <SearchBox></SearchBox>
                <FilterBox></FilterBox>
            </div>
            <RoomList></RoomList>
        </section>
    )
}