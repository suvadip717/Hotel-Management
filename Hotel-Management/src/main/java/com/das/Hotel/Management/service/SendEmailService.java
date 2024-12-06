package com.das.Hotel.Management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.das.Hotel.Management.Model.Booking;
import com.das.Hotel.Management.Model.User;

@Service
public class SendEmailService {
    @Autowired
    private JavaMailSender sender;

    public void sendConfirmationCode(User user, Booking booking) {
        String bookingCode = booking.getBookingConfirmationCode();
        String fromDate = booking.getCheckInDate().toString();
        String toDate = booking.getCheckOutDate().toString();
        String roomType = booking.getRoom().getRoomType();
        Integer numGuest = booking.getTotalNumOfGuest();

        sendEmail(user.getEmail(), "Hotel Booking Confirmation, Code " + bookingCode,
                "sir,\n  You booking " + roomType + " room for " + numGuest
                        + " people in Hotel Star, From " + fromDate + " to " + toDate
                        + ". Please check all details in your profile.\n" + "Thank you");
    }

    public void sendCancelationMail(User user, Booking booking) {
        String bookingCode = booking.getBookingConfirmationCode();
        String fromDate = booking.getCheckInDate().toString();
        String toDate = booking.getCheckOutDate().toString();
        String roomType = booking.getRoom().getRoomType();
        Integer numGuest = booking.getTotalNumOfGuest();

        sendEmail(user.getEmail(), "Hotel Booking Cancellation, Code " + bookingCode,
                "sir,\n  You cancelled your booking, " + roomType + " room for " + numGuest
                        + " people in Hotel Star, From " + fromDate + " to " + toDate
                        + ". Please check all details in your profile.\n" + "Thank you");
    }

    public void sendEmail(String to, String subject, String body) {
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(to);
            mail.setSubject(subject);
            mail.setText(body);
            sender.send(mail);
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
        }
    }
}
