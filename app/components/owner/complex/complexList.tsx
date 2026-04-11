import AddMore from "../../addMore";
import ComplexCard from "./complexCard";

export default function ComplexList({ complexes }: { complexes: Array<number> }) {
    return (
        <div className="w-full p-8 flex flex-wrap gap-4" id="flexContainer">
            {complexes.map((_, index) => (
                <ComplexCard key={index} />
            ))}
            <AddMore></AddMore>
        </div>
    )
}