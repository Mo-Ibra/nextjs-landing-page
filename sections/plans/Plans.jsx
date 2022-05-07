import Image from 'next/image';
import Card from './card/Card';

import ShapeImg from '../../assets/images/shapes/2.png';
import Title from '../../helpers/Title';

function Plans() {
    return (
        <section className="pt-20 relative bg-slate-100 z-10" id='plans'>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#4aafb4" fillOpacity="1" d="M0,256L80,266.7C160,277,320,299,480,266.7C640,235,800,149,960,133.3C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </section>
    )
}

export default Plans