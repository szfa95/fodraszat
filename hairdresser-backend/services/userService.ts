window.addEventListener('DOMContentLoaded', () => {
    const popupButton = document.getElementById('popupButton');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    if (popupButton && popup && closePopup) {
        popupButton.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});


window.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date') as HTMLInputElement;
    const timeslotsContainer = document.getElementById('timeslots') as HTMLDivElement;
    let selectedTimeslot: HTMLButtonElement | null = null;

    dateInput.addEventListener('change', () => {
        const selectedDate = dateInput.value;
        fetchAvailableTimeslots(selectedDate);
    });

    function fetchAvailableTimeslots(date: string) {
    
        const availableTimeslots = [
            '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
        ];

        timeslotsContainer.innerHTML = '';

        availableTimeslots.forEach(timeslot => {
            const timeslotButton = document.createElement('button');
            timeslotButton.className = 'timeslot';
            timeslotButton.type = 'button';
            timeslotButton.innerText = timeslot;
            timeslotButton.addEventListener('click', () => {
                if (selectedTimeslot) {
                    selectedTimeslot.classList.remove('selected');
                }
                timeslotButton.classList.add('selected');
                selectedTimeslot = timeslotButton;
            });

            timeslotsContainer.appendChild(timeslotButton);
        });
    }
});