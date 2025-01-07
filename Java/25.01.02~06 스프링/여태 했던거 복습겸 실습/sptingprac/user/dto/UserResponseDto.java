package com.example.sptingprac.user.dto;

import com.example.sptingprac.user.User;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class UserResponseDto {
    private final Long id;
    private final String userName;
    private final String email;
    private final String nickname;
    private final int age;
    private final boolean isAcive;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;

    public static UserResponseDto from(User entity) {
        return UserResponseDto.builder()
                .id(entity.getId())
                .userName(entity.getUserName())
                .email(entity.getEmail())
                .nickname(entity.getNickname())
                .age(entity.getAge())
                .isAcive(entity.isAcive())
                .createAt(entity.getCreatedAt())
                .updateAt(entity.getUpdatedAt())
                .build();
    }
}
