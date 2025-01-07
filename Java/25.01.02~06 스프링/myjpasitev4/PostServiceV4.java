package com.example.demo.myjpasitev4;

import com.example.demo.myjpasitev4.dto.PostCreateRequestDto;
import com.example.demo.myjpasitev4.dto.PostListResponseDto;
import com.example.demo.myjpasitev4.dto.PostResponseDto;
import com.example.demo.myjpasitev4.dto.PostUpdateRequestDto;
import com.example.demo.myjpasitev4.exeptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostServiceV4 {
    private final PostRepositoryV4 postRepositoryV4;

    @Transactional
    public PostResponseDto createPost(PostCreateRequestDto requestDto) {
        // requestDto => post
        PostV4 post = postRepositoryV4.save(requestDto.toEntity());

        return PostResponseDto.from(post);
    }

    public List<PostListResponseDto> readPosts() {
        return postRepositoryV4.findAll().stream()
                .map(PostListResponseDto::from)
                .toList();
    }

    public PostResponseDto readPostById(Long id) {
        PostV4 post = postRepositoryV4.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException());
                .orElseThrow(() -> new ResourceNotFoundException());
        return PostResponseDto.from(post);
    }

    @Transactional
    public PostResponseDto updatePost(Long id, PostUpdateRequestDto requestDto) {
        PostV4 post = postRepositoryV4.findById(id)
                .orElseThrow(() -> new IllegalArgumentException());
        post.update(requestDto);
//        postRepositoryV4.save(post); 더티 체킹을 해주기 때문에 필요 없음 (수정만 해도 변경이 됨).
        return PostResponseDto.from(post);
    }

    @Transactional
    public void deletePost(Long id) {
        PostV4 post = postRepositoryV4.findById(id)
                .orElseThrow(() -> new IllegalArgumentException());
        postRepositoryV4.delete(post);

    }
}
