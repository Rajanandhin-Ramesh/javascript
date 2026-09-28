/*Section C: Components and typed props
Exercise 5: Trace props through a component
Read the following code:

Answer the following without changing the code:
1. Which component supplies the values for topic, room, and duration? App
2. Which component receives those values? WorkShopSummary
3. Which variable contains "Lab 4" inside WorkshopSummary? room
4. What value does duration contain inside WorkshopSummary? Duration
5. Write the visible text produced by WorkshopSummary, in the order it appears.
Testing React interfaces
Room: Lab 4
Duration: 50 min*/






type WorkshopSummaryProps = {
topic: string;
room: string;
duration: number;
};

function WorkshopSummary({
topic,
room,
duration,
}: WorkshopSummaryProps) {
return (
<section>
<h2>{topic}</h2>
<p>Room: {room}</p>
<p>Duration: {duration} min</p>
</section>
);
}
export default WorkshopSummary;
