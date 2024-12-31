package com.example.demo.mysite;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PostAPi {
    // Post class의 instance, 즉 게시글을 넣을
    // List를 생성
    List<Post> posts = new ArrayList<>();
    private Long id = 0L; // 게시글 생성에서 id 생성을 위한 장치

    {
        // 인스턴스가 생성되었을 때 한 번 실행된다.
        // 초기값을 넣을 때 사용된다.
        posts.add(new Post(++id, "초기 제목", "초기 내용"));
        // 초기화블럭은 자주 안쓰임
    }

    // create
    // post / 내용 / url
    @GetMapping("/posts/create")
    public Post createPost() {
        Post post = new Post(++id, "제목", "내용");
        posts.add(post);

        return post;
    }

    // read - 전체 조회
    // posts / get /
    @GetMapping("/posts")
    public List<Post> readPosts() {
        return posts;
    }

    // read - 단일조회
    @GetMapping("/posts/{id}")
    public Post readPostById(@PathVariable Long id) {
        // posts에서 post를 가져오자.
        for (Post post : posts) {
            // Long은 참조타입이라 == 대신 equals로 하는게 나아보인다고 함.
            if (post.getId().equals(id)) {
                return post;
            }
        }
        return null;
    }

    // update
    // 변경 내용 / id / url
    @GetMapping("posts/{id}/update")
    public Post updatePost(@PathVariable Long id) {
        for (Post post : posts) {
            if (post.getId().equals(id)) {
                post.setTitle("수정된 제목");
                post.setContent("수정된 내용");
                return post;
            }
        }
        return null;
    }

    // delete
    // id/ url
    @GetMapping("posts/{id}/delete")
    public Post deletePost(@PathVariable Long id) {
        Post removedPost = null;
        for (Post post : posts) {
            if (post.getId().equals(id)) {
                removedPost = post;
                break;
            }
        }
        posts.remove(removedPost);
        return null;
    }



}
