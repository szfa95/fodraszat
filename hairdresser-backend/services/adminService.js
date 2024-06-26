"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const timeslotsContainer = document.getElementById('timeslots');
    let selectedTimeslot = null;
    dateInput.addEventListener('change', () => {
        const selectedDate = dateInput.value;
        fetchAvailableTimeslots(selectedDate);
    });
    function fetchAvailableTimeslots(date) {
        const availableTimeslots = [
            '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
        ];
        timeslotsContainer.innerHTML = '';
        availableTimeslots.forEach(timeslot => {
            const timeslotDiv = document.createElement('div');
            timeslotDiv.className = 'timeslot';
            timeslotDiv.innerText = timeslot;
            timeslotDiv.addEventListener('click', () => {
                if (selectedTimeslot) {
                    selectedTimeslot.classList.remove('selected');
                }
                timeslotDiv.classList.add('selected');
                selectedTimeslot = timeslotDiv;
            });
            timeslotsContainer.appendChild(timeslotDiv);
        });
    }
});
