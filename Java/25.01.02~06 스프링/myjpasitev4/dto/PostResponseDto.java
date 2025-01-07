package com.example.demo.myjpasitev4.dto;

import com.example.demo.myjpasitev4.PostV4;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class PostResponseDto {
    private final Long id;
    private final String title;
    private final String content;
    private final String author;
    private LocalDateTime createAt;
    private LocalDateTime updatedAt;


    public static PostResponseDto from(PostV4 entity) {
        return PostResponseDto.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .content(entity.getContent())
                .author(entity.getAuthor())
                .createAt(entity.getCreatedAt())
                .updatedAt(entity.getUpdatedAt())
                .build();
    }
}
