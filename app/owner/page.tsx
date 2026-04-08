import ComplexCard from "../components/owner/complexCard";
export default function OwnerPage(){
    const complexes = new Array(3).fill(0);
    return (
        <div className="w-full p-8 flex flex-wrap gap-4" id="flexContainer">
            {complexes.map((_, index) => (
                <ComplexCard key={index} />
            ))}
        </div>
    )
}