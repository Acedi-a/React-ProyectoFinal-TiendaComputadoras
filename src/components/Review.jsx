import CardReview from "./CardReview.jsx";
import ReviewJSON from "../json/Review.json";
import "../css/Review.css"
import Marquee from "react-fast-marquee";


const Review = () => {
    let RevCount = ReviewJSON.length -1;
    let RevFinal = RevCount-5;
    const Reviews = [];
    for (let i = RevCount; i >= RevFinal; i--) {
        Reviews.push(ReviewJSON[i]);
    }

    return(
        /*
        <div className="w-full overflow-hidden py-8">
            <div className="relative w-[200%]">
                <div className="flex animate-scroll ">
                    <div className="flex gap-8 px-8 w-1/2">
                        {Reviews.map((review, index) => (
                            <div key={index} className="flex-shrink-0 w-[300px]">
                                <CardReview
                                    name={review.name}
                                    avatar={review.avatar}
                                    date={review.date}
                                    title={review.title}
                                    desc={review.desc}
                                    rating={review.rating}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-8 px-8 w-1/2" >
                        {Reviews.map((review, index) => (
                            <div key={`${index}-clone`} className="flex-shrink-0 w-[300px]">
                                <CardReview
                                    name={review.name}
                                    avatar={review.avatar}
                                    date={review.date}
                                    title={review.title}
                                    desc={review.desc}
                                    rating={review.rating}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

         */

        <Marquee pauseOnHover={true}>
            {Reviews.map((review, index) => (
                <div key={`${index}-clone`} className="">
                    <CardReview
                        name={review.name}
                        avatar={review.avatar}
                        date={review.date}
                        title={review.title}
                        desc={review.desc}
                        rating={review.rating}
                    />
                </div>
            ))}
        </Marquee>
    )
}

export default Review;