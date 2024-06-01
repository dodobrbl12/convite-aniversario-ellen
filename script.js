document.addEventListener('DOMContentLoaded', () => {
    const rsvpForm = document.getElementById('rsvp-form');
    const guestList = document.getElementById('guest-names');

    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = rsvpForm.name.value.trim();
        const guest = rsvpForm.guest.value.trim();
        
        if (name) {
            const listItem = document.createElement('li');
            listItem.textContent = guest ? `${name} (+ ${guest})` : name;
            guestList.appendChild(listItem);
            rsvpForm.reset();
        }
    });
});
