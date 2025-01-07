package com.example.sptingprac.user.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class UserUpdateRequestDto {
    private String userName;
    private String email;
    private String nickname;
    private int age;
    private LocalDateTime updateAt;
}
