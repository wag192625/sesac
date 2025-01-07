package com.example.sptingprac.user.dto;

import com.example.sptingprac.user.User;
import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Getter
@NoArgsConstructor
public class UserCreateRequestDto {
    @NotBlank(message = "필수 입력입니다.")
    @Length(min = 3,max = 20,message = "3 ~ 20자 사이로 입력")
    @Column(unique = true)
    private String userName;

    @NotBlank(message = "필수 입력입니다.")
    @Email(message = "email형식이 아님")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "필수 입력입니다.")
    @Length(min = 2, max = 10,message = "2 ~ 10자 사이로 입력")
    // 중복 가능
    private String nickname;

//    @Length(min = 0, max = 150, message = "150자 이내로 입력")
    @Min(value = 0,message = "0 ~ 150자 사이로 입력")
    @Max(value = 150, message = "0 ~ 150자 사이로 입력")
    private int age;

    @Column(nullable = false)
    private boolean isAcive = true;

    public User toEntity() {
        return User.builder()
                .userName(this.userName)
                .email(this.email)
                .nickname(this.nickname)
                .age(this.age)
                .isAcive(this.isAcive)
                .build();
    }
}
