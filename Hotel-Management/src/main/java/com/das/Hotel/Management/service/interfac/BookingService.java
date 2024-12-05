package com.das.Hotel.Management.service.interfac;

import com.das.Hotel.Management.Model.Booking;
import com.das.Hotel.Management.dto.Response;

public interface BookingService {
    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}
