package com.das.Hotel.Management.service.interfac;

import com.das.Hotel.Management.Model.User;
import com.das.Hotel.Management.dto.LoginRequest;
import com.das.Hotel.Management.dto.Response;

public interface UserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);
}
