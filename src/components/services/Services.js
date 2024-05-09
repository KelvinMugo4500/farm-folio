import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Services.css';
import Veterinarians from './Veterinarians';
import useVeterinarianSearch from './useVeterinarianSearch';
import Bookings from './Bookings';
import BookingDetails from './BookingDetails';

const Dashboard = () => {
    const [veterinaries, setVeterinaries] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [bookedEvents, setBookedEvents] = useState([]); // Initialize as empty array
    const { filteredData, handleSearchInputChange } = useVeterinarianSearch(veterinaries);

    useEffect(() => {
        fetchVeterinaries();
    }, []);

    const fetchVeterinaries = () => {
        fetch('https://farmfolio-backend.onrender.com/veterinarians')
            .then(response => response.json())
            .then(data => {
                setVeterinaries(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    // Function to handle selected booking data
    const handleSelectBooking = (data) => {
        const bookingWithDate = { ...data, date: selectedDate };
        setBookedEvents([...bookedEvents, bookingWithDate]);
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content-card">
                <p>
                Our accredited veterinary clinic takes immense pride in offering top-notch consultation and veterinary services delivered by our team of highly skilled and compassionate veterinarians. Whether your pet needs a routine check-up, specialized treatment, or emergency care, our professionals are dedicated to providing the best possible care tailored to your pet's needs. Booking an appointment is convenient and hassle-free; simply give us a call or use our online calendar to schedule a consultation at your preferred time. With a commitment to excellence and a passion for animal welfare, we strive to ensure that every visit to our clinic is a positive and beneficial experience for both you and your beloved pet.
                </p>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by specialization..."
                    onChange={(e) => handleSearchInputChange(e.target.value)}
                />
                <Veterinarians veterinarians={filteredData} />
                <Bookings veterinarians={veterinaries} selectedDate={selectedDate} onSelectBooking={handleSelectBooking} />
                {/* Display Booking Details if bookedEvents is not null */}
                {bookedEvents.map((booking, index) => (
                    <BookingDetails
                        key={index}
                        veterinarian={booking.veterinarian}
                        date={booking.date}
                        time={booking.time}
                        name={booking.name}
                        isBookingSuccessful={booking.isBookingSuccessful}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
