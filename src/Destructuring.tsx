/*Exercise 8: Refactor props using destructuring
The following component already works:
type BookSummaryProps = {
title: string;
author: string;
pages: number;
};

React & TypeScript Fundamentals - Learner Exercises

Page 5

function BookSummary(
props: BookSummaryProps
) {
return (
<article>
<h2>{props.title}</h2>
<p>{props.author}</p>
<p>{props.pages} pages</p>
</article>
);
}
Refactor BookSummary so that:
 title, author, and pages are destructured in the function parameter,
 the JSX uses the destructured variables directly,
 BookSummaryProps remains unchanged,
 the rendered result remains unchanged.
Then answer:
After this refactor, has the component received different data, or has only the way it reads the props
changed?
Explain briefly. */ 
type BookSummaryProps = {
title: string;
author: string;
pages: number;
};

function BookSummary({title,author,pages}:BookSummaryProps) {
return (
<article>
<h2>{title}</h2>
<p>{author}</p>
<p>{pages} pages</p>
</article>
);
}