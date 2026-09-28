/*Exercise 7: Add typed props to a component
The following component reads values from props, but its props have not yet been typed:
function VenueInfo(props) {
return (
<section>
<h2>{props.name}</h2>
<p>Capacity: {props.capacity}</p>
</section>
);
}
VenueInfo should receive:
Prop Type
name string
capacity number
Complete the component so that:
1. A TypeScript type called VenueInfoProps describes the expected props.
2. The component parameter is typed using VenueInfoProps.
3. The existing rendered content remains unchanged.
Then render VenueInfo once from App using:
Name: Innovation Hall
Capacity: 180
Supply 180 as a number.*/ 
type VenueInfoProps = {
  name: string;
  capacity: number;
};

function VenueInfo(props: VenueInfoProps) {
    return(
        <section>
            <h2>Name : {props.name}</h2>
            <p>Capacity: {props.capacity}</p>
        </section>
    )
}
export default VenueInfo;