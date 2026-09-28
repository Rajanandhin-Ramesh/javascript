/*Exercise 4: Convert HTML into TSX
You have these values inside a React component:
const productName = "Mechanical keyboard";
const unitsAvailable = 14;
The original HTML design is:
<section class="product-summary">
<h2>Mechanical keyboard</h2>

React & TypeScript Fundamentals - Learner Exercises

Page 3

<p>14 units available</p>
</section>
Rewrite this markup as valid TSX.
Your TSX must:
 preserve the product-summary CSS class,
 display productName inside the heading,
 display unitsAvailable inside the paragraph,
 keep units available as normal text,
 use the variables rather than typing "Mechanical keyboard" or 14 directly into the returned <markup className=""></markup>*/



function ConvertTSX(){
    const productName = "Mechanical keyboard";
    const unitsAvailable = 14;
    return(
        <section className = "product-summary">
            <h2>{productName}</h2>
            <p>{unitsAvailable} units available</p>
        </section>
    )
}
export default ConvertTSX;