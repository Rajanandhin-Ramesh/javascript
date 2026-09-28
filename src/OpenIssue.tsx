/*Refactor repeated JSX into a component
The following App works, but the same UI structure is repeated:
function App() {
return (
<main>
<h1>Project overview</h1>
<section>
<div>
<strong>12</strong>
<span>Open issues</span>
</div>
<div>
<strong>7</strong>
<span>Reviews pending</span>
</div>
<div>
<strong>3</strong>
<span>Deployments today</span>
</div>
</section>
</main>
);
}
Refactor the repeated <div> structure into one reusable function component.
Your solution must:
1. Identify the values that differ between the three repeated blocks.
2. Create an appropriate TypeScript prop type for those values.
3. Define one reusable component with a capitalised name.
4. Destructure its props.
5. Render the component three times from App.
6. Preserve the following data:

Value Label
12 Open issues
7 Reviews pending
3 Deployments today
Do not create separate component definitions for the three items.*/
type OpenIssueProps = {
    value : number;
    label : string;
}
function OpenIssue({value,label}:OpenIssueProps){
    return(
        <div>
            <strong>{value}</strong>
            <span>{label}</span>
        </div>
    )
}
export default OpenIssue;
