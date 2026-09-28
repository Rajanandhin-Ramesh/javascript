/*Answer these questions before running the page:1. What gets displayed when clicking the words inside <span>?
SPAN / BUTTON

Why: The click physically lands on the <span> element (since that's what's visually under the cursor), so event.target is the <span>. But the event listener is attached to the <button>, and thanks to event bubbling, the click event travels up from the <span> to the <button>, triggering the handler there. So:

event.target.tagName → "SPAN" (where the click actually happened)
event.currentTarget.tagName → "BUTTON" (where the listener lives)
2. Which property refers to the element where the click began?

event.target — this always refers to the actual element that was clicked (or otherwise triggered the event), regardless of which element the listener is attached to.

3. Which property refers to the element that owns the listener?

event.currentTarget — this refers to the element the addEventListener was called on. Its value stays fixed at <button> throughout the handler's execution, even though the event originated from a child (<span>).

The key distinction, summarized:

Property	Refers to
event.target	The specific element that triggered the event (deepest element clicked)
event.currentTarget	The element the listener is attached to (changes only while the handler for that listener is running)

This is a classic example of event bubbling — clicking a child element (<span>) fires the event, and it "bubbles up" through its ancestors (<button>) until it hits the element with the actual listener. If you clicked directly on the button's padding (not on the span's text), event.target and event.currentTarget would both be "BUTTON", since the click would land directly on the button itself.
Then change the handler so that it displays:

Action: dispatch
Read the data-action value from the element that owns the listener.*/ 

const deliveryButton = document.querySelector("#delivery-button");
const eventResult = document.querySelector("#event-result");
deliveryButton.addEventListener(
"click",
event => {
eventResult.textContent =
`${event.target.tagName} / `
+ `${event.currentTarget.tagName}`;
}
);