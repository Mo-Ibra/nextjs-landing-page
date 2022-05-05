import React from 'react';
import Card from './Card/Card';

// Images
import TeamImage1 from '../../assets/images/team/1.jpg'
import TeamImage2 from '../../assets/images/team/2.jpg'
import TeamImage3 from '../../assets/images/team/3.jpg'
import TeamImage4 from '../../assets/images/team/4.jpg'
import TeamImage5 from '../../assets/images/team/5.jpg'
import TeamImage6 from '../../assets/images/team/6.jpg'
import TeamImage7 from '../../assets/images/team/7.jpg'
import TeamImage8 from '../../assets/images/team/8.jpg'
import Title from '../../helpers/Title';

function Team() {
    return (
        <section className='py-10' id='team'>
            <div className="container mx-auto px-10">
                <Title
                    header="Meet our Team Members"
                    description="Different layouts and styles for team sections."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
                    <Card imageUrl={TeamImage1} name="Douglas J. Bleau" role="UX/UI Designer" />
                    <Card imageUrl={TeamImage2} name="Douglas J. Bleau" role="UX/UI Designer" />
                    <Card imageUrl={TeamImage3} name="Douglas J. Bleau" role="UX/UI Designer" />
                    <Card imageUrl={TeamImage4} name="Douglas J. Bleau" role="UX/UI Designer" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
                    <Card imageUrl={TeamImage5} name="Douglas J. Bleau" role="UX/UI Designer" />
                    <Card imageUrl={TeamImage6} name="Douglas J. Bleau" role="UX/UI Designer" />
                    <Card imageUrl={TeamImage7} name="Douglas J. Bleau" role="UX/UI Designer" />
                    <Card imageUrl={TeamImage8} name="Douglas J. Bleau" role="UX/UI Designer" />
                </div>
            </div>
        </section>
    )
}

export default Team;