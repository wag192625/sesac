package com.example.demo.myjpasitev4.dto;

import lombok.Getter;

// title, content, author를 받아다가
// 우리의 Post를 만드는 역할을 하겠어
@Getter
//@NoArgsConstructor // 필요하지만, 이 경우는 기본 생성자를 자동으로 만들어주기 때문에 필요 없음
public class PostUpdateRequestDto {
    private String title;
    private String content;

    // builder는 생성하는거라 수정할 떈 builder가 필요하지 않음
//    public PostV4 toEntity() {
//        return PostV4.builder()
//                .title(this.title)
//                .content(this.content)
//                .build();
//    }
}
