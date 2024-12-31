package com.example.demo.mysite.postMVC2;

import com.example.demo.mysite.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PostService {
//    PostRepository postRepository = new PostRepository();

    // DI
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    // controller에게 data를 입력 받아서
    public Post createPost(Post newPost) {

        // validation 체크를 한 후 = 비즈니스 로직 처리, 내가 할 것 할게.
//        String title = newPost.getTitle();
//        String content = newPost.getContent();
//
//        if (title == null || title.isBlank()) {
//            throw new RuntimeException("title을 입력해주세요.");
//        }
//        if (content == null || content.isBlank()) {
//            throw new IllegalArgumentException("content를 입력해주세요.");
//        }
        validatePostData(newPost);

        // post를 생성하겠다.
        return postRepository.save(newPost);
    }

    // 전체 게시글 읽기
    public List<Post> readPosts() {
        return postRepository.findAll();
    }

    // 단일 게시글 읽기
    public Post readPostById(Long id) {
        // 레포지토리의 메소드를 가져와서 서비스에서 실행(잘못된게 아님!)
        Post post = postRepository.findById(id);
//        if (post == null) {
//            throw new IllegalArgumentException("없는 id입니다.");
//        }
        checkPostIsNull(post);

        return post;
    }

    //

    // 수정
    public Post updatePost(Long id, Post updatedPost) {
        Post post = postRepository.findById(id);
        checkPostIsNull(post);
        validatePostData(post);

        return postRepository.modify(id, updatedPost);
    }

    // 삭제
    public void deletePost(Long id) {
        Post post = postRepository.findById(id);
//        if (post == null) {
//            throw new IllegalArgumentException("없는 id입니다.");
//        }
        checkPostIsNull(post);
        postRepository.delete(post);
    }

//----------------------------------------------------

    public void checkPostIsNull(Post post) {
        if (post == null) {
            throw new IllegalArgumentException("없는 id입니다.");
        }
    }

    public void validatePostData(Post post) {
        String newTitle = post.getTitle();
        String newContent = post.getContent();

        if (newTitle == null || newTitle.isBlank()) {
            throw new RuntimeException("title을 입력해주세요.");
        }
        if (newContent == null || newContent.isBlank()) {
            throw new IllegalArgumentException("content를 입력해주세요.");
        }
    }
}
