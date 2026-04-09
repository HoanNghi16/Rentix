import FeatureCard from "@/app/components/owner/complex/featureCard"
import { ownerFeatures } from "@/app/data/featuresData"
export default function ComplexPage(){
    return (
        <section className="xl:flex grid gap-4 px-10 py-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5" id="flexContainer">
            {ownerFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature}></FeatureCard>
            ))}
        </section>
    )
}