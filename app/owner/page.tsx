import ComplexList from "../components/owner/complex/complexList";
export default function OwnerPage(){
    const complexes = new Array(3).fill(0);
    return (
        <section className="w-full">
            <ComplexList complexes={complexes} />
        </section>

    )
}