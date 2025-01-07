package com.example.sptingprac.user;

import com.example.sptingprac.user.dto.UserUpdateRequestDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userName;
    private String email;
    private String nickname;
    private int age;
    @Column(nullable = false)
    private boolean isAcive;
//
//    {
//        isAcive = true;
//    }

    @Builder
    public User(String userName, String email, String nickname, int age, boolean isAcive) {
        this.userName = userName;
        this.email = email;
        this.nickname = nickname;
        this.age = age;
        this.isAcive = isAcive;
    }

    // 엔티티에 넣은 이유 - 더티 체킹 강의 확인
    public User update(UserUpdateRequestDto requestDto) {
        this.userName = requestDto.getUserName();
        this.email = requestDto.getEmail();
        this.age = requestDto.getAge();
        this.nickname = requestDto.getNickname();
        return this;
    }
}
