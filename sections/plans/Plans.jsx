import Image from 'next/image';
import Card from './card/Card';

import ShapeImg from '../../assets/images/shapes/2.png';
import Title from '../../helpers/Title';

function Plans() {
    return (
        <section className="py-32 relative z-10">
            <div className="container mx-auto px-10">
                <Title
                    header="Choose your plan"
                    description="Different layouts and styles for team sections."
                />
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card name="Basic" price="12" isActive={false} features={["60-day chat history", "15 GB cloud storage"]} />
                    <Card name="Premium" price="12" isActive={true} features={["60-day chat history", "25 GB cloud storage", "24/7 Support"]} badge="Most Popular" />
                    <Card name="Advanced" price="24" isActive={false} features={["60-day chat history", "50 GB cloud storage", "24/7 Support", "Money Back"]} />
                </div>
            </div>
            <div className="absolute bottom-0 right-0" style={{ zIndex: '-1' }}>
                <Image src={ShapeImg} alt="Shape" />
            </div>
        </section>
    )
}

export default Plans