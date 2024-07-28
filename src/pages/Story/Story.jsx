import React, { useEffect } from 'react';
import './Story.css';
import Cover from '../../assets/hiti-b.jpg'

const Story = () => {
    useEffect(() => {
        const path = document.querySelector('path');
        const pathLength = path.getTotalLength();

        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
        path.style.strokeDashoffset = pathLength;

        const handleScroll = () => {
            const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            const drawLength = pathLength * scrollPercentage;
            path.style.strokeDashoffset = pathLength - drawLength;

            // Reveal cards
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                if (cardPosition < window.innerHeight - 100 && !card.classList.contains('fixed' + (index + 1))) {
                    card.classList.add('fixed' + (index + 1));
                } else if (cardPosition > window.innerHeight && card.classList.contains('fixed' + (index + 1))) {
                    card.classList.remove('fixed' + (index + 1));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="image-container">
                
                <svg height="100" stroke="#FFED50" strokeWidth="2" className="overlay" width="100%">
                    <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%" color="red">A STORY OF HONACHA</text>
                </svg>
                <img className='cover' src={Cover} alt="Background Image" />
                
                
            </div>
                        <div className="line-container">
                        <svg width="1000" height="1000" viewBox="0 0 1435 1686" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1434 1.49999C1311.17 -18 1071.5 6.89999 1095.5 262.5C1119.5 518.1 983.167 454.667 912 391C849.5 350 721.1 318.7 707.5 521.5C693.9 724.3 563.167 710.667 499.5 678.5H485L475 667V661H448.5L346.5 696.5C343.5 701 338 710.7 340 713.5C339.5 714.5 319 758 308 755C299.2 752.6 297.333 731 297.5 720.5C285 668.5 241.1 579.4 165.5 639C159.5 649.5 151.1 673.1 165.5 683.5C165.5 686 159 715 176.5 720.5C177.3 720.5 182.833 722.5 185.5 723.5C185.667 718.5 188.6 707.3 199 702.5C197.5 704 193.5 750.5 188 755C182.5 759.5 179.5 798 185.5 799.5C191.5 801 162 807 176.5 818.5C176.5 817.5 145 826.5 138.5 840.5C136 840 123 858 83.5 864C82.5 865 36.5 871 48.5 910C49 910.5 -9.50002 927 7.49998 947C5.99998 948 2.49998 1020 94 1017.5C96.4 1018.7 121 1021.67 133 1023L251 969C254.667 964.167 264.4 955.2 274 958C286 961.5 322 944 326 927C325.5 927.5 338.5 922 346.5 916C354.5 910 386 917 401.5 875.5C398.5 876.5 418 875 419 864C421.333 866.333 427 870.9 431 870.5C435 870.1 477 844.667 497.5 832L499.5 969C415.667 961.167 250.6 990.1 261 1168.5C271.4 1346.9 271 1603.17 269.5 1709" stroke="#FFED50" stroke-width="8"/>
</svg>

<div className="content">
    <h5>
    Tucked away on the northern edge of Patan Durbar, next to the Bhimsen Temple, this Honacha sits a stone’s throw away from its sister restaurant, also called Honacha, less than 20 metres away—opposite the Krishna Mandir. Although there is dispute on which of these two eateries came first, they have been operated by the same family of Byanjankars for at least 60-70 years.

</h5>



            </div>
            </div>
   
        </div>
    );
}

export default Story;
