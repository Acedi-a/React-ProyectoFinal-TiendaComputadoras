import CardReview from "./CardReview.jsx";
import ReviewJSON from "../json/Review.json";
console.log("Reviews.jsx")




const Review = () => {
    let RevCount = ReviewJSON.length -1;
    let RevFinal = RevCount-3;
    const Reviews = [];
    for (let i = RevCount; i >= RevFinal; i--) {
        Reviews.push(ReviewJSON[i]);
    }

    console.log(Reviews);

    return(
        <div className=" flex flex-row justify-around shadow-[0_0px_30px_-10px_rgba(0,0,0,0.4)] p-5">
            {
                Reviews.map((review, index) => (
                    <CardReview
                        key={index}
                        name={review.name}
                        avatar={review.avatar}
                        date={review.date}
                        title={review.title}
                        desc={review.desc}
                        rating={review.rating}
                    />
                ))
            }
        </div>

    )
}

export default Review;